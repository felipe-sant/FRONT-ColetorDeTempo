const temperaturaOption = {
    responsive: true,
    plugins: {
        legend: {
            position: 'top' as const,
        },
        title: {
            display: false,
            text: 'Temperatura ao longo do tempo',
        },
    },
    scales: {
        x: {
            grid: {
              display: false,
            },
            ticks: {
              color: 'purple', // Cor dos rótulos
            },
        },
        y: {
            grid: {
                display: false,
            }
        },
    },
};

export default temperaturaOption;