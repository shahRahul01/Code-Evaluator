import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";

const topics = ["Array", "String", "Hash Table", "Dynamic Programming", "Math", "Sorting", "Greedy"];

const companies = [
    { name: "Meta", count: 1027 },
    { name: "Amazon", count: 1776 },
    { name: "Google", count: 1800 },
    { name: "Uber", count: 615 },
    { name: "Bloomberg", count: 943 },
    { name: "Microsoft", count: 1075 },
];

const problems = [
    { id: "3066", title: "Minimum Operations to Exceed Threshold", difficulty: "Medium", acceptance: "42.0%" },
    { id: "1", title: "Two Sum", difficulty: "Easy", acceptance: "54.9%" },
    { id: "2", title: "Add Two Numbers", difficulty: "Medium", acceptance: "45.3%" },
    { id: "3", title: "Longest Substring Without Repeating Characters", difficulty: "Medium", acceptance: "36.2%" },
    { id: "4", title: "Median of Two Sorted Arrays", difficulty: "Hard", acceptance: "42.7%" },
    { id: "5", title: "Longest Palindromic Substring", difficulty: "Medium", acceptance: "35.2%" },
    { id: "6", title: "Zigzag Conversion", difficulty: "Medium", acceptance: "40.1%" },
    { id: "7", title: "Reverse Integer", difficulty: "Easy", acceptance: "56.8%" },
    { id: "8", title: "String to Integer (atoi)", difficulty: "Medium", acceptance: "27.4%" },
    { id: "9", title: "Palindrome Number", difficulty: "Easy", acceptance: "63.2%" },
    { id: "10", title: "Regular Expression Matching", difficulty: "Hard", acceptance: "25.1%" },
    { id: "11", title: "Container With Most Water", difficulty: "Medium", acceptance: "51.2%" },
    { id: "12", title: "Integer to Roman", difficulty: "Medium", acceptance: "58.9%" },
    { id: "13", title: "Roman to Integer", difficulty: "Easy", acceptance: "62.3%" },
    { id: "14", title: "Longest Common Prefix", difficulty: "Easy", acceptance: "56.7%" },
    { id: "15", title: "3Sum", difficulty: "Medium", acceptance: "32.1%" },
    { id: "16", title: "3Sum Closest", difficulty: "Medium", acceptance: "40.7%" },
    { id: "17", title: "Letter Combinations of a Phone Number", difficulty: "Medium", acceptance: "46.5%" },
    { id: "18", title: "4Sum", difficulty: "Medium", acceptance: "34.8%" },
    { id: "19", title: "Remove Nth Node From End of List", difficulty: "Medium", acceptance: "41.5%" },
    { id: "20", title: "Valid Parentheses", difficulty: "Easy", acceptance: "59.2%" },
    { id: "21", title: "Merge Two Sorted Lists", difficulty: "Easy", acceptance: "61.8%" },
    { id: "22", title: "Generate Parentheses", difficulty: "Medium", acceptance: "52.4%" },
    { id: "23", title: "Merge k Sorted Lists", difficulty: "Hard", acceptance: "40.3%" },
    { id: "24", title: "Swap Nodes in Pairs", difficulty: "Medium", acceptance: "50.2%" },
    { id: "25", title: "Reverse Nodes in k-Group", difficulty: "Hard", acceptance: "35.6%" },
    { id: "26", title: "Remove Duplicates from Sorted Array", difficulty: "Easy", acceptance: "60.9%" },
    { id: "27", title: "Remove Element", difficulty: "Easy", acceptance: "52.1%" },
    { id: "28", title: "Find the Index of the First Occurrence in a String", difficulty: "Easy", acceptance: "51.7%" },
    { id: "29", title: "Divide Two Integers", difficulty: "Medium", acceptance: "42.3%" },
    { id: "30", title: "Substring with Concatenation of All Words", difficulty: "Hard", acceptance: "30.4%" },
    { id: "31", title: "Next Permutation", difficulty: "Medium", acceptance: "37.2%" },
    { id: "32", title: "Longest Valid Parentheses", difficulty: "Hard", acceptance: "28.5%" },
    { id: "33", title: "Search in Rotated Sorted Array", difficulty: "Medium", acceptance: "42.9%" },
    { id: "34", title: "Find First and Last Position of Element in Sorted Array", difficulty: "Medium", acceptance: "44.8%" },
    { id: "35", title: "Search Insert Position", difficulty: "Easy", acceptance: "63.2%" },
    { id: "36", title: "Valid Sudoku", difficulty: "Medium", acceptance: "50.7%" },
    { id: "37", title: "Sudoku Solver", difficulty: "Hard", acceptance: "41.2%" },
    { id: "38", title: "Count and Say", difficulty: "Medium", acceptance: "55.9%" },
    { id: "39", title: "Combination Sum", difficulty: "Medium", acceptance: "54.7%" },
    { id: "40", title: "Combination Sum II", difficulty: "Medium", acceptance: "48.1%" },
    { id: "41", title: "First Missing Positive", difficulty: "Hard", acceptance: "32.4%" },
    { id: "42", title: "Trapping Rain Water", difficulty: "Hard", acceptance: "40.7%" },
    { id: "43", title: "Multiply Strings", difficulty: "Medium", acceptance: "47.5%" },
    { id: "44", title: "Wildcard Matching", difficulty: "Hard", acceptance: "27.8%" },
    { id: "45", title: "Jump Game II", difficulty: "Medium", acceptance: "35.2%" },
    { id: "46", title: "Permutations", difficulty: "Medium", acceptance: "64.1%" },
    { id: "47", title: "Permutations II", difficulty: "Medium", acceptance: "55.3%" },
    { id: "48", title: "Rotate Image", difficulty: "Medium", acceptance: "59.9%" },
    { id: "49", title: "Group Anagrams", difficulty: "Medium", acceptance: "59.7%" },
    { id: "50", title: "Pow(x, n)", difficulty: "Medium", acceptance: "48.4%" },
];

