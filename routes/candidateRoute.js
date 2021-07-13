const express = require("express");
//const { default: Candidate } = require("../frontend/src/components/Candidates");

const router = express.Router();
const Candidate = require("../models/candidateModel");

router.route("/create").post((req,res) => {
    console.log(req.body)
    const type = req.body.type;
    const active = req.body.active;
    const name = req.body.name;
    const bio = req.body.bio;
    const policy1 = req.body.policy1;
    const policy1detail = req.body.policy1detail;
    const policy2 = req.body.policy2;
    const policy2detail = req.body.policy2detail;
    const policy3 = req.body.policy3;
    const policy3detail = req.body.policy3detail;
    const policy4 = req.body.policy4;
    const policy4detail = req.body.policy4detail;
    const policy5 = req.body.policy5;
    const policy5detail = req.body.policy5detail;
    const policy6 = req.body.policy6;
    const policy6detail = req.body.policy6detail;
    const policy7 = req.body.policy7;
    const policy7detail = req.body.policy7detail;
    const policy8 = req.body.policy8;
    const policy8detail = req.body.policy8detail;
    const policy9 = req.body.policy9;
    const policy9detail = req.body.policy9detail;
    const policy10 = req.body.policy10;
    const policy10detail = req.body.policy10detail;
    const newCandidate = new Candidate({
       type,
       active,
        name,
        bio,
        policy1,
        policy1detail,
        policy2,
        policy2detail,
        policy3,
        policy3detail,
        policy4,
        policy4detail,
        policy5,
        policy5detail,
        policy6,
        policy6detail,
        policy7,
        policy7detail,
        policy8,
        policy8detail,
        policy9,
        policy9detail,
        policy10,
        policy10detail,
    });

    newCandidate.save();
})


router.route("/candidates").get((req, res) => {
    Candidate.find()
        .then(foundCandidates => res.json(foundCandidates))
})

module.exports = router;