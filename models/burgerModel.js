const orm = require("../config/orm.js");

const burgerModel = {
    selectAll: function (cb) {
        orm.selectAll("burger"),
            function (res) {
                cb(res);
            };
    },
    insertOne: function (cols, vals, cb) {
        orm.insertOne("burger", cols, vals, function (res) {
            cb(res);
        });
    },
    updateOne: function (objColVals, condition, cb) {
        orm.updateOne("burger", objColVals, condition, function (res) {
            cb(res);
        });
    },
}

module.exports = burgerModel;