import React from "react"
import {NavigationContainer} from "@react-navigation/native"
import {createStackNavigator} from "@react-navigation/stack"
import SplashScreen from "./SplashScreen"
import StartScreen from "./StartScreen"
import SignUpScreen from "./SignUpScreen"
import SignInScreen from "./SignInScreen"
import SignInWithTwter from "./SignInWithTwter"
import SignInWithFB from "./SignInWithFB"
import SignInWithApple from "./SignInWithApple"
import SingleSignIn from "./SingleSignIn"
import SignInWithEmail from "./SignInWithEmail"


const Stack = createStackNavigator()

const RootStack =()=>{
    return(
        <>
        <NavigationContainer>
            <Stack.Navigator initialRouteName="SplashScreen" headerMode="none">
                <Stack.Screen  name="SplashScreen" component={SplashScreen}/>
                <Stack.Screen name="StartScreen" component={StartScreen}/>
                <Stack.Screen name="SignUpScreen" component={SignUpScreen}/>
                <Stack.Screen name="SignInScreen" component={SignInScreen}/>
                <Stack.Screen name="SignInWithTwter" component={SignInWithTwter}/>
                <Stack.Screen name="SignInWithFB" component={SignInWithFB}/>
                <Stack.Screen name="SignInWithApple" component={SignInWithApple}/>
                <Stack.Screen name="SingleSignIn" component={SingleSignIn}/>
                <Stack.Screen name="SignInWithEmail" component={SignInWithEmail}/>
            </Stack.Navigator>
        </NavigationContainer>

        </>
    )
}
export default RootStack