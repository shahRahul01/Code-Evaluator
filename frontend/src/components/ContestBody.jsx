import { useState } from "react";
import { FaMedal } from "react-icons/fa";
import ContestContainer from "./contestsContainer";

const contestsData = [
  { title: "Weekly Contest 436", date: "Feb 9, 2025", time: "8:00 AM GMT+5:30" },
  { title: "Weekly Contest 435", date: "Feb 2, 2025", time: "8:00 AM GMT+5:30" },
  { title: "Biweekly Contest 149", date: "Feb 1, 2025", time: "8:00 PM GMT+5:30" },
  { title: "Weekly Contest 434", date: "Jan 26, 2025", time: "8:00 AM GMT+5:30" },
  { title: "Weekly Contest 433", date: "Jan 19, 2025", time: "8:00 AM GMT+5:30" },
  { title: "Biweekly Contest 148", date: "Jan 18, 2025", time: "8:00 PM GMT+5:30" },
  { title: "Weekly Contest 432", date: "Jan 12, 2025", time: "8:00 AM GMT+5:30" },
];

const rankingsData = [
  { name: "Rahul", rating: 3703, attended: 26 },
  { name: "vishal", rating: 3686, attended: 51 },
  { name: "shree ram", rating: 3645, attended: 84 },
  { name: "gulshan", rating: 3611, attended: 107 },
  { name: "faizal", rating: 3599, attended: 146 },
  { name: "keval", rating: 3589, attended: 100 },
  { name: "harsh", rating: 3559, attended: 81 },
];

const ContestsList = ({ contests, page, setPage }) => {
  const itemsPerPage = 5;
  const startIndex = (page - 1) * itemsPerPage;
  const paginatedContests = contests.slice(startIndex, startIndex + itemsPerPage);
  const totalPages = Math.ceil(contests.length / itemsPerPage);

  return (
    <div>
      {paginatedContests.map((contest, index) => (
        <ContestContainer index={index} contest={contest}/>
      ))}

      {/* Pagination */}
      <div className="flex justify-center mt-4 space-x-2">
        <button
          className="btn btn-sm"
          disabled={page === 1}
          onClick={() => setPage((p) => p - 1)}
        >
          « Prev
        </button>
        <span className="text-lg font-semibold">{page} / {totalPages}</span>
        <button
          className="btn btn-sm"
          disabled={page === totalPages}
          onClick={() => setPage((p) => p + 1)}
        >
          Next »
        </button>
      </div>
    </div>
  );
};

const ContestBody = () => {
  const [page, setPage] = useState(1);
  const [tab, setTab] = useState("past");

  return (
    <div className="py-6 grid md:grid-cols-3 gap-6">
      {/* Left: Contests List */}
      <div className="md:col-span-2 bg-base-200 p-4 rounded-lg shadow-lg">
        {/* Tabs */}
        <div className="flex space-x-4 border-b border-base-300 pb-2">
          <button
            className={`btn btn-sm ${tab === "past" ? "btn-primary" : ""}`}
            onClick={() => setTab("past")}
          >
            Past Contests
          </button>
          <button
            className={`btn btn-sm ${tab === "my" ? "btn-primary" : ""}`}
            onClick={() => setTab("my")}
          >
            My Contests
          </button>
        </div>

        {/* Contests List */}
        <div className="mt-4">
          {tab === "past" ? (
            <ContestsList contests={contestsData} page={page} setPage={setPage} />
          ) : (
            <p className="text-center text-gray-500">No contests found.</p>
          )}
        </div>
      </div>

      {/* Right: Global Ranking */}
      <div className="bg-base-200 p-4 rounded-lg shadow-lg">
        <h2 className="text-xl font-semibold mb-4">🏆 Global Ranking</h2>
        <ul>
          {rankingsData.map((user, index) => (
            <li key={index} className="flex items-center justify-between p-2 border-b border-base-300">
              <div className="flex items-center gap-3">
                <span className="text-lg font-bold">{index + 1}</span>
                <div className="avatar">
                  <div className="w-8 h-8 rounded-full bg-primary text-center font-bold text-white flex items-center justify-center">
                    {user.name[0]}
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold">{user.name}</h4>
                  <p className="text-xs text-gray-400">Attended: {user.attended}</p>
                </div>
              </div>
              <span className="text-lg font-semibold text-primary">{user.rating}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ContestBody;
