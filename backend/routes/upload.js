import express from "express";
import multer from "multer";
import path from "path";
import fs from "fs";
import Tesseract from "tesseract.js";
import pdf from "pdf-parse";
import { GoogleGenerativeAI } from "@google/generative-ai";
import dotenv from 'dotenv'
dotenv.config()

const router = express.Router();

// Multer storage
const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, "uploads/"),
  filename: (req, file, cb) => cb(null, Date.now() + path.extname(file.originalname)),
});
const upload = multer({ storage });

// Initialize Google Generative AI client
const googleAI = new GoogleGenerativeAI( process.env.GEMINI_API_KEY );
const model = googleAI.getGenerativeModel({ model: "gemini-1.5-flash" });

// extract text from PDF or image
async function extractText(filePath, ext) {
  let extractedText = "";

  if (ext === ".pdf") {
    
    const dataBuffer = fs.readFileSync(filePath);
    const data = await pdf(dataBuffer);
    extractedText = data.text;
  } else if ([".png", ".jpg", ".jpeg"].includes(ext)) {
    const result = await Tesseract.recognize(filePath, "eng");
    extractedText = result.data.text;
  } else {
    throw new Error("Unsupported file type");
  }

  fs.unlinkSync(filePath); // cleanup uploaded file
  return extractedText.trim();
}

// generate summary + insights as plain list
async function generateSummaryAndInsights(text) {
  const prompt = `
Summarize the following text into a plain list of points and generate key insights:
- Do NOT return JSON or arrays.
- Do NOT use Markdown or numbering.
- Each point should be on a new line.
- Include both summary and insights clearly labeled.

Text:
"""${text}"""
`;

  const result = await model.generateContent(prompt);
  let rawOutput = result.response.text().trim();

  // Split into individual lines and remove empty lines
  return rawOutput
    .split("\n")
    .map((line) => line.trim())
    .filter((line) => line.length > 0);
}

// Main route: upload + extract + summarize/insights
router.post("/upload", upload.single("file"), async (req, res) => {
  try {
    console.log("backend hit");
    if (!req.file) return res.status(400).json({ error: "No file uploaded" });

    const filePath = path.resolve(req.file.path);
    const ext = path.extname(req.file.originalname).toLowerCase();

    const extractedText = await extractText(filePath, ext);
    const summaryAndInsights = await generateSummaryAndInsights(extractedText);

    res.json({
      text: extractedText,
      insights: summaryAndInsights, // array of points
    });
  } catch (err) {
    console.error(" Error processing file:", err);
    res.status(500).json({ error: "Failed to process file", details: err.message });
  }
});

export default router;
