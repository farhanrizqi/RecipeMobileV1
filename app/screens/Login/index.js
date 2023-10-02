import {
  StyleSheet,
  View,
  ImageBackground,
  ActivityIndicator,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import ActionButton from '../../components/ActionButton';
import {useNavigation} from '@react-navigation/native';
import {Input, Text, Icon} from '@rneui/themed';
import discover2Image from '../../assets/img/discover2.png';
import {useDispatch, useSelector} from 'react-redux';
import {postLogin} from '../../store/action/auth';
import Toast from 'react-native-toast-message';

const Login = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const {messageError, isError, isLoading} = useSelector(state => state.login);
  const [isFocused, setIsFocused] = useState(false);
  const [inputData, setInputData] = useState({
    email: '',
    pass: '',
  });

  useEffect(() => {
    if (isError && messageError) {
      Toast.show({
        type: 'error',
        text1: messageError,
      });
    } else if (isError && !messageError) {
      Toast.show({
        type: 'error',
        text1: `Something's Wrong`,
      });
    }
  }, [isError, messageError]);

  const handleLoginPress = () => {
    console.log('inputData in handleLoginPress:', inputData);
    dispatch(postLogin(inputData));
    console.log('input data :', inputData);
  };

  const handleSignup = () => {
    navigation.navigate('RegisScreen');
  };

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  return (
    <View>
      <View style={styles.container}>
        <ImageBackground source={discover2Image} style={styles.overlay} />
      </View>
      <View style={styles.main}>
        <Text style={styles.welcome}>Welcome !</Text>
        <Text style={styles.login}>Log in to your exiting account.</Text>
      </View>
      <View>
        <Input
          inputContainerStyle={styles.inputEmail}
          placeholder="Email Address "
          value={inputData.email}
          onChangeText={text => setInputData({...inputData, email: text})}
          onFocus={handleFocus}
          onBlur={handleBlur}
          leftIcon={<Icon type="feather" name="user" size={16} color="black" />}
        />
      </View>
      <View>
        <Input
          inputContainerStyle={styles.inputPass}
          placeholder="Password "
          value={inputData.pass}
          onChangeText={text => setInputData({...inputData, pass: text})}
          leftIcon={<Icon type="feather" name="lock" size={16} color="black" />}
          secureTextEntry={true}
        />
      </View>
      <View style={styles.forgotCover}>
        <Text style={styles.forgot}>Forgot Password?</Text>
      </View>
      <ActionButton
        title={
          isLoading ? (
            <ActivityIndicator size="small" color="#ffffff" />
          ) : (
            'LOGIN'
          )
        }
        onPress={handleLoginPress}
      />
      <View style={styles.word}>
        <Text>
          <Text style={styles.dont}>Don’t have an account? </Text>
          <Text style={styles.signup} onPress={handleSignup}>
            Sign Up
          </Text>
        </Text>
      </View>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  main: {
    alignItems: 'center',
  },

  container: {
    alignItems: 'center',
    height: 100,
  },

  inputEmail: {
    paddingHorizontal: 20,
    marginTop: 40,
    borderWidth: 1,
    backgroundColor: '#EFEFEF',
    borderColor: '#EFEFEF',
    borderRadius: 10,
  },

  inputPass: {
    paddingHorizontal: 20,
    marginTop: 10,
    marginBottom: 30,
    borderWidth: 1,
    backgroundColor: '#EFEFEF',
    borderColor: '#EFEFEF',
    borderRadius: 10,
  },

  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(239, 200, 26, 0.5)',
    borderBottomLeftRadius: 22,
    borderBottomRightRadius: 22,
  },

  logo: {
    // ...StyleSheet.absoluteFillObject,
    // width: 100,
    // height: 100,
    marginTop: 50,
  },

  welcome: {
    marginTop: 40,
    fontSize: 28,
    color: '#EFC81A',
    fontWeight: 'bold',
  },

  login: {
    color: '#C4C4C4',
    marginBottom: 20,
  },

  forgot: {
    color: '#999999',
    fontSize: 15,
    marginTop: 15,
  },

  forgotCover: {
    alignItems: 'flex-end',
    marginHorizontal: 30,
  },

  dont: {
    color: '#999999',
    fontSize: 15,
  },

  signup: {
    color: '#EFC81A',
    fontSize: 15,
    fontWeight: 'bold',
  },

  word: {
    alignItems: 'center',
    marginTop: 40,
  },
});
