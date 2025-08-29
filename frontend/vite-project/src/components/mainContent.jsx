import { useState } from "react";
import { Upload, Lightbulb, FileText, Check } from "lucide-react";
import UploadFile from './uploadFile';

const MainContent = () => {
  const [summary, setSummary] = useState("");
  const [insights, setInsights] = useState([]);
  const [selectedLength, setSelectedLength] = useState("Medium");
    const handleFileChange = (e) => {
    setFile(e.target.files[0]);
    console.log("Selected:", e.target.files[0]);
  };
  
  const [file, setFile] = useState(null);
  const handleGenerateSummary = () => {
    if (!file) {
      alert("Please upload a file first.");
      return;
    }

    console.log("Generating summary with:");
    console.log("File:", file);
    console.log("Length:", selectedLength);

    // 👉 Here you’ll later call your backend API
    // Example:
    // const formData = new FormData();
    // formData.append("file", file);
    // formData.append("length", selectedLength);
    // fetch("/api/summarize", { method: "POST", body: formData });
  };

  return (
    <section className="grid grid-cols-1 md:grid-cols-2 gap-8 p-8">
      
      {/* Left side - Upload */}
      <div className="bg-white rounded-2xl shadow-lg p-6 space-y-8">
        <div>
          <h2 className="text-xl font-semibold mb-4 text-center">
            Upload Your Document
          </h2>
          <p className="text-gray-500 text-center mb-4">
            Drag and drop or click to select your PDF or image file
          </p>

          <div className="border-2 border-dashed border-gray-300 rounded-xl p-8 flex flex-col items-center justify-center cursor-pointer hover:border-blue-400 transition">
            <Upload className="w-10 h-10 text-gray-400 mb-3" />
            <p className="text-gray-600 font-medium">
              Drop files here or click to browse
            </p>
            <p className="text-sm text-gray-400">
              Supports PDF, JPG, PNG, TIFF up to 10MB
            </p>
            <label htmlFor="file-upload" className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
              Choose File
            </label>
            <input
              id="file-upload"
              type="file"
              onChange={handleFileChange}
              className="hidden"
              />

              {file && (
  <p className="mt-2 text-sm text-gray-500">
    Selected File: {file.name}
  </p>
)}
            
          </div>
        </div>

        {/* Summary Preferences */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Summary Preferences</h3>
          <p className="text-gray-500 mb-4">Summary Length</p>
          <div className="grid grid-cols-3 gap-4">
            {["Short", "Medium", "Long"].map((option) => (
              <button
                key={option}
                onClick={() => setSelectedLength(option)}
                className={`border rounded-lg py-3 text-center font-medium transition ${
                  selectedLength === option
                    ? "bg-blue-100 border-blue-500 text-blue-700"
                    : "bg-white border-gray-300 hover:border-blue-400"
                }`}
              >
                {option}
              </button>
            ))}
          </div>
          <UploadFile 
  file={file} setFile={setFile} 
  setSummary={setSummary} 
  setInsights={setInsights} 
/>
        </div>
      </div>

      {/* Right side - Summary */}
      <div className="bg-white rounded-2xl shadow-lg p-6 space-y-6">
        <h3 className="text-xl font-semibold mb-2">Document Summary</h3>

        {/* Key Insights Box */}
        <div className="bg-blue-50 rounded-xl p-4">
  <div className="flex items-center mb-3">
    <Lightbulb className="text-yellow-500 mr-2" />
    <h4 className="font-semibold text-gray-800">Summary + Key Insights</h4>
  </div>
  {insights?.length > 0 ? (
    <ul className="space-y-2 text-gray-700">
      {insights.map((insight, idx) => (
        <li key={idx} className="flex items-start">
          <Check className="text-green-500 w-5 h-5 mr-2" />
          {insight}
        </li>
      ))}
    </ul>
  ) : (
    <p className="text-gray-500">No insights yet</p>
  )}
</div>

<div className="mt-4">
  <div className="flex items-center mb-2">
    <FileText className="text-blue-500 mr-2" />
    <h4 className="font-semibold text-gray-800">Extracted Text</h4>
  </div>
  <p className="text-gray-600 leading-relaxed">
    {summary || "No summary generated yet"}
  </p>
</div>

      </div>
    </section>
  );
};

export default MainContent;

