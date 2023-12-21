import { createSlice } from '@reduxjs/toolkit';

const contactsInitialState = { items: [] };

const contactSlice = createSlice({
  name: 'phone',
  initialState: contactsInitialState,
  reducers: {
    addContact(state, action) {
      const { id, name, number } = action.payload;
      const findContact = state.items.find(
        contact => contact.name === name || contact.number === number
      );
      if (!findContact) {
        state.items.push({ id, name, number });
      } else {
        return alert('This contact already exists.');
      }
    },
    deleteContact(state, action) {
      state.items = state.items.filter(item => item.id !== action.payload);
    },
  },
});

export const contactReducer = contactSlice.reducer;
export const { addContact, deleteContact } = contactSlice.actions;
