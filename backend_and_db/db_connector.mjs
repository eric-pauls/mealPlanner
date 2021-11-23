import mysql from 'mysql';

// setup database
const db = mysql.createPool({
    host: "classmysql.engr.oregonstate.edu",
    user: "cs340_chintyl",
    password: "3239",
    database: "cs340_chintyl",
  });

export default db