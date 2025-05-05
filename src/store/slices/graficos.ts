import { createSlice } from "@reduxjs/toolkit"
import temperaturaWeek from "../../test/temperaturaWeek"
import temperaturaDay from "../../test/temperaturaDay"
import temperaturaMonth from "../../test/temperaturaMonth"
import temperaturaYear from "../../test/temperaturaYear"
import Meses from "../../enum/meses"

const initialState = {
    filtroType: "day",
    daySelected: new Date(),
    monthSelected: { value: new Date().getMonth()+1, label: Meses[new Date().getMonth()+1] },
    temperatura: [],
    umidade: [],
}

const graficosSlice = createSlice({
    name: "graficosDados",
    initialState,
    reducers: {
        handleDateChange: (state, action) => {
            state.daySelected = action.payload
        },
        handleMonthChange: (state, action) => {
            state.monthSelected = action.payload
        },
        setFilterDay: (state) => {
            state.filtroType = "day"
            state.temperatura = temperaturaDay // temporary data for testing
            // getTemperaturaDay(state.daySelected)
        },
        setFilterWeek: (state) => {
            state.filtroType = "week"
            state.temperatura = temperaturaWeek // temporary data for testing
            // getTemperaturaWeek()
        },
        setFilterMonth: (state) => {
            state.filtroType = "month"
            state.temperatura = temperaturaMonth // temporary data for testing
            // getTemperaturaMonth()
        },
        setFilterYear: (state) => {
            state.filtroType = "year"
            state.temperatura = temperaturaYear // temporary data for testing
            // getTemperaturaYear()
        }
    }
})

export const { 
    handleDateChange, 
    handleMonthChange,
    setFilterDay, 
    setFilterWeek, 
    setFilterMonth, 
    setFilterYear 
} = graficosSlice.actions

export default graficosSlice.reducer