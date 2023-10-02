import axios from 'axios';
import Toast from 'react-native-toast-message';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useNavigation} from '@react-navigation/native';
import {API_URL} from '@env';

export const postLogin = data => async dispatch => {
  const navigation = useNavigation();
  try {
    dispatch({type: 'LOGIN_REQUEST'});
    const result = await axios.post(
      `https://kind-gray-hippopotamus-tie.cyclic.app/users/login`,
      data,
    );
    console.log('result data ', result.data);
    console.log('result token ', result.data.data.token);

    if (result.data && result.data.data.token) {
      await AsyncStorage.setItem('token', result.data.data.token);
    } else {
      console.log(
        'Token tidak ditemukan dalam respons atau nilainya null/undefined.',
      );
    }

    result.data && dispatch({type: 'LOGIN_SUCCESS', payload: result.data});
    result.data && console.log('success');
  } catch (err) {
    console.log('err', err);
    console.log('Data: ', data);
    if (err.response && err.response.data && err.response.data.message) {
      Toast.show({
        type: 'error',
        text1: err.response.data.message,
      });
      console.log('Error : ', err.response.data.message);
      dispatch({type: 'LOGIN_ERROR', payload: err.response.data.message});
    } else {
      // Handle kesalahan jika tidak ada pesan kesalahan yang diterima
      console.log('Terjadi kesalahan tanpa pesan.');
    }
  }
};

export const logout = () => {
  return async dispatch => {
    // console.log('get token', getState().login.data.token);
    console.log(await AsyncStorage.getItem('token'));
    dispatch({type: 'DELETE_TOKEN'});
  };
};

export const register = (data, navigation) => async dispatch => {
  try {
    dispatch({type: 'REGISTER_REQUEST'});
    const result = await axios.post(
      `https://kind-gray-hippopotamus-tie.cyclic.app/users/regis`,
      data,
    );
    console.log('result data ', result.data);
    result.data &&
      dispatch({type: 'REGISTER_SUCCESS', payload: result.data.message});
    result.data && console.log('success');
    Toast.show({
      type: 'success',
      text1: 'Registration Successful!',
    });
    setTimeout(() => {
      navigation.replace('Loginn');
    }, 2000);
  } catch (err) {
    console.log('err');
    console.log(err.response.data.message);
    dispatch({type: 'REGISTER_ERROR', payload: err.response.data.message});
    Toast.show({
      type: 'error',
      text1: err.response?.data?.message,
    });
  }
};
