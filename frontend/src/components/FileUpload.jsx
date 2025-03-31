import React, { useState } from 'react';
import { Upload, File, CheckCircle, AlertCircle } from 'lucide-react';
import { Alert, AlertDescription } from '@material-tailwind/react';

const FileUploadZone = ({ label, onDrop }) => {
  const [isDragging, setIsDragging] = useState(false);
  const [files, setFiles] = useState([]);
  const [uploading, setUploading] = useState(false);
  const [status, setStatus] = useState(null);

  const handleDrop = async (e) => {
    e.preventDefault();
    setIsDragging(false);
    setUploading(true);
    
    const droppedFiles = Array.from(e.dataTransfer.files);
    setFiles(droppedFiles);

    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
      setStatus('success');
    } catch (error) {
      setStatus('error');
    } finally {
      setUploading(false);
    }
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const getZoneStyle = () => {
    if (isDragging) return 'border-blue-400 bg-blue-50';
    if (status === 'success') return 'border-green-400 bg-green-50';
    if (status === 'error') return 'border-red-400 bg-red-50';
    return 'border-gray-200 bg-gray-50 hover:border-gray-300 hover:bg-gray-100';
  };

  return (
    <div className="w-full h-full border-2 border-blue-300 rounded-lg p-6">
      <div className="text-base font-medium text-gray-700 mb-4">{label}</div>
      <div
        className={`w-full h-[calc(100%-3rem)] rounded-lg border-2 border-dashed transition-all duration-200 ${getZoneStyle()}`}
        onDrop={handleDrop}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
      >
        <div className="w-full h-full flex flex-col items-center justify-center p-6">
          {uploading ? (
            <div className="flex flex-col items-center space-y-2">
              <div className="w-12 h-12 border-4 border-blue-200 border-t-blue-500 rounded-full animate-spin" />
              <p className="text-sm text-gray-500">Uploading files...</p>
            </div>
          ) : status === 'success' ? (
            <div className="flex flex-col items-center space-y-2">
              <CheckCircle className="w-12 h-12 text-green-500" />
              <p className="text-sm text-gray-600">Files uploaded successfully!</p>
              <button 
                onClick={() => setStatus(null)} 
                className="mt-2 px-4 py-2 text-sm text-blue-600 hover:text-blue-700"
              >
                Upload more
              </button>
            </div>
          ) : status === 'error' ? (
            <div className="flex flex-col items-center space-y-2">
              <AlertCircle className="w-12 h-12 text-red-500" />
              <p className="text-sm text-gray-600">Upload failed. Please try again.</p>
              <button 
                onClick={() => setStatus(null)} 
                className="mt-2 px-4 py-2 text-sm text-blue-600 hover:text-blue-700"
              >
                Retry
              </button>
            </div>
          ) : (
            <>
              <Upload className="w-12 h-12 text-gray-400 mb-2" />
              <p className="text-sm text-gray-500 text-center">
                Drag & drop files here or
                <button className="mx-1 text-blue-500 hover:text-blue-600">browse</button>
                to upload
              </p>
              <p className="text-xs text-gray-400 mt-2">
                Supported files: PDF, DOC, DOCX, JPG, PNG
              </p>
            </>
          )}
        </div>
      </div>
      
      {files.length > 0 && !uploading && status !== 'error' && (
        <div className="mt-4">
          <Alert>
            <File className="h-4 w-4" />
            <AlertDescription>
              {files.length} file(s) selected: {files.map(f => f.name).join(', ')}
            </AlertDescription>
          </Alert>
        </div>
      )}
    </div>
  );
};

const FileUploadComponent = () => {
  return (
    <div className="min-h-screen bg-white p-8">
      <div className="max-w-6xl mx-auto space-y-6">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">File Upload</h2>
        
        <div className="grid grid-rows-2 gap-6 h-[800px]">
          <div className="grid grid-cols-2 gap-6">
            <FileUploadZone label="Upload Question Paper" />
            <FileUploadZone label="Upload Answer key" />
          </div>
          <div className="w-full">
            <FileUploadZone label="Upload Student Answer sheets" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FileUploadComponent;