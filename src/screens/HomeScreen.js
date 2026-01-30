import {
    View,
    Text,
    StyleSheet,
    ImageBackground,
    Pressable,
    Dimensions,
    ScrollView,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import Layout from "../components/Layout";

const { height } = Dimensions.get("window");

export default function HomeScreen() {
    const navigation = useNavigation();

    return (
        <Layout>
            <ScrollView showsVerticalScrollIndicator={false}>
                <ImageBackground
                    source={require("../../assets/images/banner1.avif")}
                    style={styles.banner}
                    imageStyle={styles.image}
                >
                    <View style={styles.overlay}>
                        <Text style={styles.title}>Food Website</Text>
                        <Text style={styles.subtitle}>Best Food in India</Text>

                        <Pressable
                            style={styles.button}
                            onPress={() => navigation.navigate("Menu")}
                        >
                            <Text style={styles.buttonText}>Order Now</Text>
                        </Pressable>
                    </View>
                </ImageBackground>


                <View style={styles.spacer} />
            </ScrollView>
        </Layout>
    );
}



const styles = StyleSheet.create({
    banner: {
        height: height * 0.6,
        justifyContent: "center",
    },
    image: {
        resizeMode: "cover",
    },
    overlay: {
        backgroundColor: "rgba(0,0,0,0.55)",
        marginHorizontal: 20,
        paddingVertical: 30,
        paddingHorizontal: 20,
        borderRadius: 16,
        alignItems: "center",
    },
    title: {
        fontSize: 32,
        fontWeight: "bold",
        color: "#ffffff",
        marginBottom: 8,
    },
    subtitle: {
        fontSize: 18,
        color: "#dddddd",
        marginBottom: 20,
    },
    button: {
        backgroundColor: "#ffffff",
        paddingVertical: 12,
        paddingHorizontal: 40,
        borderRadius: 8,
    },
    buttonText: {
        fontSize: 16,
        fontWeight: "bold",
        color: "#000000",
    },
    spacer: {
        height: 30,
    },
});
