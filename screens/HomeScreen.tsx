import { StyleSheet, Text, TouchableOpacity, View } from "react-native"
import { homeType } from "../components/Interfaces"


// Construction de l'écran d'accueil

export default function HomeScreen({ navigation }: homeType) {

    return (
        <View style={styles.container}>
            <View style={styles.logoBox}>
                <View style={styles.logo}>

                </View>
            </View>
            <View style={styles.btnBox}>
                <TouchableOpacity style={styles.connexion} onPress={() => navigation.navigate("LoginScreen")}>
                    <Text style={styles.connexionText}>Se connecter</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.subscribe} onPress={() => navigation.navigate("RegistrationScreen")}>
                    <Text style={styles.subscribeText}>S'inscrire</Text>
                </TouchableOpacity>
            </View>
        </View >
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },

    logoBox: {
        flex: 3,
        justifyContent: "flex-end",
        alignItems: "center"
    },

    logo: {
        height: 200,
        width: 200,
        borderRadius: 100,
        marginBottom: 100,
        borderWidth: 2,
        borderColor: "grey"
    },

    btnBox: {
        flex: 2,
        alignItems: "center"
    },

    connexion: {
        height: 70,
        width: 250,
        backgroundColor: "blue",
        justifyContent: "center",
        marginBottom: 15
    },

    subscribe: {
        height: 70,
        width: 250,
        borderWidth: 2,
        borderColor: "grey",
        justifyContent: "center",
        marginTop: 15
    },

    connexionText: {
        fontSize: 20,
        fontWeight: "bold",
        color: "white",
        textAlign: "center"
    },

    subscribeText: {
        fontSize: 20,
        fontWeight: "bold",
        color: "grey",
        textAlign: "center"
    }
})