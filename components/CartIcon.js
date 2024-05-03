import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { themeColors } from '../theme';
import { useNavigation } from '@react-navigation/native';
import { useSelector } from 'react-redux';
import { selectCartItems, selectCartTotal } from '../slices/CartSlice';

const CartIcon = () => {
  const navigation = useNavigation();
  const cartItems = useSelector(selectCartItems);
  const cartTotal = useSelector(selectCartTotal);

  if (cartItems.length === 0) return null;

  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => navigation.navigate('Cart')}
        style={styles.button}
      >
        <View style={styles.cartCount}>
          <Text style={styles.cartCountText}>{cartItems.length}</Text>
        </View>
        <Text style={styles.viewCartText}>View Cart</Text>
        <Text style={styles.totalPrice}>${cartTotal}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 20,
    width: '100%',
    zIndex: 50,
  },
  button: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 20,
    borderRadius: 20,
    padding: 12,
    paddingVertical: 10,
    backgroundColor: themeColors.bgColor(1),
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  cartCount: {
    padding: 8,
    paddingHorizontal: 16,
    borderRadius: 20,
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
  },
  cartCountText: {
    fontWeight: 'bold',
    color: 'white',
    fontSize: 18,
  },
  viewCartText: {
    flex: 1,
    textAlign: 'center',
    fontWeight: 'bold',
    color: 'white',
    fontSize: 18,
  },
  totalPrice: {
    fontWeight: 'bold',
    color: 'white',
    fontSize: 18,
  },
});

export default CartIcon;
