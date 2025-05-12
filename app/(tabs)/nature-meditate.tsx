import { LinearGradient } from "expo-linear-gradient";
import { StatusBar } from "expo-status-bar";
import { router } from "expo-router";
import React from "react";
import {
  FlatList,
  ImageBackground,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";

import MEDITATION_IMAGES from "@/constants/meditation-images";

import { MEDITATION_DATA, MeditationType } from "@/constants/MeditationData";
import AppGradient from "@/components/AppGradient";

const Page = () => {
  return (
    <View className="flex-1">
      <AppGradient
        // Background Linear Gradient
        colors={["#161b2e", "#0a4d4a", "#766e67"]}
      >
        <View className="mb-6">
          <Text
            style={{
              fontFamily: "PD1",
              fontSize: 35,
              fontWeight: "500",
              textAlign: "center",
              color: "white",
            }}
          >
            Welcome to Zenflow
          </Text>
          <Text
            style={{
              fontFamily: "PD2",
              fontSize: 15,
              fontWeight: "500",
              textAlign: "center",
              color: "white",
              marginBottom: 20,
            }}
          >
            Start your meditation practice today
          </Text>
          <Text
            style={{
              fontFamily: "PD2",
              fontSize: 20,
              fontWeight: "500",
              textAlign: "left",
              color: "white",
            }}
          >
            Select a Category
          </Text>
        </View>
        <View>
          <FlatList
            data={MEDITATION_DATA}
            contentContainerStyle={styles.list}
            keyExtractor={(item) => item.id.toString()}
            showsVerticalScrollIndicator={false}
            renderItem={({ item }) => (
              <Pressable
                onPress={() => router.push(`/meditate/${item.id}`)}
                className="h-48 my-3 rounded-md overflow-hidden"
              >
                <ImageBackground
                  source={MEDITATION_IMAGES[item.id - 1]}
                  resizeMode="cover"
                  style={styles.backgroundImage}
                >
                  <LinearGradient
                    // Gradient from transparent to black
                    colors={["transparent", "rgba(0,0,0,0.8)"]}
                    style={styles.gradient}
                  >
                    <Text
                      style={{
                        fontFamily: "PD2",
                        fontSize: 22,
                        fontWeight: "500",
                        textAlign: "center",
                        color: "white",
                      }}
                    >
                      {item.title}
                    </Text>
                  </LinearGradient>
                </ImageBackground>
              </Pressable>
            )}
          />
        </View>
      </AppGradient>
      <StatusBar style="light" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  background: {
    flex: 1,
  },
  backgroundImage: {
    flex: 1,
    borderRadius: 10,
    justifyContent: "center",
  },
  gradient: {
    alignItems: "center",
    height: "100%",
    justifyContent: "center",
    width: "100%",
  },
  list: {
    paddingBottom: 150,
  },
});

export default Page;
