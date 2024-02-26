function result(value){
    document.getElementById("result_value").innerHTML = finalValue(value).toFixed(0)
}


function finalValue (value){
    var weight = document.getElementById("weightValue").value;
    var actValue = document.getElementById("actValue").value;
    var goalValue = document.getElementById("goalValue").value;

    var plus;
    if (goalValue == 1){
        plus = 0.2;
    } else if (goalValue == 2){
        plus = 0.5;
    } else{
        plus = 0;
    }

    if (actValue <= 2){
        return weight * (0.8 + plus);

    } else if (actValue == 3 ){
        return weight * (1.5 + plus);

    } else if (actValue == 4 ){
        return weight * (1.7 + plus);

    }else {
        return weight * (2  + plus);
    }
}

