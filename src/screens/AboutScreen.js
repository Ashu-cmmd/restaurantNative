import { View, Text, StyleSheet, ScrollView } from "react-native";
import Layout from "../components/Layout";

export default function AboutScreen() {
  return (
    <Layout>
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.heading}>Welcome To My Restaurant</Text>

        <Text style={styles.paragraph}>
          My Restaurant is more than just a place to eat—it’s a space where people
          come together to enjoy flavorful food and memorable moments. Our menu is
          thoughtfully crafted to offer a wide variety of dishes, all prepared
          fresh with high-quality ingredients and a passion for great taste.
        </Text>

        <Text style={styles.paragraph}>
          We focus on creating a warm and friendly atmosphere where guests feel
          relaxed and welcomed. Whether you’re dining with family, meeting friends,
          or celebrating a special occasion, we ensure an enjoyable dining
          experience that keeps you coming back.
        </Text>
      </ScrollView>
    </Layout>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  heading: {
    fontSize: 26,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 16,
  },
  paragraph: {
    fontSize: 16,
    lineHeight: 22,
    textAlign: "justify",
    marginBottom: 12,
  },
});
