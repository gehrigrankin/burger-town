require("./connection");  

// Object Relational Mapper (ORM)

// The ?? signs are for swapping out table or column names
// The ? signs are for swapping out other values
// These help avoid SQL injection
// https://en.wikipedia.org/wiki/SQL_injection
var orm = {
    selectAll: function(col, val) {
        var queryString = "SELECT * FROM burgers";

        connection.query(queryString, function(err,res){
            if (err) throw err;

            cb(null, res);
        });

    },
    insertOne: function(name){
        var queryString = "INSERT INTO burgers SET ?";

        connection.query(queryString,
            {
                name: name,
                devoured: false
            }
        );
    },
    updateOne: function(name){
        var queryString = "UPDATE burgers SET ? WHERE ?";

        connection.query(queryString,
        [
            {
                devoured: true
            },
            {
                name: name
            }
        ]);
    },
    
};
  
module.exports = orm;