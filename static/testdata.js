
function get_data() 
{
d3.json("/api/v1.0/Eater_Data").then(function(data) {

//var dataobj = JSON.parse(data);

console.log(data);

var vegans = [];
var vegetarians = [];
var omnivores = [];
    for (var i =0; i<data.length; i++) {
        if (data[i].Eater_Type === "Vegan") {
            vegans.push(data[i]);
        }
        else if (data[i].Eater_Type === "Vegetarian") {
            vegetarians.push(data[i]);
        }
        else (omnivores.push(data[i]));
    }
    }).catch(function(error){console.log(error)});
  
    console.log(vegans);
    console.log(vegetarians);
    console.log(omnivores);


var vgEdu = {"Associates degree": 0, 
             "Bachelors degree": 0,
             "Graduate or professional degree": 0,
             "High school diploma (or equivalent)": 0,
             "Less than 12th grade- no diploma": 0,
             "Some education after highschool- no degree": 0,
            };

var vgPoli = {"Moderately Conservative": 0,
              "Moderately Liberal": 0,
              "Neutral/Centrist": 0,
              "Strongly Conservative": 0,
              "Strongly Liberal": 0
             };

var vgRace = {"African American or Black": 0,
              "Hispanic- Latino or Spanish origin": 0,
              "Indian": 0,
              "Middle Eastern": 0,
              "Native American or Alaska Native": 0,
              "Native Hawaian or other Pacific Islander": 0,
              "Other race/ethnicity (including two or more)": 0,
              "White": 0};

var vgReli = {"Buddhist": 0,
              "Christian (Catholic -  Protestant -  etc.)": 0,
              "Do not actively practice religion": 0,
              "Hindu": 0,
              "Jewish": 0,
              "Muslim": 0,
              "Other religion (including two or more)": 0
            };
var vgGend = {"Female": 0,
              "Male": 0,
              "Other": 0
            };
              
//vgEdu 
for (var i=0; vegans.length; i++) {
    if (vegans[i].Education === "Associates degree") {
        vgEdu["Associates degree"] += 1;
    }
    else if (vegans[i].Education === "Bachelors degree") {
        vgEdu["Bachelors degree"] += 1;
    }
    else if (vegans[i].Education === "Graduate or professional degree") {
        vgEdu["Graduate or professional degree"] += 1;
    }
    else if (vegans[i].Education === "High school diploma (or equivalent)"){
        vgEdu["High school diploma (or equivalent)"] += 1;
    }
    else if (vegans[i].Education === "Less than 12th grade- no diploma") {
        vgEdu["Less than 12th grade- no diploma"] += 1;
    }
    else if (vegans[i].Education === "Some education after highschool- no degree") {
        vgEdu["Some education after highschool- no degree"] += 1;
    }
}

//vgPoli
for (var i=0; vegans.length; i++) {
    if (vegans[i].Political === "Moderately Conservative") {
        vgPoli["Moderately Conservative"] += 1;
    }
    else if (vegans[i].Political === "Moderately Liberal") {
        vgPoli["Moderately Liberal"] += 1;
    }
    else if (vegans[i].Political === "Neutral/Centrist") {
        vgPoli["Neutral/Centrist"] += 1;
    }
    else if (vegans[i].Political === "Strongly Conservative"){
        vgPoli["Strongly Conservative"] += 1;
    }
    else if (vegans[i].Political === "Strongly Liberal") {
        vgPoli["Strongly Liberal"] += 1;
    }
}
//vgRace
for (var i=0; vegans.length; i++) {
    if (vegans[i].Race_Ethnicity === "African American or Black") {
        vgRace["African American or Black"] += 1;
    }
    else if (vegans[i].Race_Ethnicity === "Hispanic- Latino or Spanish origin") {
        vgRace["Hispanic- Latino or Spanish origin"] += 1;
    }
    else if (vegans[i].Race_Ethnicity === "Indian") {
        vgRace["Indian"] += 1;
    }
    else if (vegans[i].Race_Ethnicity === "Middle Eastern"){
        vgRace["Middle Eastern"] += 1;
    }
    else if (vegans[i].Race_Ethnicity === "Native American or Alaska Native") {
        vgRace["Native American or Alaska Native"] += 1;
    }
    else if (vegans[i].Race_Ethnicity === "Other race/ethnicity (including two or more)") {
        vgRace["Other race/ethnicity (including two or more)"] += 1;
    }
    else if (vegans[i].Race_Ethnicity === "White") {
        vgRace["White"] += 1;
    }
}
//vgReli
for (var i=0; vegans.lenght; i++) {
    if (vegans[i].Religion === "Buddhist") {
        vgReli["Buddhist"] += 1;
    }
    else if (vegans[i].Religion === "Christian (Catholic -  Protestant -  etc.)") {
        vgReli["Christian (Catholic -  Protestant -  etc.)"] += 1;
    }
    else if (vegans[i].Religion === "Do not actively practice religion") {
        vgReli["IDo not actively practice religion"] += 1;
    }
    else if (vegans[i].Religion === "Hindu"){
        vgReli["Hindu"] += 1;
    }
    else if (vegans[i].Religion === "Jewish") {
        vgReli["Jewish"] += 1;
    }
    else if (vegans[i].Religion === "Muslim") {
        vgReli["Muslim"] += 1;
    }
    else if (vegans[i].Religion === "Other religion (including two or more)") {
        vgReli["Other religion (including two or more)"] += 1;
    }
}
//vgGend
for (var i=0; vegans.length; i++) {
    if (vegans[i].Gender === "Female") {
        vgGend["Female"] += 1;
    }
    else if (vegans[i].Gender === "Male") {
        vgGend["Male"] += 1;
    }
    else if (vegans[i].Gender === "Other") {
        vgGend["Other"] += 1;
    }

}
const veganDemos = object.assign(vgEdu, vgPoli, vgRace, vgReli, vtGend);
vegans.push(vgEdu, vgGend, vgPoli, vgRace, vgReli)
var vtEdu = {"Associates degree": 0, 
             "Bachelors degree": 0,
             "Graduate or professional degree": 0,
             "High school diploma (or equivalent)": 0,
             "Less than 12th grade- no diploma": 0,
             "Some education after highschool- no degree": 0,
            };

var vtPoli = {"Moderately Conservative": 0,
              "Moderately Liberal": 0,
              "Neutral/Centrist": 0,
              "Strongly Conservative": 0,
              "Strongly Liberal": 0
             };

var vtRace = {"African American or Black": 0,
              "Hispanic- Latino or Spanish origin": 0,
              "Indian": 0,
              "Middle Eastern": 0,
              "Native American or Alaska Native": 0,
              "Native Hawaian or other Pacific Islander": 0,
              "Other race/ethnicity (including two or more)": 0,
              "White": 0};

var vtReli = {"Buddhist": 0,
              "Christian (Catholic -  Protestant -  etc.)": 0,
              "Do not actively practice religion": 0,
              "Hindu": 0,
              "Jewish": 0,
              "Muslim": 0,
              "Other religion (including two or more)": 0
            };
var vtGend = {"Female": 0,
              "Male": 0,
              "Other": 0
            };
              
//vtEdu 
for (var i=0; vegetarians.length; i++) {
    if (vegetarians[i].Education === "Associates degree") {
        vtEdu["Associates degree"] += 1;
    }
    else if (vegetarians[i].Education === "Bachelors degree") {
        vtEdu["Bachelors degree"] += 1;
    }
    else if (vegetarians[i].Education === "Graduate or professional degree") {
        vtEdu["Graduate or professional degree"] += 1;
    }
    else if (vegetarians[i].Education === "High school diploma (or equivalent)"){
        vtEdu["High school diploma (or equivalent)"] += 1;
    }
    else if (vegetarians[i].Education === "Less than 12th grade- no diploma") {
        vtEdu["Less than 12th grade- no diploma"] += 1;
    }
    else if (vegetarians[i].Education === "Some education after highschool- no degree") {
        vtEdu["Some education after highschool- no degree"] += 1;
    }
}
//vtPoli
for (var i=0; vegetarians.length; i++) {
    if (vegetarians[i].Political === "Moderately Conservative") {
        vtPoli["Moderately Conservative"] += 1;
    }
    else if (vegetarians[i].Political === "Moderately Liberal") {
        vtPoli["Moderately Liberal"] += 1;
    }
    else if (vegetarians[i].Political === "Neutral/Centrist") {
        vtPoli["Neutral/Centrist"] += 1;
    }
    else if (vegetarians[i].Political === "Strongly Conservative"){
        vtPoli["Strongly Conservative"] += 1;
    }
    else if (vegetarian[i].Political === "Strongly Liberal") {
        vtPoli["Strongly Liberal"] += 1;
    }
}
//vtRace
for (var i=0; vegetarians.length; i++) {
    if (vegetarians[i].Race_Ethnicity === "African American or Black") {
        vtRace["African American or Black"] += 1;
    }
    else if (vegetarians[i].Race_Ethnicity === "Hispanic- Latino or Spanish origin") {
        vtRace["Hispanic- Latino or Spanish origin"] += 1;
    }
    else if (vegetarians[i].Race_Ethnicity === "Indian") {
        vtRace["Indian"] += 1;
    }
    else if (vegetarians[i].Race_Ethnicity === "Middle Eastern"){
        vtRace["Middle Eastern"] += 1;
    }
    else if (vegetarians[i].Race_Ethnicity === "Native American or Alaska Native") {
        vtRace["Native American or Alaska Native"] += 1;
    }
    else if (vegetarians[i].Race_Ethnicity === "Other race/ethnicity (including two or more)") {
        vtRace["Other race/ethnicity (including two or more)"] += 1;
    }
    else if (vegetarians[i].Race_Ethnicity === "White") {
        vtRace["White"] += 1;
    }
}
//vtReli
for (var i=0; vegetarians.length; i++) {
    if (vegetarians[i].Religion === "Buddhist") {
        vtReli["Buddhist"] += 1;
    }
    else if (vegetarians[i].Religion === "Christian (Catholic -  Protestant -  etc.)") {
        vtReli["Christian (Catholic -  Protestant -  etc.)"] += 1;
    }
    else if (vegetarians[i].Religion === "Do not actively practice religion") {
        vtReli["IDo not actively practice religion"] += 1;
    }
    else if (vegetarians[i].Religion === "Hindu"){
        vtReli["Hindu"] += 1;
    }
    else if (vegetarians[i].Religion === "Jewish") {
        vtReli["Jewish"] += 1;
    }
    else if (vegetarians[i].Religion === "Muslim") {
        vtReli["Muslim"] += 1;
    }
    else if (vegetarians[i].Religion === "Other religion (including two or more)") {
        vtReli["Other religion (including two or more)"] += 1;
    }
}
//vtGend
for (var i=0; vegetarians.length; i++) {
    if (vegetarians[i].Gender === "Female") {
        vtGend["Female"] += 1;
    }
    else if (vegetarians[i].Gender === "Male") {
        vtGend["Male"] += 1;
    }
    else if (vegetarians[i].Gender === "Other") {
        vtGend["Other"] += 1;
    }
}

const vegetarianDemos = object.assign(vtEdu, vtPoli, vtRace, vtReli, vtGend);

var omEdu = {"Associates degree": 0, 
             "Bachelors degree": 0,
             "Graduate or professional degree": 0,
             "High school diploma (or equivalent)": 0,
             "Less than 12th grade- no diploma": 0,
             "Some education after highschool- no degree": 0,
            };

var omPoli = {"Moderately Conservative": 0,
              "Moderately Liberal": 0,
              "Neutral/Centrist": 0,
              "Strongly Conservative": 0,
              "Strongly Liberal": 0
             };

var omRace = {"African American or Black": 0,
              "Hispanic- Latino or Spanish origin": 0,
              "Indian": 0,
              "Middle Eastern": 0,
              "Native American or Alaska Native": 0,
              "Native Hawaian or other Pacific Islander": 0,
              "Other race/ethnicity (including two or more)": 0,
              "White": 0};

var omReli = {"Buddhist": 0,
              "Christian (Catholic -  Protestant -  etc.)": 0,
              "Do not actively practice religion": 0,
              "Hindu": 0,
              "Jewish": 0,
              "Muslim": 0,
              "Other religion (including two or more)": 0
            };
var omGend = {"Female": 0,
              "Male": 0,
              "Other": 0
            };
              
//omEdu 
for (var i=0; omnivores.length; i++) {
    if (omnivores[i].Education === "Associates degree") {
        omEdu["Associates degree"] += 1;
    }
    else if (omnivores[i].Education === "Bachelors degree") {
        omEdu["Bachelors degree"] += 1;
    }
    else if (omnivores[i].Education === "Graduate or professional degree") {
        omEdu["Graduate or professional degree"] += 1;
    }
    else if (omnivores[i].Education === "High school diploma (or equivalent)"){
        omEdu["High school diploma (or equivalent)"] += 1;
    }
    else if (omnivores[i].Education === "Less than 12th grade- no diploma") {
        omEdu["Less than 12th grade- no diploma"] += 1;
    }
    else if (omnivores[i].Education === "Some education after highschool- no degree") {
        omEdu["Some education after highschool- no degree"] += 1;
    }
}
//omPoli
for (var i=0; omnivores.length; i++) {
    if (omnivores[i].Political === "Moderately Conservative") {
        omPoli["Moderately Conservative"] += 1;
    }
    else if (omnivores[i].Political === "Moderately Liberal") {
        omPoli["Moderately Liberal"] += 1;
    }
    else if (omnivores[i].Political === "Neutral/Centrist") {
        omPoli["Neutral/Centrist"] += 1;
    }
    else if (omnivores[i].Political === "Strongly Conservative"){
        omPoli["Strongly Conservative"] += 1;
    }
    else if (omnivores[i].Political === "Strongly Liberal") {
        omPoli["Strongly Liberal"] += 1;
    }
}
//omRace
for (var i=0; omnivores.length; i++) {
    if (omnivores[i].Race_Ethnicity === "African American or Black") {
        omRace["African American or Black"] += 1;
    }
    else if (omnivores[i].Race_Ethnicity === "Hispanic- Latino or Spanish origin") {
        omRace["Hispanic- Latino or Spanish origin"] += 1;
    }
    else if (omnivores[i].Race_Ethnicity === "Indian") {
        omRace["Indian"] += 1;
    }
    else if (omnivores[i].Race_Ethnicity === "Middle Eastern"){
        omRace["Middle Eastern"] += 1;
    }
    else if (omnivores[i].Race_Ethnicity === "Native American or Alaska Native") {
        omRace["Native American or Alaska Native"] += 1;
    }
    else if (omnivores[i].Race_Ethnicity === "Other race/ethnicity (including two or more)") {
        omRace["Other race/ethnicity (including two or more)"] += 1;
    }
    else if (omnivores[i].Race_Ethnicity === "White") {
        omRace["White"] += 1;
    }
}
//omReli
for (var i=0; vegans.length; i++) {
    if (omnivores[i].Religion === "Buddhist") {
        omReli["Buddhist"] += 1;
    }
    else if (omnivores[i].Religion === "Christian (Catholic -  Protestant -  etc.)") {
        omReli["Christian (Catholic -  Protestant -  etc.)"] += 1;
    }
    else if (omnivores[i].Religion === "Do not actively practice religion") {
        omReli["IDo not actively practice religion"] += 1;
    }
    else if (omnivores[i].Religion === "Hindu"){
        omReli["Hindu"] += 1;
    }
    else if (omnivores[i].Religion === "Jewish") {
        orReli["Jewish"] += 1;
    }
    else if (omnivores[i].Religion === "Muslim") {
        omReli["Muslim"] += 1;
    }
    else if (omnivores[i].Religion === "Other religion (including two or more)") {
        omReli["Other religion (including two or more)"] += 1;
    }
}
//omGend
for (var i=0; omnivores.length; i++) {
    if (omnivores[i].Gender === "Female") {
        omGend["Female"] += 1;
    }
    else if (omnivores[i].Gender === "Male") {
        omGend["Male"] += 1;
    }
    else if (omnivores[i].Gender === "Other") {
        omGend["Other"] += 1;
    }
}
const omnivoreDemos = object.assign(omEdu, omPoli, omRace, omReli, omGend);
console.log(omnivoreDemos);
}
window.onload = get_data();