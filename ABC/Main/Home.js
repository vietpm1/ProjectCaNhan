import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  FlatList,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Icon1 from 'react-native-vector-icons/FontAwesome6';
import Swiper from 'react-native-swiper';

const categories = [
  {id: '1', name: 'Chicken', icon: 'drumstick-bite'},
  {id: '2', name: 'Lobster', icon: 'shrimp'},
  {id: '3', name: 'Crab', icon: 'spider'},
  {id: '4', name: 'Fish', icon: 'fish'},
  {id: '5', name: 'Noodle', icon: 'utensils'},
  {id: '6', name: 'Noodle', icon: 'utensils'},
  {id: '7', name: 'Noodle', icon: 'utensils'},
];

const images = [
  {
    uri: 'https://vnn-imgs-a1.vgcloud.vn/streaming1.danviet.vn/upload/3-2019/images/2019-09-26/Top-10-dac-san-hai-san-ngon-nhat-dat-Viet-duoc-sach-Ky-luc-ghi-nhan-n---c-1569493216-width629height377.jpg',
  },
  {uri: 'https://nld.mediacdn.vn/Images/Uploaded/Share/2011/11/23/haisan.jpg'},
  {uri: 'https://quynhontourist.com/wp-content/uploads/2019/12/NG2.jpg'},
];
const products = [
  {
    id: '1',
    name: 'Tôm hùm bông hấp',
    image:
      'https://vnn-imgs-a1.vgcloud.vn/streaming1.danviet.vn/upload/3-2019/images/2019-09-26/Top-10-dac-san-hai-san-ngon-nhat-dat-Viet-duoc-sach-Ky-luc-ghi-nhan-anh-tom-hum-1569492930-width1200height797.jpg',
    price: '$10',
    rating: 4.5,
    discount: '10%',
    quantity: 20,
    status: 'New', // added status
  },
  {
    id: '2',
    name: 'Cua ran me',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsVVy6lcBU8KFdy06tNmQgOFryd_-Htv7V_w&s',
    price: '$22.99',
    rating: 4.7,
    discount: '0%',
    quantity: 15,
    status: 'New', // added status
  },
  {
    id: '3',
    name: 'Cánh gà chiên bột',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQq4lkKgEIYSwY-13RDooGhL-9hPgsNIn6ypQ&s',
    price: '$15.99',
    rating: 4.2,
    discount: '15%',
    quantity: 30,
    status: '', // added status
  },
  {
    id: '4',
    name: 'Noodle Bowl',
    image:
      'https://watermark.lovepik.com/photo/20211210/large/lovepik-fried-instant-noodles-picture_501772141.jpg',
    price: '$9.99',
    rating: 3.8,
    discount: '0%',
    quantity: 50,
    status: '', // added status
  },
  {
    id: '5',
    name: 'Noodle Bowl',
    image:
      'https://watermark.lovepik.com/photo/20211210/large/lovepik-fried-instant-noodles-picture_501772141.jpg',
    price: '$8.99',
    rating: 3.5,
    discount: '25%',
    quantity: 60,
    status: '', // added status
  },
  {
    id: '6',
    name: 'Noodle Bo',
    image:
      'https://watermark.lovepik.com/photo/20211210/large/lovepik-fried-instant-noodles-picture_501772141.jpg',
    price: '$8.99',
    rating: 3.5,
    discount: '25%',
    quantity: 60,
    status: '', // added status
  },
];

