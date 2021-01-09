const { Router } = require("express");
const router = Router();
const mongoose = require("mongoose");
const db = mongoose.model("students");

router.get("/list", (req, res) => {
    db.find((err, docs) => {
        if (!err) {
            res.render("pages/list", { data: docs });
        } else console.log(err);
    });
});
router.get("/", (req, res) => {
    res.render("pages/index");
});
router
    .get("/insert", (req, res) => {
        res.render("pages/insert");
    })
    .post("/insert", (req, res) => {
        let students = new db();
        students.name = req.body.name;
        students.roll = req.body.roll;
        students.sem = req.body.sem;
        students.save((err, doc) => {
            if (!err) res.redirect("/list");
            else res.send("error Occured");
        });
    });

module.exports = router;
