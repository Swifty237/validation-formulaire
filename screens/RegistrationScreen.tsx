import { useState } from "react";
import { StyleSheet, View } from "react-native"
import ButtonComponent from "../components/ButtonComponent"
import InputComponent from "../components/InputComponent"
import { homeType } from "../components/Interfaces";



// Construction de l'écran d'inscription

export default function RegistrationScreen({ navigation }: homeType) {

    return (
        <View style={styles.container}>
            <View style={styles.loginBox}>
                <InputComponent
                    name="email"
                    placeholder="Entrez votre email"
                    icon={false}
                    label="Email"
                    errorText=""
                    callback={() => { }} />

                <InputComponent
                    name="password"
                    placeholder="Choisissez votre mot de passe"
                    icon={true}
                    label="Mot de passe"
                    errorText=""
                    callback={() => { }} />

                <InputComponent
                    name="confirmPassword"
                    placeholder="Confirmer votre mot de passe"
                    icon={true}
                    label="Confirmez votre mot de passe"
                    errorText=""
                    callback={() => { }} />

                <ButtonComponent goTo={() => { navigation.navigate("RContinuationScreen") }} label="SUIVANT" />
            </View>
        </View>

    )
}

const styles = StyleSheet.create({
    container: {
        height: "85%",
        alignItems: "center"
    },

    loginBox: {
        flex: 2,
        width: 300,
        alignItems: "center",
        justifyContent: "space-between"
    }
})