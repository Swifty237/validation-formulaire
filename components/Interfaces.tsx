// onstruction des interfaces de typage

import { NativeStackNavigationProp } from "@react-navigation/native-stack";

type inputHandlerType = (entry: string) => any
type navType = (entry: string) => any

export type appType = {
    HomeScreen: undefined
    LoginScreen: undefined
    RegistrationScreen: undefined
    RContinuationScreen: undefined
}

export type homeType = {
    navigation: NativeStackNavigationProp<appType>
}

export type inputType = {
    name: string
    placeholder: string
    icon: boolean
    label: string
    errorText: string
    callback: inputHandlerType
}

export type loginDataType = {
    email: string
    password: string
    isValidEmail: boolean
}

export type buttonType = {
    label: string
    goTo: navType
}