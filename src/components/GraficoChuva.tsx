import chuvaOption from "./options/chuvaOption";
import css from "../styles/components/grafico.module.css"
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

function GraficoChuva(props: { chuva: any[] }) {
    const data = {
        labels: props.chuva.map(ch => {
            if (ch.day) {
                return ch.day;
            }
            return ch.hour.toString().padStart(2, "0");
        }),
        datasets: [
            {
                label: "Chuva",
                data: props.chuva.map(ch => ch.data.chuva),
                borderColor: "rgb(97, 255, 171)",
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