function yearsAgo(year){
  var date = new Date();
  var cent = date.getFullYear();
  var dateIn = cent - year;
  return dateIn;
}
console.log(yearsAgo("1978"));
