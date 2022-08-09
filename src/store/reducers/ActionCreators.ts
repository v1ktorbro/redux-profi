import { AppDispatch } from "../store";
import axios from 'axios';
import { IUser } from "../../models/IUser";
import { userSlice } from "./UserSlice";
import { createAsyncThunk } from "@reduxjs/toolkit";

// export const fetchUsers = () => async (dispatch: AppDispatch) => {
//   try {
//     dispatch(userSlice.actions.usersFetching());
//     const res = await axios.get<IUser[]>('https://jsonplaceholder.typicode.com/useres');
//     dispatch(userSlice.actions.usersFetchingSucces(res.data));
//   } catch (e) {
//     dispatch(userSlice.actions.usersFetchingError(e.message));
//   }
// };

export const fetchUsers = createAsyncThunk(
  'user/fetchAll',
  async (_, thunkAPI) => {
    try {
      const res = await axios.get<IUser[]>('https://jsonplaceholder.typicode.com/users');
      return res.data;
    } catch (e) {
      return thunkAPI.rejectWithValue('Не удалось загрузить поьльзователей');
    }
  }
);