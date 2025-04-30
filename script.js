// Configuração dos gráficos combinados (Temperatura e Umidade)
const tempData = [];
const humidityData = [];
const timeLabels = [];

const maxDataPoints = 10; // 10 pontos para 5 minutos com intervalo de 30 segundos

const combinedCtx = document.getElementById('combinedChart').getContext('2d');

// Gráfico combinado de Temperatura (eixo Y esquerdo) e Umidade (eixo Y direito)
const combinedChart = new Chart(combinedCtx, {
    type: 'line',
    data: {
        labels: timeLabels, // Usamos o mesmo eixo X com base no tempo
        datasets: [
            {
                label: 'Temperatura (°C)',
                data: tempData,
                borderColor: 'rgba(255, 99, 132, 1)',
                fill: false,
                tension: 0.1,
                yAxisID: 'y1' // Este eixo Y representa a temperatura
            },
            {
                label: 'Umidade (%)',
                data: humidityData,
                borderColor: 'rgba(54, 162, 235, 1)',
                fill: false,
                tension: 0.1,
                yAxisID: 'y2' // Este eixo Y representa a umidade
            }
        ]
    },
    options: {
        responsive: true,
        scales: {
            x: {
                type: 'linear',
                position: 'bottom'
            },
            y1: { // Eixo Y para Temperatura
                beginAtZero: false,
                position: 'left'
            },
            y2: { // Eixo Y para Umidade
                beginAtZero: false,
                position: 'right'
            }
        }
    }
});

// Função para atualizar os gráficos com os dados mais recentes
function fetchData() {
    fetch('https://coletor-de-tempo.vercel.app/api')
        .then(response => response.json())
        .then(data => {
            const currentTime = new Date().getTime() / 1000; // Tempo em segundos
            const temperature = data.temperatura;
            const humidity = data.umidade;

            console.log(data)

            // Adiciona os novos dados
            if (timeLabels.length >= maxDataPoints) {
                timeLabels.shift();
                tempData.shift();
                humidityData.shift();
            }

            timeLabels.push(currentTime);
            tempData.push(temperature);
            humidityData.push(humidity);

            // Atualiza o gráfico combinado
            combinedChart.update();
        })
        .catch(error => console.error('Erro ao obter dados da API:', error));
}

// Atualizar os dados a cada 30 segundos
setInterval(fetchData, 30000);

// Chama a função de imediato para começar a exibição
fetchData();
