import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, { useState } from 'react';
import { ScrollView } from 'react-native-gesture-handler';
import { Categories } from '../constants';

const Category = () => {
  const [activeCategory, setActiveCategory] = useState(null);

  return (
    <View style={styles.container}>
      <ScrollView
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.scrollViewContent}
      >
        {Categories.map((category, index) => {
          const isActive = category.id === activeCategory;

          const buttonStyle = isActive ? styles.activeBtn : styles.inactiveBtn;
          const textStyle = isActive ? styles.activeText : styles.inactiveText;

          return (
            <View key={index} style={styles.categoryItemContainer}>
              <TouchableOpacity
                style={[styles.categoryContainer, buttonStyle]}
                onPress={() => setActiveCategory(category.id)}
              >
                <Image style={styles.categoryImage} source={category.image} />
              </TouchableOpacity>
              <Text style={[styles.categoryText, textStyle]}>{category.name}</Text>
            </View>
          );
        })}
      </ScrollView>
    </View>
  );
};

export default Category;

const styles = StyleSheet.create({
  container: {
    marginTop: 16,
  },
  scrollViewContent: {
    flexDirection: 'row',
    paddingHorizontal: 15,
  },
  categoryItemContainer: {
    justifyContent: 'center', // Center contents vertically
    alignItems: 'center', // Center contents horizontally
    marginRight: 16, // Adjust spacing between items
  },
  categoryContainer: {
    padding: 8,
    borderRadius: 22.5,
  },
  activeBtn: {
    backgroundColor: 'gray', // Color for active
  },
  inactiveBtn: {
    backgroundColor: 'lightgray', // Color for inactive
  },
  categoryImage: {
    width: 45,
    height: 45,
    borderRadius: 22.5, // Rounded images
  },
  categoryText: {
    marginTop: 8, // Space between image and text
  },
  activeText: {
    fontWeight: 'bold',
    color: 'black', // Color for active text
  },
  inactiveText: {
    color: 'gray', // Color for inactive text
  },
});





// import { ActivityIndicator, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
// import React, { useState } from 'react';
// import { ScrollView } from 'react-native-gesture-handler';
// import useFetchCategories from '../hooks/Category'; 

// const Category = () => {
//   const { categories, isLoading, error } = useFetchCategories(); // Fetch categories from backend
//   const [activeCategory, setActiveCategory] = useState(null);

//   if (isLoading) {
//     return (
//       <View style={styles.loadingContainer}>
//         <ActivityIndicator size="large" color="gray" />
//         <Text>Loading categories...</Text>
//       </View>
//     );
//   }

//   if (error) {
//     return <Text>Error fetching categories: {error.message}</Text>;
//   }

//   return (
//     <View style={styles.container}>
//       <ScrollView
//         horizontal={true}
//         showsHorizontalScrollIndicator={false}
//         contentContainerStyle={styles.scrollViewContent}
//       >
//         {categories.map((category) => {
//           const isActive = category._id === activeCategory; // Use backend ID
//           const buttonStyle = isActive ? styles.activeBtn : styles.inactiveBtn;
//           const textStyle = isActive ? styles.activeText : styles.inactiveText;

//           return (
//             <View key={category._id} style={styles.categoryItemContainer}> 
//               <TouchableOpacity
//                 style={[styles.categoryContainer, buttonStyle]}
//                 onPress={() => setActiveCategory(category._id)}
//               >
//                 <Image style={styles.categoryImage} source={{ uri: category.image }} /> 
//               </TouchableOpacity>
//               <Text style={[styles.categoryText, textStyle]}>{category.name}</Text>
//             </View>
//           );
//         })}
//       </ScrollView>
//     </View>
//   );
// };

// export default Category




// const styles = StyleSheet.create({
//   container: {
//     marginTop: 16,
//   },
//   scrollViewContent: {
//     flexDirection: 'row',
//     paddingHorizontal: 15,
//   },
//   categoryItemContainer: {
//     justifyContent: 'center', // Center contents vertically
//     alignItems: 'center', // Center contents horizontally
//     marginRight: 16, // Adjust spacing between items
//   },
//   categoryContainer: {
//     padding: 8,
//     borderRadius: 22.5,
//   },
//   activeBtn: {
//     backgroundColor: 'gray', // Color for active
//   },
//   inactiveBtn: {
//     backgroundColor: 'lightgray', // Color for inactive
//   },
//   categoryImage: {
//     width: 45,
//     height: 45,
//     borderRadius: 22.5, // Rounded images
//   },
//   categoryText: {
//     marginTop: 8, // Space between image and text
//   },
//   activeText: {
//     fontWeight: 'bold',
//     color: 'black', // Color for active text
//   },
//   inactiveText: {
//     color: 'gray', // Color for inactive text
//   },
// });