function Problems() {

    const [search, setSearch] = useState("");

    return <>
        <div className="min-h-screen p-6 px-24 bg-base-100 text-base-content">
            {/* Topic Filters */}
            <div className="flex flex-wrap gap-2 mt-6">
                {topics.map((topic, index) => (
                    <span key={index} className="bg-base-300 px-3 py-1 rounded-lg text-sm">{topic}</span>
                ))}
            </div>

            {/* Search & Sorting */}
            <div className="flex justify-between items-center mt-4">
                <div className="relative w-64">
                    <input
                        type="text"
                        placeholder="Search questions..."
                        className="w-full bg-base-200 text-base-content px-4 py-2 rounded-lg focus:outline-none"
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                    />
                    <FaSearch className="absolute right-3 top-3 text-base-content/60" />
                </div>
            </div>

            {/* Problem List Table */}
            <div className="mt-4 overflow-x-auto">
                <table className="w-full text-left">
                    <thead>
                        <tr className="bg-base-300">
                            <th className="p-2">Status</th>
                            <th className="p-2">Title</th>
                            <th className="p-2">Acceptance</th>
                            <th className="p-2">Difficulty</th>
                        </tr>
                    </thead>
                    <tbody>
                        {problems.map((problem, index) => (
                            <tr key={index} className="border-b border-base-200 hover:bg-base-200">
                                <td className="p-2">✅</td>
                                <td className="p-2"><Link to="/problems/name">{problem.title}</Link></td>
                                <td className="p-2">{problem.acceptance}</td>
                                <td className={`p-2 ${problem.difficulty === "Easy" ? "text-green-500" : problem.difficulty === "Medium" ? "text-yellow-500" : "text-red-500"}`}>
                                    {problem.difficulty}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* Trending Companies */}
            <div className="mt-6">
                <h3 className="text-lg font-semibold">Trending Companies</h3>
                <div className="flex flex-wrap gap-2 mt-2">
                    {companies.map((company, index) => (
                        <span key={index} className="bg-base-300 px-3 py-1 rounded-lg text-sm">
                            {company.name} <span className="text-yellow-500">{company.count}</span>
                        </span>
                    ))}
                </div>
            </div>
        </div>
    </>
}

export default Problems;