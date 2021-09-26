const getblogs=()=>{
    const xhr=new XMLHttpRequest();
    xhr.open("GET","https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json");
    xhr.responseType="json";
    xhr.onload=()=>{
        const blog=xhr.response;
    
        //a.Get all the countries from Asia continent /region using Filter function
        let ans=blog.filter(value=>value.region=="Asia");
        console.log("filter by region");
        for(var key in ans){
        console.log(ans[key].name);
        }
        
        //b.Get all the countries with a population of less than 2 lakhs using Filter function
        let copy=blog.filter(value=>value.population<200000);
        console.log("filter by population");
        for(var key in copy){
        console.log(copy[key].name);
        }
 
        //c.Print the following details name, capital, flag using forEach function
        const print=()=>blog.forEach(elem => {
            console.log("country:"+elem.name +" Capital:"+ elem.capital+" flag:" +elem.flag);  
        });
        print();
         
        

        //d.Print the total population of countries using reduce function
        const totalpopulation=blog.reduce((sum,val)=>sum+val.population,0);
        console.log("totalPopulation:" +totalpopulation);


        //e.Print the country which uses US Dollars as currency.
        let copy1=blog.filter(value=>value.currencies[0].symbol==="$");
        console.log("filter by currency");
        for(var key in copy1){
            console.log(copy1[key].name);
            }
    };
    xhr.send();

};
getblogs();