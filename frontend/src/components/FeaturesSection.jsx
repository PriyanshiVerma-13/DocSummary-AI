import React from "react";
import { FileUp, Eye, Brain } from "lucide-react";

function FeaturesSection() {
  const features = [
    {
      title: "Easy Upload",
      desc: "Drag and drop interface supports multiple file formats including PDF, JPG, PNG, and TIFF",
      icon: <FileUp className="w-6 h-6 text-blue-600" />,
      bg: "bg-blue-100",
    },
    {
      title: "OCR Technology",
      desc: "Advanced optical character recognition extracts text from scanned documents and images",
      icon: <Eye className="w-6 h-6 text-green-600" />,
      bg: "bg-green-100",
    },
    {
      title: "AI Summaries",
      desc: "Intelligent algorithms generate accurate summaries with customizable length and key point extraction",
      icon: <Brain className="w-6 h-6 text-purple-600" />,
      bg: "bg-purple-100",
    },
  ];

  return (
    <section className="py-16 bg-gray-50 text-center">
      <h2 className="text-3xl font-bold mb-10">Powerful Features</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-8 max-w-6xl mx-auto">
        {features.map((f, i) => (
          <div
            key={i}
            className="bg-white rounded-2xl shadow-md p-8 hover:shadow-lg transition"
          >
            {/* Icon Circle */}
            <div className={`w-12 h-12 mx-auto rounded-full flex items-center justify-center ${f.bg}`}>
              {f.icon}
            </div>

            {/* Title */}
            <h3 className="font-semibold text-lg mt-4">{f.title}</h3>

            {/* Description */}
            <p className="text-gray-600 mt-2">{f.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default FeaturesSection;
