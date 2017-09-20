const request = require('request');
const yargs = require('yargs');

const argv = yargs
 .options({
    a: {
      demand:true,
      alias:'address',
      describe:'Address to fetch weather for',
      String :true
    }
 })
.help()
.alias('help','h')
.argv;
var encodedAddress = encodeURIComponent(argv.address);

var lat=body.results[0].geometry.location.lat;
var lng=body.results[0].geometry.location.lng;
var addr=body.results[0].formatted_address;

request({
  url:`https://api.darksky.net/forecast/32549ae45e68164d767090aaec9ee26f/${lat},${lng}`,
  json:true
 },(error,response,body)=>{

     if(error){
      console.log('unable to connect forecast.io');
    } else if(response.statusCode===400) {
      console.log('unable to fetch result');
} else if(response.statusCode === 200) {
  console.log(body.currently.temperature);
}
});
