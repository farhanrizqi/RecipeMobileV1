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
    title: 'Resep Enak',
    category: 'Makanan',
    imageUri: require('../../assets/img/pizza1.png'),
  },
  {
    id: '2',
    title: 'Resep Lezat',
    category: 'Makanan',
    imageUri: require('../../assets/img/pizza2.png'),
  },
  // Tambahkan data lainnya sesuai kebutuhan
];

const Item = ({item}) => {
  return (
    <View style={styles.itemContainer}>
      <Image source={item.imageUri} style={styles.image} />
      <View style={styles.infoContainer}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.category}>{item.category}</Text>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.editButton}>
          <Text style={styles.textButton}>Edit</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.deleteButton}>
          <Text style={styles.textButton}>Delete</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

function MyRecipeScreen() {
  return (
    <View style={styles.primaryContainer}>
      <Text style={styles.header}>My Recipe</Text>
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
    paddingHorizontal: 18,
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
    width: 80,
    height: 80,
    borderRadius: 8,
  },
  infoContainer: {
    flex: 1,
    marginLeft: 16,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  category: {
    fontSize: 16,
    marginTop: 4,
  },
  buttonContainer: {
    flexDirection: 'column',
  },
  editButton: {
    backgroundColor: '#30C0F3',
    padding: 8,
    borderRadius: 4,
    marginTop: 8,
  },
  deleteButton: {
    backgroundColor: '#F57E71',
    padding: 8,
    borderRadius: 4,
    marginTop: 8,
  },
  textButton: {
    color: 'white',
    textAlign: 'center',
  },
});

export default MyRecipeScreen;
