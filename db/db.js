import Pool from "pg-pool";

const db = new Pool({
  host: "ep-long-salad-a50v9xi3.us-east-2.aws.neon.fl0.io",
  port: 5432,
  database: "david-test",
  user: "fl0user",
  password: "xVb1T9FSwhEl",
  ssl: true,
});

export default db;