const Home = props => {
  const {navigation} = props;
  const [selectedId, setSelectedId] = useState(null);

  const renderCategoryItem = ({item}) => (
    <TouchableOpacity
      style={[
        styles.categoryBox,
        item.id === selectedId && styles.selectedCategoryBox,
      ]}
      onPress={() => setSelectedId(item.id)}>
      <Icon1
        name={item.icon}
        size={24}
        color={item.id === selectedId ? 'white' : 'gray'}
      />
      <Text
        style={[
          styles.categoryText,
          item.id === selectedId && styles.selectedCategoryText,
        ]}>
        {item.name}
      </Text>
    </TouchableOpacity>
  );

  const renderProductItem = ({item}) => {
    const originalPrice = parseFloat(item.price.replace('$', ''));
    const discountAmount =
      (originalPrice * parseFloat(item.discount.replace('%', ''))) / 100;
    const discountedPrice = (originalPrice - discountAmount).toFixed(2);

    return (
      <View style={styles.productHorizontalBox}>
        <Image source={{uri: item.image}} style={styles.ImageProduct} />

        {item.discount !== '0%' && (
          <View style={styles.BoxDiscount}>
            <Text style={{color: 'red', fontWeight: 'bold'}}>
              {item.discount}
            </Text>
          </View>
        )}

        <View style={styles.productDetails}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            {item.status ? (
              <View style={styles.BoxStatus}>
                <Text style={styles.productStatus}>{item.status}</Text>
              </View>
            ) : null}
            <Text style={styles.productName}>
              {item.name.length > 13
                ? item.name.substring(0, 13) + '...'
                : item.name}
            </Text>
          </View>
          {item.discount !== '0%' ? (
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Text style={styles.originalPrice}>{item.price}</Text>
              <Text style={styles.productPrice}>${discountedPrice}</Text>
            </View>
          ) : (
            <Text style={styles.productPrice}>{item.price}</Text>
          )}
        </View>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Icon name="bars" size={20} color="gray" style={styles.icon} />
        <View style={styles.headerTextContainer}>
          <Text style={styles.headerTitle}>Location</Text>
          <View style={{flexDirection: 'row'}}>
            <Icon1
              name="location-dot"
              size={20}
              color="green"
              style={styles.icon}
            />
            <Text style={[styles.headerSubtitle, styles.bold]}>Tp.HCM,</Text>
            <Text style={styles.headerSubtitle}>Việt Nam</Text>
          </View>
        </View>
        <Image
          source={{
            uri: 'https://m.yodycdn.com/blog/avatar-anime-cho-nam-13.jpg',
          }}
          style={styles.CssImage}
        />
      </View>
      <ScrollView>
        <View style={styles.containerGray}>
          <TouchableOpacity
            style={styles.searchContainer}
            onPress={() => navigation.navigate('Search')}>
            <Icon
              name="search"
              size={18}
              color="gray"
              style={styles.searchIcon}
            />
            <TextInput
              style={styles.searchInput}
              placeholder="Tìm kiếm..."
              placeholderTextColor="gray"
              editable={false}
            />

            <Icon
              name="microphone"
              size={18}
              color="gray"
              style={styles.searchIcon}
            />
          </TouchableOpacity>

          <View style={{height: 200, marginTop: 20}}>
            <Swiper
              style={styles.wrapper}
              showsButtons={false}
              autoplay={true}
              autoplayTimeout={3}
              dot={<View style={styles.dot} />}
              activeDot={<View style={styles.activeDot} />}
              paginationStyle={styles.pagination}>
              {images.map((image, index) => (
                <View key={index} style={styles.slide}>
                  <Image source={{uri: image.uri}} style={styles.image} />
                </View>
              ))}
            </Swiper>
          </View>
          <View>
            <FlatList
              scrollEnabled={false}
              data={categories}
              renderItem={renderCategoryItem}
              keyExtractor={item => item.id}
              horizontal={true}
              showsHorizontalScrollIndicator={false}
            />
          </View>

          <View>
            <FlatList
              scrollEnabled={false}
              data={products}
              renderItem={renderProductItem}
              keyExtractor={item => item.id}
              showsVerticalScrollIndicator={false}
            />
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 16,
    backgroundColor: 'white',
  },
  headerTextContainer: {
    flexDirection: 'column',
    alignItems: 'center',
  },
  headerTitle: {
    fontSize: 11,
    color: 'gray',
  },
  headerSubtitle: {
    fontSize: 13,
    color: 'black',
  },
  icon: {
    paddingHorizontal: 10,
  },
  CssImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
    borderWidth: 2,
    borderColor: 'gray',
  },
  containerGray: {
    backgroundColor: '#f8f8f8',
    padding: 16,
    width: '100%',
    height: '90%',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  bold: {
    fontWeight: 'bold',
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 20,
    paddingHorizontal: 10,
    paddingVertical: 8,
    marginTop: 10,
  },
  searchIcon: {
    marginRight: 8,
  },
  searchInput: {
    flex: 1,
    fontSize: 14,
    color: 'black',
    height: 30,
    paddingVertical: 0,
  },
  categoryBox: {
    marginTop: 15,
    width: 55,
    height: 60,
    backgroundColor: 'white',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 8,
    paddingVertical: 5,
  },
  categoryText: {
    color: 'black',
    fontSize: 10,
    marginTop: 4,
    textAlign: 'center',
  },
  selectedCategoryBox: {
    backgroundColor: '#3cb371',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.8,
    shadowRadius: 4,
    elevation: 5,
  },
  selectedCategoryText: {
    color: 'white',
  },
  productHorizontalBox: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 10,
    marginTop: 30,

    marginVertical: 20,
    marginHorizontal: 10,
    shadowColor: 'black',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    width: '95%',
    height: 120,
  },
  ImageProduct: {
    width: 140,
    height: 150,
    borderRadius: 10,
    marginRight: 10,
    position: 'absolute',
    borderColor: 'lightgray',
    borderWidth: 0.5,
  },
  productDetails: {
    position: 'absolute',
    left: 150,
    top: 5,
  },
  productName: {
    marginLeft: 2,
    fontSize: 15,
    fontWeight: 'bold',
    color: 'black',
  },

  wrapper: {
    height: 200,
  },
  slide: {
    flex: 1,
  },
  image: {
    width: '100%',
    height: 200,
    borderRadius: 20,
  },
  dot: {
    backgroundColor: 'white',
    width: 8,
    height: 8,
    borderRadius: 4,
    marginLeft: 3,
    marginRight: 3,
  },
  activeDot: {
    borderColor: 'white',
    borderWidth: 1,
    backgroundColor: 'black',
    width: 9,
    height: 9,
    borderRadius: 4,
    marginLeft: 3,
    marginRight: 3,
  },
  pagination: {
    bottom: 10,
  },
  BoxDiscount: {
    position: 'absolute',
    left: 5,
    top: -10,
    width: 50,
    height: 30,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
  },
  BoxStatus: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 35,
    height: 20,
    backgroundColor: '#67c86b',
    borderRadius: 5,
  },
  originalPrice: {
    fontSize: 13,
    color: 'gray',
    textDecorationLine: 'line-through',
    marginRight: 10,
  },
  productPrice: {
    fontSize: 13,
    color: 'green',
  },
  productStatus: {
    fontSize: 12,
    color: 'white',
    fontWeight: 'bold',
  },
});
