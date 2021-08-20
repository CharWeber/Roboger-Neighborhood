// Busisness logic

function workNum(num){
  let newNum = num.replace(/[.,/#!$%^&*;:{}=-_`~()]/g, "");  
  let newAr = []
  for (let i = 0; i<= newNum; i++){
    if (i<=newNum){
      newAr.push(i)
    }
  }
  let lastAr = []
  newAr.forEach(function(number){
    lastAr.push(number.toString())
  })
  return lastAr
  console.log(lastAr)
}


//now we just have one str number

function roboger(num){
  const workAr = workNum(num)
  let roboAr = []
  for (let index = 0; index<= num; index++){
    if (workAr[index].includes("3")){
      roboAr.push("Won't you be my nieghbor?")
    }
    else if (workAr[index].includes("2")){
      roboAr.push("Boop!")
    }
    else{
      roboAr.push(workAr[index])
    }
  }

  return roboAr
  console.log(roboAr)
}
