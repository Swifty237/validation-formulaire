import { TextInput, Text, StyleSheet, View, TouchableOpacity } from "react-native"
import Icon from "react-native-vector-icons/MaterialCommunityIcons"
import Fontisto from "react-native-vector-icons/Fontisto"
import { inputType } from "./Interfaces"
import { useState } from "react"



// Construction du composant input qui est utiliser toute l'application

export default function InputComponent({ name, placeholder, icon, label, errorText, callback }: inputType) {

    const [focus, setFocus] = useState<boolean>(false)
    const [eyeIconOff, setEyeIconOff] = useState<boolean>(true)

    return (
        <View style={styles.container}>
            <View style={styles.labelBox}>
                <Text style={styles.labelText}>{label}</Text>
            </View>
            <View style={focus ? styles.focusBox : styles.inputBox}>
                <View style={styles.inputContainer}>
                    <TextInput
                        style={styles.input}
                        placeholder={placeholder}
                        textContentType={name === "email" ? "emailAddress" : "password"}
                        onFocus={() => setFocus(true)}
                        onBlur={() => setFocus(false)}
                        onChangeText={(entry) => callback(entry)}
                        secureTextEntry={(name === "password" || "confirmPassword") && eyeIconOff && icon ? true : false} />


                    <TouchableOpacity onPress={() => setEyeIconOff(!eyeIconOff)}>
                        <Text>
                            {(name === "password" || "confirmPassword") && icon ? <Icon name={eyeIconOff ? "eye-off" : "eye"} size={30} color="grey" /> : null}
                        </Text>
                    </TouchableOpacity>
                </View>
                <Text style={styles.errorStyle}>
                    {name === "email" && !focus ? errorText : null}
                </Text>
            </View>
        </View>
    )
}




const styles = StyleSheet.create({
    container: {
        width: "100%",
        height: 100
    },

    labelBox: {
        margin: 10
    },

    labelText: {
        color: "grey",
        fontSize: 16,
        fontWeight: "bold"
    },

    inputBox: {
        height: 60,
        borderRadius: 20,
        borderWidth: 1,
        borderColor: "grey"
    },

    focusBox: {
        height: 60,
        borderRadius: 20,
        borderWidth: 2,
        borderColor: "blue"
    },

    inputContainer: {
        height: 50,
        marginHorizontal: 10,
        marginTop: 5,
        flexDirection: "row",
        alignItems: "center"
    },

    focusErrorBox: {
        height: 60,
        borderRadius: 20,
        borderWidth: 2,
        borderColor: "red"
    },

    input: {
        height: 50,
        flex: 2
    },

    errorStyle: {
        fontSize: 12,
        marginTop: 5,
        color: "red",
        textAlign: "center"
    }
})