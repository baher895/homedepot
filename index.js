
const q1 = (number) => {
  
  let temp = number
  let numArray = []
  while(temp > 0){
    let mod = temp % 10
    numArray.push(mod)
    temp = Math.floor(temp / 10)
  }
  let power = numArray.length -1
  let newNumber = 0
  numArray.forEach(num =>{
    newNumber += num * (10 ** power)
    power--
  })
  
  const result = number === newNumber ? "Number is Palindrome" : "Number is NOT Palindrome"
  console.log(result)
}

const q2 = (change) => {
  if(change >= 1){
    console.error(`This Amount is not valid. you need to enter something less than one dollar`)
    return
  }

  let remainingAmount = change * 100
  const quarters = Math.floor(remainingAmount / 25)
  remainingAmount = remainingAmount - (quarters * 25)
  const dimes = Math.floor(remainingAmount / 10)
  remainingAmount = remainingAmount - (dimes * 10)
  const nickles = Math.floor(remainingAmount / 5)
  remainingAmount = remainingAmount - (nickles * 5)
  const pennies = remainingAmount

  console.log(`${change} Dollars is equal to 
    ${quarters} Quarters [0.25] 
    ${dimes} Dimes [10] 
    ${nickles} Nickles [5] 
    ${pennies} Pennies [1]`)
}

q1(11)
q1(111)
q1(12321)
q1(0123210)
q1(988)
q1(385026)

q2(2.5)
q2(1.00)
q2(0.99)
q2(0.90)
q2(0.23)