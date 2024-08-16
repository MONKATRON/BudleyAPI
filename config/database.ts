import { parse } from 'pg-connection-string';
const config = parse(process.env.DATABASE_URL);

export default ({ env }) => ({
  connection: {
    client: 'postgres',
    connection: {
      host: process.env.DATABASE_HOST,
      port: process.env.DATABASE_PORT,
      database: process.env.DATABASE_NAME,
      user: process.env.DATABASE_USERNAME,
      password: process.env.DATABASE_PASSWORD,
      ssl: {
        rejectUnauthorized: false
      },
    },
    debug: false,
  },
});
