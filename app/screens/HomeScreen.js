import React, {useState} from 'react';
import {
  View,
  ImageBackground,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  Image,
} from 'react-native';
import {Input, Text, Icon, Tile} from '@rneui/themed';
import BeefImage from '../assets/img/BeefSteak.png';
import SpaghettiImage from '../assets/img/Spaghetti.png';
import soupImage from '../assets/img/soup.png';
import utensilsImage from '../assets/img/utensils.png';
import fishImage from '../assets/img/fish.png';
// import {SearchBar} from '@rneui/themed';

function HomeScreen({navigation}) {
  const [searchText, setSearchText] = useState('');

  const handleSearch = () => {
    console.log('Searching for:', searchText);
  };

  const handleMoreInfoPress = () => {
    console.log('More info clicked');
  };

  return (
    <ScrollView style={styles.primaryContainer}>
      <Input
        inputContainerStyle={styles.search}
        placeholder="Search.."
        leftIcon={<Icon type="feather" name="search" size={16} color="black" />}
      />

      {/* <SearchBar
        inputContainerStyle={styles.search}
        placeholder="Type Here..."
        // onChangeText={handleSearch}
        // value={searchText}
        platform="android"
        onClearText={() => console.log(onClearText())}
        cancelButtonTitle="Cancel"
        onCancel={() => console.log(onCancel())}
      /> */}

      <View>
        <Text style={{fontSize: 20}}>Popular Recipe</Text>
        <Text style={{fontWeight: 'bold', fontSize: 15}}>Popular Check</Text>
      </View>

      <SafeAreaView style={styles.container}>
        <ScrollView
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          style={styles.scrollView}>
          <View style={styles.carousel}>
            <ImageBackground
              source={require('../assets/img/discover2.png')}
              resizeMode="cover"
              style={styles.image}>
              <Text style={styles.text}>Sandwich</Text>
              <Text style={styles.text}>with Egg</Text>
            </ImageBackground>
          </View>
          <View style={styles.carousel}>
            <ImageBackground
              source={require('../assets/img/detail2.png')}
              resizeMode="cover"
              style={{
                width: 300,
                height: 180,
                borderRadius: 30,
                justifyContent: 'flex-end',
                padding: 15,
              }}>
              <Text style={styles.text}>Chicken</Text>
              <Text style={styles.text}>Steak</Text>
            </ImageBackground>
          </View>
        </ScrollView>
      </SafeAreaView>

      {/* New Recipe */}
      <View style={styles.newRecipeTitle}>
        <Text style={{fontSize: 20, marginTop: 20}}>New Recipe</Text>
        <TouchableOpacity onPress={handleMoreInfoPress}>
          <Text style={styles.moreInfo}>More info</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.newRecipeGrid}>
        <View style={styles.itemContainer}>
          <Image source={soupImage} style={styles.item} />
          <Text style={styles.itemText}>Soup</Text>
        </View>

        <View style={styles.itemContainer}>
          <Image source={utensilsImage} style={styles.item} />

          <Text style={styles.itemText}>Utensils</Text>
        </View>

        <View style={styles.itemContainer}>
          <Image source={fishImage} style={styles.item} />
          <Text style={styles.itemText}>Fish</Text>
        </View>

        <View style={styles.itemContainer}>
          <Image source={utensilsImage} style={styles.item} />
          <Text style={styles.itemText}>Utensils</Text>
        </View>
      </View>

      {/* Popular For U */}
      <View style={styles.popularTitle}>
        <Text style={{fontSize: 20}}>Popular For You</Text>
      </View>

      <SafeAreaView style={styles.container}>
        <ScrollView
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          style={styles.scrollView}>
          <View style={styles.carouselPopular}>
            <ImageBackground
              source={BeefImage}
              resizeMode="cover"
              style={styles.imagePopular}>
              <Text style={styles.textPopular}>Beef Steak</Text>
              <Text
                style={{
                  backgroundColor: 'white',
                  fontWeight: 'bold',
                  paddingLeft: 15,
                  fontSize: 12,
                  paddingBottom: 5,
                }}>
                Beef steak with nopales, tartare ...
              </Text>
            </ImageBackground>
          </View>
          <View style={styles.carouselPopular}>
            <ImageBackground
              source={SpaghettiImage}
              resizeMode="cover"
              style={{
                width: 210,
                height: 161,
                marginRight: 10,
                justifyContent: 'flex-end',
              }}>
              <Text style={styles.textPopular}>Spaghetti</Text>
              <Text
                style={{
                  backgroundColor: 'white',
                  fontWeight: 'bold',
                  paddingLeft: 17,
                  fontSize: 12,
                  paddingBottom: 5,
                }}>
                Beef steak with nopales, tartare ...
              </Text>
            </ImageBackground>
          </View>
        </ScrollView>
      </SafeAreaView>
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  primaryContainer: {
    paddingLeft: 25,
    paddingRight: 25,
    height: 100,
    backgroundColor: '#f5f5f5',
  },
  container: {
    marginTop: 25,
    marginBottom: 25,
  },
  search: {
    paddingHorizontal: 20,
    marginTop: 30,
    borderWidth: 1,
    backgroundColor: '#EFEFEF',
    borderColor: '#EFEFEF',
    borderRadius: 10,
  },

  image: {
    width: 300,
    height: 180,
    marginRight: 10,
    justifyContent: 'flex-end',
    padding: 15,
  },

  carousel: {
    borderRadius: 30,
  },

  text: {
    color: 'white',
    fontSize: 25,
    lineHeight: 25,
    paddingLeft: 10,
    fontWeight: 'bold',
    textAlign: 'left',
  },

  textPopular: {
    color: 'black',
    fontSize: 25,
    paddingLeft: 15,
    // paddingTop: 5,
    // lineHeight: 25,
    fontWeight: 'bold',
    textAlign: 'left',
    backgroundColor: 'white',
  },

  // ! new recipe start
  newRecipeTitle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 15,
  },

  newRecipeGrid: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    flexDirection: 'row',
    marginBottom: 16,
  },
  moreInfo: {
    fontWeight: 'bold',
    fontSize: 15,
    textDecorationLine: 'none',
    color: '#EFC81A',
    marginTop: 20,
  },
  item: {
    width: 50,
    height: 50,
    backgroundColor: 'lightgray',
    borderRadius: 15,
  },

  itemContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 70,
    height: 70,
    marginTop: 4,
  },

  itemText: {
    marginTop: 5,
    fontSize: 12,
    textAlign: 'center',
  },
  // ! new recipe end

  // ! popular start
  subHeader: {
    backgroundColor: 'grey',
    color: 'white',
    textAlign: 'center',
  },
  imagePopular: {
    width: 210,
    height: 161,
    justifyContent: 'flex-end',
  },
  carouselPopular: {
    width: 200,
    height: 160,
    backgroundColor: 'lightgray',
    alignItems: 'center',
    marginRight: 20,
    borderRadius: 10,
    overflow: 'hidden',
  },
  // ! popular end
});

export default HomeScreen;
