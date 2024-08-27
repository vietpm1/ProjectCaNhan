import React from 'react';
import {
  View,
  Image,
  StyleSheet,
} from 'react-native';
import Swiper from 'react-native-swiper';

const images = [
  {
    uri: 'https://www.vietnamworks.com/hrinsider/wp-content/uploads/2023/12/mot-chiec-hinh-nen-vua-dang-yeu-vua-huyen-ao-cho-ban-nu.jpg',
  },
  {uri: 'https://via.placeholder.com/300/00FF00/FFFFFF?text=2'},
  {uri: 'https://via.placeholder.com/300/0000FF/FFFFFF?text=3'},
  {uri: 'https://via.placeholder.com/300/0000FF/FFFFFF?text=3'},
];

const TestSlide = () => {
  return (
    <View style={styles.container}>
      <View style={{height: 200}}>
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
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  wrapper: {
    height: 200,
  },
  slide: {
    flex: 1,
  },
  image: {
    width: '100%',
    height: 200, // Adjust this height to resize the images
  },
  dot: {
    backgroundColor: 'gray',
    width: 8,
    height: 8,
    borderRadius: 4,
    marginLeft: 3,
    marginRight: 3,
  },
  activeDot: {
    backgroundColor: '#00F',
    width: 16,
    height: 8,
    borderRadius: 4,
    marginLeft: 3,
    marginRight: 3,
  },
  pagination: {
    bottom: 10,
  },
});

export default TestSlide;
