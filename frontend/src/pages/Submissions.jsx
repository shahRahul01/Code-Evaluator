import { useState } from "react";

const submissionsData = [
  { time: "0 minutes ago", question: "Two Sum", status: "Compile Error", runtime: "N/A", language: "C++" },
  { time: "5 minutes ago", question: "Reverse Linked List", status: "Accepted", runtime: "12 ms", language: "Python" },
  { time: "10 minutes ago", question: "Longest Substring", status: "Wrong Answer", runtime: "N/A", language: "Java" },
  { time: "15 minutes ago", question: "Binary Search", status: "Accepted", runtime: "8 ms", language: "C++" },
  { time: "20 minutes ago", question: "Merge Intervals", status: "Time Limit Exceeded", runtime: "N/A", language: "JavaScript" },
  { time: "25 minutes ago", question: "Valid Anagram", status: "Accepted", runtime: "6 ms", language: "Python" },
];

const statusColors = {
  "Accepted": "text-green-600",
  "Wrong Answer": "text-red-600",
  "Compile Error": "text-red-600",
  "Time Limit Exceeded": "text-yellow-600",
};

const SubmissionsList = ({ submissions, page, setPage }) => {
  const itemsPerPage = 5;
  const startIndex = (page - 1) * itemsPerPage;
  const paginatedSubmissions = submissions.slice(startIndex, startIndex + itemsPerPage);
  const totalPages = Math.ceil(submissions.length / itemsPerPage);

  return (
    <div className="overflow-x-auto">
      <table className="table w-full">
        <thead>
          <tr>
            <th>Time Submitted</th>
            <th>Question</th>
            <th>Status</th>
            <th>Runtime</th>
            <th>Language</th>
          </tr>
        </thead>
        <tbody>
          {paginatedSubmissions.map((submission, index) => (
            <tr key={index} className="hover">
              <td>{submission.time}</td>
              <td className="text-blue-500 cursor-pointer hover:underline">{submission.question}</td>
              <td className={`font-semibold ${statusColors[submission.status] || "text-gray-600"}`}>{submission.status}</td>
              <td>{submission.runtime}</td>
              <td>{submission.language}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Pagination */}
      <div className="flex justify-center mt-4 space-x-4">
        <button className="btn btn-sm" disabled={page === 1} onClick={() => setPage(page - 1)}>
          « Newer
        </button>
        <span className="text-lg font-semibold">{page} / {totalPages}</span>
        <button className="btn btn-sm" disabled={page === totalPages} onClick={() => setPage(page + 1)}>
          Older »
        </button>
      </div>
    </div>
  );
};

const Submissions = () => {
  const [page, setPage] = useState(1);

  return (
    <div className="py-6 bg-base-200 min-h-screen px-24">
      <h1 className="text-2xl font-semibold mb-4">All My Submissions</h1>
      <SubmissionsList submissions={submissionsData} page={page} setPage={setPage} />
    </div>
  );
};

export default Submissions;
