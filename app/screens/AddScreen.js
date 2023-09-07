import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {
  View,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  TextInput,
  Image,
} from 'react-native';
import ActionButton from './../components/ActionButton';
import {Input, Text, Icon, Tile} from '@rneui/themed';
import DropDownPicker from 'react-native-dropdown-picker';
import ImagePicker from 'react-native-image-picker';

function AddScreen() {
  const navigation = useNavigation();
  const [ingredients, setIngredients] = useState('');
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [category, setCategory] = useState([
    {label: 'Appetizer', value: 'appetizer'},
    {label: 'Main Course', value: 'main course'},
    {label: 'Dessert', value: 'dessert'},
  ]);
  const [selectedImage, setSelectedImage] = useState(null);

  const handlePost = () => {
    navigation.navigate('MyRecipeScreen');
  };
  const selectImage = () => {
    const options = {
      title: 'Pilih Gambar',
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };

    ImagePicker.showImagePicker(options, response => {
      if (response.didCancel) {
        // Aksi ketika pengguna membatalkan pemilihan gambar
      } else if (response.error) {
        // Aksi ketika terjadi kesalahan
      } else {
        // Gambar berhasil dipilih, Anda dapat menampilkannya
        setSelectedImage({uri: response.uri});
      }
    });
  };
  return (
    <View style={styles.primaryContainer}>
      <Text style={styles.header}>Add Your Recipe</Text>
      <Input
        inputContainerStyle={styles.title}
        placeholder="Title"
        leftIcon={<Icon type="feather" name="user" size={16} color="#999" />}
      />
      <TextInput
        style={styles.ingredients}
        multiline={true} // Mengizinkan teks berjalan lebih dari satu baris
        numberOfLines={7} // Jumlah baris yang ditampilkan secara default
        placeholder="Ingredients"
        placeholderTextColor="#999" // Ganti warna placeholder sesuai kebutuhan
        textAlign="left" // Posisi horizontal teks di kiri
        textAlignVertical="top"
        value={ingredients}
        onChangeText={setIngredients}
      />
      <DropDownPicker
        style={styles.category}
        open={open}
        value={value}
        items={category}
        setOpen={setOpen}
        setValue={setValue}
        setItems={setCategory}
        placeholder="Choose Category" // Mengganti teks "Select an item" dengan "Pilih item"
        placeholderStyle={{color: '#999'}}
      />

      <View>
        <TouchableOpacity style={styles.add} onPress={selectImage}>
          <Text style={styles.addText}>Choose Image</Text>
        </TouchableOpacity>
        {selectedImage && (
          <Image source={selectedImage} style={{width: 200, height: 200}} />
        )}
      </View>

      <ActionButton title="POST" onPress={handlePost} />
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
  title: {
    right: 10,
    width: 305,
    paddingHorizontal: 20,
    marginTop: 30,
    borderWidth: 1,
    backgroundColor: '#EFEFEF',
    borderColor: '#EFEFEF',
    borderRadius: 10,
  },
  ingredients: {
    paddingHorizontal: 20,
    borderWidth: 1,
    backgroundColor: '#EFEFEF',
    borderColor: '#EFEFEF',
    borderRadius: 10,
    color: 'black',
  },
  add: {
    marginTop: 20,
    height: 50,
    width: 305,
    paddingTop: 13,
    borderWidth: 1,
    backgroundColor: '#EFEFEF',
    borderColor: '#EFEFEF',
    borderRadius: 10,
  },
  addText: {
    paddingHorizontal: 20,
    textAlign: 'left',
    color: '#999',
  },
  category: {
    marginTop: 20,
    width: 305,
    paddingHorizontal: 20,
    borderWidth: 1,
    backgroundColor: '#EFEFEF',
    borderColor: '#EFEFEF',
    borderRadius: 10,
    color: '#fff',
  },
});

export default AddScreen;
