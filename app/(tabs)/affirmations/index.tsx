import GuidedAffirmationsGallery from "@/components/GuidedAffirmationsGallery";
import AFFIRMATION_GALLERY from "@/constants/affirmation-gallary";
import images from "@/constants/affirmation-images";
import { LinearGradient } from "expo-linear-gradient";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const Page = () => {
  const insets = useSafeAreaInsets();

  return (
    <View style={styles.container}>
      <LinearGradient
        colors={["#2e1f58", "#54426b", "#a790af"]}
        style={[styles.gradientBackground, { paddingTop: insets.top }]}
      >
        <ScrollView showsVerticalScrollIndicator={false}>
          <Text style={styles.title}>
            Change your beliefs with affirmations
          </Text>
          <View style={styles.galleryWrapper}>
            {AFFIRMATION_GALLERY.map((g) => (
              <GuidedAffirmationsGallery
                key={g.title}
                title={g.title}
                products={g.data}
              />
            ))}
          </View>
        </ScrollView>
      </LinearGradient>
      <StatusBar style="light" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  gradientBackground: {
    flex: 1,
    paddingHorizontal: 20,
  },
  title: {
    fontFamily: "PD1",
    fontSize: 30,
    fontWeight: "600",
    textAlign: "center",
    color: "white",
    marginVertical: 20,
  },
  galleryWrapper: {
    marginTop: 5,
  },
});

export default Page;
