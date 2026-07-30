import { createAsyncStorage } from '@react-native-async-storage/async-storage/jest';
import { configureStore, createSlice } from '@reduxjs/toolkit';
import { v4 } from 'uuid';

export const mapContacts = (contact) => {
  const { name, picture, phone, cell, email } = contact;
  return {
    id: phone,
    name: `${name?.first} ${name?.last}`,
    avatar: picture.large,
    phone,
    cell,
    email,
    favorite: Math.random() < 0.1 ? true : false,
  };
};

const contactSlice = createSlice({
    name: 'contacts',
    initialState:{
        contacts: []
    },
    // dùng để lấy dữ liệu va thay đổi
    reducers: {
        fetchContactSuccess: (state, action) => {
            state.contacts = action.payload;
        }
    }
})

export const { fetchContactSuccess } = contactSlice.actions;

// nơi chứa dữ liệu
const store = configureStore({
    reducer: contactSlice.reducer
})
export default store;

export const storeAsync = createAsyncStorage("storeData");
