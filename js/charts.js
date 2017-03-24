var ctx = document.getElementById("incomeChart").getContext("2d");
var aggregateDivs = document.querySelectorAll('.hide-content-main>div:last-of-type');

aggregateDivs = Array.prototype.slice.call(aggregateDivs, 0, 3);

function reWriteTheChart(data) {
    Chart.defaults.global.legend.display = false;
    Chart.defaults.scale.ticks.beginAtZero = true;
    var myChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ["планирани доходи", "планирани разходи", "планирани спестявания"],
            datasets: [{
                data: data,
                backgroundColor: [
                    '#DCFAC0',
                    '#FFCDB2',
                    '#AAE0D7'
                ],

            }]
        },
        options: {
            scales: {
                yAxes: [{
                    display: false
                }],
                xAxes: [{
                    display: false
                }]
            }
        }
    });
}