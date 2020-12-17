
const mongoose =require('mongoose');

const{Schema} = mongoose;

const trailsModel = new Schema({
  id: {type:String},
  name: {type:String},
  url: {type:String},
  length: {type:String},
  description: {type:String},
  direction: {type:String},
  city: {type:String},
  region: {type:String},
  country: {type:String},
  lat: {type:Number},
  lon: {type:Number},
  rating: {type:Number},
  thumbnail: {type:String}
}
  );
  module.exports= mongoose.model('Trails', trailsModel);