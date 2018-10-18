const Hapi = require('hapi');

const routes = require('./api/routes');

const server = Hapi.server({
    host: 'localhost',
    port: 8000
});

server.route(routes.main);
server.route(routes.timestamp);

async function start() {
    try {
        await server.start();
    }
    catch (err) {
        console.log(err);
        process.exit(1);
    }
    await server.register({
        plugin: require('hapi-pino'),
        options: {
            prettyPrint: false,
            logEvents: ['response', 'onPostStart']
        }
    });

    console.log('Server running at:', server.info.uri);
};

process.on('unhandledRejection', (err) => {
    console.log(err);
    process.exit(1);
});

start();

