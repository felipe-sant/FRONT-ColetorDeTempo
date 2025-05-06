import GraficoTemperatura from "../components/GraficoTemperatura"
import css from "../styles/pages/home.module.css"
import DatePicker from "react-datepicker";
import Select from 'react-select';
import "react-datepicker/dist/react-datepicker.css";
import { useDispatch, useSelector } from "react-redux"
import { AppDispatch, RootState } from "../store/store"
import { handleDateChange, handleMonthChange, setFilterDay, setFilterMonth, setFilterWeek, setFilterYear, setSeachType } from "../store/slices/graficos"
import GraficoUmidade from "../components/GraficoUmidade";
import getTemperaturaDaily from "../services/asyncThunk/getDataDaily";
import { useEffect, useState } from "react";
import loadingImage from "../static/rotate.svg"
import errorImage from "../static/error.svg"

function Home() {
    const dispatch = useDispatch<AppDispatch>()
    const {
        filtroType,
        daySelected,
        monthSelected,
        temperatura,
        umidade,
        loading,
        error,
        errorMessage,
        searchType
    } = useSelector((state: RootState) => state.grafico)

    useEffect(() => {
        dispatch(setFilterDay())
    }, [])

    useEffect(() => {
        if (searchType === "day") {
            dispatch(getTemperaturaDaily(daySelected))
            dispatch(setSeachType("none"))
        }
    })

    return (
        <>
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
                            <img src="images/calendar.svg" className={css.calendar} alt="" />
                        </div>
                    </div>
                    <div
                        className={filtroType === "week" ? css.filtro__select + " " + css.filtro__select__active : css.filtro__select}
                        onClick={() => dispatch(setFilterWeek())}
                    >Week</div>
                    {/* 
                    <div
                        className={filtroType === "month" ? css.filtro__select + " " + css.filtro__select__active : css.filtro__select}
                        onClick={() => dispatch(setFilterMonth())}
                    >Month
                        <div className={css.tab}> 
                            <Select 
                                onChange={(e) => dispatch(handleMonthChange(e))}
                                value={monthSelected}
                                options={[
                                    { value: 1, label: "Janeiro" },
                                    { value: 2, label: "Fevereiro" },
                                    { value: 3, label: "Março" },
                                    { value: 4, label: "Abril" },
                                    { value: 5, label: "Maio" },
                                    { value: 6, label: "Junho" },
                                    { value: 7, label: "Julho" },
                                    { value: 8, label: "Agosto" },
                                    { value: 9, label: "Setembro" },
                                    { value: 10, label: "Octubro" },
                                    { value: 11, label: "Novembro" },
                                    { value: 12, label: "Dezembro" }
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
                    */}
                </div>
                <div className={css.container}>
                    {loading || error ? <>
                    </> : <>
                        <GraficoTemperatura temperatura={temperatura} />
                        <GraficoUmidade umidade={umidade} />
                    </>}
                </div>
                {loading ? <>
                    <div className={css.loading}>
                        <img src={loadingImage} alt="" />
                        <strong>Carregando...</strong>
                    </div>
                </> : <></>}
                {error && !loading ? <>
                    <div className={css.error}>
                        <img src={errorImage} alt="" />
                        <strong>{errorMessage} :(</strong>
                    </div>
                </> : <></>}
            </main>
        </>
    )
}

export default Home