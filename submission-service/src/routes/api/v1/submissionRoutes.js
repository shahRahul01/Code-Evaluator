const { createSubmission, pingRequest } = require("../../../controllers/submission.contoller");

async function submissionRoutes(fastify, options) {
    fastify.get("/ping", pingRequest);
    fastify.post('/', createSubmission);
}

module.exports = submissionRoutes;