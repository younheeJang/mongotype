import * as mongoose from 'mongoose';


const uri: string = 'mongodb://127.0.0.1:27017/local';

mongoose.connect(uri, (err:any)=>{
	if(err){
		console.log(err.message)
	}else{
		console.log("mongo connect success")
	}
})

export interface IInfluencer extends mongoose.Document {
	id: string;
	nickname: string;
  }

export const InfluencerSchema = new mongoose.Schema({
	id: {type: String, required:true},
	nickname: {type: String, required:true}
});

const Influencer = mongoose.model<IInfluencer>("Influencer", InfluencerSchema);

export default Influencer;