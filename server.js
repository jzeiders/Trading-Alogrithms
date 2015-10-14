/**
 * Created by Jack on 10/11/2015.
 */

var request = require('request');
request = request.defaults({jar: true});
var Q = require("q");
var login = function(username, password){
    return Q.promise(function(resolve, reject, notify) {
        request({
            uri: "https://uises.business.illinois.edu:8443/servlet/Login",
            method: "POST",
            form: {
                l: username,
                p: password
            }
        }, function (error, response, body) {
            console.log(response.statusCode);
            resolve("Done")

        })
    })
};
var order = function(action, size, ticker){
    request({
        uri: "https://uises.business.illinois.edu:8443/servlet/StockOrder",
        method: "POST",
        form: {
            a: action,
            s: size,
            t: ticker,
            o: "m"
        }
    }, function(error, response, body) {
        console.log(body);
    }
)
};
var companyData = function(ticker){
    request({
        uri: ""
        method: "GET",
    })
}

login("jzeiders", "please").then(function(result){
    console.log(result);
    order("b","1000","aapl");
});

