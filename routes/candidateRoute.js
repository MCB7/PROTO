const express = require("express");
//const { default: Candidate } = require("../frontend/src/components/Candidates");

const router = express.Router();
const Candidate = require("../models/candidateModel");

router.route("/create").post((req,res) => {
    const name = req.body.name;
    const bio = req.body.content;
    const newCandidate = new Candidate({
        name,
        bio
    });

    newCandidate.save();
})


router.route("/candidates").get((req, res) => {
    Candidate.find()
        .then(foundCandidates => res.json(foundCandidates))
})

module.exports = router;