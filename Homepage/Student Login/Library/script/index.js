var x = ["Books Borrowed", "Books Returned", "Fine Collected($)", "New Members"];
  var y = [55, 49, 44, 24];
  var barColors = ["red", "blue","red","blue"];
  var chart = document.getElementById("myChart").getContext('2d');
  var str = "Weekly Statistics"
  var chartx

  function week()
  {
    y[0] = 55
    y[1] = 49
    y[2] = 44
    y[3] = 26
    str = "Weekly Statistics"
    draw()
  }
  function month()
  {
    y[0] = 78
    y[1] = 176
    y[2] = 111
    y[3] = 56
    str = "Monthly Statistics"
    draw()
  }
  function year()
  {
    y[0] = 660
    y[1] = 1340
    y[2] = 1450
    y[3] = 249
    str = "Yearly Statistics"
    draw()
  }
  function draw()
  {
    if(chartx)
    {
      chartx.destroy();
    }
      chartx = new Chart(chart, {
      type: "bar",
      data: {
        labels: x,
        datasets: [{
          backgroundColor: barColors,
          data: y
        }]
      },
      options: {
        legend: {
          display: false,
            },
        title: {
          display: true,
          text: str
        }
      }
    });
  }
  draw()