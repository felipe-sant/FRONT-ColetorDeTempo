import { createAsyncThunk } from "@reduxjs/toolkit";
import BackendConnection from "../BackendConnection";

const getDataWeek = createAsyncThunk("get/week", async () => {
    return await BackendConnection.getDataWeek()
})

export default getDataWeek