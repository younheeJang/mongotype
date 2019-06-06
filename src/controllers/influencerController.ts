import { Request, Response } from 'express';

//call modules 
import Influencer from './../influencer';

/* five endpoints that rest api.
- GET - /influencers # returns all influencers
- GET - /influencer/{1} = /influencer/:id  # returns an influencer with id 1
- POST - /influencer # inserts an new influencers into the table
- DELETE - /influencer/{1} # deletes a influencers with id of 1
- POST - /influencer # updates an influencer into the table
*/

//- GET - /influencers # returns all influencers
export let allInfluencers = (req: Request, res:Response) => {
	Influencer.find((err:any, influencers:any)=> {
		if(err){
			res.send(err)
		}else{
			//return data type json
			res.send(influencers);
		}
	})
}

// /- GET - /influencer/{1} = /influencer/:id  # returns an influencer with id 1
export let getInfluencer = (req: Request, res:Response) => {
	Influencer.findById(req.params.id, (err:any, influencer:any)=> {
		if(err){
			res.send(err)
		}else{
			//return data type json
			res.send(influencer);
		}
	})
}


//- PUT - /influencer/{1} # updates an influencers with id of 1
export let addInfluencer = (req: Request, res:Response) => {
	let influencer = new Influencer(req.body);

	influencer.save((err:any)=>{
		if(err){
			res.send(err)
		} else{
			res.send(influencer);
		}
	})
}

//- DELETE - /influencer/{1} # deletes a influencers with id of 1
export let deleteInfluencer = (req: Request, res:Response) => {
	//json object id as first parameter.
	Influencer.deleteOne({_id: req.params.id }, (err:any)=>{
		if(err){
			res.send(err)
		} else{
			res.send('process done well for deleting');
		}
	})
}

//- POST - /influencer # updates an influencer into the table
export let updateInfluencer = (req: Request, res:Response) => {
	Influencer.findByIdAndUpdate(req.params.id, req.body, (err:any, influencer:any)=>{
		if(err){
			res.send(err)
		} else{
			res.send('process done well for updating');
		}
	})
}