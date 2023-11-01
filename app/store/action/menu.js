import axios from 'axios';
import Toast from 'react-native-toast-message';
import {logout} from './auth';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {API_URL} from '@env';

export const getMenu = () => async dispatch => {
  try {
    const token = await AsyncStorage.getItem('token');
    if (!token) {
      throw new Error('Token not found in AsyncStorage');
    }

    const headers = {
      Authorization: `Bearer ${token}`,
    };

    dispatch({type: 'GET_MENU_REQUEST'});

    const response = await axios.get(
      `https://kind-gray-hippopotamus-tie.cyclic.app/recipe`,
      {headers},
    );

    console.log(response);
    if (response.data) {
      dispatch({type: 'GET_MENU_SUCCESS', payload: response.data});
      console.log('Success');
    } else {
      console.log('Invalid response data:', response.data);

      if (response.data && response.data.message) {
        // Atur pesan kesalahan sesuai dengan respons API Anda
        dispatch({type: 'GET_MENU_ERROR', payload: response.data.message});
      } else {
        // Atau gunakan pesan kesalahan default jika tidak ada pesan kesalahan dari respons
        dispatch({type: 'GET_MENU_ERROR', payload: 'Invalid response data'});
      }
    }
  } catch (err) {
    console.error('Error:', err);

    if (
      err.response?.data?.data?.message ===
      'Login session expired, please login again'
    ) {
      Toast.show({
        type: 'error',
        text1: err.response.data.data.message,
      });

      setTimeout(() => {
        dispatch(logout());
      }, 4000);
    } else {
      dispatch({type: 'GET_MENU_ERROR', payload: err.message});
    }
  }
};

export const getMenuDetails = id => async dispatch => {
  try {
    const token = await AsyncStorage.getItem('token');
    if (!token) {
      throw new Error('Token not found in AsyncStorage');
    }

    const headers = {
      Authorization: `Bearer ${token}`,
    };

    dispatch({type: 'GET_MENU_DETAILS_REQUEST'});

    const response = await axios.get(
      `https://kind-gray-hippopotamus-tie.cyclic.app/recipe/id/${id}`,
      {headers},
    );

    if (response.data) {
      dispatch({type: 'GET_MENU_DETAILS_SUCCESS', payload: response.data});
      console.log('Success');
    } else {
      console.log('Invalid response data:', response.data);
    }
  } catch (err) {
    console.error('Error:', err);

    if (
      err.response?.data?.message ===
      'Login session expired, please login again'
    ) {
      Toast.show({
        type: 'error',
        text1: err.response.data.message,
      });

      setTimeout(() => {
        dispatch(logout());
      }, 4000);
    } else {
      dispatch({type: 'GET_MENU_DETAILS_ERROR', payload: err.message});
    }
  }
};

export const getMenuUsers = id => async dispatch => {
  try {
    const token = await AsyncStorage.getItem('token');
    if (!token) {
      throw new Error('Token not found in AsyncStorage');
    }

    const headers = {
      Authorization: `Bearer ${token}`,
    };

    dispatch({type: 'GET_MENU_USERS_REQUEST'});

    const response = await axios.get(
      `https://kind-gray-hippopotamus-tie.cyclic.app/recipe/users/${id}`,
      {
        headers,
      },
    );

    if (response.data) {
      console.log('ini response data: ', response);
      dispatch({type: 'GET_MENU_USERS_SUCCESS', payload: response.data});
      console.log('Success');
    } else {
      console.log('Invalid response data:', response.data);
    }
  } catch (err) {
    console.error('Error:', err);

    if (
      err.response?.data?.message ===
      'Login session expired, please login again'
    ) {
      Toast.show({
        type: 'error',
        text1: err.response.data.message,
      });

      setTimeout(() => {
        dispatch(logout());
      }, 4000);
    } else {
      dispatch({
        type: 'GET_MENU_USERS_ERROR',
        payload: err.response.data.message,
      });
    }
  }
};

export const deleteRecipe = id => async dispatch => {
  try {
    const token = await AsyncStorage.getItem('token');
    if (!token) {
      throw new Error('Token not found in AsyncStorage');
    }

    const headers = {
      Authorization: `Bearer ${token}`,
    };

    dispatch({type: 'DELETE_MENU_REQUEST'});

    const response = await axios.delete(
      `https://kind-gray-hippopotamus-tie.cyclic.app/recipe/${id}`,
      {headers},
    );

    if (response.data && response.data.message) {
      dispatch({type: 'DELETE_MENU_SUCCESS', payload: response.data});
      console.log('Success');
      Toast.show({
        type: 'success',
        text1: 'Recipe Successfully Deleted!',
      });
      dispatch(getMenuUsers(id));
    } else {
      console.log('Invalid response data:', response.data);
    }
  } catch (err) {
    console.error('Error:', err);

    if (
      err.response?.data?.message ===
      'Login session expired, please login again'
    ) {
      Toast.show({
        type: 'error',
        text1: err.response.data.message,
      });

      setTimeout(() => {
        dispatch(logout());
      }, 3000);
    } else {
      dispatch({type: 'DELETE_MENU_ERROR', payload: err.message});
    }
  }
};

