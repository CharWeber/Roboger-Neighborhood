// Busisness logic

function workNum(num){
  let newStr = num.replace(/[.,/#!$%^&*;:{}=-_`~()]/g, "");  
  return newStr
}


//now we just have one str number

function roboger(num){
  const userAR = workNum(num)
  let roboAr = []
    for (let i = 0; i<= num; i++){
      if (i<=num){
        roboAr.push(i)
      }
    }
    return roboAr
    console.log(roboAr)
}