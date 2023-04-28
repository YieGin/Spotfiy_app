import {createSlice} from '@reduxjs/toolkit';
import productData from './productData';
import Episodes from './Episodes';
import RecentlyData from './RecentlyData';
import SearchData from './SearchData';

const initialState = {
  cart: [],
  items: productData,
  Episodes: Episodes,
  RecentlyData: RecentlyData,
  SearchData: SearchData,
};

export const UserSlice = createSlice({
  name: 'Users',
  initialState,
  reducers: {},
});

export default UserSlice.reducer;
