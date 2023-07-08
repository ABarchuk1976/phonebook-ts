import { createSelector } from '@reduxjs/toolkit';

import { selectFilter } from '../../redux/filter/selectors';

export const selectContacts = state => state.contacts.items;

export const selectIsLoading = state => state.contacts.isLoading;

export const selectError = state => state.contacts.error;

export const selectVisibleContacts = createSelector(
  [selectContacts, selectFilter],
  (items, filter) => {
    return !items
      ? []
      : items.filter(item =>
          item.name.toLowerCase().includes(filter.toLowerCase())
        );
  }
);
