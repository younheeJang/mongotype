"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
const uri = 'mongodb://127.0.0.1:27017/local';
mongoose.connect(uri, (err) => {
    if (err) {
        console.log(err.message);
    }
    else {
        console.log("mongo connect success");
    }
});
exports.InfluencerSchema = new mongoose.Schema({
    id: { type: String, required: true },
    nickname: { type: String, required: true }
});
const Influencer = mongoose.model("Influencer", exports.InfluencerSchema);
exports.default = Influencer;
//# sourceMappingURL=influencer.js.map