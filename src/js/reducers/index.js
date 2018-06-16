import { combineReducers } from 'redux';
import { handleActions } from 'redux-actions';
import { addUser, deleteUser, editUser } from '../actions';
import { loadState } from '../../localStorage';

const stateFromLocalStorage = loadState();
const defaultState = (stateFromLocalStorage && stateFromLocalStorage.users) || {
  userList: [
    {firstName: 'Иван', middleName: 'Иванович', lastName: 'Иванов' },
    {firstName: 'Петр', middleName: 'Петрович', lastName: 'Петров' },
    {firstName: 'Василий', middleName: 'Васильевич', lastName: 'Васильев' },
    {firstName: 'Тест1', middleName: 'Тест1', lastName: 'Тест1' },
    {firstName: 'Тест2', middleName: 'Тест2', lastName: 'Тест2' },
    {firstName: 'Тест3', middleName: 'Тест3', lastName: 'Тест3' },
    {firstName: 'Тест4', middleName: 'Тест4', lastName: 'Тест4' },
    {firstName: 'Тест5', middleName: 'Тест5', lastName: 'Тест5' },
    {firstName: 'Тест6', middleName: 'Тест6', lastName: 'Тест6' },
    {firstName: 'Тест7', middleName: 'Тест7', lastName: 'Тест7' },
    {firstName: 'Тест8', middleName: 'Тест8', lastName: 'Тест8' },
    {firstName: 'Тест9', middleName: 'Тест9', lastName: 'Тест9' },
    {firstName: 'Тест10', middleName: 'Тест10', lastName: 'Тест10' },
    {firstName: 'Тест11', middleName: 'Тест11', lastName: 'Тест11' },
    {firstName: 'Тест12', middleName: 'Тест12', lastName: 'Тест12' },
    {firstName: 'Тест13', middleName: 'Тест13', lastName: 'Тест13' },
    {firstName: 'Тест14', middleName: 'Тест14', lastName: 'Тест14' },
  ]
};
const users = handleActions(
  {
    [addUser]: (state, action) => ({ ...state, userList: [...state.userList, action.payload]}),
    [editUser]: (state, action) => ({ ...state, ...state.userList.splice(action.payload.id, 1, action.payload.userObj)}),
    [deleteUser]: (state, action) => ({
      ...state,
      userList: [
        ...state.userList.slice(0, action.payload),
        ...state.userList.slice(action.payload + 1)
      ]}),
  },
  defaultState
);

export const getUserList = state => state.users;

export default combineReducers({ users });