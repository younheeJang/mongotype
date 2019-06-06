"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//call modules 
const influencer_1 = require("./../influencer");
/* five endpoints that rest api.
- GET - /influencers # returns all influencers
- GET - /influencer/{1} = /influencer/:id  # returns an influencer with id 1
- POST - /influencer # inserts an new influencers into the table
- DELETE - /influencer/{1} # deletes a influencers with id of 1
- POST - /influencer # updates an influencer into the table
*/
//- GET - /influencers # returns all influencers
exports.allInfluencers = (req, res) => {
    influencer_1.default.find((err, influencers) => {
        if (err) {
            res.send(err);
        }
        else {
            //return data type json
            res.send(influencers);
        }
    });
};
// /- GET - /influencer/{1} = /influencer/:id  # returns an influencer with id 1
exports.getInfluencer = (req, res) => {
    influencer_1.default.findById(req.params.id, (err, influencer) => {
        if (err) {
            res.send(err);
        }
        else {
            //return data type json
            res.send(influencer);
        }
    });
};
//- PUT - /influencer/{1} # updates an influencers with id of 1
exports.addInfluencer = (req, res) => {
    let influencer = new influencer_1.default(req.body);
    influencer.save((err) => {
        if (err) {
            res.send(err);
        }
        else {
            res.send(influencer);
        }
    });
};
//- DELETE - /influencer/{1} # deletes a influencers with id of 1
exports.deleteInfluencer = (req, res) => {
    //json object id as first parameter.
    influencer_1.default.deleteOne({ _id: req.params.id }, (err) => {
        if (err) {
            res.send(err);
        }
        else {
            res.send('process done well for deleting');
        }
    });
};
//- POST - /influencer # updates an influencer into the table
exports.updateInfluencer = (req, res) => {
    influencer_1.default.findByIdAndUpdate(req.params.id, req.body, (err, influencer) => {
        if (err) {
            res.send(err);
        }
        else {
            res.send('process done well for updating');
        }
    });
};
//# sourceMappingURL=influencerController.js.map