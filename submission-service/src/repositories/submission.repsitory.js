const Submission = require("../models/submissin.model");

class SubmissionRepository {
    constructor() {
        this.submissionModel = Submission;
    }

    async createSubmission(submission) {
        const response = await this.submissionModel.create(submission);
        return response;
    }
}

module.exports = SubmissionRepository;