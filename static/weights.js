//weighting response data for polar chart
animal_weight_array = [];

for (i=0; i<length(animal_column); i++) {
    if (animal_column[i] === "Not at all") {
        animal_weight_array[i] = 0
    };
    elseif (animal_column[i] === "Mild"); {
        animal_weight_array[i] = 1
    };
    elseif (animal_column[i] === "Somewhat"); {
        animal_weight_array[i] = 2
    };
    elsif (animal_column[i] === "Strong"); {
        animal_weight_array[i] = 3
    };
    elseif (animal_column[i] === "Very strong"); {
        animal_weight_array[i] = 4
    };
}

environment_weight_array = [];

for (i=0; i<length(environment_column); i++) {
    if (environment_column[i] === "Not at all") {
        environment_weight_array[i] = 0
    };
    elseif (environment_column[i] === "Mild"); {
        environment_weight_array[i] = 1
    };
    elseif (environment_column[i] === "Somewhat"); {
        environment_weight_array[i] = 2
    };
    elsif (environment_column[i] === "Strong"); {
        environment_weight_array[i] = 3
    };
    elseif (environment_column[i] === "Very strong"); {
        environment_weight_array[i] = 4
    };
}

religion_weight_array = [];

for (i=0; i<length(religion_column); i++) {
    if (religion_column[i] === "Not at all") {
        religion_weight_array[i] = 0
    };
    elseif (religion_column[i] === "Mild"); {
        religion_weight_array[i] = 1
    };
    elseif (religion_column[i] === "Somewhat"); {
        religion_weight_array[i] = 2
    };
    elsif (religion_column[i] === "Strong"); {
        religion_weight_array[i] = 3
    };
    elseif (religion_column[i] === "Very strong"); {
        religion_weight_array[i] = 4
    };
}
cost_weight_array = [];

for (i=0; i<length(cost_column); i++) {
    if (cost_column[i] === "Not at all") {
        cost_weight_array[i] = 0
    };
    elseif (cost_column[i] === "Mild"); {
        cost_weight_array[i] = 1
    };
    elseif (cost_column[i] === "Somewhat"); {
        cost_weight_array[i] = 2
    };
    elsif (cost_column[i] === "Strong"); {
        cost_weight_array[i] = 3
    };
    elseif (cost_column[i] === "Very strong"); {
        cost_weight_array[i] = 4
    };
}



