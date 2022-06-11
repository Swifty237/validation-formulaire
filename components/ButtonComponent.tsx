import { TouchableOpacity, Text, StyleSheet } from "react-native"
import { buttonType } from "./Interfaces"


// Construction du composant Button qui est utilisé dans l'apllication

export default function ButtonComponent({ label, goTo }: buttonType) {
    return (
        <TouchableOpacity onPress={(entry: any) => goTo(entry)} style={styles.btn}>
            <Text style={styles.btnLabel}>{label}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    btn: {
        backgroundColor: "blue",
        width: "70%",
        height: 60,
        justifyContent: "center",
        borderRadius: 30,
        marginTop: 30
    },

    btnLabel: {
        color: "white",
        textAlign: "center"
    }
})