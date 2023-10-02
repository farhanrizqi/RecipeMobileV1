import {StyleSheet, View, Dimensions, ImageBackground} from 'react-native';
import React, {useState, useEffect} from 'react';
import ActionButton from '../../components/ActionButton';
import {useNavigation} from '@react-navigation/native';
import {Input, Text, Icon} from '@rneui/themed';
import discover2Image from '../../assets/img/discover2.png';
import {useDispatch, useSelector} from 'react-redux';
import Toast from 'react-native-toast-message';
import {register} from '../../store/action/auth';

const screenWidth = Dimensions.get('window').width;

const RegisScreen = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const {messageError, isError, isLoading} = useSelector(state => state.regis);
  const [isFocused, setIsFocused] = useState(false);
  const [inputData, setInputData] = useState({
    type: 'user',
    username: '',
    email: '',
    password: '',
  });

  const handleLoginPress = () => {
    try {
      dispatch(register(inputData, navigation));
    } catch (error) {
      console.log(error);
    }
  };

  const handleInput = (name, value) => {
    setInputData({...inputData, [name]: value});
  };

  const handleSignin = () => {
    navigation.navigate('LoginScreens');
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
        <Text style={styles.login}>Register to Recipe App.</Text>
      </View>
      <View>
        <Input
          inputContainerStyle={styles.inputName}
          placeholder="Your Name "
          value={inputData.username}
          onChangeText={text => setInputData({...inputData, username: text})}
          onFocus={handleFocus}
          onBlur={handleBlur}
          leftIcon={<Icon type="feather" name="user" size={16} color="black" />}
        />
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
          value={inputData.password}
          onChangeText={text => setInputData({...inputData, password: text})}
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
            'REGISTER'
          )
        }
        onPress={handleLoginPress}
      />
      <View style={styles.word}>
        <Text>
          <Text style={styles.dont}>Have an account? </Text>
          <Text style={styles.signup} onPress={handleSignin}>
            Sign In
          </Text>
        </Text>
      </View>
      <Toast />
    </View>
  );
};

export default RegisScreen;

const styles = StyleSheet.create({
  main: {
    alignItems: 'center',
  },
  overlay: {
    width: '100%',
    height: '50%',
    backgroundColor: '#EEC302',
  },

  container: {
    alignItems: 'center',
    height: 200,
    borderBottomLeftRadius: 10,
  },

  inputEmail: {
    paddingHorizontal: 20,
    borderWidth: 1,
    backgroundColor: '#EFEFEF',
    borderColor: '#EFEFEF',
    borderRadius: 10,
  },
  inputName: {
    paddingHorizontal: 20,
    marginTop: 20,
    borderWidth: 1,
    backgroundColor: '#EFEFEF',
    borderColor: '#EFEFEF',
    borderRadius: 10,
  },

  inputPass: {
    paddingHorizontal: 20,
    marginBottom: 30,
    borderWidth: 1,
    backgroundColor: '#EFEFEF',
    borderColor: '#EFEFEF',
    borderRadius: 10,
  },

  overlay: {
    // ...StyleSheet.absoluteFillObject,
    width: '100%',
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
