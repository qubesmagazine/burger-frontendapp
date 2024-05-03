import { Image, StyleSheet, Text, View } from 'react-native';
import React, { useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';

const OrderPreparing = () => {
  const navigation = useNavigation();

  useEffect(() => {
    setTimeout(() => {
      // Navigate to the delivery screen
      navigation.navigate('delivery');
    }, 3000); // Example timeout for 3 seconds
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Image
        source={require('../assets/images/bikeguy1.png')}
        style={styles.image}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    height: 320,
    width: 320,
  },
});

export default OrderPreparing;
