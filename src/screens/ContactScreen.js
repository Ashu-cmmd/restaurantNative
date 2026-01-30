import { View, Text, StyleSheet } from "react-native";
import { MaterialIcons, Ionicons } from "@expo/vector-icons";
import Layout from "../components/Layout";

export default function ContactScreen() {
  return (
    <Layout>
      <View style={styles.container}>
        <Text style={styles.heading}>Contact My Restaurant</Text>

        <Text style={styles.text}>
          We’d love to hear from you! Reach us anytime using the details below.
        </Text>

        <View style={styles.card}>
          <Text style={styles.row}>
            <MaterialIcons name="support-agent" size={22} color="red" /> 1234567890 (Toll Free)
          </Text>

          <Text style={styles.row}>
            <MaterialIcons name="email" size={22} color="skyblue" /> help@gmail.com
          </Text>

          <Text style={styles.row}>
            <Ionicons name="call" size={22} color="green" /> 1234567890
          </Text>
        </View>
      </View>
    </Layout>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  heading: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 12,
  },
  text: {
    fontSize: 16,
    marginBottom: 16,
  },
  card: {
    backgroundColor: "#fff",
    padding: 16,
    borderRadius: 10,
    elevation: 3,
  },
  row: {
    fontSize: 16,
    marginVertical: 6,
  },
});
