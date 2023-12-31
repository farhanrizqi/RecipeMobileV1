import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  SafeAreaView,
  FlatList,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import {Icon, SearchBar, Image} from '@rneui/themed';
import {useDispatch, useSelector} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
import {getMenu} from '../../store/action/menu';

const Items = ({id, img, title, category, navigation, author, photos}) => {
  return (
    <SafeAreaView>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          marginTop: 10,
          marginBottom: 10,
          borderRadius: 20,
          marginLeft: 30,
        }}>
        <Image
          onPress={() => navigation.push('DetailMenu', {itemId: id})}
          style={{height: 100, width: 100, borderRadius: 10}}
          source={{uri: img}}
        />
        <View
          style={{
            flexDirection: 'column',
            height: '100%',
            marginLeft: 10,
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
            <Text style={{fontSize: 10, fontWeight: 'bold', color: 'black'}}>
              {category}
            </Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginTop: 15,
            }}>
            <Image
              source={{uri: photos}}
              style={{
                height: 30,
                width: 30,
                borderRadius: 50,
              }}
            />
            <Text
              style={{
                marginLeft: 5,
                fontSize: 10,
                fontWeight: 'bold',
                color: 'black',
              }}>
              {author}
            </Text>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

const Search = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const [searchMenu, setSearchMenu] = useState('');
  const [recipe, setRecipe] = useState(null);
  const {getMenuReducers} = useSelector(state => ({
    getMenuReducers: state.getMenuReducers,
  }));
  const {data, isSuccess} = getMenuReducers;
  const [currentPage, setCurrentPage] = useState(1);
  const [focusedItem, setFocusedItem] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [categoryCounts, setCategoryCounts] = useState({});
  const [allRecipes, setAllRecipes] = useState([]);
  const [filteredRecipes, setFilteredRecipes] = useState([]);
  const [currentData, setCurrentData] = useState([]);
  const itemsPerPage = 5;

  useEffect(() => {
    dispatch(getMenu());
  }, [dispatch]);

  const filterAndPaginateRecipes = (searchText, page) => {
    let filteredData = allRecipes;

    if (searchText) {
      filteredData = filteredData.filter(item =>
        item.title.toLowerCase().includes(searchText.toLowerCase()),
      );
    }

    if (selectedCategory !== 'All') {
      filteredData = filteredData.filter(
        item => item.category.toLowerCase() === selectedCategory.toLowerCase(),
      );
    }

    const startIndex = (page - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const paginatedData = filteredData.slice(startIndex, endIndex);

    setRecipe(paginatedData);
    setCurrentData(paginatedData);
  };

  const goToPreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);

      if (selectedCategory === 'All') {
        const startIndex = (currentPage - 2) * itemsPerPage;
        const endIndex = (currentPage - 1) * itemsPerPage;
        const previousData = allRecipes.slice(startIndex, endIndex);
        setRecipe(previousData);
        setCurrentData(previousData);
      } else {
        const startIndex = (currentPage - 2) * itemsPerPage;
        const endIndex = (currentPage - 1) * itemsPerPage;
        const previousData = allRecipes
          .filter(
            item =>
              item.category.toLowerCase() === selectedCategory.toLowerCase(),
          )
          .slice(startIndex, endIndex);
        setRecipe(previousData);
        setCurrentData(previousData);
      }
    }
  };

  const goToNextPage = () => {
    const totalPages = Math.ceil(
      (searchMenu ? totalItems : allRecipes.length) / itemsPerPage,
    );
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);

      if (selectedCategory === 'All') {
        const startIndex = currentPage * itemsPerPage;
        const endIndex = Math.min((currentPage + 1) * itemsPerPage, totalItems);
        const nextData = allRecipes.slice(startIndex, endIndex);
        setRecipe(nextData);
        setCurrentData(nextData);
      } else {
        const startIndex = currentPage * itemsPerPage;
        const endIndex = Math.min((currentPage + 1) * itemsPerPage, totalItems);
        const nextData = allRecipes
          .filter(
            item =>
              item.category.toLowerCase() === selectedCategory.toLowerCase(),
          )
          .slice(startIndex, endIndex);
        setRecipe(nextData);
        setCurrentData(nextData);
      }
    }
  };

  useEffect(() => {
    if (isSuccess && data && data.data) {
      const recipeData = data.data.slice(0, itemsPerPage);
      console.log(recipeData);
      setRecipe(recipeData);

      setAllRecipes(data.data);
      setFilteredRecipes(data.data);

      const counts = data.data.reduce((acc, item) => {
        const category = item.category.toLowerCase();
        acc[category] = (acc[category] || 0) + 1;
        return acc;
      }, {});
      setCategoryCounts(counts);
    }
  }, [isSuccess, data]);

  const handleSearchChange = text => {
    setSearchMenu(text);
    filterAndPaginateRecipes(text, 1);
  };

  const handleItemPress = id => {
    if (focusedItem === id) {
      setFocusedItem(null);
    } else {
      setFocusedItem(id);
    }
  };

  const renderItem = ({item}) => (
    <TouchableOpacity
      onPress={() => handleItemPress(item.id)}
      style={{
        backgroundColor: focusedItem === item.id ? '#00E092' : 'white',
      }}>
      <Items
        id={item.id}
        img={item.img}
        title={item.title}
        category={item.category}
        navigation={navigation}
        author={item.author}
        photos={item.author_photos}
      />
    </TouchableOpacity>
  );

  const handleCategoryChange = category => {
    setSelectedCategory(category);

    if (category === 'All') {
      setRecipe(filteredRecipes.slice(0, itemsPerPage));
      setCurrentPage(1);
    } else {
      const filteredData = filteredRecipes.filter(
        item => item.category.toLowerCase() === category.toLowerCase(),
      );

      setRecipe(filteredData.slice(0, itemsPerPage));
      setCurrentPage(1);
    }
  };

  // const filterRecipes = (searchText, category) => {
  //   if (!searchText) {
  //     if (category === 'All') {
  //       setRecipe(data.data.slice(0, itemsPerPage));
  //     } else {
  //       const filteredData = data.data.filter(
  //         item => item.category.toLowerCase() === category.toLowerCase(),
  //       );
  //       setRecipe(filteredData.slice(0, itemsPerPage));
  //     }
  //   } else {
  //     const filteredData = data.data.filter(
  //       item =>
  //         item.title.toLowerCase().includes(searchText.toLowerCase()) &&
  //         (category === 'All' ||
  //           item.category.toLowerCase() === category.toLowerCase()),
  //     );

  //     const startIndex = (currentPage - 1) * itemsPerPage;
  //     const endIndex = startIndex + itemsPerPage;
  //     const paginatedData = filteredData.slice(startIndex, endIndex);

  //     setRecipe(paginatedData);
  //   }
  // };

  const countFilteredItems = () => {
    let filteredData = filteredRecipes;
    if (searchMenu) {
      filteredData = filteredData.filter(item =>
        item.title.toLowerCase().includes(searchMenu.toLowerCase()),
      );
    } else if (selectedCategory !== 'All') {
      filteredData = filteredData.filter(
        item => item.category.toLowerCase() === selectedCategory.toLowerCase(),
      );
    }
    return filteredData.length;
  };

  const totalItems = countFilteredItems();

  const totalPages = Math.ceil(totalItems / itemsPerPage);

  // console.log(recipe);

  return (
    <SafeAreaView
      style={{
        flex: 1,
        marginBottom: 200,
      }}>
      <View
        style={{
          // flex: 1,
          backgroundColor: 'white',
        }}>
        <View style={styles.containerUtility}>
          <SearchBar
            inputContainerStyle={{
              backgroundColor: '#EFEFEF',
              borderColor: 'EFEFEF',
              borderRadius: 10,
              color: 'black',
            }}
            containerStyle={{
              backgroundColor: '#EFEFEF',
              padding: 0,
              fontSize: 16,
              backgroundColor: '#F5F5F5',
              width: '100%',
              marginTop: 20,
              borderRadius: 10,
              color: 'black',
            }}
            placeholder="What do you want to cook ?"
            value={searchMenu}
            onChangeText={handleSearchChange}
            lightTheme={true}
            showCancel={true}
          />
          <ScrollView
            style={styles.filter}
            horizontal={true}
            showsHorizontalScrollIndicator={false}>
            <TouchableOpacity
              style={[
                styles.categoryButton,
                selectedCategory === 'All' && styles.selectedCategoryButton,
              ]}
              onPress={() => handleCategoryChange('All')}>
              <Text style={styles.categoryButtonText}>All</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[
                styles.categoryButton,
                selectedCategory === 'Appetizer' &&
                  styles.selectedCategoryButton,
              ]}
              onPress={() => handleCategoryChange('Appetizer')}>
              <Text style={styles.categoryButtonText}>Appetizer</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[
                styles.categoryButton,
                selectedCategory === 'Main Course' &&
                  styles.selectedCategoryButton,
              ]}
              onPress={() => handleCategoryChange('Main Course')}>
              <Text style={styles.categoryButtonText}>Main Course</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[
                styles.categoryButton,
                selectedCategory === 'Dessert' && styles.selectedCategoryButton,
              ]}
              onPress={() => handleCategoryChange('Dessert')}>
              <Text style={styles.categoryButtonText}>Dessert</Text>
            </TouchableOpacity>
          </ScrollView>
        </View>

        <FlatList
          style={{}}
          data={recipe}
          renderItem={renderItem}
          keyExtractor={item => item.id}
        />
        <View style={styles.pagination}>
          <TouchableOpacity
            onPress={goToPreviousPage}
            style={[
              styles.paginationButton,
              currentPage === 1 && styles.disabledPaginationButton,
            ]}
            disabled={currentPage === 1}>
            <Icon type="feather" name="chevron-left" size={30} color="white" />
          </TouchableOpacity>
          <Text>{`${Math.min(
            (currentPage - 1) * itemsPerPage + 1,
            totalItems,
          )}-${Math.min(
            currentPage * itemsPerPage,
            totalItems,
          )} of ${totalItems}`}</Text>
          <TouchableOpacity
            onPress={goToNextPage}
            style={[
              styles.paginationButton,
              currentPage * itemsPerPage >= totalItems &&
                styles.disabledPaginationButton,
            ]}
            disabled={currentPage * itemsPerPage >= totalItems}>
            <Icon type="feather" name="chevron-right" size={30} color="white" />
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Search;

const styles = StyleSheet.create({
  containerUtility: {
    paddingHorizontal: 10,
  },
  pagination: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 20,
    marginRight: 20,
  },

  paginationButton: {
    backgroundColor: '#EFC81A',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    marginHorizontal: 15,
    padding: 5,
  },

  disabledPaginationButton: {
    backgroundColor: '#ccc',
  },

  filter: {
    flexDirection: 'row',
    marginTop: 10,
    marginBottom: 10,
  },

  categoryButton: {
    backgroundColor: '#F5F5F5',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 10,
    marginRight: 10,
  },

  selectedCategoryButton: {
    backgroundColor: '#EFC81A',
  },

  categoryButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'black',
  },
});
