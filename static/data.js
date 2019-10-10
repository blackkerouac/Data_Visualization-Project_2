var vegans = [];
var vegetarians = [];
var omnivores = [];

function get_data() {
    d3.json("/api/v1.0/Eater_Data").then(function(data){
            console.log(data);
        var dataobj = JSON.parse(data)
;
        for (var i=0; i<dataobj.length; i++) {
            if (dataobj[i].Eater_Type === "Vegan") {
                vegans.push(dataobj[i]);
            }
            else if (dataobj[i].Eater_Type === "Vegetarian") {
                vegetarians.push(dataobj[i]);
            }
            else (omnivores.push(dataobj[i]));
         }
         console.log(vegans);
         console.log(vegetarians);
         console.log(omnivores);
}
    .catch(function(error){console.log(error)
    }));

get_data(); }

 var veganStates = {
     "Alabama":0,
     "Alaska":0,
     "Arizona":0,
     "Arkansas":0,
     "California":0,
     "Colorado":0,
     "Connecticut":0,
     "Delaware":0,
     "Florida":0,
     "Georgia":0,
     "Hawaii":0,
     "Idaho":0,
     "Illinois":0,
     "Indiana":0,
     "Iowa":0,
     "Kansas":0,
     "Kentucky":0,
     "Louisiana":0,
     "Maine":0,
     "Maryland":0,
     "Massachusetts":0,
     "Michigan":0,
     "Minnesota":0,
     "Mississippi":0,
     "Missouri":0,
     "Montana":0,
     "Nebraska":0,
     "Nevada":0,
     "New Hampshire":0,
     "New Jersey":0,
     "New Mexico":0,
     "New York":0,
     "North Carolina":0,
     "North Dakota":0,
     "Ohio":0,
     "Oklahoma":0,
     "Oregon":0,
     "Pennsylvania":0,
     "Puerto Rico":0,
     "Rhode Island":0,
     "South Carolina":0,
     "South Dakota":0,
     "Tennessee":0,
     "Texas":0,
     "Utah":0,
     "Vermont":0,
     "Virginia":0,
     "Washington":0,
     "West Virginia":0,
     "Wisconsin":0,
     "Wyoming":0,
 }
 
 var vegetarianStates = {
     "Alabama":0,
     "Alaska":0,
     "Arizona":0,
     "Arkansas":0,
     "California":0,
     "Colorado":0,
     "Connecticut":0,
     "Delaware":0,
     "Florida":0,
     "Georgia":0,
     "Hawaii":0,
     "Idaho":0,
     "Illinois":0,
     "Indiana":0,
     "Iowa":0,
     "Kansas":0,
     "Kentucky":0,
     "Louisiana":0,
     "Maine":0,
     "Maryland":0,
     "Massachusetts":0,
     "Michigan":0,
     "Minnesota":0,
     "Mississippi":0,
     "Missouri":0,
     "Montana":0,
     "Nebraska":0,
     "Nevada":0,
     "New Hampshire":0,
     "New Jersey":0,
     "New Mexico":0,
     "New York":0,
     "North Carolina":0,
     "North Dakota":0,
     "Ohio":0,
     "Oklahoma":0,
     "Oregon":0,
     "Pennsylvania":0,
     "Puerto Rico":0,
     "Rhode Island":0,
     "South Carolina":0,
     "South Dakota":0,
     "Tennessee":0,
     "Texas":0,
     "Utah":0,
     "Vermont":0,
     "Virginia":0,
     "Washington":0,
     "West Virginia":0,
     "Wisconsin":0,
     "Wyoming":0,
 }
 
 var omnivoreStates = {
     "Alabama":0,
     "Alaska":0,
     "Arizona":0,
     "Arkansas":0,
     "California":0,
     "Colorado":0,
     "Connecticut":0,
     "Delaware":0,
     "Florida":0,
     "Georgia":0,
     "Hawaii":0,
     "Idaho":0,
     "Illinois":0,
     "Indiana":0,
     "Iowa":0,
     "Kansas":0,
     "Kentucky":0,
     "Louisiana":0,
     "Maine":0,
     "Maryland":0,
     "Massachusetts":0,
     "Michigan":0,
     "Minnesota":0,
     "Mississippi":0,
     "Missouri":0,
     "Montana":0,
     "Nebraska":0,
     "Nevada":0,
     "New Hampshire":0,
     "New Jersey":0,
     "New Mexico":0,
     "New York":0,
     "North Carolina":0,
     "North Dakota":0,
     "Ohio":0,
     "Oklahoma":0,
     "Oregon":0,
     "Pennsylvania":0,
     "Puerto Rico":0,
     "Rhode Island":0,
     "South Carolina":0,
     "South Dakota":0,
     "Tennessee":0,
     "Texas":0,
     "Utah":0,
     "Vermont":0,
     "Virginia":0,
     "Washington":0,
     "West Virginia":0,
     "Wisconsin":0,
     "Wyoming":0,
 }
 
 
 for (var i = 0; i < vegans.length; i++) {
   text += vegans[i] += 1;
 
   if (vegans[i].State === "Alabama") {
    veganStates.Alabama += 1;
}
    else if (vegans[i].State === "Alaska") {
        veganStates.Alaska += 1;
    }
    else if (vegans[i].State === "Arizona") {
        veganStates.Arizona += 1;
    }
    else if (vegans[i].State === "Arkansas") {
        veganStates.Arkansas += 1;
    }
    else if (vegans[i].State === "California") {
        veganStates.California += 1;
    }
    else if (vegans[i].State === "Colorado") {
        veganStates.Colorado += 1;
    }
    else if (vegans[i].State === "Connecticut") {
        veganStates.Connecticut += 1;
    }
    else if (vegans[i].State === "Delaware") {
        veganStates.Delaware += 1;
    }
    else if (vegans[i].State === "Florida") {
        veganStates.Florida += 1;
    }
    else if (vegans[i].State === "Georgia") {
        veganStates.Georgia += 1;
    }
    else if (vegans[i].State === "Hawaii") {
        veganStates.Hawaii += 1;
    }
    else if (vegans[i].State === "Idaho") {
        veganStates.Idaho += 1;
    }
    else if (vegans[i].State === "Illinois") {
        veganStates.Illinois += 1;
    }
    else if (vegans[i].State === "Indiana") {
        veganStates.Indiana += 1;
    }
    else if (vegans[i].State === "Iowa") {
        veganStates.Iowa += 1;
    }
    else if (vegans[i].State === "Kansas") {
        veganStates.Kansas += 1;
    }
    else if (vegans[i].State === "Kentucky") {
        veganStates.Kentucky += 1;
    }
    else if (vegans[i].State === "Louisiana") {
        veganStates.Louisiana += 1;
    }
    else if (vegans[i].State === "Maine") {
        veganStates.Maine += 1;
    }
    else if (vegans[i].State === "Maryland") {
        veganStates.Maryland += 1;
    }
    else if (vegans[i].State === "Massachusetts") {
        veganStates.Massachusetts += 1;
    }
    else if (vegans[i].State === "Michigan") {
        veganStates.Michigan += 1;
    }
    else if (vegans[i].State === "Minnesota") {
        veganStates.Minnesota += 1;
    }
    else if (vegans[i].State === "Mississippi") {
        veganStates.Mississippi += 1;
    }
    else if (vegans[i].State === "Missouri") {
        veganStates.Missouri += 1;
    }
    else if (vegans[i].State === "Montana") {
        veganStates.Montana += 1;
    }
    else if (vegans[i].State === "Nebraska") {
        veganStates.Nebraska += 1;
    }
    else if (vegans[i].State === "Nevada") {
        veganStates.Nevada += 1;
    }
    else if (vegans[i].State === "New Hampshire") {
        veganStates["New Hampshire"] += 1;
    }
    else if (vegans[i].State === "New Jersey") {
        veganStates["New Jersey"] += 1;
    }
    else if (vegans[i].State === "New Mexico") {
        veganStates["New Mexico"] += 1;
    }
    else if (vegans[i].State === "New York") {
        veganStates["New York"] += 1;
    }
    else if (vegans[i].State === "North Carolina") {
        veganStates["North Carolina"] += 1;
    }
    else if (vegans[i].State === "North Dakota") {
        veganStates["North Dakota"] += 1;
    }
    else if (vegans[i].State === "Ohio") {
        veganStates.Ohio += 1;
    }
    else if (vegans[i].State === "Oklahoma") {
        veganStates.Oklahoma += 1;
    }
    else if (vegans[i].State === "Oregon") {
        veganStates.Oregon += 1;
    }
    else if (vegans[i].State === "Pennsylvania") {
        veganStates.Pennsylvania += 1;
    }
    else if (vegans[i].State === "Puerto Rico") {
        veganStates["PuertoRico"] += 1;
    }
    else if (vegans[i].State === "Rhode Island") {
        veganStates["Rhode Island"] += 1;
    }
    else if (vegans[i].State === "South Carolina") {
        veganStates["South Carolina"] += 1;
    }
    else if (vegans[i].State === "South Dakota") {
        veganStates["South Dakota"] += 1;
    }
    else if (vegans[i].State === "Tennessee") {
        veganStates.Tennessee += 1;
    }
    else if (vegans[i].State === "Texas") {
        veganStates.Texas += 1;
    }
    else if (vegans[i].State === "Utah") {
        veganStates.Utah += 1;
    }
    else if (vegans[i].State === "Vermont") {
        veganStates.Vermont += 1;
    }
    else if (vegans[i].State === "Virginia") {
        veganStates.Virginia += 1;
    }
    else if (vegans[i].State === "Washington") {
        veganStates.Washington += 1;
    }
    else if (vegans[i].State === "West Virginia") {
        veganStates["West Virginia"] += 1;
    }
    else if (vegans[i].State === "Wisconsin") {
        veganStates.Wisconsin += 1;
    }
    else {
        veganStates.Wyoming += 1;
    }}


 
 console.log(veganStates.Alaska);
 
 var i;
 for (i = 0; i < vegetarians.length; i++) {
   text += vegetarians[i] += 1;
 
   if (vegetarians[i].State  === "Alabama") {
    vegetarianStates.Alabama += 1;
}
    else if (vegetarians[i].State  === "Alaska") {
        vegetarianStates.Alaska += 1;
    }
    else if (vegetarians[i].State  === "Arizona") {
        vegetarianStates.Arizona += 1;
    }
    else if (vegetarians[i].State  === "Arkansas") {
        vegetarianStates.Arkansas += 1;
    }
    else if (vegetarians[i].State  === "California") {
        vegetarianStates.California += 1;
    }
    else if (vegetarians[i].State  === "Colorado") {
        vegetarianStates.Colorado += 1;
    }
    else if (vegetarians[i].State  === "Connecticut") {
        vegetarianStates.Connecticut += 1;
    }
    else if (vegetarians[i].State  === "Delaware") {
        vegetarianStates.Delaware += 1;
    }
    else if (vegetarians[i].State  === "Florida") {
        vegetarianStates.Florida += 1;
    }
    else if (vegetarians[i].State  === "Georgia") {
        vegetarianStates.Georgia += 1;
    }
    else if (vegetarians[i].State  === "Hawaii") {
        vegetarianStates.Hawaii += 1;
    }
    else if (vegetarians[i].State  === "Idaho") {
        vegetarianStates.Idaho += 1;
    }
    else if (vegetarians[i].State  === "Illinois") {
        vegetarianStates.Illinois += 1;
    }
    else if (vegetarians[i].State  === "Indiana") {
        vegetarianStates.Indiana += 1;
    }
    else if (vegetarians[i].State  === "Iowa") {
        vegetarianStates.Iowa += 1;
    }
    else if (vegetarians[i].State  === "Kansas") {
        vegetarianStates.Kansas += 1;
    }
    else if (vegetarians[i].State  === "Kentucky") {
        vegetarianStates.Kentucky += 1;
    }
    else if (vegetarians[i].State  === "Louisiana") {
        vegetarianStates.Louisiana += 1;
    }
    else if (vegetarians[i].State  === "Maine") {
        vegetarianStates.Maine += 1;
    }
    else if (vegetarians[i].State  === "Maryland") {
        vegetarianStates.Maryland += 1;
    }
    else if (vegetarians[i].State  === "Massachusetts") {
        vegetarianStates.Massachusetts += 1;
    }
    else if (vegetarians[i].State  === "Michigan") {
        vegetarianStates.Michigan += 1;
    }
    else if (vegetarians[i].State  === "Minnesota") {
        vegetarianStates.Minnesota += 1;
    }
    else if (vegetarians[i].State  === "Mississippi") {
        vegetarianStates.Mississippi += 1;
    }
    else if (vegetarians[i].State  === "Missouri") {
        vegetarianStates.Missouri += 1;
    }
    else if (vegetarians[i].State  === "Montana") {
        vegetarianStates.Montana += 1;
    }
    else if (vegetarians[i].State  === "Nebraska") {
        vegetarianStates.Nebraska += 1;
    }
    else if (vegetarians[i].State  === "Nevada") {
        vegetarianStates.Nevada += 1;
    }
    else if (vegetarians[i].State  === "New Hampshire") {
        vegetarianStates["New Hampshire"] += 1;
    }
    else if (vegetarians[i].State  === "New Jersey") {
        vegetarianStates["New Jersey"] += 1;
    }
    else if (vegetarians[i].State  === "New Mexico") {
        vegetarianStates["New Mexico"] += 1;
    }
    else if (vegetarians[i].State  === "New York") {
        vegetarianStates["New York"] += 1;
    }
    else if (vegetarians[i].State  === "North Carolina") {
        vegetarianStates["North Carolina"] += 1;
    }
    else if (vegetarians[i].State  === "North Dakota") {
        vegetarianStates["North Dakota"] += 1;
    }
    else if (vegetarians[i].State  === "Ohio") {
        vegetarianStates.Ohio += 1;
    }
    else if (vegetarians[i].State  === "Oklahoma") {
        vegetarianStates.Oklahoma += 1;
    }
    else if (vegetarians[i].State  === "Oregon") {
        vegetarianStates.Oregon += 1;
    }
    else if (vegetarians[i].State  === "Pennsylvania") {
        vegetarianStates.Pennsylvania += 1;
    }
    else if (vegetarians[i].State  === "Puerto Rico") {
        vegetarianStates["PuertoRico"] += 1;
    }
    else if (vegetarians[i].State  === "Rhode Island") {
        vegetarianStates["Rhode Island"] += 1;
    }
    else if (vegetarians[i].State  === "South Carolina") {
        vegetarianStates["South Carolina"] += 1;
    }
    else if (vegetarians[i].State  === "South Dakota") {
        vegetarianStates["South Dakota"] += 1;
    }
    else if (vegetarians[i].State  === "Tennessee") {
        vegetarianStates.Tennessee += 1;
    }
    else if (vegetarians[i].State  === "Texas") {
        vegetarianStates.Texas += 1;
    }
    else if (vegetarians[i].State  === "Utah") {
        vegetarianStates.Utah += 1;
    }
    else if (vegetarians[i].State  === "Vermont") {
        vegetarianStates.Vermont += 1;
    }
    else if (vegetarians[i].State  === "Virginia") {
        vegetarianStates.Virginia += 1;
    }
    else if (vegetarians[i].State  === "Washington") {
        vegetarianStates.Washington += 1;
    }
    else if (vegetarians[i].State  === "West Virginia") {
        vegetarianStates["West Virginia"] += 1;
    }
    else if (vegetarians[i].State  === "Wisconsin") {
        vegetarianStates.Wisconsin += 1;
    }
    else {
        vegetarianStates.Wyoming += 1;
    }}

     var i;
 for (i = 0; i < omnivores.length; i++) {
   text += omnivores[i] += 1;
 
   if (omnivores[i].State  === "Alabama") {
    omnivoreStates.Alabama += 1;
    }
    else if (omnivores[i].State  === "Alaska") {
    omnivoreStates.Alaska += 1;
    }
    else if (omnivores[i].State  === "Arizona") {
    omnivoreStates.Arizona += 1;
    }
    else if (omnivores[i].State  === "Arkansas") {
    omnivoreStates.Arkansas += 1;
    }
    else if (omnivores[i].State  === "California") {
    omnivoreStates.California += 1;
    }
    else if (omnivores[i].State  === "Colorado") {
    omnivoreStates.Colorado += 1;
    }
    else if (omnivores[i].State  === "Connecticut") {
    omnivoreStates.Connecticut += 1;
    }
    else if (omnivores[i].State  === "Delaware") {
    omnivoreStates.Delaware += 1;
    }
    else if (omnivores[i].State  === "Florida") {
    omnivoreStates.Florida += 1;
    }
    else if (omnivores[i].State  === "Georgia") {
    omnivoreStates.Georgia += 1;
    }
    else if (omnivores[i].State  === "Hawaii") {
    omnivoreStates.Hawaii += 1;
    }
    else if (omnivores[i].State  === "Idaho") {
    omnivoreStates.Idaho += 1;
    }
    else if (omnivores[i].State  === "Illinois") {
    omnivoreStates.Illinois += 1;
    }
    else if (omnivores[i].State  === "Indiana") {
    omnivoreStates.Indiana += 1;
    }
    else if (omnivores[i].State  === "Iowa") {
    omnivoreStates.Iowa += 1;
    }
    else if (omnivores[i].State  === "Kansas") {
    omnivoreStates.Kansas += 1;
    }
    else if (omnivores[i].State  === "Kentucky") {
    omnivoreStates.Kentucky += 1;
    }
    else if (omnivores[i].State  === "Louisiana") {
    omnivoreStates.Louisiana += 1;
    }
    else if (omnivores[i].State  === "Maine") {
    omnivoreStates.Maine += 1;
    }
    else if (omnivores[i].State  === "Maryland") {
    omnivoreStates.Maryland += 1;
    }
    else if (omnivores[i].State  === "Massachusetts") {
    omnivoreStates.Massachusetts += 1;
    }
    else if (omnivores[i].State  === "Michigan") {
    omnivoreStates.Michigan += 1;
    }
    else if (omnivores[i].State  === "Minnesota") {
    omnivoreStates.Minnesota += 1;
    }
    else if (omnivores[i].State  === "Mississippi") {
    omnivoreStates.Mississippi += 1;
    }
    else if (omnivores[i].State  === "Missouri") {
    omnivoreStates.Missouri += 1;
    }
    else if (omnivores[i].State  === "Montana") {
    omnivoreStates.Montana += 1;
    }
    else if (omnivores[i].State  === "Nebraska") {
    omnivoreStates.Nebraska += 1;
    }
    else if (omnivores[i].State  === "Nevada") {
    omnivoreStates.Nevada += 1;
    }
    else if (omnivores[i].State  === "New Hampshire") {
    omnivoreStates["New Hampshire"] += 1;
    }
    else if (omnivores[i].State  === "New Jersey") {
    omnivoreStates["New Jersey"] += 1;
    }
    else if (omnivores[i].State  === "New Mexico") {
    omnivoreStates["New Mexico"] += 1;
    }
    else if (omnivores[i].State  === "New York") {
    omnivoreStates["New York"] += 1;
    }
    else if (omnivores[i].State  === "North Carolina") {
    omnivoreStates["North Carolina"] += 1;
    }
    else if (omnivores[i].State  === "North Dakota") {
    omnivoreStates["North Dakota"] += 1;
    }
    else if (omnivores[i].State  === "Ohio") {
    omnivoreStates.Ohio += 1;
    }
    else if (omnivores[i].State  === "Oklahoma") {
    omnivoreStates.Oklahoma += 1;
    }
    else if (omnivores[i].State  === "Oregon") {
    omnivoreStates.Oregon += 1;
    }
    else if (omnivores[i].State  === "Pennsylvania") {
    omnivoreStates.Pennsylvania += 1;
    }
    else if (omnivores[i].State  === "Puerto Rico") {
    omnivoreStates["PuertoRico"] += 1;
    }
    else if (omnivores[i].State  === "Rhode Island") {
    omnivoreStates["Rhode Island"] += 1;
    }
    else if (omnivores[i].State  === "South Carolina") {
    omnivoreStates["South Carolina"] += 1;
    }
    else if (omnivores[i].State  === "South Dakota") {
    omnivoreStates["South Dakota"] += 1;
    }
    else if (omnivores[i].State  === "Tennessee") {
    omnivoreStates.Tennessee += 1;
    }
    else if (omnivores[i].State  === "Texas") {
    omnivoreStates.Texas += 1;
    }
    else if (omnivores[i].State  === "Utah") {
    omnivoreStates.Utah += 1;
    }
    else if (omnivores[i].State  === "Vermont") {
    omnivoreStates.Vermont += 1;
    }
    else if (omnivores[i].State  === "Virginia") {
    omnivoreStates.Virginia += 1;
    }
    else if (omnivores[i].State  === "Washington") {
    omnivoreStates.Washington += 1;
    }
    else if (omnivores[i].State  === "West Virginia") {
    omnivoreStates["West Virginia"] += 1;
    }
    else if (omnivores[i].State  === "Wisconsin") {
    omnivoreStates.Wisconsin += 1;
    }
    else {
    omnivoreStates.Wyoming += 1;

}}