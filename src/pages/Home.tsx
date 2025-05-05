import GraficoTemperatura from "../components/GraficoTemperatura"
import css from "../styles/pages/home.module.css"
import DatePicker from "react-datepicker";
import Select from 'react-select';
import "react-datepicker/dist/react-datepicker.css";
import { useDispatch, useSelector } from "react-redux"
import { AppDispatch, RootState } from "../store/store"
import { handleDateChange, handleMonthChange, setFilterDay, setFilterMonth, setFilterWeek, setFilterYear } from "../store/slices/graficos"

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
                            <Select 
                                onChange={(e) => dispatch(handleMonthChange(e))}
                                value={monthSelected}
                                options={[
                                    { value: 1, label: "January" },
                                    { value: 2, label: "February" },
                                    { value: 3, label: "March" },
                                    { value: 4, label: "April" },
                                    { value: 5, label: "May" },
                                    { value: 6, label: "June" },
                                    { value: 7, label: "July" },
                                    { value: 8, label: "August" },
                                    { value: 9, label: "September" },
                                    { value: 10, label: "October" },
                                    { value: 11, label: "November" },
                                    { value: 12, label: "December" }
                                ]}
                                className={css.select}
                                components={{ DropdownIndicator: () => null }}
                            />
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