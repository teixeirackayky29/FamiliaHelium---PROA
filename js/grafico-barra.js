const barChartContext = document.getElementById('barChart').getContext('2d');

const barChart = new Chart(barChartContext, {
    type: 'bar',
    data: {
        labels: ['Janeiro', 'Fevereiro', 'Março', 'Abril'],
        datasets: [
            {
                label: 'Receitas',
                data: [7400, 7600, 8000, 7400],
                backgroundColor: 'rgba(75, 192, 192, 1)',
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 1
            },
            {
                label: 'Despesas',
                data: [4300, 4650, 4200, 4500],
                backgroundColor: 'rgba(255, 99, 132, 1)',
                borderColor: 'rgba(255, 99, 132, 1)',
                borderWidth: 1
            }
        ]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});

function goToPieChart() {
    window.location.href = 'grafico-pizza.html';
}