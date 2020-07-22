var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
var request = new XMLHttpRequest();
request.open('GET','https://restcountries.eu/rest/v2/all',true);
request.send();
request.onload=function(){
	var a=request.responseText;
	var res=JSON.parse(a);
	const increase_countries_population=res.map(increase_population => increase_population.name+'-'+(increase_population.population+100000));
	console.log(increase_countries_population);
}
