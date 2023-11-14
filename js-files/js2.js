
anychart.onDocumentReady(function() {

  // set the data
  var data = [
      {x: "America", value: 20},
      {x: "UK", value: 45},
      {x: "Japan", value: 9},
      {x: "Thailand", value: 6},
      {x: "Singapore", value: 11},
     
  ];

  // create the chart
  var chart = anychart.pie();

  // set the chart title
  chart.title("Number of students who choose country that they want scholarship program from");

  // add the data
  chart.data(data);

  // display the chart in the container
  chart.container('container');
  chart.draw();
  chart.classList

});




function validateForm() {


  var x = document.getElementById('name').value;
  var y = document.getElementById('email').value;


  if (x == "" && y == "") {
    alert("Subscribe failed");

  }
  else {
    alert("You have already subscribed");
  }
}



AOS.init();