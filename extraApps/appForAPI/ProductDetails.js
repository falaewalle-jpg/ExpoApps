import React from "react";
import { View, Text, Image, TouchableOpacity, ScrollView, StyleSheet, FlatList } from "react-native";

export default function ProductDetails({ product, onBack }) {
  return (
    <ScrollView style={styles.container}>
      <FlatList
        data={product.images}
        keyExtractor={(item, index) => index.toString()}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => (
          <Image source={{ uri: item }} style={styles.galleryImage} />
        )}
        style={{ marginBottom: 15 }}
      />
      <Text style={styles.title}>{product.title}</Text>
      <Text style={styles.desc}>{product.description}</Text>
      <Text style={styles.info}>💲 Price: ${product.price}</Text>
      <Text style={styles.info}>⭐ Rating: {product.rating}</Text>
      <Text style={styles.info}>🏷️ Brand: {product.brand}</Text>
      <Text style={styles.info}>📦 Category: {product.category}</Text>

      <TouchableOpacity style={styles.backBtn} onPress={onBack}>
        <Text style={styles.backText}>Back</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 15, backgroundColor: "#fff" },
  galleryImage: {
    width: 250,
    height: 200,
    borderRadius: 10,
    marginRight: 10,
  },

  title: { fontSize: 24, fontWeight: "bold", marginBottom: 10 },
  desc: { fontSize: 16, marginBottom: 10 },
  info: { fontSize: 16, marginBottom: 5 },
  backBtn: {
    backgroundColor: "#000",
    padding: 10,
    borderRadius: 10,
    marginTop: 20,
    alignItems: "center",
  },
  backText: { color: "#fff", fontSize: 16 },
});
