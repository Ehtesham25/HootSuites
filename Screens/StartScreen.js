import { NavigationContainer } from "@react-navigation/native"
import React from "react"
import {Text,Image, View, StyleSheet, TouchableOpacity} from "react-native"
import Swiper from "react-native-swiper"
import image from  "../assets/hoot.png"


const StartScreen=({navigation})=>{
  return(
    <>

 <View style={{backgroundColor:'#ffffff',alignItems:'center', justifyContent:'center'}}>
  <Image
  style={{marginLeft:18,marginTop:13, width:260,backgroundColor:"#ffffff", height:100, borderRadius:20}} source={image}/>
</View>
<View style={{flex:1, justifyContent:'center', alignItems:'center', backgroundColor:'#ffffff'}} >
<Swiper autoplay horizontal={true}
height={300}
activeDotColor="black">
    <View style={styles.slide}>
        <Text style={styles.slide_text} >Save time by scheduling posts to {"\n"}     your favourite social network</Text>
        <Image resizeMode='cover' style={styles.sliderImage} 
        source={require('../assets/kings.png')}/>
        </View> 
        <View style={styles.slide}>
        <Text style={styles.slide_text}>preview and edit your scheduled {"\n"}               posts on the go</Text>
        <Image resizeMode='cover' style={styles.sliderImage} source={require('../assets/qG.jpg')}/>
        </View> 
        <View style={styles.slide}>
        <Text style={styles.slide_text}>  Monitor likes, comments, and {"\n"}  engagement on all your posts.</Text>
        <Image resizeMode='cover' style={styles.sliderImage} source={require('../assets/ms.jpg')}/>
        </View> 
        <View style={styles.slide}>
        <Text style={styles.slide_text}>  Search for conversation about {"\n"}       your brand and industry</Text>
        <Image resizeMode='cover' style={styles.sliderImage} source={require('../assets/zalmi.jpg')}/>
        </View> 
         
</Swiper>
</View>
<View style={{backgroundColor:'#ffffff'}}>
  <View style={{marginBottom:10}} >
    <TouchableOpacity onPress={()=>navigation.navigate("SignInScreen")} style={{backgroundColor:'#E9EBEC',height:50, width:'74%',marginLeft:50}}>
      <Text style={{fontSize:20,paddingTop:10,alignItems:'center', textAlign:'center'}}> I already have an account</Text>
    </TouchableOpacity>
  </View>
  <View style={{marginBottom:30}} >
    <TouchableOpacity  onPress={()=>navigation.navigate("SignUpScreen")} style={{backgroundColor:'#FCBB47',height:50, width:'74%',marginLeft:50}}>
      <Text style={{fontSize:20 ,paddingTop:10,alignItems:'center', textAlign:'center'}}>I don't have an account</Text>
    </TouchableOpacity>
  </View>
</View>
    
    </>
  )
}
export default StartScreen

const styles = StyleSheet.create({
  sliderContainer: {
    height: 200,
    width: '90%',
    marginTop: 10,
    justifyContent: 'center',
    alignSelf: 'center',
    borderRadius: 8,
  },

  wrapper: {},

  slide: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'transparent',
    borderRadius: 8,
    backgroundColor:"#ffffff",
  },
  sliderImage: {
    alignSelf: 'center',
    borderRadius: 8,
    marginTop:70
  },
  slide_text:{
    fontSize:20, 
    marginLeft:30
  },

})