import { createSelector } from 'reselect';
export const getIsLoading = state => state.contacts.isLoading;
export const getError = state => state.contacts.error;

const getContacts = state => state.contacts.items;
const getFilter = state => state.filter;

export const getFilteredContacts = createSelector(
  [getContacts, getFilter],
  (contacts, filter) => {
    return contacts.filter(item =>
      item.name.toLowerCase().trim().includes(filter.toLowerCase().trim())
    );
  }
);
