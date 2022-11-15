// Task 7 :-

// Solving problems using array functions on the rest countries' data.
// Get all the countries from the Asia continent /region using the Filter function
// Get all the countries with a population of less than 2 lakhs using Filter function
// Print the following details name, capital, flag using forEach function
// Print the total population of countries using reduce function
// Print the country which uses US Dollars as currency.





var request = new XMLHttpRequest();
request.open('Get','https://restcountries.com/v3.1/all',true)
request.send();
request.onload = function(){
    var data = JSON.parse(request.response)
    console.log(data);

    console.log("*************************************************************")   ;
      
    console.log(" Print the country which uses US Dollars as currency "); 
    console.log("Answer:-");

    data.filter((element)=>{  
            for(let key in element.currencies){
                
                if(element.currencies[key] == element.currencies.USD){
                    console.log(`${element.name.common} , ${element.region}`);
                }
            }
        })
 
        console.log("*************************************************************")   ;
        console.log(" Print the country which has top 2 in population "); 
        console.log("Answer:-");

    var result1 = data.filter((element)=> {
        return element.population > 500000000;
        })
      console.log(result1);

     console.log("*************************************************************")   ;
    console.log("Display less than 2,00,000 population countries list");
    console.log("Answer:-");

     data.filter((element)=> {
        if(element.population < 200000){
           

           console.log(` ${element.name.common} , ${element.population} `);
        }
      
      })
    
      console.log("************************************************************")   ;
      console.log(" list out all the countries from the Asia continent ");
      console.log("Answer:-");
     data.filter((element)=>{
      if(element.region == "Asia"){
        console.log(element.name.common);  
      }     
  })
   
  console.log("*************************************************************")   ;
      
  console.log(" Print the total population of countries ");
  console.log("Answer:-");



  let ans =     data.reduce((previousvalue,currentvalue)=>{
    return previousvalue + currentvalue.population;

    },0)
  console.log(ans);


console.log("*************************************************************")   ;
console.log("Print the following details name, capital, flag")   ;
console.log("Answer:-");

data.forEach((element)=>{
    console.log(`${element.name.common} , ${element.capital},  ${element.flags.png}`);
  
    
 
});



}
