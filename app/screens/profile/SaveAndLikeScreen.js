import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {
  View,
  StyleSheet,
  FlatList,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  TextInput,
  Image,
} from 'react-native';
import {Input, Text, Icon, Tile} from '@rneui/themed';

const data = [
  {
    id: '1',
    title: 'Vegetables Pizza',
    category: 'Makanan',
    imageUri: require('../../assets/img/pizza1.png'),
  },
  {
    id: '2',
    title: 'Meat Pizza',
    category: 'Makanan',
    imageUri: require('../../assets/img/pizza2.png'),
  },
  // Tambahkan data lainnya sesuai kebutuhan
];

const Item = ({item}) => {
  const [isLiked, setIsLiked] = useState(false);
  const [isBookmarked, setIsBookmarked] = useState(false);

  const handleLike = () => {
    setIsLiked(!isLiked);
  };

  const handleBookmark = () => {
    setIsBookmarked(!isBookmarked);
  };
  return (
    <View style={styles.itemContainer}>
      <Image source={item.imageUri} style={styles.image} />
      <View style={styles.infoContainer}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.category}>{item.category}</Text>
        <View style={styles.infoProfile}>
          <Icon
            name="user"
            type="feather"
            color="#EFC81A"
            size={15}
            style={{marginRight: 5}}
          />
          <Text>Farhan</Text>
        </View>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={[
            styles.buttonFeature,
            isLiked && {backgroundColor: '#EFC81A'}, // Ganti warna saat tombol "Like" diklik
          ]}
          onPress={handleLike}>
          <Icon
            name="thumbs-up"
            type="feather"
            color={isLiked ? '#fff' : '#EFC81A'}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.buttonFeature,
            isBookmarked && {backgroundColor: '#EFC81A'}, // Ganti warna saat tombol "Bookmark" diklik
          ]}
          onPress={handleBookmark}>
          <Icon
            name="bookmark"
            type="feather"
            color={isBookmarked ? '#fff' : '#EFC81A'}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

function SaveAndLikeScreen() {
  return (
    <View style={styles.primaryContainer}>
      <Text style={styles.header}>Saved Recipe</Text>
      <ScrollView style={styles.container}>
        {data.map(item => (
          <Item key={item.id} item={item} />
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  primaryContainer: {
    paddingHorizontal: 15,
    height: '100%',
    width: '100%',
    backgroundColor: '#f5f5f5',
    alignContent: 'center',
    justifyContent: 'center',
  },
  header: {
    fontFamily: 'Poppins',
    fontWeight: 'light', // Atur berat font menjadi light
    color: '#EFC81A', // Atur warna teks
    textAlign: 'center', // Teks berada di tengah
    fontSize: 26, // Ukuran font
    marginTop: 15,
  },
  container: {
    flex: 1,
    marginTop: 10,
    padding: 5,
  },
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
    padding: 10,
    backgroundColor: 'white',
    borderRadius: 10,
  },
  image: {
    width: 69,
    height: 69,
    borderRadius: 8,
  },
  infoContainer: {
    flex: 1,
    marginLeft: 16,
  },
  infoProfile: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  title: {
    fontSize: 12,
  },
  category: {
    fontSize: 12,
    marginTop: 2,
  },
  buttonContainer: {
    flexDirection: 'row',
    paddingBottom: 5,
  },
  buttonFeature: {
    backgroundColor: '#f5f5f5',
    padding: 8,
    marginHorizontal: 5,
    borderRadius: 10,
    borderColor: '#EFC81A',
    borderWidth: 1,
    marginTop: 8,
  },
});

export default SaveAndLikeScreen;
