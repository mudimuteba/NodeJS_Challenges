const url = "https://api.apixu.com/v1/current.json?key=df84b6619bac463ea6f125820191005&q="

const search = function(){
    let place = document.getElementById("searchcity").value
    console.log(place)
    const request = async() =>  {
        const response = await fetch(url + place)
        const json = await response.json()
        console.log(json)
        document.getElementById("temperature").innerHTML = json.current.temp_c + "&deg C"
        document.getElementById("condition").innerHTML = json.current.condition.text
        document.getElementById("city").innerHTML = json.location.name +", "+json.location.country
    }
    request()
}