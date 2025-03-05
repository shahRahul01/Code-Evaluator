const fetchProblem = require("../apis/problemServiceApi");
const SubmissionCreationError = require("../errors/submissionCreation.error");
const SubmissionProducer = require("../producers/submissionQueueProducer");

class SubmissionService {
    constructor(submissionRepository) {
        this.submissionRepository = submissionRepository;
    }

    async pingCheck() {
        return "Hello from submission service";
    }

    async addSubmission(submissionPayload) {
        // Hit the problem-service and get the problem details
        const problemId = submissionPayload.problemId;
        const userId = submissionPayload.userId;

        const problemApiResponse = await fetchProblem(problemId);

        if (!problemApiResponse) {
            throw new SubmissionCreationError("Failed to create a submission in the respository");
        }

        const languageCodeStubs = problemApiResponse.data.codeStubs.find(codeStub => codeStub.language.toLowerCase() === submissionPayload.language.toLowerCase());

        console.log(languageCodeStubs);

        submissionPayload.code = languageCodeStubs.startSnippet + "\n\n" + submissionPayload.code + "\n\n" + languageCodeStubs.endSnippet;

        const submission = await this.submissionRepository.createSubmission(submissionPayload);

        if (!submission) {
            throw new SubmissionCreationError('Failed to create a submission in the repository');
        }

        console.log(submission);

        const response = await SubmissionProducer({
            [submission._id]: {
                code: submission.code,
                language: submission.language,
                inputCase: problemApiResponse.data.testCases[0].input,
                outputCase: problemApiResponse.data.testCases[0].output,
                userId,
                submissionId: submission._id

            }
        });

        // TODO: Add handling of all testcases here .
        return {queueResponse: response, submission};

    }
}

module.exports = SubmissionService;