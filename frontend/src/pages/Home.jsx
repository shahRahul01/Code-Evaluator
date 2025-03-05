import { useState } from "react";
import Carousel from "../components/Carousel";
import { FaSearch } from "react-icons/fa";
import ContestHero from "../components/ContestHero";
import { Link } from "react-router-dom";


const studyPlans = [
  { title: "Top Interview 150", desc: "Must-do List for Interview Prep", img: "data:image/jpeg;base64,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" },
  { title: "LeetCode 75", desc: "Ace Coding Interview with 75 Qs", img: "https://i.ytimg.com/vi/Z8i6jHZZ4nA/maxresdefault.jpg" },
  { title: "SQL 50", desc: "Crack SQL Interview in 50 Qs", img: "https://static.vecteezy.com/system/resources/previews/012/614/985/large_2x/hand-showing-sql-word-and-sql-structured-query-language-code-with-server-room-background-photo.jpg" },
  { title: "Introduction to Pandas", desc: "Learn Basic Pandas in 15 Qs", img: "https://th.bing.com/th/id/OIP.mW4Ey2d5mrl3tcdyhGONIwHaEO?w=307&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7" },
];

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

const Home = () => {

  const [search, setSearch] = useState("");

  return (
    <>
      <Carousel />
      <div className="min-h-screen p-6 px-24 bg-base-100 text-base-content">
        {/* Study Plan Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {studyPlans.map((plan, index) => (
            <div key={index} className="bg-base-200 p-4 rounded-lg shadow-lg">
              <img src={plan.img} alt={plan.title} className="rounded-lg w-full h-24 object-cover" />
              <h3 className="font-semibold mt-2">{plan.title}</h3>
              <p className="text-base-content/60 text-sm">{plan.desc}</p>
            </div>
          ))}
        </div>

        <ContestHero />

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
  );

};

export default Home;
