import { createActions } from 'redux-actions';

export const {
    addUser,
    editUser,
    deleteUser
} = createActions(
    'ADD_USER',
    'EDIT_USER',
    'DELETE_USER'
);