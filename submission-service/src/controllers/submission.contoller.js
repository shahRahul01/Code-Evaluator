async function pingRequest(req, res) {
    return res.send({ data: "PONG" });
}

// TODO: Add validastion layer
async function createSubmission(req, res) {
    console.log(req.body);
    const response = await this.submissionService.addSubmission(req.body);
    return res.status(201).send({
        error: {},
        data: response,
        success: true,
        message: "Created submission successfully",
    });
}

module.exports = {
    pingRequest,
    createSubmission,
};
