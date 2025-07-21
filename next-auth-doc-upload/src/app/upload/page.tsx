'use client';

import React, { useState } from 'react';
import { FaCheckCircle, FaTimesCircle } from 'react-icons/fa';

type UploadedFile = {
  name: string;
  date: string;
  status: 'success' | 'failure';
};

const UploadPage = () => {
  const [file, setFile] = useState<File | null>(null);
  const [uploadedFiles, setUploadedFiles] = useState<UploadedFile[]>([]);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFile(e.target.files[0]);
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!file) {
      return;
    }

    const newFile: UploadedFile = {
      name: file.name,
      date: new Date().toLocaleDateString(),
      status: 'success', // Simulate success for now
    };

    setUploadedFiles([...uploadedFiles, newFile]);
    setFile(null);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-2xl p-8 space-y-6 bg-white rounded-lg shadow-md">
        <h1 className="text-2xl font-bold text-center text-gray-900">
          Upload Document
        </h1>
        <form className="space-y-6" onSubmit={handleSubmit}>
          <div>
            <label
              htmlFor="file"
              className="text-sm font-medium text-gray-700"
            >
              Choose a file
            </label>
            <input
              id="file"
              name="file"
              type="file"
              onChange={handleFileChange}
              className="w-full px-3 py-2 mt-1 text-gray-900 bg-gray-200 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>
          <div>
            <button
              type="submit"
              className="w-full px-4 py-2 text-sm font-medium text-white bg-indigo-600 border border-transparent rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Upload
            </button>
          </div>
        </form>
        <div className="mt-6">
          <h2 className="text-xl font-bold text-gray-900">Uploaded Documents</h2>
          <div className="mt-4">
            <table className="min-w-full bg-white">
              <thead>
                <tr>
                  <th className="px-4 py-2">S.No</th>
                  <th className="px-4 py-2">Filename</th>
                  <th className="px-4 py-2">Uploaded Date</th>
                  <th className="px-4 py-2">Status</th>
                </tr>
              </thead>
              <tbody>
                {uploadedFiles.map((file, index) => (
                  <tr key={index}>
                    <td className="px-4 py-2 border">{index + 1}</td>
                    <td className="px-4 py-2 border">{file.name}</td>
                    <td className="px-4 py-2 border">{file.date}</td>
                    <td className="px-4 py-2 border">
                      {file.status === 'success' ? (
                        <FaCheckCircle className="text-green-500" />
                      ) : (
                        <FaTimesCircle className="text-red-500" />
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UploadPage;
