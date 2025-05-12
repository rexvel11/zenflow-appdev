import {
  Image,
  View,
  Text,
  FlatList,
  Pressable,
  StyleSheet,
} from "react-native";
import { GalleryPreviewData } from "@/constants/models/Product";
import { Link } from "expo-router";

interface GuidedAffirmationsGalleryProps {
  title: string;
  products: GalleryPreviewData[];
}

const GuidedAffirmationsGallery = ({
  title,
  products,
}: GuidedAffirmationsGalleryProps) => {
  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>{title}</Text>
      </View>
      <FlatList
        data={products}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <Link href={`/affirmations/${item.id}`} asChild>
            <Pressable style={styles.itemContainer}>
              <View style={styles.imageWrapper}>
                <Image
                  source={item.image}
                  resizeMode="cover"
                  style={styles.image}
                />
              </View>
            </Pressable>
          </Link>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
  },
  titleContainer: {
    marginBottom: 8,
  },
  title: {
    fontSize: 18,
    fontFamily: "PD2",
    color: "white",
  },
  itemContainer: {
    marginRight: 10,
  },
  imageWrapper: {
    height: 150,
    width: 130,
    borderRadius: 12,
    overflow: "hidden",
    backgroundColor: "#f0f0f0",
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    width: "100%",
    height: "100%",
    borderRadius: 12,
  },
  itemText: {
    position: "absolute",
    bottom: 10,
    left: 5,
    right: 5,
    color: "white",
    fontSize: 12,
    fontWeight: "bold",
    textAlign: "center",
  },
});

export default GuidedAffirmationsGallery;
