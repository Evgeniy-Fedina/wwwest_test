google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(drawChart);
var $element = {
    id: $('#nav-tabContent div.active div.chart_container div').attr('id'),
    width: $('#nav-tabContent div.active div.chart_container').width()
};
console.log($element.id);
$( window ).resize(function() {
    console.log('resize');
    $element.width = $('#nav-tabContent div.active div.chart_container').width();
    drawChart();
});
$('#list-tab a').on('click', function(){
    console.log($(this).attr('id'));
    console.log('click');
    let str = $(this).attr('id');
    str = str.substring(str.length, str.length -1);
    $element.id = 'chart-div-' + str;
    $element.width = $('#nav-tabContent div.active div.chart_container').width();
    console.log($element.id);
    drawChart();
})

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
    width: $element.width,
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
        //var chart = new google.visualization.LineChart(document.getElementById('chart-div-1'));
        var chart = new google.visualization.LineChart(document.getElementById($element.id));
        chart.draw(data, options);
    }

	$('.filter-row__btn').click(function(){ 
		$('.custom-nav__item').toggleClass('custom-nav__item--point') 
	});

