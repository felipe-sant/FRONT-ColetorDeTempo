import chuvaOption from "./options/chuvaOption";
import css from "../styles/components/grafico.module.css"
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

function GraficoChuva(props: { chuva: any[] }) {
    const data = {
        label: props.chuva.map(ch => {
            if (ch.day) {
                return ch.day;
            }
            return ch.hour.toString().padStart(2, "0");
        }),
        datasets: [
            {
                label: "Média",
                data: props.chuva.map(ch => ch.data.mediaChuva),
                borderColor: "rgb(97, 255, 171)",
                backgroundColor: "rgba(97, 255, 171, 0.2)",
                tension: 0.4,
            },
            {
                label: "Máxima",
                data: props.chuva.map(ch => ch.data.maxChuva),
                borderColor: "rgba(36, 159, 93, 0.5)",
                backgroundColor: "rgba(97, 255, 171, 0.2)",
                tension: 0.4,
            },
            {
                label: "Mínima",
                data: props.chuva.map(ch => ch.data.minChuva),
                borderColor: "rgba(140, 249, 191, 0.5)",
                backgroundColor: "rgba(97, 255, 171, 0.2)",
                tension: 0.4,
            }
        ]
    }

    return (
        <div className={css.grafico}>
            <Line data={data} options={chuvaOption} />
            <div className={css.detalhe}>Chuva</div>
        </div>
    )
}

export default GraficoChuva;