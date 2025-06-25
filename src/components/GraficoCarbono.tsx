import carbonoOption from "./options/carbonoOption";
import css from "../styles/components/grafico.module.css"
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

function GraficoCarbono(props: { carbono: any[] }) {
    const data = {
        labels: props.carbono.map(car => {
            if (car.day) {
                return car.day;
            }
            return car.hour.toString().padStart(2, "0");
        }),
        datasets: [
            {
                label: "Média",
                data: props.carbono.map(car => car.data.mediaCarbono),
                borderColor: "rgb(50, 50, 50)",
                backgroundColor: "rgba(50, 50, 50, 0.2)",
                tension: 0.4,
            },
            {
                label: "Máxima",
                data: props.carbono.map(car => car.data.maxCarbono),
                borderColor: "rgba(0, 0, 0, 0.5)",
                backgroundColor: "rgba(50, 50, 50, 0.2)",
                tension: 0.4,
            },
            {
                label: "Mínima",
                data: props.carbono.map(car => car.data.minCarbono),
                borderColor: "rgba(100, 100, 100, 0.5)",
                backgroundColor: "rgba(50, 50, 50, 0.2)",
                tension: 0.4,
            }
        ]
    }

    return (
        <div className={css.grafico}>
            <Line data={data} options={carbonoOption} />
            <div className={css.detalhe}>Carbono</div>
        </div>
    );
}

export default GraficoCarbono;