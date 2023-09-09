function saturdayFun(plans = "roller-skate") {
    return (`This Saturday, I want to ${plans}!`)
}

const mondayWork = function (errands = "go to the office") {
    return (`This Monday, I will ${errands}.`);
};

function wrapAdjective (star = "*") {
    return function(adjective = "special") {
        return `You are ${star}${adjective}${star}!`
    }
}
