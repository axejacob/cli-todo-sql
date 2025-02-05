console.log("works!!", process.argv[2]);

const pg = require('pg');
const configs = {
    user: 'axel',
    host: '127.0.0.1',
    database: 'todo',
    port: 5432,
};
var commandType = process.argv[2];
var userInput = process.argv[3];


let queryDoneCallback = (err, result) => {
    if (err) {
      console.log("query error", err.message);
    } else {
      console.log("result", result.rows );
      for( i = 0; i < result.rows.length; i++) {
        console.log('Results: ' + result.rows[i]);
      }
    }
};
//adding
const client = new pg.Client(configs);
if(commandType === 'add'){
let clientConnectionCallback = (err) => {
  if( err ){
    console.log( "error", err.message );
  }
}


  let text = "INSERT INTO todo (name) VALUES ($1) RETURNING id";
  const values = ["Done!"];

  client.query(text, values, queryDoneCallback);
};

// console.log('about to call connect');
client.connect(clientConnectionCallback);
