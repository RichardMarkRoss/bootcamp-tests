function mostProfitableDepartment(salesData){

  var busin = " ";
  var house = 0;
  var final = {};

  for(var i = 0; i < salesData.length; i++){
  var sale = salesData[i];

    if(final[sale.department] === undefined){
    final[sale.department] = 0;
    }

 final[sale.department] += sale.sales;

    }
  for(var key in final){
	if(final[key]> house){
	house = final[key];
  	busin = key;

	}
  }

return busin
};
