// var mysql = require ("mysql");

// var connection;
// if(process.env.JAWSDB_URL) {
//   //Heroku deployment
//     connection = mysql.createConnection(process.env.JAWSDB_URL);
// } else {
//   //local host
//     connection = mysql.createConnection({
//         root: 3306,
//         host: "localhost",
//         user: "root",
//         password: "",
//         database: "Food_Collectors",
//     });
// };

// // Make connection.
// connection.connect(function(err) {
//   if (err) {
//     console.error("error connecting: " + err.stack);
//     return;
//   }
//   console.log("connected as id " + connection.threadId);
// });

// // // Export connection for the ORM to use.
// module.exports = connection;