const fastifyPlugin = require('fastify-plugin');
const SubmissionService = require('./submission.service');

async function servicePlugin(fastify, options) {
    fastify.decorate('submissionService', new SubmissionService(fastify.submissionRepository));
}

module.exports = fastifyPlugin(servicePlugin);