import {StyleSheet, Text, View, ImageBackground, Image} from 'react-native';
import React from 'react';
import start1 from '../../assets/img/start2.jpg';
// import iconStart from '../assets/img/home.png';
import ActionButton from '../../components/ActionButton';
import LinearGradient from 'react-native-linear-gradient';
import {useNavigation} from '@react-navigation/native';

const Initial = () => {
  const navigation = useNavigation();

  const handleStart = () => {
    navigation.navigate('Login');
  };
  return (
    <View>
      <ImageBackground
        source={start1}
        style={{
          width: '100%',
          height: '100%',
        }}
      />
      <LinearGradient
        colors={['transparent', 'rgba(239, 200, 26, 0.4)']}
        locations={[0.1, 1]}
        style={{
          width: '100%',
          height: '100%',
          position: 'absolute',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}>
        {/* <Image source={iconStart} style={{width: 65, marginTop: 15}}></Image> */}
        <View style={{marginBottom: 15, paddingHorizontal: 30}}>
          <ActionButton title="Let's Started!" onPress={handleStart} />
          {/* <Text style={{fontSize: 40, color: 'white', fontWeight: 'bold'}}>
            Find and Add your best Recipes
          </Text>
          <Text style={{color: 'white', fontSize: 15, marginBottom: 5}}>
            Try various secret recipes from around the world for your cooking
            today, or you can add your best recipes so the whole world can taste
            your cooking.
          </Text> */}
        </View>
      </LinearGradient>
    </View>
  );
};

export default Initial;

const styles = StyleSheet.create({});
