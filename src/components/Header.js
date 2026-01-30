import { View, Text, StyleSheet, Pressable, Modal } from "react-native";
import { useState } from "react";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

export default function Header() {
  const [open, setOpen] = useState(false);
  const navigation = useNavigation();

  return (
    <View style={styles.header}>
      <Pressable onPress={() => setOpen(true)}>
        <Ionicons name="menu" size={28} color="white" />
      </Pressable>

      <Text style={styles.logo}>
        <MaterialIcons name="fastfood" size={24} /> My Restaurant
      </Text>

      <Modal visible={open} animationType="slide" transparent>
        <View style={styles.drawer}>
          {["Home", "Menu", "About", "Contact"].map((item) => (
            <Pressable
              key={item}
              onPress={() => {
                setOpen(false);
                navigation.navigate(item);
              }}
            >
              <Text style={styles.link}>{item}</Text>
            </Pressable>
          ))}
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: "black",
    padding: 16,
    flexDirection: "row",
    alignItems: "center",
  },
  logo: {
    color: "goldenrod",
    fontSize: 18,
    marginLeft: 16,
    fontWeight: "bold",
  },
  drawer: {
    backgroundColor: "black",
    padding: 30,
    marginTop: 60,
    flex: 1,
  },
  link: {
    color: "white",
    fontSize: 18,
    marginVertical: 12,
  },
});
