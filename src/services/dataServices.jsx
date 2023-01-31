import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const ratesFetch = createAsyncThunk(
  "rates/ratesFetch",
  async () => {
    try {
      const response = await axios.get(`https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json`);
      return response.data;
    } catch (error) {
      console.log(error);
    }
  }
)
export const dataFetch = createAsyncThunk(
  "data/dataFetch",
  async () => {
    try {
      const response = await axios.get(`https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?valcode=EUR&date=20200302&json`);
      console.log(response.data)
      return response.data;
    } catch (error) {
      console.log(error);
    }
  }
)

