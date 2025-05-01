const umidadeOption = {
    responsive: true,
    plugins: {
        legend: {
            position: 'top' as const,
        },
        title: {
            display: true,
            text: 'Umidade ao longo do tempo',
        },
    },
    scales: {
        x: {
            title: {
                display: true,
                text: 'Data',
            },
        },
        y: {
            title: {
                display: true,
                text: 'Umidade (%)',
            },
        },
    },
};

export default umidadeOption;