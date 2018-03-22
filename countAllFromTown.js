function countAllFromTown(car,town){
  //console.log(car);
  //console.log(town);
  var fromStellies = [];
var allCar = car.split(',');
//console.log(allCar)
  for(var i = 0; i < allCar.length; ++i){
    //console.log(allCar[i])
    if(allCar[i].startsWith(town)){
      //console.log(allCar[i]);
      fromStellies.push(allCar);
    }
  }
  //console.log(fromStellies.length)
  return fromStellies.length;

}
