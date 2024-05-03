import { Text, TextInput, View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import * as Icon from "react-native-feather";
import { themeColors } from "../theme";
import { ScrollView } from "react-native-gesture-handler";
import Category from "../components/Categories";
import FeaturedRow from "../components/FeaturedRow";
import { featured } from "../constants";

const HomeScreen = () => {
  return (
    <SafeAreaView className="bg-white">
      <StatusBar barStyle="dark-content" />
      {/* search bar */}
      <View style={{ paddingHorizontal: 16, paddingBottom: 8 }}>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            marginBottom: 16,
          }}
        >
          <View
            style={{
              flexDirection: "row",
              flex: 1,
              alignItems: "center",
              padding: 12,
              borderRadius: 999,
              borderWidth: 1,
              borderColor: "#ccc",
            }}
          >
            <Icon.Search height="25" width="25" stroke="gray" />
            <TextInput
              placeholder="Restaurants"
              style={{ marginLeft: 8, flex: 1 }}
            />
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                paddingLeft: 8,
                borderLeftWidth: 1,
                borderLeftColor: "#ccc",
              }}
            >
              <Icon.MapPin height="20" width="20" stroke="gray" />
              <Text className="text-gray-600">Lagos, Nigeria</Text>
            </View>
          </View>
          <View
            style={{
              marginLeft: 8,
              backgroundColor: themeColors.bgColor(1),
              padding: 4,
              borderRadius: 999,
            }}
          >
            <Icon.Sliders
              height={25}
              width={25}
              strokeWidth={2.5}
              stroke="white"
            />
          </View>
        </View>
      </View>
      {/* main */}
      <ScrollView
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{
          paddingBottom: 20,
        }}
      >
        {/* Categories */}
        <Category />

        {/* featured */}
        <View className="mt-5">
          {[featured, featured, featured].map((item, index) => {
            return (
              <FeaturedRow
                key={index}
                title={item.title}
                restaurants={item.restaurants}
                description={item.description}
              />
            );
          })}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;


