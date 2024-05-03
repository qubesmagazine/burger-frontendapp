import React, { useEffect } from "react";
import {
  View,
  ScrollView,
  Image,
  TouchableOpacity,
  StyleSheet,
  Text,
} from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import * as Icon from "react-native-feather";
import { themeColors } from "../theme";
import DishRow from "../components/DishRow";
import CartIcon from "../components/CartIcon";
import { StatusBar } from "expo-status-bar";
import { useDispatch } from "react-redux";
import { setRestautant } from '../slices/RestaurantSlice';


const RestaurantScreen = () => {
  const { params } = useRoute();
  const navigation = useNavigation();
  const item = params;
  const dispatch = useDispatch();

  useEffect(() => {
    if (item && item.id) {
      dispatch(setRestautant({ ...item }));
    }
  }, []);

  return (
    <View style={styles.container}>
      <CartIcon />
      <StatusBar style="light" />
      <ScrollView>
        <View style={styles.imageContainer}>
          <Image style={styles.image} source={item.image} />
          <TouchableOpacity
            style={styles.backButton}
            onPress={() => navigation.goBack()}
          >
            <Icon.ArrowLeft strokeWidth={3} stroke={themeColors.bgColor(1)} />
          </TouchableOpacity>
        </View>
        <View style={styles.infoContainer}>
          <View style={styles.textWrapper}>
            <Text style={styles.title}>{item.name}</Text>
            <View style={styles.row}>
              <View style={styles.row}>
                <Image
                  source={require("../assets/images/star.png")}
                  style={styles.starIcon}
                />
                <Text style={styles.smallText}>
                  <Text style={styles.greenText}>{item.stars}</Text>
                  {` (${item.reviews} reviews) - `}
                  <Text style={styles.boldText}>{item.category}</Text>
                </Text>
              </View>
              <View style={styles.row}>
                <Icon.MapPin color="gray" width="15" height="15" />
                <Text style={styles.grayText}>Nearby - {item.address}</Text>
              </View>
            </View>
            <Text style={styles.description}>{item.description}</Text>
          </View>
        </View>
        <View style={styles.menuContainer}>
          <Text style={styles.menuTitle}>Menu</Text>
          {item.dishes.map((dish, index) => (
            <DishRow item={{ ...dish }} key={index} />
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imageContainer: {
    position: "relative",
  },
  image: {
    width: "100%",
    height: 288,
  },
  backButton: {
    position: "absolute",
    top: 56,
    left: 16,
    backgroundColor: "#f0f0f0",
    padding: 8,
    borderRadius: 100,
    shadowOpacity: 0.3,
    shadowOffset: { width: 1, height: 1 },
    shadowRadius: 2,
  },
  infoContainer: {
    backgroundColor: "white",
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    marginTop: -48,
    paddingTop: 24,
  },
  textWrapper: {
    paddingHorizontal: 12,
  },
  title: {
    fontSize: 33,
    fontWeight: "bold",
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 12,
    gap: 2,
  },
  starIcon: {
    height: 16,
    width: 16,
  },
  smallText: {
    fontSize: 12,
  },
  greenText: {
    color: "green",
  },
  boldText: {
    fontWeight: "bold",
  },
  grayText: {
    color: "gray",
  },
  description: {
    color: "gray",
    marginTop: 8, // Added margin for spacing
  },
  menuContainer: {
    paddingBottom: 36,
    backgroundColor: "white",
  },
  menuTitle: {
    paddingHorizontal: 16,
    paddingVertical: 16,
    fontSize: 24,
    fontWeight: "bold",
  },
});

export default RestaurantScreen;






// import React, { useEffect } from "react";
// import {
//   View,
//   ScrollView,
//   Image,
//   TouchableOpacity,
//   StyleSheet,
//   Text,
// } from "react-native";
// import { useNavigation, useRoute } from "@react-navigation/native";
// import * as Icon from "react-native-feather";
// import { themeColors } from "../theme";
// import DishRow from "../components/DishRow";
// import CartIcon from "../components/CartIcon";
// import { StatusBar } from "expo-status-bar";
// import { useDispatch } from "react-redux";
// import { setRestautant } from '../slices/RestaurantSlice';


// const RestaurantScreen = () => {
//   const route = useRoute();
//   const navigation = useNavigation();
//   const dispatch = useDispatch();

//   // Check if params contain the expected data
//   const item = route.params || {}; // Default to an empty object if undefined
//   const { id, name, image, stars, reviews, category, address, description, dishes } = item;

//   // Dispatch restaurant data to Redux state if 'id' exists
//   useEffect(() => {
//     if (id) {
//       dispatch(setRestautant({ ...item }));
//     }
//   }, [id]);

//   return (
//     <View style={styles.container}>
//       {id ? (
//         <ScrollView>
//           <View style={styles.imageContainer}>
//             <Image style={styles.image} source={{ uri: image }} /> 
//             <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
//               <Icon.ArrowLeft strokeWidth={3} stroke={themeColors.bgColor(1)} />
//             </TouchableOpacity>
//           </View>

//           <View style={styles.infoContainer}>
//             <View style={styles.textWrapper}>
//               <Text style={styles.title}>{name}</Text>

//               <View style={styles.row}>
//                 <Image source={require('../assets/images/star.png')} style={styles.starIcon} />
//                 <Text>
//                   <Text style={styles.greenText}>{stars}</Text> ({reviews} reviews) - 
//                   <Text style={styles.boldText}>{category}</Text>
//                 </Text>
//               </View>

//               <View style={styles.row}>
//                 <Icon.MapPin color="gray" width={15} height={15} />
//                 <Text style={styles.grayText}>Nearby - {address}</Text>
//               </View>

//               <Text style={styles.description}>{description}</Text>
//             </View>
//           </View>

//           <View style={styles.menuContainer}>
//             <Text style={styles.menuTitle}>Menu</Text>
//             {dishes && dishes.map((dish) => <DishRow item={dish} key={dish._id} />)}
//           </View>
//         </ScrollView>
//       ) : (
//         <View style={styles.errorContainer}>
//           <Text style={styles.errorText}>Restaurant data not available</Text>
//         </View>
//       )}
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//   },
//   imageContainer: {
//     position: "relative",
//   },
//   image: {
//     width: "100%",
//     height: 288,
//   },
//   backButton: {
//     position: "absolute",
//     top: 56,
//     left: 16,
//     backgroundColor: "#f0f0f0",
//     padding: 8,
//     borderRadius: 100,
//     shadowOpacity: 0.3,
//     shadowOffset: { width: 1, height: 1 },
//     shadowRadius: 2,
//   },
//   infoContainer: {
//     backgroundColor: "white",
//     borderTopLeftRadius: 40,
//     borderTopRightRadius: 40,
//     marginTop: -48,
//     paddingTop: 24,
//   },
//   textWrapper: {
//     paddingHorizontal: 12,
//   },
//   title: {
//     fontSize: 33,
//     fontWeight: "bold",
//   },
//   row: {
//     flexDirection: "row",
//     alignItems: "center",
//     marginBottom: 12,
//     gap: 2,
//   },
//   starIcon: {
//     height: 16,
//     width: 16,
//   },
//   smallText: {
//     fontSize: 12,
//   },
//   greenText: {
//     color: "green",
//   },
//   boldText: {
//     fontWeight: "bold",
//   },
//   grayText: {
//     color: "gray",
//   },
//   description: {
//     color: "gray",
//     marginTop: 8, // Added margin for spacing
//   },
//   menuContainer: {
//     paddingBottom: 36,
//     backgroundColor: "white",
//   },
//   menuTitle: {
//     paddingHorizontal: 16,
//     paddingVertical: 16,
//     fontSize: 24,
//     fontWeight: "bold",
//   },
// });

// export default RestaurantScreen;