export const addRecipe = dataRecipe => async dispatch => {
  try {
    const token = await AsyncStorage.getItem('token');
    if (!token) {
      throw new Error('Token not found in AsyncStorage');
    }

    const headers = {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'multipart/form-data',
    };

    dispatch({type: 'POST_RECIPE_REQUEST'});

    const result = await axios.post(
      `https://kind-gray-hippopotamus-tie.cyclic.app/recipe`,
      dataRecipe,
      {
        headers,
      },
    );
    console.log('result', result);

    dispatch({
      type: 'POST_RECIPE_SUCCESS',
      payload: result.data.data,
    });
    Toast.show({
      type: 'success',
      text1: 'Recipe Successfully Added!',
    });
    dispatch(getMenu());
  } catch (error) {
    if (
      error.response?.data?.data?.message ===
      'Login session expired, please login again'
    ) {
      Toast.show({
        type: 'error',
        text1: error.response.data.data.message,
      });

      setTimeout(() => {
        dispatch(logout());
      }, 4000);
    } else {
      dispatch({
        type: 'POST_RECIPE_FAILED',
        payload: error.response,
      });
      console.log(error);
      Toast.show({
        type: 'error',
        text1: error.response.data.data.message,
      });
    }
  }
};

export const putRecipe = (id, data) => async dispatch => {
  try {
    const token = await AsyncStorage.getItem('token');
    if (!token) {
      throw new Error('Token not found in AsyncStorage');
    }

    const headers = {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'multipart/form-data',
    };

    dispatch({type: 'PUT_RECIPE_REQUEST'});

    const result = await axios.put(
      `https://kind-gray-hippopotamus-tie.cyclic.app/recipe/${id}`,
      data,
      {
        headers,
      },
    );
    console.log('result', result);

    dispatch({
      type: 'PUT_RECIPE_SUCCESS',
      payload: result.data.data,
    });
    Toast.show({
      type: 'success',
      text1: 'Success',
      text2: 'Recipe Successfully Edited!',
    });
    dispatch(getMenu());
    dispatch(getMenuDetails(id));
  } catch (error) {
    if (
      error.response?.data?.message ===
      'Login session expired, please login again'
    ) {
      Toast.show({
        type: 'error',
        text1: error.response.data.message,
      });

      setTimeout(() => {
        dispatch(logout());
      }, 4000);
    } else {
      dispatch({
        type: 'PUT_RECIPE_FAILED',
        payload: error.message ? error.message : 'Unknown Error',
      });
      console.log('Error reason : ', error);
      Toast.show({
        type: 'error',
        text1: error.message,
      });
    }
  }
};

export const updateProfile = (id, dataUser) => async dispatch => {
  try {
    const token = await AsyncStorage.getItem('token');
    if (!token) {
      throw new Error('Token not found in AsyncStorage');
    }

    const headers = {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'multipart/form-data',
    };

    dispatch({type: 'PUT_PROFILE_REQUEST'});

    const result = await axios.put(
      `https://kind-gray-hippopotamus-tie.cyclic.app/users/${id}`,
      dataUser,
      {
        headers,
      },
    );
    console.log('result', result);

    dispatch({
      type: 'PUT_PROFILE_SUCCESS',
      payload: result.data.data,
    });
    Toast.show({
      type: 'success',
      text1: 'Success',
      text2: 'Please login again for update',
    });
    setTimeout(() => {
      dispatch(logout());
    }, 2000);
  } catch (error) {
    if (
      error.response?.data?.message ===
      'Login session expired, please login again'
    ) {
      Toast.show({
        type: 'error',
        text1: error.response.data.message,
      });

      setTimeout(() => {
        dispatch(logout());
      }, 4000);
    } else {
      dispatch({
        type: 'PUT_PROFILE_FAILED',
        payload: error.response,
      });
      console.log(error);
      console.log(id);
      console.log(dataUser);
      // console.log(token);
      Toast.show({
        type: 'error',
        text1: error.response.data.message,
      });
    }
  }
};
