
var request=new XMLHttpRequest();

request.open("GET","https://restcountries.com/v3.1/all");

request.send();

request.onload=function(){
var result=JSON.parse(request.response);

//  Filtered By Asia
var filterByAsia = result.filter((data)=>data.continents[0]=='Asia');
console.log("Asia",filterByAsia);

// Filtered by population lees than 2 lakh
var filterByPopulation=result.filter((data)=>data.population<200000);
console.log("population",filterByPopulation);

// Print the name, capital and flag
result.forEach((data)=>{
    console.log("name",data.name.common);
    if(data && data.capital) {
        console.log("capital",data.capital[0]);
    }
    console.log("flag",data.flag);
})

// total population
var pop = [];
result.forEach(data=>pop.push(data.population));
var totalPopulation=pop.reduce((a,b)=>a+b);
console.log("Total Population",totalPopulation);

// Countries uses USD as currency
var USDDatas = [];
   result.forEach((data,j)=>{
    for( var i in data.currencies ){
        if(i == 'USD'){
            USDDatas.push(data.name.common);
        }
       
    }
   })
   console.log("Countries that uses USD as currency",USDDatas);

}
