const ctx = document.getElementById('myChart').getContext('2d');
const myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['criptoq', 'cripto2', 'cripto3', ],
        datasets: [{
            label: 'Ranking en tiempo real',
            data: [200, 150, 345,],
            backgroundColor: [
                '#F4D22C',
                '#333',
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
 