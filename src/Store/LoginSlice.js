import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import routes from "../configs/api";


export const login = createAsyncThunk(login, async ({ email, password }, { rejectWithvalue }) => {
    try {
        const response = await axios.post(routes.LOGIN, { email, password });
        return response.data
    } catch (error) {
        return rejectWithvalue(error.response.data)
    }
}
);


