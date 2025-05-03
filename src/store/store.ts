import { configureStore } from '@reduxjs/toolkit';
import graficoReducer from './slices/graficos';

export const store = configureStore({
    reducer: {
        grafico: graficoReducer,
    }
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
