$( window ).resize(function() {
    console.log('resize');
    drawChart();
});
    google.charts.load('current', {'packages':['corechart']});
    google.charts.setOnLoadCallback(drawChart);
    function drawChart() {
      var data = new google.visualization.DataTable();
        data.addColumn('number', 'X');
        data.addColumn('number', 'Revenue');
        data.addColumn('number', '12MMA');
        data.addRows([
    [0, 80, 300],   [0.9, 351, 450], [1.9, 301, 565], [2.9,360, 540], [3.8,200, 390], [4.7,140, 590], [5.7,140, 600], [6.7,250, 660], [7.8,310, 800], [8.7,450, 950], [9.6,515, 900], [11, 700, 1200]
    ]);
    var options = {
    hAxis: {
        title: '',
        gridlines: {
        count: 0
        }
    },
    width: '100%',
    height: 300,
    legend: {position: 'bottom'},
    is3D: true,
    vAxis: {
        title: '',
        gridlines: {
        count: 0
        },
        viewWindowMode:'explicit',
        viewWindow: {
            min: 0,
            max: 1159
        }
    },
    colors: ['#63ECDB', '#2F80ED'],
    };
        var chart = new google.visualization.LineChart(document.getElementById('chart-div'));
        chart.draw(data, options);
    }
