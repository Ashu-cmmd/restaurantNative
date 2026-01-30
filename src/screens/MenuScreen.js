import { View, Text, FlatList, Image, StyleSheet } from "react-native";
import Layout from "../components/Layout";
import { MenuList } from "../constants/data";

export default function MenuScreen() {
  return (
    <Layout>
      <FlatList
        data={MenuList}
        keyExtractor={(item) => item.name}
        contentContainerStyle={styles.container}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Image source={item.image} style={styles.image} />
            <Text style={styles.title}>{item.name}</Text>
            <Text style={styles.desc}>{item.description}</Text>
            <Text style={styles.price}>₹{item.price}</Text>
          </View>
        )}
      />
    </Layout>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
 card: {
  backgroundColor: "#fff",
  borderRadius: 12,
  marginBottom: 16,
  padding: 12,
  elevation: 3,
  overflow: "hidden",  
}
,
  image: {
  width: "100%",        
  height: 150,          
  resizeMode: "cover",  
  borderRadius: 10,
}
,
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 8,
  },
  desc: {
    fontSize: 14,
    color: "#555",
    marginVertical: 4,
  },
  price: {
    fontSize: 16,
    color: "green",
    fontWeight: "bold",
  },
});
