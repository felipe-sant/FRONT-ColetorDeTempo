import { createAsyncThunk } from "@reduxjs/toolkit";
import BackendConnection from "../BackendConnection";

const getTemperaturaDaily = createAsyncThunk("get/temperaturaDaily", async (date?: Date) => {
    return await BackendConnection.getTemperatureDaily(date)
})

export default getTemperaturaDaily