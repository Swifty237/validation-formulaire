import { StyleSheet, View } from "react-native"
import ButtonComponent from "../components/ButtonComponent"
import InputComponent from "../components/InputComponent"


// Construction de l'écran d'inscription

export default function RContinuationScreen() {

    return (
        <View style={styles.container}>
            <View style={styles.loginBox}>
                <InputComponent
                    name="civility"
                    placeholder="Choisissez votre civilité"
                    icon={false}
                    label="Civilité"
                    errorText=""
                    callback={() => { }} />

                <InputComponent
                    name="firstname"
                    placeholder="Entrez votre prénom"
                    icon={false}
                    label="Prénom"
                    errorText=""
                    callback={() => { }} />

                <InputComponent
                    name="name"
                    placeholder="Entrez votre nom"
                    icon={false}
                    label="Nom"
                    errorText=""
                    callback={() => { }} />

                <InputComponent
                    name="birhtday"
                    placeholder="Entrez votre date de naissance"
                    icon={false}
                    label="Date de naissance"
                    errorText=""
                    callback={() => { }} />

                <ButtonComponent goTo={() => { }} label="TERMINER" />
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