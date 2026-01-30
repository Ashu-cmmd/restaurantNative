import { View, Text, StyleSheet } from "react-native";
import Layout from "../components/Layout";

export default function NotFoundScreen() {
  return (
    <Layout>
      <View style={styles.container}>
        <Text style={styles.text}>Page Not Found</Text>
      </View>
    </Layout>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 22,
    fontWeight: "bold",
  },
});
