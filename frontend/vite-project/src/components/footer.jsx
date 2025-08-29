import { FileText } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-[#0f172a] text-gray-300 px-8 py-12">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Brand Section */}
        <div>
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-blue-600 flex items-center justify-center rounded-lg">
              <FileText className="w-5 h-5 text-white" />
            </div>
            <span className="text-lg font-semibold text-white">
              DocSummary AI
            </span>
          </div>
          <p className="mt-3 text-sm text-gray-400 leading-relaxed">
            Transform documents into intelligent summaries with AI-powered
            technology.
          </p>
        </div>

        {/* Product */}
        <div>
          <h4 className="font-semibold text-white mb-3">Product</h4>
          <ul className="space-y-2 text-sm">
            <li className="hover:text-white cursor-pointer">Features</li>
            <li className="hover:text-white cursor-pointer">Pricing</li>
            <li className="hover:text-white cursor-pointer">API</li>
          </ul>
        </div>

        {/* Support */}
        <div>
          <h4 className="font-semibold text-white mb-3">Support</h4>
          <ul className="space-y-2 text-sm">
            <li className="hover:text-white cursor-pointer">Help Center</li>
            <li className="hover:text-white cursor-pointer">Contact</li>
            <li className="hover:text-white cursor-pointer">Status</li>
          </ul>
        </div>

        {/* Company */}
        <div>
          <h4 className="font-semibold text-white mb-3">Company</h4>
          <ul className="space-y-2 text-sm">
            <li className="hover:text-white cursor-pointer">About</li>
            <li className="hover:text-white cursor-pointer">Privacy</li>
            <li className="hover:text-white cursor-pointer">Terms</li>
          </ul>
        </div>
      </div>

      {/* Divider + Bottom Text */}
      <div className="border-t border-gray-700 mt-10 pt-6 text-center text-sm text-gray-500">
        © 2024 DocSummary AI. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
