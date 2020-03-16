const express = require("express");

const router = express.Router();

const burgerModel = require("../models/burgerModel.js");

router.get("/", function (req, res) {
    burgerModel.selectAll(function(data) {
        var burObj = {
            burger: data
        };

        res.render("index", burObj);
    });
 });
 
 
 router.post("/api/burgers", function(req, res) {
    burgerModel.insertOne([
      "name",
    ], [req.body.burger_name], function(result) {
      res.json({ id: result.insertId });
    });
  });

  router.put("/api/burger/:id", function (req, res) {
    let condition = "id = " + req.params.id;

    burger.updateOne({
        devoured: req.body.devoured
    }, condition, function (result) {
        if (result.changedRows == 0) {
            
            return res.status(404).end();
        } else {
            res.status(200).end();
        }
    });
});

module.exports = router;