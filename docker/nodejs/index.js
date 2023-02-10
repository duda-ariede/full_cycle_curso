const express = require ('express')
const app = express()
const port = 3000
const config = {
  host: 'db',
  user: 'root',
  password: 'root',
  database: 'nodedb'
};
const mysql = require ('mysql')
const connection = mysql.createConnection(config)
const sql_table = `create table if not exists people(id int not null auto_increment,
  name varchar(255), primary key(id))`
const sql_insert = `INSERT IGNORE INTO people (name)
VALUES ('DUDA - Carlos Eduardo Ariede')`
const sql_query = `select name from people`

connection.query(sql_table)
connection.query(sql_insert)
connection.query(sql_query, function(err, rows){
  if (err) {
    throw err;
  } else {
    setValue(rows[0].name);
  }
});

var variable = [];

function setValue(value) {
 variable = value;
}

connection.end()



app.get('/',(req,res) => {
  res.send(`<h1>Full Cycle Rocks!!</h1>
    <h3>Nome:</h3>
    <ul><li>${variable}</li></ul>
  `)
})

app.listen(port, ()=> {
  console.log('Rodando na porta ' + port)
})