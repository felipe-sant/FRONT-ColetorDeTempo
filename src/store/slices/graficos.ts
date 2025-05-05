import { createSlice } from "@reduxjs/toolkit"
import Meses from "../../enum/meses"
import getDataDaily from "../../services/asyncThunk/getDataDaily"

const initialState = {
    filtroType: "",
    daySelected: new Date(),
    monthSelected: { value: new Date().getMonth()+1, label: Meses[new Date().getMonth()+1] },
    temperatura: [],
    umidade: [],
    teste: "",
    searchType: "day"
}

const graficosSlice = createSlice({
    name: "graficosDados",
    initialState,
    reducers: {
        handleDateChange: (state, action) => {
            state.daySelected = action.payload
            state.searchType = "day"
        },
        handleMonthChange: (state, action) => {
            state.monthSelected = action.payload
        },
        setFilterDay: (state) => {
            state.filtroType = "day"
            state.searchType = "day"
        },
        setFilterWeek: (state) => {
            state.filtroType = "week"
            // getTemperaturaWeek()
        },
        setFilterMonth: (state) => {
            state.filtroType = "month"
            // getTemperaturaMonth(state.monthSelected.value)
        },
        setFilterYear: (state) => {
            state.filtroType = "year"
            // getTemperaturaYear()
        },
        setSeachType: (state, action) => {
            state.searchType = action.payload
        }
    },
    extraReducers: (builder) => {
        builder.addCase(getDataDaily.rejected, (state, action) => {
            state.temperatura = []
            state.umidade = []
        })
        builder.addCase(getDataDaily.fulfilled, (state, action) => {
            state.temperatura = action.payload.temperatura
            state.umidade = action.payload.umidade
        })
    }
})

export const { 
    handleDateChange, 
    handleMonthChange,
    setFilterDay, 
    setFilterWeek, 
    setFilterMonth, 
    setFilterYear,
    setSeachType
} = graficosSlice.actions

export default graficosSlice.reducer