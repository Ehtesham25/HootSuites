import React, { useEffect } from "react"
import {Text,Image, View} from "react-native"
import image from  "../assets/hoot.png"
import * as Animatable from 'react-native-animatable';


const SplashScreen=({navigation})=>{

    useEffect(()=>{
            setTimeout(()=>{
                 navigation.navigate("StartScreen")
            },2000)
    },[])
  return(
    <>
<Animatable.View animation="bounceIn" duration={6000} style={{flex:1, justifyContent:'center', alignContent:'center'}}>
<Image source={image}/>
</Animatable.View>
    
    </>
  )
}
export default SplashScreen