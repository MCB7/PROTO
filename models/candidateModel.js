const mongoose = require("mongoose");

const candidateSchema = {
    type: String,
    active: String,
    name: String,
    bio: String,
    policy1: String,
    policy1detail: String,
    policy1detail1: String,
    policy1detail2: String,
    policy1detail3: String,
    policy1detail4: String,
    policy1detail5: String,
    policy1detail6: String,
    policy1detail7: String,
    policy1detail8: String,
    policy1detail9: String,
    policy1detail10: String,
    policy2: String,
    policy2detail: String,
    policy2detail1: String,
    policy2detail2: String,
    policy2detail3: String,
    policy2detail4: String,
    policy2detail5: String,
    policy2detail6: String,
    policy2detail7: String,
    policy2detail8: String,
    policy2detail9: String,
    policy2detail10: String,
    policy3: String,
    policy3detail: String,
    policy3detail1: String,
    policy3detail2: String,
    policy3detail3: String,
    policy3detail4: String,
    policy3detail5: String,
    policy3detail6: String,
    policy3detail7: String,
    policy3detail8: String,
    policy3detail9: String,
    policy3detail10: String,
    policy4: String,
    policy4detail: String,
    policy4detail1: String,
    policy4detail2: String,
    policy4detail3: String,
    policy4detail4: String,
    policy4detail5: String,
    policy4detail6: String,
    policy4detail7: String,
    policy4detail8: String,
    policy4detail9: String,
    policy4detail10: String,
    policy5: String,
    policy5detail: String,
    policy5detail1: String,
    policy5detail2: String,
    policy5detail3: String,
    policy5detail4: String,
    policy5detail5: String,
    policy5detail6: String,
    policy5detail7: String,
    policy5detail8: String,
    policy5detail9: String,
    policy5detail10: String,
    policy6: String,
    policy6detail: String,
    policy6detail1: String,
    policy6detail2: String,
    policy6detail3: String,
    policy6detail4: String,
    policy6detail5: String,
    policy6detail6: String,
    policy6detail7: String,
    policy6detail8: String,
    policy6detail9: String,
    policy6detail10: String,
    policy7: String,
    policy7detail: String,
    policy7detail1: String,
    policy7detail2: String,
    policy7detail3: String,
    policy7detail4: String,
    policy7detail5: String,
    policy7detail6: String,
    policy7detail7: String,
    policy7detail8: String,
    policy7detail9: String,
    policy7detail10: String,
    policy8: String,
    policy8detail: String,
    policy8detail1: String,
    policy8detail2: String,
    policy8detail3: String,
    policy8detail4: String,
    policy8detail5: String,
    policy8detail6: String,
    policy8detail7: String,
    policy8detail8: String,
    policy8detail9: String,
    policy8detail10: String,
    policy9: String,
    policy9detail: String,
    policy9detail1: String,
    policy9detail2: String,
    policy9detail3: String,
    policy9detail4: String,
    policy9detail5: String,
    policy9detail6: String,
    policy9detail7: String,
    policy9detail8: String,
    policy9detail9: String,
    policy9detail10: String,
    policy10: String,
    policy10detail: String,
    policy10detail1: String,
    policy10detail2: String,
    policy10detail3: String,
    policy10detail4: String,
    policy10detail5: String,
    policy10detail6: String,
    policy10detail7: String,
    policy10detail8: String,
    policy10detail9: String,
    policy10detail10: String,
}

const Candidate = mongoose.model("Seattle", candidateSchema, "seattle" );

module.exports = Candidate;