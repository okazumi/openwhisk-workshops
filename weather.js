var request = require("request");

function main(params) {
    var location = params.location || "Vermont";
    var url = "https://query.yahooapis.com/v1/public/yql?q=select item.condition from weather.forecast where woeid in (select woeid from geo.places(1) where text='" + location + "')&format=json";
    
    return new Promise(function(resolve, reject) {
        request.get(url, function(error, response, body) {
            if(error) {
                reject(error);
            } else {
                var json = JSON.parse(body);
                var query = json.query;
                var condition = query.results.channel.item.condition;
                var text = condition.text;
                var temperature = condition.temp;
                var output = "It is " + temperature + " degrees Fahrenheit in " + location + " and " + text;
                resolve({params: output});
            }
        });
    });
}