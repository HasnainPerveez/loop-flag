function checkCity(){
    let cities = ["Karachi" , "Lahore", "Islamabad", "Multan", "Pindi", "Hydrabad", "Peshawar"]
    let userCity = document.getElementById("userCity").value;

    let isMatched = "no"

    for(let i=0; i < cities.length; i++){
        // console.log(cities[i])
        if(userCity.toLowerCase() == cities[i].toLowerCase()){
            // alert("City Matched " + cities[i])
            isMatched = "yes";
            break;
        }
        console.log(cities[i])
    }

    if(isMatched == "no"){
        alert("City did not Match")
    }else{
        alert("City Matched")
    }
}

// let city = "KArAcHi";

// console.log(city.toLowerCase());