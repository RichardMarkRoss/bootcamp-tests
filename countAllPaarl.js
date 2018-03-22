function countAllPaarl(paarl){
  console.log(paarl);
  var stPaarl = [];
var allPaarl = paarl.split(', ');
  for(var i = 0; i < allPaarl.length; ++i){
    if(allPaarl[i].startsWith('CJ')){
      //console.log(allPaarl[i]);
      stPaarl.push(allPaarl);
      //console.log(stPaarl[i].length)
    }

  }
  return stPaarl.length;
}
