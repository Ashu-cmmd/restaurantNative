import { StyleSheet, Dimensions } from "react-native";

const { width } = Dimensions.get("window");

export const homeStyles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "center",
    backgroundPosition: "center",
  },
  headerContainer: {
    marginLeft: width > 600 ? 15 : 0,
    padding: width <= 600 ? 20 : 0,
    borderRadius: width <= 600 ? 10 : 0,
    backgroundColor: width <= 600 ? "rgb(56,56,56)" : "transparent",
    alignItems: width <= 600 ? "center" : "flex-start",
  },
  title: {
    fontSize: width > 600 ? 70 : 40,
    fontWeight: "bold",
    color: width > 600 ? "black" : "white",
  },
  subtitle: {
    fontSize: width > 600 ? 40 : 30,
    color: width > 600 ? "black" : "white",
    marginTop: 15,
  },
  button: {
    marginTop: 20,
    height: 50,
    width: 180,
    backgroundColor: width > 600 ? "black" : "white",
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    fontSize: 20,
    color: width > 600 ? "white" : "black",
    fontWeight: "bold",
  },
});
