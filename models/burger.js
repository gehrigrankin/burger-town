var orm = require("../config/orm.js");

var burger = {
    selectAll: function(cb){
        orm.selectAll("cats", function(res) {
            cb(res);
        });
    },
    insertOne: function(name, cb){
        orm.insertOne(name, function(res) {
            cb(res);
        });
    },
    updateOne: function(name, cb) {
        orm.updateOne(name, function(res) {
            cb(res);
        });
    }
}

module.exports = burger;