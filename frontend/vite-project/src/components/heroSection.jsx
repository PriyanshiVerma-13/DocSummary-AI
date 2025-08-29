import React from "react";
import { CheckCircle } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="text-center py-16 bg-gray-50">
      {/* Heading */}
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
        Transform Documents into Smart Summaries
      </h2>

      {/* Subtext */}
      <p className="text-gray-600 mt-3 max-w-2xl mx-auto">
        Upload PDFs or images and get AI-powered summaries instantly. Extract key
        insights from any document with advanced OCR and text analysis.
      </p>

      {/* Feature list */}
      <div className="flex flex-wrap justify-center gap-6 mt-6 text-green-600 font-medium">
        <div className="flex items-center space-x-2">
          <CheckCircle className="w-5 h-5" />
          <span>PDF Support</span>
        </div>
        <div className="flex items-center space-x-2">
          <CheckCircle className="w-5 h-5" />
          <span>OCR Technology</span>
        </div>
        <div className="flex items-center space-x-2">
          <CheckCircle className="w-5 h-5" />
          <span>Smart AI Summaries</span>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
