var millisecondsPerYear = 1*365*24*60*60*1000;
var millisecondsPerDay = 1*24*60*60*1000;
var millisecondsPerHour = 60*60*1000;
var millisecondsPerMintute = 60*1000;
var millisecondsPerSecond = 1000;

function main(){
    function getInputData(id){
        var inputData = document.getElementById(id).value;
        return inputData;
    }

    function outputAge(birthDay){
        birthDay = Date.parse(birthDay);
        var today = new Date().getTime();
        var dayLived = today - birthDay;
        var age = Math.floor(dayLived/ millisecondsPerYear);
        return "<p>Your age is: "+ age + "</p>"
    }

    function countdownBirthDay(birthDay){
        birth = new Date(birthDay);
        var today = new Date().getTime();
        currentYear = new Date().getFullYear();
        var nextBirthDay = birth.setFullYear(currentYear);
        var dayLeft = Math.floor((nextBirthDay - today)/millisecondsPerDay);
        if (dayLeft < 0){
            if(currentYear %4 == 0){
                dayLeft += 366;
            } else{
                dayLeft +=365;
        }}
        return "<p>" + dayLeft + " days until your birthday</p>";

    }
    var birthDay = getInputData("inputBirthDay");
    outputAge(birthDay);
    document.getElementsByClassName("countDownBirthDay")[0].innerHTML = countdownBirthDay(birthDay);
    document.getElementsByClassName("Age")[0].innerHTML =   outputAge(birthDay);

}


document.getElementById("Button").addEventListener("click", main)



