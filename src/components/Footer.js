import { View, Text, StyleSheet, Pressable } from "react-native";
import { FontAwesome, AntDesign } from "@expo/vector-icons";

export default function Footer() {
  return (
    <View style={styles.container}>
      <View style={styles.iconRow}>
        <Pressable>
          <FontAwesome name="instagram" size={32} color="white" />
        </Pressable>
        <Pressable>
          <AntDesign name="twitter" size={32} color="white" />
        </Pressable>
        <Pressable>
          <FontAwesome name="facebook" size={32} color="white" />
        </Pressable>
        <Pressable>
          <AntDesign name="linkedin-square" size={32} color="white" />
        </Pressable>
      </View>

      <Text style={styles.text}>
        All Rights Reserved © My Restaurant
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "black",
    padding: 20,
    alignItems: "center",
  },
  iconRow: {
    flexDirection: "row",
    marginBottom: 12,
    gap: 16,
  },
  text: {
    color: "white",
    fontSize: 14,
  },
});
