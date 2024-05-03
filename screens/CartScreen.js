import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  ScrollView,
} from "react-native";
import React, { useEffect, useState } from "react";
import { featured } from "../constants";
import { useNavigation } from "@react-navigation/native";
import * as Icon from "react-native-feather";
import { themeColors } from "../theme";
import {useDispatch, useSelector} from 'react-redux'
import { selectRestaurant } from "../slices/RestaurantSlice";
import { removeFromCart, selectCartItems, selectCartTotal } from "../slices/CartSlice";

const CartScreen = () => {
  const restaurant = useSelector(selectRestaurant)
  const navigation = useNavigation();
  const cartItems = useSelector(selectCartItems);
  const cartTotal = useSelector(selectCartTotal);
  const [groupedItems, setGroupedItems] = useState({})
const dispatch = useDispatch()
const deliveryFee = 2;


  useEffect(() => {
     const items = cartItems.reduce((group, item) => {
      if(group[item.id]){
        group[item.id].push(item)
      }else {
        group[item.id] = [item]
      }
      return group;
     },{})

setGroupedItems(items)
  }, [cartItems])

  
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={styles.backButton}
        >
          <Icon.ArrowLeft strokeWidth={3} stroke="white" />
        </TouchableOpacity>
      </View>

      <View style={styles.cartHeader}>
        <Text style={styles.cartTitle}>Your Cart</Text>
        <Text style={styles.restaurantName}>{restaurant.name}</Text>
      </View>

      <View style={styles.deliveryInfo}>
        <Image
          source={require("../assets/images/bikeguy4.png")}
          style={styles.deliveryImage}
        />
        <Text style={styles.deliveryText}>Delivery in 20-30 minutes</Text>
        <TouchableOpacity style={styles.changeButton}>
          <Text style={styles.changeText}>Change</Text>
        </TouchableOpacity>
      </View>

      <ScrollView
        contentContainerStyle={styles.scrollContent}
      >
        {Object.entries(groupedItems).map(([key, items]) => {
          let dish = items[0];
          return (
          <View key={key} style={styles.dishRow}>
            <Text style={styles.dishText}>{items.length} x</Text>
            <Image style={styles.dishImage} source={dish.image} />
            <Text style={styles.dishName}>{dish.name}</Text>
            <Text style={styles.dishPrice}>${dish.price}</Text>
            <TouchableOpacity 
            onPress={() => dispatch(removeFromCart({ id: dish.id }))}
            style={styles.removeButton}
          
            >
              <Icon.Minus strokeWidth={2} height={20} width={20} stroke="white" />
            </TouchableOpacity>
          </View>
          )
})
        
        }
      </ScrollView>

      {/* totals */}
      <View style={styles.totalsContainer}>
        <View style={styles.totalsRow}>
          <Text style={styles.totalsText}>Subtotal</Text>
          <Text style={styles.totalsText}>${cartTotal}</Text>
        </View>
        <View style={styles.totalsRow}>
          <Text style={styles.totalsText}>Delivery Fee</Text>
          <Text style={styles.totalsText}>${deliveryFee}</Text>
        </View>
        <View style={styles.totalsRow}>
          <Text style={styles.totalsBoldText}>Order Total</Text>
          <Text style={styles.totalsBoldText}>${deliveryFee+cartTotal}</Text>
        </View>
        <TouchableOpacity style={styles.placeOrderButton}
         onPress={() => navigation.navigate('OrderPrepairing')}
        >
          <Text style={styles.placeOrderText}>Place Order</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  header: {
    position: "relative",
    paddingVertical: 16,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
  },
  backButton: {
    position: "absolute",
    top: 10,
    left: 16,
    backgroundColor: themeColors.bgColor(1),
    borderRadius: 50,
    padding: 8,
    shadowOpacity: 0.2,
    shadowOffset: { width: 1, height: 1 },
    shadowRadius: 2,
  },
  cartHeader: {
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 16,
  },
  cartTitle: {
    fontWeight: "bold",
    fontSize: 24,
  },
  restaurantName: {
    color: "gray",
  },
  deliveryInfo: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingVertical: 12,
    backgroundColor: themeColors.bgColor(0.2),
  },
  deliveryImage: {
    width: 80,
    height: 80,
    borderRadius: 50,
  },
  deliveryText: {
    flex: 1,
    paddingLeft: 16,
  },
  changeButton: {
    paddingHorizontal: 8,
  },
  changeText: {
    fontWeight: "bold",
    color: themeColors.text,
  },
  scrollContent: {
    paddingBottom: 50,
  },
  dishRow: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 12,
    paddingHorizontal: 16,
    backgroundColor: "white",
    borderRadius: 20,
    marginHorizontal: 10,
    marginBottom: 10,
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 1 },
    shadowRadius: 2,
  },
  dishText: {
    color: themeColors.text,
    fontWeight: 'bold'
  },
  dishImage: {
    height: 56,
    width: 56,
    borderRadius: 28,
    marginLeft: 5
  },
  dishName: {
    flex: 1,
    paddingLeft: 16,
    fontWeight: "bold",
    color: "gray",
  },
  dishPrice: {
    fontWeight: "bold",
    marginRight: 10
  },
  removeButton: {
    backgroundColor: themeColors.bgColor(1),
    padding: 8,
    borderRadius: 50,
  },
  totalsContainer: {
    backgroundColor: themeColors.bgColor(0.2),
    padding: 16,
    borderRadius: 20,
  },
  totalsRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 8,
  },
  totalsText: {
    color: "gray",
  },
  totalsBoldText: {
    fontWeight: "bold",
    color: "gray",
  },
  placeOrderButton: {
    backgroundColor: themeColors.bgColor(1),
    padding: 16,
    borderRadius: 50,
  },
  placeOrderText: {
    fontWeight: "bold",
    color: "white",
    textAlign: "center",
  },
});

export default CartScreen;
