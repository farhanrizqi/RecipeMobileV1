import {combineReducers} from 'redux';

import login from './login';
import regis from './regis';
import getMenuReducers from './getMenu';
import {postMenu} from './postMenu';
import getMenuByID from './getMenuByID';
import getMenuByUsers from './getMenuByUsers.js';
import putMenu from './putMenu';
import deleteMenu from './deleteMenu';
import putProfile from './putProfile';

const appReducers = combineReducers({
  login,
  regis,
  getMenuReducers,
  postMenu,
  getMenuByID,
  getMenuByUsers,
  putMenu,
  deleteMenu,
  putProfile,
});

export default appReducers;
