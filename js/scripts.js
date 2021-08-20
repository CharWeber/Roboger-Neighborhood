// Busisness logic

function workNum(num) {
  let newNum = num.replace(/[.,/#!$%^&*;:{}=-_`~()]/g, "");
  let newAr = []
  for (let i = 0; i <= newNum; i++) {
    if (i <= newNum) {
      newAr.push(i)
    }
  }
  let lastAr = []
  newAr.forEach(function (number) {
    lastAr.push(number.toString())
  })
  return lastAr
  console.log(lastAr)
}

function roboger(num) {
  const workAr = workNum(num)
  let roboAr = []
  for (let index = 0; index <= num; index++) {
    if (index === 0){
      roboAr.push("Hello Internet Neighbor. *puts on Cardigan and changes shoes*")
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
    else {
      roboAr.push(workAr[index])
    }
  }

  return roboAr
  console.log(roboAr)
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
