import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {StyleSheet, View, Image} from 'react-native';
import {Text, Icon, ListItem} from '@rneui/themed';
import avatar from '../assets/img/discover2.png';

function ProfileScreen() {
  const navigation = useNavigation();

  const handleMyRecipe = () => {
    navigation.navigate('MyRecipeScreen');
  };
  const handleSaveAndLike = () => {
    navigation.navigate('SaveAndLikeScreen');
  };

  return (
    <View style={styles.primaryContainer}>
      {/* <StatusBar backgroundColor="#EEC302" barStyle="light-content" /> */}
      <View style={styles.overlay}>
        <Image source={avatar} style={styles.image} />
        <Text style={styles.username}>Farhan Rizqi</Text>
      </View>
      <View style={styles.profileMenu}>
        <ListItem>
          <Icon name="user" type="feather" color="#EEC302" />
          <ListItem.Content>
            <ListItem.Title>Edit profile</ListItem.Title>
          </ListItem.Content>
          <ListItem.Chevron />
        </ListItem>
        <ListItem onPress={handleMyRecipe}>
          <Icon name="award" type="feather" color="#EEC302" />
          <ListItem.Content>
            <ListItem.Title>My Recipe</ListItem.Title>
          </ListItem.Content>
          <ListItem.Chevron />
        </ListItem>
        <ListItem onPress={handleSaveAndLike}>
          <Icon name="bookmark" type="feather" color="#EEC302" />
          <ListItem.Content>
            <ListItem.Title>Saved Recipe</ListItem.Title>
          </ListItem.Content>
          <ListItem.Chevron />
        </ListItem>
        <ListItem>
          <Icon name="thumbs-up" type="feather" color="#EEC302" />
          <ListItem.Content>
            <ListItem.Title>Liked Recipe</ListItem.Title>
          </ListItem.Content>
          <ListItem.Chevron />
        </ListItem>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  primaryContainer: {
    // paddingHorizontal: 18,
    height: '100%',
    width: '100%',
    backgroundColor: '#f5f5f5',
  },
  overlay: {
    width: '100%',
    height: '50%',
    alignItems: 'center',
    paddingTop: '20%',
    backgroundColor: '#EEC302',
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 100,
  },
  username: {
    marginTop: 20,
    color: 'white',
    fontSize: 20,
  },
  profileMenu: {
    width: '100%',
    height: '100%',
    bottom: 30,
    backgroundColor: 'white',
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    paddingHorizontal: 10,
    paddingTop: 10,
  },
});

export default ProfileScreen;
