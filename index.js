function scuberGreetingForFeet(distance){

let result

  // gives customers a free sample if the ride is less than or equal to 400 feet
  if (distance < 400) return ('This one is on me!')
  // charges 20 dollars for a distance between 400 and 2000 feet 
  if (distance > 400 && distance <= 2000) return ('That will be twenty bucks.')
  // charges 30 dollars for a distance between over 2000 feet
  if (distance > 2000 && distance <= 2500) return ('I will gladly take your thirty bucks.')
  // does not allow for rides over 2500 feet
  if (distance > 2500) return ('No can do.')
}

function ternaryCheckCity(city){
  let result

  // returns "Ok sounds good." when the city is NYC
  if (city === 'NYC') return ('Ok, sounds good.')
  // returns "No go." if the destination city is not NYC
  return ('No go.')
}

function switchOnCharmFromTip(tip){
// returns "Thank you so much." if the tip is generous
if (tip === 'generous') return ('Thank you so much.')
// returns "Thank you." if the tip is not as generous
if (tip === 'not as generous') return ('Thank you.')
// returns "Bye." if anything else
return ('Bye.')
}