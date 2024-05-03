import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { themeColors } from '../theme';
import * as Icon from 'react-native-feather';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, removeFromCart, selectCartItemsById } from '../slices/CartSlice';

const DishRow = ({ item }) => {
  const dispatch = useDispatch();
  const totalItems = useSelector(state => selectCartItemsById(state, item.id));

  const handleIncrease = () => {
    dispatch(addToCart({ ...item }));
  };

  const handleDecrease = () => {
    if (totalItems.length > 0) {
      dispatch(removeFromCart({ id: item.id }));
    }
  };

  return (
    <View style={styles.container}>
      <Image style={styles.image} source={item.image} />
      <View style={styles.detailsContainer}>
        <View style={styles.textContainer}>
          <Text style={styles.title}>{item.name}</Text>
          <Text style={styles.description}>{item.description}</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.price}>${item.price}</Text>
          <View style={styles.counterContainer}>
            <TouchableOpacity
              style={[styles.counterButton, totalItems.length === 0 && styles.disabledCounter]}
              onPress={handleDecrease}
              disabled={!totalItems.length}
            >
              <Icon.Minus strokeWidth={2} height={20} width={20} stroke={'white'} />
            </TouchableOpacity>
            <Text style={styles.counterText}>{totalItems.length}</Text>
            <TouchableOpacity
              style={styles.counterButton}
              onPress={handleIncrease}
            >
              <Icon.Plus strokeWidth={2} height={20} width={20} stroke={'white'} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    padding: 12,
    borderRadius: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    marginBottom: 10,
    marginHorizontal: 5,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 20,
  },
  detailsContainer: {
    flex: 1,
    marginLeft: 10,
  },
  textContainer: {
    paddingLeft: 10,
    marginBottom: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  description: {
    color: 'gray',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  price: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'gray',
  },
  counterContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  counterButton: {
    backgroundColor: themeColors.bgColor(1),
    borderRadius: 20,
    padding: 5,
  },
  disabledCounter: {
    opacity: 0.5,
  },
  counterText: {
    paddingHorizontal: 10,
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default DishRow;
