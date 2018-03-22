function findItemsOver20(item){
  //console.log(item)
 // var num = 0;
  var man = [];
  //var name = '';
  for(var i = 0; i < item.length; i++){
  var theitem = item[i];
    //console.log(theItem);
    if(theitem.qty > 20){
    man.push(theitem)// = theitem.length;
     //name = theitem;
      console.log(man)
    }
  }
  return man;
};
