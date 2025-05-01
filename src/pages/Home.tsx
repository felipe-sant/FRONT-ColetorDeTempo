import GraficoTemperatura from "../components/GraficoTemperatura"
import GraficoUmidade from "../components/GraficoUmidade"
import css from "../styles/pages/home.module.css"
import Temperatura from "../types/Temperatura"
import Umidade from "../types/Umidade"

function Home() {
    const temperaturas: Temperatura[] = [
        { timestamp: "01:00", value: 10 },
        { timestamp: "02:00", value: 12 },
        { timestamp: "03:00", value: 11 },
        { timestamp: "04:00", value: 12 },
        { timestamp: "05:00", value: 14 },
        { timestamp: "06:00", value: 17 },
        { timestamp: "07:00", value: 19 },
        { timestamp: "08:00", value: 38 },
        { timestamp: "09:00", value: 32 },
        { timestamp: "10:00", value: 32 },
        { timestamp: "11:00", value: 31 },
        { timestamp: "12:00", value: 32 },
        { timestamp: "13:00", value: 33 },
        { timestamp: "14:00", value: 34 },
        { timestamp: "15:00", value: 35 },
        { timestamp: "16:00", value: 36 },
        { timestamp: "17:00", value: 47 },
        { timestamp: "18:00", value: 38 },
        { timestamp: "19:00", value: 39 },
        { timestamp: "20:00", value: 40 },
        { timestamp: "21:00", value: 41 },
        { timestamp: "22:00", value: 42 },
        { timestamp: "23:00", value: 43 },
        { timestamp: "00:00", value: 20 },
    ]

    const umidades: Umidade[] = [
        { timestamp: "01:00", value: 10 },
        { timestamp: "02:00", value: 12 },
        { timestamp: "03:00", value: 11 },
        { timestamp: "04:00", value: 12 },
        { timestamp: "05:00", value: 14 },
        { timestamp: "06:00", value: 17 },
        { timestamp: "07:00", value: 19 },
        { timestamp: "08:00", value: 38 },
        { timestamp: "09:00", value: 32 },
        { timestamp: "10:00", value: 32 },
        { timestamp: "11:00", value: 31 },
        { timestamp: "12:00", value: 32 },
        { timestamp: "13:00", value: 33 },
        { timestamp: "14:00", value: 34 },
        { timestamp: "15:00", value: 35 },
        { timestamp: "16:00", value: 36 },
        { timestamp: "17:00", value: 47 },
        { timestamp: "18:00", value: 38 },
        { timestamp: "19:00", value: 39 },
        { timestamp: "20:00", value: 40 },
        { timestamp: "21:00", value: 41 },
        { timestamp: "22:00", value: 42 },
        { timestamp: "23.00", value: 43 },
        { timestamp: "00.00", value: 20 }
    ]

    return (
        <main className={css.main}>
            <div className={css.filtro}>

            </div>
            <div className={css.container}>
                <GraficoTemperatura temperatura={temperaturas} />
                <GraficoUmidade umidade={umidades} />
            </div>
        </main>
    )
}

export default Home