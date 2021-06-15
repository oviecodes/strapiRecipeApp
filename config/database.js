// module.exports = ({ env }) => ({
//   defaultConnection: 'default',
//   connections: {
//     default: {
//       connector: 'mongoose',
//       settings: {
//         host: env('DATABASE_HOST', '127.0.0.1'),
//         srv: env.bool('DATABASE_SRV', false),
//         port: env.int('DATABASE_PORT', 27017),
//         database: env('DATABASE_NAME', 'recipe'),
//         username: env('DATABASE_USERNAME', null),
//         password: env('DATABASE_PASSWORD', null),
//       },
//       options: {
//         authenticationDatabase: env('AUTHENTICATION_DATABASE', null),
//         ssl: env.bool('DATABASE_SSL', false),
//       },
//     },
//   },
// });

// module.exports = ({ env }) => ({
//   defaultConnection: 'default',
//   connections: {
//     default: {
//       connector: 'bookshelf',
//       settings: {
//         client: 'postgres',
//         host: env('DATABASE_HOST', 'localhost'),
//         port: env.int('DATABASE_PORT', 5432),
//         database: env('DATABASE_NAME', 'strapi'),
//         username: env('DATABASE_USERNAME', 'strapi'),
//         password: env('DATABASE_PASSWORD', 'strapi'),
//         schema: env('DATABASE_SCHEMA', 'public'), // Not Required
//         ssl: {
//           rejectUnauthorized: env.bool('DATABASE_SSL_SELF', false), // For self-signed certificates
//         },
//       },
//       options: {},
//     },
//   },
// });

// module.exports = ({ env }) => ({
//   defaultConnection: 'default',
//   connections: {
//     default: {
//       connector: 'mongoose',
//       settings: {
//         uri: env('DATABASE_URI'),
//       },
//       options: {
//         ssl: true,
//       },
//     },
//   },
// });

const parse = require('pg-connection-string').parse;
const config = parse(process.env.DATABASE_URL);

module.exports = ({ env }) => ({
  defaultConnection: 'default',
  connections: {
    default: {
      connector: 'bookshelf',
      settings: {
        client: 'postgres',
        host: config.host,
        port: config.port,
        database: config.database,
        username: config.user,
        password: config.password,
        ssl: {
          rejectUnauthorized: false,
        },
      },
      options: {
        ssl: true,
      },
    },
  },
});