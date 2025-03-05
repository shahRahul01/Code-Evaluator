import React, { useState } from "react";
import CodeMirror from "@uiw/react-codemirror";
import { cpp } from "@codemirror/lang-cpp";
import "tailwindcss/tailwind.css";

const Coding = () => {
  const [code, setCode] = useState(`class Solution {
public:
    vector<int> twoSum(vector<int>& nums, int target) {
        // Write your solution here
    }
};`);
  const [output, setOutput] = useState("");

  const runCode = () => {
    setOutput("Testcase Passed ✅\nOutput: [0, 1]");
  };

  const submitCode = () => {
    setOutput("Accepted ✅\nRuntime: 4 ms\nMemory: 10.5 MB");
  };

  return (
    <div className="flex min-h-screen bg-base-200">
      {/* Left Panel - Problem Description */}
      <div className="w-1/2 p-6 bg-base-100 shadow-md">
        <h1 className="text-2xl font-bold">1. Two Sum</h1>
        <p className="mt-2">
          Given an array of integers <code>nums</code> and an integer{" "}
          <code>target</code>, return <b>indices</b> of the two numbers such
          that they add up to <code>target</code>.
        </p>
        <p className="mt-4 font-semibold">Example:</p>
        <pre className="bg-gray-100 p-3 rounded-md">
          Input: nums = [2,7,11,15], target = 9
          <br />
          Output: [0,1]
        </pre>
      </div>

      {/* Right Panel - Code Editor */}
      <div className="w-1/2 p-6">
        <CodeMirror
          value={code}
          height="300px"
          extensions={[cpp()]}
          onChange={(value) => setCode(value)}
          className="border border-gray-300 rounded-md"
        />

        {/* Run & Submit Buttons */}
        <div className="mt-4 flex space-x-4">
          <button className="btn btn-primary" onClick={runCode}>
            🚀 Run
          </button>
          <button className="btn btn-success" onClick={submitCode}>
            ✅ Submit
          </button>
        </div>

        {/* Output Section */}
        <div className="mt-4 p-3 bg-gray-900 text-white rounded-md">
          <h2 className="text-lg font-semibold">Testcase Output</h2>
          <pre className="mt-2">{output || "Click 'Run' to see output..."}</pre>
        </div>
      </div>
    </div>
  );
};

export default Coding;
