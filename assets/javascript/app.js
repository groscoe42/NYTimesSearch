
//2a8533846cf0494791042990951595f4
//https://api.nytimes.com/svc/search/v2/articlesearch.json

//variables
var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
var apiKey = "2a8533846cf0494791042990951595f4";
var q = "";
var num = "";
var bDate = "";
var eDate = "";

//search 
function pullInfo() {
    q = $("#query").val();
    num = $("#number").val();
    bDate = $("#begin").val();
    eDate = $("#end").val();
};
$(document).on("click", "#search", pullInfo);
//make url
url += '?' + $.param({
    'api-key': apiKey,
    'q': q,
    'begin_date': bDate,
    'end_date': eDate
});
//ajax call
$.ajax({
    url: url,
    method: 'GET',
}).then(function (result) {
    console.log(result);
}).fail(function (err) {
    throw err;
});




//display info

//clear
