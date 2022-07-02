const ctx = document.getElementById('myChartApp').getContext('2d');
const myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['cripto1', 'cripto2', 'cripto3',  'cripto4', 'scripto5', 'scripto6'],
        datasets: [{
            label: 'Ranking en tiempo real',
            data: [20, 15, 45,26,76,55],
            backgroundColor: [
                '#F4D22C',
                '#D9BA82',
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
}); 