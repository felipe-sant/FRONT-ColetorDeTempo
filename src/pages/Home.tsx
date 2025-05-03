import GraficoTemperatura from "../components/GraficoTemperatura"
import css from "../styles/pages/home.module.css"
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useDispatch, useSelector } from "react-redux"
import { AppDispatch, RootState } from "../store/store"
import { handleDateChange, setFilterDay, setFilterMonth, setFilterWeek, setFilterYear } from "../store/slices/graficos"

function Home() {
    const dispatch = useDispatch<AppDispatch>()
    const {
        filtroType,
        daySelected,
        monthSelected,
        temperatura,
        umidade
    } = useSelector((state: RootState) => state.grafico)

    return (
        <>
            <div className={css.line} />
            <main className={css.main}>
                <div className={css.filtro}>
                    <div
                        className={filtroType === "day" ? css.filtro__select + " " + css.filtro__select__active : css.filtro__select}
                        onClick={() => dispatch(setFilterDay())}
                    >Day
                        <div className={css.tab}>
                            <DatePicker
                                selected={daySelected}
                                onChange={(date: Date | null) => dispatch(handleDateChange(date))}
                                dateFormat="dd/MM"
                                placeholderText="Data"
                                maxDate={new Date()}
                                wrapperClassName={css.input}
                            />
                            <img src="images/calendar.svg" className={css.calendar} />
                        </div>
                    </div>
                    <div
                        className={filtroType === "week" ? css.filtro__select + " " + css.filtro__select__active : css.filtro__select}
                        onClick={() => dispatch(setFilterWeek())}
                    >Week</div>
                    <div
                        className={filtroType === "month" ? css.filtro__select + " " + css.filtro__select__active : css.filtro__select}
                        onClick={() => dispatch(setFilterMonth())}
                    >Month
                        <div className={css.tab}>

                        </div>
                    </div>
                    <div
                        className={filtroType === "year" ? css.filtro__select + " " + css.filtro__select__active : css.filtro__select}
                        onClick={() => dispatch(setFilterYear())}
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