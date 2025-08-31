import { useState } from "react";
import axiosbase from "../../axiosbase"
export default function UploadFile({file,setFile, setSummary, setInsights}) {
  const [isLoading, setIsLoading] = useState(false);
  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleUpload = async () => {
    if (!file) return alert("Please choose a file first!");
    setIsLoading(true);
    const formData = new FormData();
    formData.append("file", file);
    formData.append("length", "short"); // or medium / long

    try {

      
      const {data} = await axiosbase.post('/upload',formData,{
        headers: {'Content-Type':'multipart/form-data'}
      });

      
      console.log({data})
      setSummary(data.text);
      setInsights(data.insights);
      setIsLoading(false);
    } catch (err) {
      console.error(err);
      alert("Upload failed!");
      setIsLoading(false);
    }
  };

  return (
    <div className="flex justify-center items-center gap-4 mt-6">
      
      {isLoading && 
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="loader"></div>
        </div>
      }
      <button
        onClick={handleUpload}
        className="ml-4 bg-green-500 text-white px-4 py-2 rounded"
      >
        Upload & Summarize
      </button>
    </div>
  );
}
