import * as express from "express";
import * as bodyParser from 'body-parser';
import * as influencerController from './controllers/influencerController';

const app = express();
app.set("port", 5000);

app.use(bodyParser.json());

app.get("/", (req: any, res: any) => res.send("hi"));
app.get('/influencers', influencerController.allInfluencers);
app.get('/influencer/:id', influencerController.getInfluencer);
app.put('/influencer', influencerController.addInfluencer);
app.delete('/influencer/:id', influencerController.deleteInfluencer);
app.post('/influencer/:id', influencerController.updateInfluencer);

app.listen(app.get("port"), ()=>{
	console.log("app is running on port number %d", app.get("port"));
})