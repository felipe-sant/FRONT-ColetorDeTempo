import umidadeOption from './options/umidadeOption';
import Umidade from '../types/Umidade';
import css from "../styles/components/grafico.module.css"
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

function GraficoUmidade(props: { umidade: Umidade[] }) {
    const data = {
        labels: props.umidade.map(um => um.timestamp),
        datasets: [
            {
                label: "Umidade",
                data: props.umidade.map(um => um.value),
                borderColor: "rgb(0, 123, 255)",
                backgroundColor: "rgba(0, 0, 102, 0.2)",
                tension: 0.4,
            }
        ]
    }

    return (
        <div className={css.grafico}>
            <Line data={data} options={umidadeOption} />
        </div>
    )
}

export default GraficoUmidade;