import { createSlice } from "@reduxjs/toolkit"
import Meses from "../../enum/meses"
import getDataDaily from "../../services/asyncThunk/getDataDaily"
import getDataWeek from "../../services/asyncThunk/getDataWeek"

const initialState = {
    filtroType: "day",
    daySelected: new Date(),
    monthSelected: { value: new Date().getMonth() + 1, label: Meses[new Date().getMonth() + 1] },
    temperatura: [],
    umidade: [],
    loading: true,
    error: false,
    errorMessage: "",
    searchType: "day"
}

const graficosSlice = createSlice({
    name: "graficosDados",
    initialState,
    reducers: {
        handleDateChange: (state, action) => {
            if (state.loading) return
            state.daySelected = action.payload
            state.searchType = "day"
        },
        handleMonthChange: (state, action) => {
            if (state.loading) return
            state.monthSelected = action.payload
        },
        setFilterDay: (state) => {
            if (state.loading) return
            if (state.filtroType !== "day") state.searchType = "day"
            state.filtroType = "day"
        },
        setFilterWeek: (state) => {
            if (state.loading) return
            state.filtroType = "week"
            state.searchType = "week"
        },
        setFilterMonth: (state) => {
            if (state.loading) return
            state.filtroType = "month"
        },
        setFilterYear: (state) => {
            if (state.loading) return
            state.filtroType = "year"
        },
        setSeachType: (state, action) => {
            state.searchType = action.payload
        }
    },
    extraReducers: (builder) => {
        builder.addCase(getDataDaily.pending, (state) => {
            state.loading = true
        })
        builder.addCase(getDataDaily.rejected, (state) => {
            state.temperatura = []
            state.umidade = []
            state.error = true
            state.errorMessage = "Erro ao buscar dados"
            state.loading = false
        })
        builder.addCase(getDataDaily.fulfilled, (state, action) => {
            state.loading = false
            if (!action.payload.temperatura || !action.payload.umidade) {
                state.error = true
                state.errorMessage = "Erro ao buscar dados"
                return
            }
            if (!action.payload.temperatura) {
                state.error = true
                state.errorMessage = "Erro ao buscar temperatura"
                return
            }
            if (!action.payload.umidade) {
                state.error = true
                state.errorMessage = "Erro ao buscar umidade"
                return
            }
            state.error = false
            state.temperatura = action.payload.temperatura
            state.umidade = action.payload.umidade
        })

        builder.addCase(getDataWeek.pending, (state) => {
            state.loading = true
        })
        builder.addCase(getDataWeek.rejected, (state) => {
            state.temperatura = []
            state.umidade = []
            state.error = true
            state.errorMessage = "Erro ao buscar dados"
            state.loading = false
        })
        builder.addCase(getDataWeek.fulfilled, (state, action) => {
            state.loading = false
            if (!action.payload.temperatura || !action.payload.umidade) {
                state.error = true
                state.errorMessage = "Erro ao buscar dados"
                return
            }
            if (!action.payload.temperatura) {
                state.error = true
                state.errorMessage = "Erro ao buscar temperatura"
                return
            }
            if (!action.payload.umidade) {
                state.error = true
                state.errorMessage = "Erro ao buscar umidade"
                return
            }
            state.error = false
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