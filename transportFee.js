function transportFee(transport){
  console.log(transport)
if (transport.startsWith('m')){
return"R20";
} else if (transport.startsWith('a')){
return"R10";
} else {
return"free"
}
};
