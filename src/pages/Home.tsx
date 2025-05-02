import { useState } from "react"
import Temperatura from "../types/Temperatura"
import GraficoTemperatura from "../components/GraficoTemperatura"
import Filtro from "../types/Filtro"
import css from "../styles/pages/home.module.css"
import calendar from "../images/calendar.svg"
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { format } from "date-fns";

function Home() {
    const [filtroType, setFiltroType] = useState<Filtro>("day")
    const [temperatura, setTemperatura] = useState<Temperatura[]>([])
    const [data, setData] = useState<string>(new Date().toLocaleDateString())

    const [selectedDate, setSelectedDate] = useState<Date | null>(new Date());

    const handleDateChange = (date: Date | null) => {
        setSelectedDate(date);
    };

    const temperaturaDay: Temperatura[] = [
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

    const temperaturaWeek: Temperatura[] = [
        { timestamp: "Domingo", value: 19 },
        { timestamp: "Segunda", value: 10 },
        { timestamp: "Terça", value: 12 },
        { timestamp: "Quarta", value: 11 },
        { timestamp: "Quinta", value: 12 },
        { timestamp: "Sexta", value: 14 },
        { timestamp: "Sábado", value: 17 },
    ]

    const temperaturaMonth: Temperatura[] = [
        { timestamp: "01/02", value: 19 },
        { timestamp: "02/02", value: 10 },
        { timestamp: "03/02", value: 12 },
        { timestamp: "04/02", value: 11 },
        { timestamp: "05/02", value: 12 },
        { timestamp: "06/02", value: 14 },
        { timestamp: "07/02", value: 17 },
        { timestamp: "08/02", value: 19 },
        { timestamp: "09/02", value: 20 },
        { timestamp: "10/02", value: 21 },
        { timestamp: "11/02", value: 22 },
        { timestamp: "12/02", value: 23 },
        { timestamp: "13/02", value: 24 },
        { timestamp: "14/02", value: 25 },
        { timestamp: "15/02", value: 26 },
        { timestamp: "16/02", value: 27 },
        { timestamp: "17/02", value: 28 },
        { timestamp: "18/02", value: 29 },
        { timestamp: "19/02", value: 30 },
        { timestamp: "20/02", value: 31 },
        { timestamp: "21/02", value: 32 },
        { timestamp: "22/02", value: 33 },
        { timestamp: "23/02", value: 34 },
        { timestamp: "24/02", value: 35 },
        { timestamp: "25/02", value: 36 },
        { timestamp: "26/02", value: 37 },
        { timestamp: "27/02", value: 38 },
        { timestamp: "28/02", value: 39 }
    ]

    const temperaturaYear: Temperatura[] = [
        { timestamp: "Janeiro", value: 19 },
        { timestamp: "Fevereiro", value: 10 },
        { timestamp: "Março", value: 12 },
        { timestamp: "Abril", value: 11 },
        { timestamp: "Maio", value: 12 },
        { timestamp: "Junho", value: 14 },
        { timestamp: "Julho", value: 17 },
        { timestamp: "Agosto", value: 19 },
        { timestamp: "Setembro", value: 20 },
        { timestamp: "Outubro", value: 21 },
        { timestamp: "Novembro", value: 22 },
        { timestamp: "Dezembro", value: 23 },
    ]

    function setDay() {
        setTemperatura(temperaturaDay)
        setFiltroType("day")
    }

    function setWeek() {
        setTemperatura(temperaturaWeek)
        setFiltroType("week")
    }

    function setMonth() {
        setTemperatura(temperaturaMonth)
        setFiltroType("month")
    }

    function setYear() {
        setTemperatura(temperaturaYear)
        setFiltroType("year")
    }

    return (
        <>
            <div className={css.line} />
            <main className={css.main}>
                <div className={css.filtro}>
                    <div
                        className={filtroType === "day" ? css.filtro__select + " " + css.filtro__select__active : css.filtro__select}
                        onClick={setDay}
                    >Day
                        <div className={css.tab}>
                            <DatePicker
                                selected={selectedDate}
                                onChange={handleDateChange}
                                dateFormat="dd/MM"
                                placeholderText="Data"
                                maxDate={new Date()}
                                wrapperClassName={css.input}
                            />
                            <img src={calendar} className={css.calendar} />
                        </div>
                    </div>
                    <div
                        className={filtroType === "week" ? css.filtro__select + " " + css.filtro__select__active : css.filtro__select}
                        onClick={setWeek}
                    >Week</div>
                    <div
                        className={filtroType === "month" ? css.filtro__select + " " + css.filtro__select__active : css.filtro__select}
                        onClick={setMonth}
                    >Month
                        <div className={css.tab}>

                        </div>
                    </div>
                    <div
                        className={filtroType === "year" ? css.filtro__select + " " + css.filtro__select__active : css.filtro__select}
                        onClick={setYear}
                    >Year
                        <div className={css.aba}></div>
                    </div>
                </div>
                <div className={css.container}>
                    <GraficoTemperatura temperatura={temperatura} />
                    {/* <GraficoUmidade umidade={umidades} /> */}
                </div>
            </main>
            <footer className={css.footer}></footer>
        </>
    )
}

export default Home