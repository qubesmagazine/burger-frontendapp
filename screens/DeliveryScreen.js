import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import MapView, { Marker } from 'react-native-maps';
import { themeColors } from '../theme';
import * as Icon from 'react-native-feather';
import { useDispatch, useSelector } from 'react-redux';
import { selectRestaurant } from '../slices/RestaurantSlice';
import { emptyCart } from '../slices/CartSlice';

const DeliveryScreen = () => {
  const restaurant = useSelector(selectRestaurant);
  const navigation = useNavigation();
  const dispatch = useDispatch()

  const cansleOrder = () => {
    navigation.navigate('Home')
    dispatch(emptyCart());
  }

  const initialLatitude = restaurant ? restaurant.lat : 6.5244; 
  const initialLongitude = restaurant ? restaurant.lng : 3.3792; 

  return (
    <View style={styles.container}>
      <MapView
        initialRegion={{
          latitude: initialLatitude,
          longitude: initialLongitude,
          latitudeDelta: 0.01,
          longitudeDelta: 0.01,
        }}
        style={styles.map}
        mapType="standard"
      >
        {restaurant && (
          <Marker
            coordinate={{
              latitude: restaurant.lat,
              longitude: restaurant.lng,
            }}
            title={restaurant.name}
            description={restaurant.description}
            pinColor={themeColors.bgColor(1)}
          />
        )}
      </MapView>

      <View style={styles.bottomContainer}>
        <View style={styles.infoHeader}>
          <View>
            <Text style={styles.estimatedArrival}>
              Estimated Arrival
            </Text>
            <Text style={styles.time}>
              20-30 Minutes
            </Text>
            <Text style={styles.onTheWay}>
              Your order is on its way!
            </Text>
          </View>
          <Image style={styles.deliveryGuyImage} source={require('../assets/images/bikeguy2.png')} />
        </View>

        <View style={styles.riderInfo}>
          <View style={styles.riderImageContainer}>
            <Image style={styles.riderImage} source={require('../assets/images/bikeguy3.png')} />
          </View>
          <View style={styles.riderDetails}>
            <Text style={styles.riderName}>Okwy Tech</Text>
            <Text style={styles.riderRole}>Your Rider</Text>
          </View>
          <View style={styles.actions}>
            <TouchableOpacity style={styles.callButton}>
              <Icon.Phone fill={themeColors.bgColor(1)} stroke={themeColors.bgColor(1)} strokeWidth={1} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.closeButton} onPress={cansleOrder}>
              <Icon.X stroke={'red'} strokeWidth={4} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    flex: 1,
  },
  bottomContainer: {
    backgroundColor: 'white',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    marginTop: -12,
  },
  infoHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 20,
  },
  estimatedArrival: {
    fontSize: 18,
    color: 'gray',
    fontWeight: '600',
  },
  time: {
    fontSize: 30,
    fontWeight: '800',
  },
  onTheWay: {
    marginTop: 8,
    fontSize: 16,
    color: 'gray',
  },
  deliveryGuyImage: {
    width: 50,
    height: 50,
  },
  riderInfo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: themeColors.bgColor(0.8),
    padding: 10,
    borderRadius: 40,
   marginBottom: 20,
   marginHorizontal: 5
  },
  riderImageContainer: {
    backgroundColor: 'rgba(255,255,255,0.4)',
    padding: 10,
    borderRadius: 50,
  },
  riderImage: {
    height: 64,
    width: 64,
    borderRadius: 50,
  },
  riderDetails: {
    flex: 1,
    marginLeft: 10,
  },
  riderName: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 18,
  },
  riderRole: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 18,
  },
  actions: {
    flexDirection: 'row',
    gap: 8,
  },
  callButton: {
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 50,
  },
  closeButton: {
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 50,
  },
});

export default DeliveryScreen;
