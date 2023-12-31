import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {StyleSheet, View, Image} from 'react-native';
import {Text, Icon, ListItem} from '@rneui/themed';
import Toast from 'react-native-toast-message';
import {ModalComponent} from '../../components';
import {logout} from '../../store/action/auth';
import {useDispatch, useSelector} from 'react-redux';

const Profiles = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const login = useSelector(state => state.login);
  let popupRef = React.createRef();

  const onShowPopup = () => {
    popupRef.show();
  };

  const onClosePopup = () => {
    popupRef.close();
  };

  const handleLogout = () => {
    onClosePopup();
    Toast.show({
      type: 'success',
      text1: 'Comeback anytime 🥤',
    });

    setTimeout(() => {
      dispatch(logout());
    }, 1000);
  };

  return (
    <View style={styles.primaryContainer}>
      {/* <StatusBar backgroundColor="#EEC302" barStyle="light-content" /> */}
      <View style={styles.overlay}>
        <Image
          source={{uri: login.data.data.user.photos}}
          style={styles.image}
        />
        <Text style={styles.username}>{login.data.data.user.name}</Text>
      </View>
      <View style={styles.profileMenu}>
        <ListItem onPress={() => navigation.push('EditProfile')}>
          <Icon name="user" type="feather" color="#EEC302" />
          <ListItem.Content>
            <ListItem.Title>Edit profile</ListItem.Title>
          </ListItem.Content>
          <ListItem.Chevron />
        </ListItem>
        <ListItem
          onPress={() =>
            navigation.push('MyRecipe', {itemId: login.data.data.user.id})
          }>
          <Icon name="award" type="feather" color="#EEC302" />
          <ListItem.Content>
            <ListItem.Title>My Recipe</ListItem.Title>
          </ListItem.Content>
          <ListItem.Chevron />
        </ListItem>
        <ListItem onPress={() => navigation.push('Bookmark')}>
          <Icon name="bookmark" type="feather" color="#EEC302" />
          <ListItem.Content>
            <ListItem.Title>Bookmarked Recipe</ListItem.Title>
          </ListItem.Content>
          <ListItem.Chevron />
        </ListItem>
        <ListItem onPress={() => navigation.push('Like')}>
          <Icon name="thumbs-up" type="feather" color="#EEC302" />
          <ListItem.Content>
            <ListItem.Title>Liked Recipe</ListItem.Title>
          </ListItem.Content>
          <ListItem.Chevron />
        </ListItem>
        <ListItem>
          <Icon name="log-out" type="feather" color="red" />
          <ListItem.Content>
            <ListItem.Title onPress={onShowPopup} style={{color: 'red'}}>
              Logout
            </ListItem.Title>
          </ListItem.Content>
          <ListItem.Chevron />
        </ListItem>
        <Toast />
        <ModalComponent
          title="Logout"
          message={`Are you sure want to logout?`}
          ref={target => (popupRef = target)}
          onTouchOutside={onClosePopup}
          onPress={handleLogout}
        />
      </View>
    </View>
  );
};

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

export default Profiles;
