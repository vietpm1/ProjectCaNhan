import {FlatList, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Animated, {
  Extrapolation,
  interpolate,
  interpolateColor,
  useAnimatedScrollHandler,
  useAnimatedStyle,
  useSharedValue,
} from 'react-native-reanimated';

const images = [
  {
    uri: 'https://www.vietnamworks.com/hrinsider/wp-content/uploads/2023/12/mot-chiec-hinh-nen-vua-dang-yeu-vua-huyen-ao-cho-ban-nu.jpg',
  },
  {uri: 'https://via.placeholder.com/300/00FF00/FFFFFF?text=2'},
  {uri: 'https://via.placeholder.com/300/0000FF/FFFFFF?text=3'},
  {uri: 'https://via.placeholder.com/300/0000FF/FFFFFF?text=3'},
];

const Carousel = ({data, renderItem}) => {
  const translateY = useSharedValue(0);

  // Hàm xử lý sự kiện cuộn
  const scrollHandler = useAnimatedScrollHandler(event => {
    translateY.value = event.contentOffset.y;
  });

  return (
    <View style={styles.container}>
      <Animated.FlatList
        renderItem={renderItem}
        data={data}
        keyExtractor={(item, index) => index.toString()}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onScroll={scrollHandler}
        scrollEventThrottle={16}
      />
      <View style={styles.dotContainer}>
        {data.map((item, index) => {
          const inputRange = [
            (index - 1) * translateY.value,
            translateY.value * index,
            translateY.value * (index + 1),
          ];

          const outpuRange = [8, 16, 8];
          const outpuRangeColor = [
            'rgb(255, 99, 71)',
            'rgb(0, 0, 255)',
            'rgb(255, 99, 71)',
          ];

          const dotStyle = useAnimatedStyle(() => {
            return {
              width: interpolate(
                translateY,
                inputRange,
                outpuRange,
                Extrapolation.CLAMP,
              ),
              backgroundColor: interpolateColor(
                translateY,
                inputRange,
                outpuRangeColor,
              ),
            };
          });

          return <Animated.View key={index} style={[styles.dot, dotStyle]} />;
        })}
      </View>
    </View>
  );
};

export default Carousel;

const styles = StyleSheet.create({
  dotContainer: {
    alignSelf: 'center',
    flexDirection: 'row',
    columnGap: 10,
  },
  container: {
    width: 'auto',
    height: 'auto',
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    marginLeft: 3,
    marginRight: 3,
  },
});
