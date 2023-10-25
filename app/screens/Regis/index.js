import {
  StyleSheet,
  View,
  Dimensions,
  ImageBackground,
  SafeAreaView,
  ScrollView,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import ActionButton from '../../components/ActionButton';
import {useNavigation} from '@react-navigation/native';
import {Input, Text, Icon} from '@rneui/themed';
import discover2Image from '../../assets/img/discover2.png';
import {useDispatch, useSelector} from 'react-redux';
import Toast from 'react-native-toast-message';
import {register} from '../../store/action/auth';

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

const Regis = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const {messageError, isError, isLoading} = useSelector(state => state.regis);
  const [isFocused, setIsFocused] = useState(false);
  const [inputData, setInputData] = useState({
    type: 'user',
    name: '',
    email: '',
    pass: '',
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
    navigation.navigate('Login');
  };

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  return (
    <ScrollView>
      <SafeAreaView>
        <View style={styles.main}>
          <Text style={styles.welcome}>Welcome !</Text>
          <Text style={styles.login}>Register to Recipe App.</Text>
        </View>
        <View>
          <Input
            inputContainerStyle={styles.inputName}
            placeholder="Your Name "
            value={inputData.name}
            onChangeText={text => setInputData({...inputData, name: text})}
            onFocus={handleFocus}
            onBlur={handleBlur}
            leftIcon={
              <Icon type="feather" name="user" size={16} color="black" />
            }
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
            leftIcon={
              <Icon type="feather" name="user" size={16} color="black" />
            }
          />
        </View>
        <View>
          <Input
            inputContainerStyle={styles.inputPass}
            placeholder="Password "
            value={inputData.pass}
            onChangeText={text => setInputData({...inputData, pass: text})}
            leftIcon={
              <Icon type="feather" name="lock" size={16} color="black" />
            }
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
      </SafeAreaView>
    </ScrollView>
  );
};

export default Regis;

const styles = StyleSheet.create({
  main: {
    alignItems: 'center',
    justifyContent: 'center',
  },

  container: {
    alignItems: 'center',
    height: screenHeight,
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

  logo: {
    ...StyleSheet.absoluteFillObject,
    width: 100,
    height: 100,
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
