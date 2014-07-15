function coinCollector(main) {
  var quarters = [];
  var nickels = [];
  var dimes = [];
  var pennies = [];

  while (main > 0)  {
    if (main >= 25) {
      main = main-25;
      quarters.push(1);
    } else if (main < 25 && main >= 10) {
      main = main-10;
      dimes.push(1);
    } else if (main < 10 && main >= 5)  {
      main = main-5;
      nickels.push(1);
    } else if (main < 5 && main >= 1)   {
      main = main-1;
      pennies.push(1);
    }
  };

  console.log(quarters)
  var quartOne = quarters.length;
  var dimeOne = dimes.length;
  var nickOne = nickels.length;
  var penOne = pennies.length;

  var purse = [quartOne, dimeOne, nickOne, penOne];
  return purse;
};

$(document).ready(function()  {
  $("form#money").submit(function(event) {

    var cents = $("input#cents").val();

    var finalCount = coinCollector(cents);
     $("#quarters").text(finalCount[0]);
     $("#dimes").text(finalCount[1]);
     $("#nickels").text(finalCount[2]);
     $("#pennies").text(finalCount[3]);

    event.preventDefault();
  });
});
