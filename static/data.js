 //1. create empty arrays, create function to call flask api and console.log data
 //loop through api data and push object to array based on key/value 
 // Eater_type/omnivore, vegan, vegetarian
var dietData = [];
var vegans = [];
var vegatarians = [];
var omnivores = [];
 function getData() {
    d3.json("/api/v1.0/Eater_Data").then(function(data) {
        //var dataobj = JSON.parse(data);
        dietData.push(data);
        

    //     var vegans = dietData.filter(element => element.Eater_Type === "Vegan");
    //     console.log(vegans.length);

    // /////

    //     function search(nameKey, myArray){
    //         for (var i=0; i < myArray.length; i++) {
    //             if (myArray[i].Eater_Type === nameKey) {
    //             return myArray[i];
    //             }}}

    //     var vegans = search("Vegans", dietData);
    //     console.log(vegans.length);

    // /////

    //     for (var i=0; i<dietData.length; i++) {
    //         if (Object.values(dietData[i])==="Vegan") {
    //             vegans.push(dietData[i]);
    //         }}
    //     console.log(vegans.length);  
    
    // ////
    //     for (var i =0; i<dietData.length; i++) {
    //         if (dietData[i].Eater_Type === "Vegan") {
    //             vegans.push(dietData[i]);
    //         }}
    //     console.log(vegans.length);
    
})}

window.onload = getData();
console.log(dietData);
//console.log(dietData);
//console.log(data.length);
//console.log(dietData[6]);

// var vegans = dietData.filter(element => element.Eater_Type == "Vegan");
// console.log(vegans.length);

// /////

// function search(nameKey, myArray){
//     for (var i=0; i < myArray.length; i++) {
//         if (myArray[i].Eater_Type === nameKey) {
//         return myArray[i];
//         }}}

// var vegans = search("Vegans", dietData);
// console.log(vegans.length);

// /////

// for (var i=0; i<dietData.length; i++) {
//     if (Object.values(dietData[i])==="Vegan") {
//         vegans.push(dietData[i]);
//     }}
// console.log(vegans.length);  

// ////
// for (var i =0; i<dietData.length; i++) {
//     if (dietData[i].Eater_Type === "Vegan") {
//         vegans.push(dietData[i]);
//     }}
// console.log(vegans.length);