import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

const url = 'https://kind-gray-hippopotamus-tie.cyclic.app/';

const instance = async () => {
  try {
    const token = await AsyncStorage.getItem('token');
    if (!token) {
      throw new Error('Token not found in AsyncStorage');
    }

    return axios.create({
      baseURL: url,
      headers: {Authorization: `Bearer ${token}`},
    });
  } catch (error) {
    // Handle any errors here
    console.error('Error creating Axios instance:', error);
    throw error; // You can choose to rethrow the error or handle it differently.
  }
};

export {instance};
