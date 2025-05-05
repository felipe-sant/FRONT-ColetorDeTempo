import { createAsyncThunk } from "@reduxjs/toolkit";
import BackendConnection from "../BackendConnection";

const getDataDaily = createAsyncThunk("get/daily", async (date?: Date) => {
    return await BackendConnection.getDataDaily(date)
})

export default getDataDaily