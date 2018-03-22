var sqlite3;
var db;

var initOrOpenDB = function(){
  sqlite3 = require('sqlite3'); 
  var file = "dbRoulette.db";  
  db = new sqlite3.Database(file);  
  db.serialize(function() {
    db.run("CREATE TABLE IF NOT EXISTS recordsDeLaRoulette (server, member, record, PRIMARY KEY (server, member))");
  });
}

var insert = function(server, memberId, record){
  db.serialize(function(){
    var stmt = db.prepare("INSERT OR REPLACE INTO recordsDeLaRoulette VALUES (?, ?, ?)");
    stmt.run(server, memberId, record);
  })
}

var getRecord = function(server, memberId, callback){
  var data = [];
  db.serialize(function(){
    var stmt = db.prepare("SELECT * FROM recordsDeLaRoulette WHERE server = ? AND member = ?;");
    stmt.each(server, memberId, function(err, row){
      data.push(row);
    }, function(){
      callback(data, memberId, server);
    })
  })
}

var readAllRecords = function(){
  var data = [];
  db.serialize(function(){
    db.each("SELECT * FROM recordsDeLaRoulette", function(err, row){
      console.log("serveur: " + row.server + " member: " + row.member + " record: " + row.record)
    }, function(){
      console.log("\n\n");
    })
  })
}

module.exports = {
  insert: insert,
  getRecord: getRecord,
  initOrOpenDB: initOrOpenDB,
  readAllRecords: readAllRecords
}