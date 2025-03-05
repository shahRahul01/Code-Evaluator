const fastifyPlugin = require("fastify-plugin"); 
const SubmissionRepository = require("./submission.repsitory");

async function repositoryPlugin(fastify, options) {
    fastify.decorate("submissionRepository", new SubmissionRepository());
}

module.exports = fastifyPlugin(repositoryPlugin);