import { StyleSheet } from "react-native";

export const headerStyles = StyleSheet.create({
  navigationMenu: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  navItem: {
    marginHorizontal: 20,
  },
  navText: {
    color: "white",
    fontSize: 16,
  },
  mobileMenu: {
    marginTop: 20,
  },
  mobileNavText: {
    fontSize: 22,
    color: "black",
    marginVertical: 10,
  },
});
