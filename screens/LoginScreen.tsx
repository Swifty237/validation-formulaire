import { StyleSheet, Text, View, Image, Pressable } from "react-native"
import ButtonComponent from "../components/ButtonComponent"
import InputComponent from "../components/InputComponent"
import validator from "validator"
import { useState } from "react"
import { loginDataType } from "../components/Interfaces"



// Construction de l'écran de login

export default function LoginScreen({ navigation }: any) {

    const [data, setData] = useState<loginDataType>({
        email: "",
        password: "",
        isValidEmail: false
    })


    return (
        <View style={styles.container}>
            <View style={styles.logo}>
                <Image style={styles.image} source={require("../assets/login.jpg")} />
            </View>

            <View style={styles.loginBox}>
                <InputComponent
                    name="email"
                    placeholder="Entrez votre email"
                    icon={false}
                    label="Email"
                    errorText={!data.isValidEmail && data.email !== "" ? "Le mail n'est pas valide" : ""}

                    callback={(text) => {
                        setData({
                            ...data,
                            email: text,
                            isValidEmail: validator.isEmail(text)
                        })
                    }} />

                <InputComponent
                    name="password"
                    placeholder="Entrez votre mot de passe"
                    icon={true}
                    label="Mot de passe"
                    errorText=""

                    callback={(text) => setData({
                        ...data,
                        password: text
                    })} />

                <ButtonComponent goTo={() => { }} label="SE CONNECTER" />
                <View style={styles.footText}>
                    <Text style={{ fontSize: 12, color: "grey" }}>Pas encore inscrit ?</Text>

                    <Pressable onPress={() => navigation.navigate("RegistrationScreen")}>
                        <Text style={{ fontSize: 12, color: "blue" }}>Créer un compte</Text>
                    </Pressable>
                </View>
            </View>
        </View>

    )
}

const styles = StyleSheet.create({
    container: {
        height: "85%",
        alignItems: "center"
    },

    logo: {
        flex: 1,
        justifyContent: "center"
    },

    image: {
        height: 150,
        width: 150,
        resizeMode: "contain"
    },

    loginBox: {
        flex: 2,
        width: 300,
        alignItems: "center",
        justifyContent: "space-between"
    },

    footText: {
        flexDirection: "row",
        marginTop: 30
    }
})