const request = require('request');

var getWeather = (lat,lng, callback) => {
  request({
    url:`https://api.darksky.net/forecast/32549ae45e68164d767090aaec9ee26f/${lat},${lng}`,
    json:true
   },(error,response,body)=>{
if(error) {
  callback('Unable to connect to forecast.io server.');
}else if(response.statusCode === 400) {
  callback('unable to fetch weather.');
} else if(response.statusCode=== 200) {
  callback(undefined, {
    temperature : body.currently.temperature,
    apparentTemperature: body.currently.apparentTemperature
   });
  }
 });
};
module.exports.getWeather=getWeather;
