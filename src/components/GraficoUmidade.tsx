import umidadeOption from './options/umidadeOption';
import css from "../styles/components/grafico.module.css"
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

function GraficoUmidade(props: { umidade: any[] }) {
    const data = {
        labels: props.umidade.map(um => {
            if (um.day) {
                return um.day
            }
            return um.hour.toString().padStart(2, "0")
        }),
        datasets: [
            {
                label: "Média",
                data: props.umidade.map(um => um.data.mediaUmidade),
                borderColor: "rgb(0, 127, 255)",
                backgroundColor: "rgba(0, 0, 102, 0.2)",
                tension: 0.4,
            },
            {
                label: "Máxima",
                data: props.umidade.map(um => um.data.maxUmidade),
                borderColor: "rgba(66, 66, 135, 0.5)",
                backgroundColor: "rgba(0, 0, 102, 0.2)",
                tension: 0.4,
            },
            {
                label: "Mínima",
                data: props.umidade.map(um => um.data.minUmidade),
                borderColor: "rgba(122, 187, 253, 0.5)",
                backgroundColor: "rgba(0, 0, 102, 0.2)",
                tension: 0.4,
            }
        ]
    }

    return (
        <div className={css.grafico}>
            <Line data={data} options={umidadeOption} />
            <div className={css.detalhe}>Temperatura</div>
        </div>
    )
}

export default GraficoUmidade;