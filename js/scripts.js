// Busisness logic

function workNum(num){
  let newNum = num.replace(/[.,/#!$%^&*;:{}=-_`~()]/g, "");  
  let roboAr = []
  for (let i = 0; i<= newNum; i++){
    if (i<=newNum){
      roboAr.push(i)
    }
  }
  return roboAr
  console.log(roboAr)
}


//now we just have one str number

// function roboger(num){
//   const userAr = workNum(num)
//   let workAr = []
//   userAr.forEach(function(numb){
//     if (numb.includes("3")){
//       workAr.push("3")
//     }
//     else{
//       workAr.push(numb)
//     }
//   })
//   let roboAr = []
//     for (let i = 0; i<= num; i++){
//       if (i<=num){
//         roboAr.push(i)
//       }
//     }
//     userAr.forEach(function(numb){
//       if (numb.includes("3")){
//         workAr.push("3")
//       }
//       else{
//         workAr.push(numb)
//       }
// }
// }
// }