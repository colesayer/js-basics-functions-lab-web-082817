// Code your solution in this file!
function distanceFromHqInBlocks(pickupLocation){
  if (pickupLocation > 42) {
    return pickupLocation - 42
  } else {
    return 42 - pickupLocation
  }}

function distanceFromHqInFeet(pickupLocation){
  return distanceFromHqInBlocks(pickupLocation) * 264;
}

function distanceTravelledInFeet(pickupLocation, dropOffLocation){
  if (pickupLocation > dropOffLocation) {
    return (pickupLocation - dropOffLocation) * 264
  } else {
    return (dropOffLocation - pickupLocation) * 264
}}

function calculatesFarePrice(start, destination){
  const distance = distanceTravelledInFeet(start, destination)

  if (distance > 2500) {
    return "cannot travel that far"
  } else if (distance < 400) {
    return 0
  } else if (distance > 400 && distance < 2000) {
    return distance * .02
  } else if (distance > 2000) {
    return 25
  }
  }
  
