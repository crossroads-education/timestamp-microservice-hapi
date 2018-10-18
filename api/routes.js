module.exports.main = {
    method: 'GET',
    path: '/api',
    handler: (request, h) => {
        return 'Timestamp Microservice written in Hapi.js';
    }
};

module.exports.timestamp = {
    method: 'GET',
    path: '/api/{timestamp}',
    handler: (request, h) => {
        return 'Timestamp, ' + encodeURIComponent(request.params.timestamp) + '!';
    }
};

