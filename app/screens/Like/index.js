import React from 'react';
import {StyleSheet, Text, View, Dimensions} from 'react-native';
import {Icon} from '@rneui/themed';
import {useNavigation} from '@react-navigation/native';

const Like = () => {
  const navigation = useNavigation();
  return (
    <View
      style={{
        alignContent: 'center',
        justifyContent: 'space-between',
        height: '100%',
      }}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          // backgroundColor: 'cyan',
          width: '100%',
          alignItems: 'center',
          height: 80,
          paddingRight: 20,
        }}>
        <Icon
          type="feather"
          name="chevron-left"
          size={35}
          color="#EFC81A"
          onPress={() => navigation.goBack()}
        />
        <Text
          style={{
            fontSize: 30,
            color: '#EFC81A',
            fontWeight: '700',
            // marginRight: 70,
            textAlignVertical: 'center',
          }}>
          Liked Recipe
        </Text>
        <Text
          style={{fontSize: 30, color: '#EFC81A', fontWeight: '700'}}></Text>
      </View>
      <Text style={{textAlign: 'center', marginBottom: 350}}>
        No liked recipe
      </Text>
    </View>
  );
};

export default Like;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    width: Dimensions.get('window').width,
    // width: '100%',
  },

  content: {
    // backgroundColor: 'grey',
    width: '100%',
  },
});
