import React, { useEffect } from "react"
import {Dimensions,Image} from "react-native"
import image from  "../assets/sociallite.png"
import * as Animatable from 'react-native-animatable';


const SplashScreen=({navigation})=>{

    useEffect(()=>{
            setTimeout(()=>{
                 navigation.navigate("StartScreen")
            },2000)
    },[])
  return(
    <>
 
<Animatable.View animation="bounceIn" duration={6000} style={{flex:1, justifyContent:'center', alignItems:'center'}}>
<Image style={{ width:Dimensions.get('screen').width/2, height:300}} source={image}/>
</Animatable.View>
    
    </>
  )
}
export default SplashScreen