const axiosInstance = require("../config/axiosInstance");
const { PROBLEM_SERVICE_URL } = require("../config/serverConfig");

async function fetchProblem(problemId) {
    try {
        console.log(`${PROBLEM_SERVICE_URL}/${problemId}`);
        const response = await axiosInstance.get(`${PROBLEM_SERVICE_URL}/${problemId}`);
        console.log("API Response: ", response);
        return response.data;
    } catch (error) {
        console.log("Something went wrong while fetching problem details");
        console.log(error);
    }
}

module.exports = fetchProblem;