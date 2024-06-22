const pieChartContext = document.getElementById('pieChart').getContext('2d');

const pieChart = new Chart(pieChartContext, {
    type: 'pie',
    data: {
        labels: ['Essenciais', 'Emergenciais', 'Carro', 'Lazer', 'Mercado'],
        datasets: [{
            data: [4790, 1700, 980, 807.85, 2540],
            backgroundColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        responsive: true,
        plugins: {
            datalabels: {
                formatter: (value, context) => {
                    const total = context.chart.data.datasets[0].data.reduce((a, b) => a + b, 0);
                    const percentage = (value / total * 100).toFixed(2) + '%';
                    return percentage;
                },
                color: '#000',
                font: {
                    weight: 'bold'
                    
                }
            }
        }
    },
    plugins: [ChartDataLabels]
});

function goToPieChart() {
    window.location.href = 'index.html';
}