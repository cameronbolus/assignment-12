// EXAMPLE:
// makeNamesObject("George Washington, John Adams, Kanye West")
//   => {
//     George: "Washington",
//     John: "Adams",
//     Kanye: "West"
//   }

//
// var greatMenObj = {
//   George: "Washington",
//   Abe: "Lincoln",
//   Kanye: "West"
// }
//
// var greatWomenObj = {
//   Rosa: "Parks",
//   Amelia: "Earhart",
//   Charlotte: "Webb"
// }

console.log(greatMenObj)

function makeNamesObject (name1, name2, name3){
  var testArray = []
  var greatNameObj = {}

  testArray.push(name1.split(' '))
  testArray.push(name2.split(' '))
  testArray.push(name3.split(' '))

  for(var i = 0; i<testArray.length; i++){
    var currentArr = testArray[i]
    greatNameObj[currentArr[0]] = currentArr[1]
  }
   return greatNameObj
}



//*-*~*~*~*~*~ Don't Touch *~*~*~*~*~*~*~*~*~*~*~
var greatMenObj = makeNamesObject("George Washington", "Abe Lincoln", "Kanye West")
var greatWomenObj = makeNamesObject("Rosa Parks", "Amelia Earhart", "Charlotte Webb")

console.assert(greatMenObj.George === "Washington")
console.assert(greatMenObj['Abe'] === "Lincoln")
console.assert(greatMenObj.Kanye === "West")
//-------------------
console.assert(greatWomenObj.Rosa === "Parks")
console.assert(greatWomenObj.Charlotte === "Webb")
