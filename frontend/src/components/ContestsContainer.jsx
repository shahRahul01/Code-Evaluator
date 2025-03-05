const ContestContainer = ({ index, contest }) => {
    return (
        <div key={index} className="flex items-center justify-between p-4 border-b border-base-300">
          <div className="flex items-center gap-4">
            <img
              src="https://leetcode.com/_next/static/images/weekly-default-553ede7bcc8e1b4a44c28a9e4a32068c.png"
              alt={contest.title}
              className="w-12 h-12 rounded-lg"
            />
            <div>
              <h3 className="text-lg font-semibold">{contest.title}</h3>
              <p className="text-sm text-gray-400">{contest.date} • {contest.time}</p>
            </div>
          </div>
          <span className="badge badge-primary">Virtual</span>
        </div>
    );
  };
  
  
  
  export default ContestContainer;
  