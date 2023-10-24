import React, {useState, useEffect} from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  FlatList,
  SafeAreaView,
  Dimensions,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
import {getMenuUsers, deleteRecipe, getMenu} from '../../store/action/menu';
import {Icon} from '@rneui/themed';
import Toast from 'react-native-toast-message';
import {ModalComponent} from '../../components';

const Items = ({id, img, title, category, author}) => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const login = useSelector(state => state.login);
  let popupRef = React.createRef();

  const onShowPopup = () => {
    popupRef.show();
  };

  const onClosePopup = () => {
    popupRef.close();
  };

  const handleDelete = () => {
    dispatch(deleteRecipe(id))
      .then(() => {
        onClosePopup();
        dispatch(getMenuUsers(login.data.data.user.id));
        console.log(login.data);
        dispatch(getMenu());
      })
      .catch(error => {
        Toast.show({
          type: 'error',
          text1: error.message,
        });
      });
  };
  console.log('Data in Items: ', {id, img, title, category, author});

  return (
    <SafeAreaView>
      <View style={{width: Dimensions.get('window').width}}>
        <TouchableOpacity
          onPress={() => navigation.push('DetailMenu', {itemId: id})}
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginVertical: 10,
            // paddingRight: 40,
            paddingLeft: 10,
            // marginHorizontal: 30,
            borderRadius: 20,
            justifyContent: 'flex-start',
          }}>
          <View>
            <Image
              style={{height: 100, width: 100, borderRadius: 10}}
              source={{uri: img}}
            />
          </View>
          <View
            style={{
              flexDirection: 'column',
              height: '100%',
              marginLeft: 10,
              width: 130,
            }}>
            <Text
              onPress={() => navigation.push('DetailMenu', {itemId: id})}
              style={{fontSize: 16, fontWeight: 'bold', color: 'black'}}>
              {title}
            </Text>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginTop: 10,
              }}>
              <Text style={{color: 'black'}}>{category}</Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginTop: 15,
              }}>
              {/* <Image
                source={{uri: author_photos}}
                style={{height: 28, width: 28, borderRadius: 50}}
              /> */}
              <Text style={{color: 'black'}}>{author}</Text>
            </View>
          </View>
          <View
            style={{
              // marginLeft: 10,
              width: 90,
              height: '100%',
              alignItems: 'center',
            }}>
            <TouchableOpacity
              onPress={() => navigation.push('EditMenu', {itemId: id})}
              style={{
                backgroundColor: '#30C0F3',
                width: '80%',
                alignItems: 'center',
                justifyContent: 'center',
                height: 30,
                marginTop: 20,
                borderRadius: 8,
              }}>
              <Text style={{color: 'white', fontSize: 15, fontWeight: 'bold'}}>
                Edit
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={onShowPopup}
              style={{
                backgroundColor: '#F57E71',
                width: '80%',
                alignItems: 'center',
                justifyContent: 'center',
                height: 30,
                marginTop: 10,
                borderRadius: 8,
              }}>
              <Text style={{color: 'white', fontSize: 15, fontWeight: 'bold'}}>
                Delete
              </Text>
            </TouchableOpacity>
          </View>
        </TouchableOpacity>
        <ModalComponent
          title="Confirm"
          message={`Are you sure to delete ${title}?`}
          ref={target => (popupRef = target)}
          onTouchOutside={onClosePopup}
          onPress={handleDelete}
        />
      </View>
    </SafeAreaView>
  );
};

const MyRecipe = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const login = useSelector(state => state.login);
  const getMenuByUsers = useSelector(state => state.getMenuByUsers);
  const {data, isSuccess, isError} = getMenuByUsers;

  let deviceWidth = Dimensions.get('window').width;

  console.log(data);

  useEffect(() => {
    dispatch(getMenuUsers(login.data.data.user.id));
    console.log(login.data.data.user.id);
  }, [dispatch, login.data.data.user.id]);

  return (
    <View style={styles.container}>
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
          // marginLeft={10}
          onPress={() => navigation.goBack()}
        />
        <Text
          style={{
            fontSize: 30,
            color: '#EFC81A',
            fontWeight: '700',
            // marginLeft: 60,
          }}>
          My Recipe
        </Text>
        <Text style={{fontSize: 30, color: '#EFC81A', fontWeight: '700'}}>
          {/* {data.data ? data.data.length : 0} */}
        </Text>
      </View>

      {isError ? (
        <Text style={{textAlign: 'center', marginTop: 300}}>
          Recipe not found
        </Text>
      ) : (
        <View style={styles.content}>
          {data.data && data.data.length > 0 ? (
            <FlatList
              marginBottom={200}
              data={data.data}
              renderItem={({item}) => (
                <Items
                  id={item.id}
                  img={item.img}
                  title={item.title}
                  category={item.category}
                  navigation={navigation}
                  author={item.author}
                  // photos={item.author_photos}
                />
              )}
            />
          ) : (
            <Text style={{textAlign: 'center', marginTop: 300}}>
              Recipe not found
            </Text>
          )}
        </View>
      )}
      <Toast />
    </View>
  );
};

export default MyRecipe;

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
