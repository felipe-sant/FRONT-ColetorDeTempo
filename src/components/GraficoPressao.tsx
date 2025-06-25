import pressaoOption from "./options/pressaoOption";
import css from "../styles/components/grafico.module.css"
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);


function GraficoPressao(props: { pressao: any[] }) {
    const data = {
        labels: props.pressao.map(p => {
            if (p.day) {
                return p.day;
            }
            return p.hour.toString().padStart(2, "0");
        }),
        datasets: [
            {
                label: "Média",
                data: props.pressao.map(p => p.data.mediaPressao),
                borderColor: "rgb(154, 154, 154)",
                backgroundColor: "rgba(102, 102, 102, 0.2)",
                tension: 0.4,
            },
            {
                label: "Máxima",
                data: props.pressao.map(p => p.data.maxPressao),
                borderColor: "rgba(223, 223, 223, 0.5)",
                backgroundColor: "rgba(102, 102, 102, 0.2)",
                tension: 0.4,
            },
            {
                label: "Mínima",
                data: props.pressao.map(p => p.data.minPressao),
                borderColor: "rgba(187, 187, 187, 0.5)",
                backgroundColor: "rgba(102, 102, 102, 0.2)",
                tension: 0.4,
            }
        ]
    }

    return (
        <div className={css.grafico}>
            <Line data={data} options={pressaoOption} />
            <div className={css.detalhe}>Pressão</div>
        </div>
    )
}

export default GraficoPressao;