// Since the `data.js` file is loaded in your `index.html` before this one,
// you have access to the `data` variable that contains the Etsy Store data.
// Open your `index.html` page in your browser and you can verify that the following
// is properly working. The `data` variable is an array with 25 items in it
console.log(data);


// 1: Show me how to calculate the average price of all items.
function question1 () {
  // Answer:
  var sum = 0;
  data.forEach(function(prices, index){
     return sum += data[index]['price'];
  })
  console.log('The average price is $'+ Math.round(sum/data.length *100)/100);
}



// 2: Show me how to get an array of items that cost between $14.00 and $18.00 USD
function question2 () {
  // Answer:

  data.forEach(function(priceRange, index){
    if (data[index]['price'] <= 18 && data[index]['price'] >= 14)
    console.log(data[index]['title']);
  });
  //for (var i=0; i <data.length; i++){
  //  if (data[i]['price'] <= 18 && data[i]['price'] >= 14) {
  //    console.log(data[i]['title']);
  //  }
  //}
}



// 3: Which item has a "GBP" currency code? Display it's name and price.
function question3 () {
  // Answer:
  data.forEach(function(gBP, index){
    if (data[index]['currency_code'] == 'GBP'){
      console.log(data[index]['title'] + ' costs ' + data[index]['price'] + ' pounds');
    }

  });
  //var gbpCurrency = [];
//  for (var i=0; i<data.length; i++){
//    if (data[i]['currency_code'] == 'GBP'){
//      gbpCurrency.push(data[i]['title']);
//      gbpCurrency.push(data[i]['price']);
//    }
//  }
//  console.log(gbpCurrency[0] + ' costs ' + gbpCurrency[1] + ' pounds');
}


// 4: Display a list of all items who are made of wood.
function question4 () {
  // Answer:
  data.forEach(function(wood, index){
    if (data[index]['materials'].includes('wood')){
      console.log(data[index]['title']);
    }
  });
//  for (var i=0; i<data.length; i++){
//    if (data[i]['materials'].includes('wood')){
//      console.log(data[i]['title']);
//    }
//  }
}


// 5: Which items are made of eight or more materials?
//    Display the name, number of items and the items it is made of.
function question5 () {
  // Answer:

   data.forEach(function(data){
     if (data.materials.length >= 8){
       console.log(data.title + ' has ' + data.materials.length + ' materials: ');
       data.materials.forEach(function(material){
         console.log('- ' + material);
       })
     }
   })
//  var manyMaterials = [];
//  for (var i=0; i<data.length; i++){
//    if (data[i]['materials'].length >= 8){
//      console.log(data[i]['title']+ ' has ' + data[i]['materials'].length + ' materials: ');
//      for (var j=0; j<data[i]['materials'].length; j++){
//        console.log('-' + data[i]['materials'][j]);
//      }
//    }
//  }
}


// 6: How many items were made by their sellers?
// Answer:
function question6 () {
  // Answer:
  var selfMadeCount = 0;
  data.forEach(function(data){
    if (data.who_made == 'i_did'){
      selfMadeCount += 1;
    }
  });
      console.log(selfMadeCount + ' items were made by their sellers.');
//  var selfMadeCount = 0;
//  for (var i=0; i<data.length; i++){
//    if (data[i]['who_made'] == 'i_did'){
//      selfMadeCount += 1;
//    }
//  }
//  console.log(selfMadeCount + ' items were made by their sellers.');
}
