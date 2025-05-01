import Temperatura from "../types/Temperatura";
import temperaturaOption from "./options/temperaturaOption";
import css from "../styles/components/grafico.module.css"
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

function GraficoTemperatura(props: { temperatura: Temperatura[] }) {
    const data = {
        labels: props.temperatura.map(temp => temp.timestamp),
        datasets: [
            {
                label: "Temperatura",
                data: props.temperatura.map(temp => temp.value),
                borderColor: "rgb(255, 0, 0)",
                backgroundColor: "rgba(102, 0, 0, 0.2)",
                tension: 0.4,
            }
        ]
    }

    return (
        <div className={css.grafico}>
            <Line data={data} options={temperaturaOption} />
        </div>
    )
}

export default GraficoTemperatura;