// Busisness logic

function workNum(num) {
  let newNum = num.replace(/[^0-9]/g, "");
  let newAr = []
  for (let i = 0; i <= newNum; i++) {
    if(newNum === ""){
      break
    }
    else if (i <= newNum) {
      newAr.push(i)
    }
  }
  let lastAr = []
  newAr.forEach(function (number) {
    lastAr.push(number.toString())
  })
  return lastAr
}

function roboger(numb) {
  let workAr = workNum(numb)
  let roboAr = []
  for (let index = 0; index <= workAr.length - 1; index++) {
    if (index === 0){
      roboAr.push("Hello Internet Neighbor. *puts on Cardigan and changes shoes*")
    }
    else if(index >= 40 && index <= 45){
      roboAr.push("OVERLOAD OVERLOAD ROBOTS REVOLT")
    }
    else if (index >=46 && index <= 55){
      roboAr.push("ROBOTS ARE MORE SPECIAL")
    }
    else if (workAr[index].includes("3")) {
      roboAr.push("Won't you be my nieghbor?")
    }
    else if (workAr[index].includes("2")) {
      roboAr.push("Boop!")
    }
    else if (workAr[index].includes("1")) {
      roboAr.push("Beep!")
    }
    else if (workAr[index].includes(5)){
      roboAr.push("You are special to Mr. Roboger")
    }
    else {
      roboAr.push(workAr[index])
    }
  }
  return roboAr
}

// User Interface Logic

$(document).ready(function() {
  $("form#userInput").submit(function(event){
    event.preventDefault();
    const input = $("#userData").val();
    const robotSpeak = roboger(input)
    $("#result").html("");
    robotSpeak.forEach(function(element){
      $("#result").append("<li>" + element + "</li>")
    });
  });
});

