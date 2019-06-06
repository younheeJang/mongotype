"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const bodyParser = require("body-parser");
const influencerController = require("./controllers/influencerController");
const app = express();
app.set("port", 5000);
app.use(bodyParser.json());
app.get("/", (req, res) => res.send("hi"));
app.get('/influencers', influencerController.allInfluencers);
app.get('/influencer/:id', influencerController.getInfluencer);
app.put('/influencer', influencerController.addInfluencer);
app.delete('/influencer/:id', influencerController.deleteInfluencer);
app.post('/influencer/:id', influencerController.updateInfluencer);
app.listen(app.get("port"), () => {
    console.log("app is running on port number %d", app.get("port"));
});
//# sourceMappingURL=app.js.map