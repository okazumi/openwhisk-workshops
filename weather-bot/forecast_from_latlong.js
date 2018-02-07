var request = require("request");

function main(params) {
    if(!params.lat) return Promise.reject("Missing latitude");
    if(!params.lng) return Promise.reject("Missing longitude");
    var host = params.host || "twcservice.mybluemix.net";

    var url = "https://"+host+"/api/weather/v1/geocode/"+params.lat+"/"+params.lng+"/forecast/daily/3day.json";
    
    var options = {
        url: url,
        json: true,
        auth: {
            user: params.username,
            password: params.password
        }  
    };

    return new Promise(function(resolve, reject) {
        request(options, function(err, resp) {
            if(err) {
                return reject({err: resp});
            }
            resolve({text: resp.body.forecasts[0].narrative});
        });
    });
}