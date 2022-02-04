import React from "react"
import {Text,View,Dimensions, Image,TouchableOpacity, StyleSheet} from "react-native"
import image from  "../assets/sociallite.png"
import Logo from "react-native-vector-icons/FontAwesome"
import EmailLogo from "react-native-vector-icons/Entypo"

const SignInScreen =({navigation}) =>{
    return(
        <>
        <View style={{flex:1,backgroundColor:'#ffffff'}}>
   <View style={{backgroundColor:'#ffffff',alignItems:'center', justifyContent:'center'}}>
  <Image
  style={{marginTop:13, width:Dimensions.get('screen').width/3,backgroundColor:"#ffffff", height:160,}} source={image}/>
    </View>
    <View >
        <Text style={{textAlign:'center',fontSize:20}}>Sign in to your Sociallite {"\n"} account</Text>
    </View>

   <View style={{marginTop:22}}>
       <TouchableOpacity onPress={()=>navigation.navigate("SignInWithTwter")}  style={styles.touch_Style}>
         <Logo name="twitter" color="#ffffff" size={34} style={{paddingTop:2,paddingLeft:7}} />
          <Text style={[styles.text_Style,{color:'#fff'}]}>Sign In with Twitter</Text>
                 </TouchableOpacity>
   </View>
   <View style={{marginTop:-104}}>
       <TouchableOpacity onPress={()=>navigation.navigate("SignInWithFB")} style={{backgroundColor:'#4064AC',marginHorizontal:30,height:'21%',flexDirection:'row',borderRadius:4}}>
       <Logo name="facebook" color="#ffffff" size={34} style={{paddingTop:2,paddingLeft:7}} />
       <Text style={[styles.text_Style,{color:'#fff'}]}>Sign In with Facebook</Text>
       </TouchableOpacity>
   </View>
   <View style={{marginTop:-135,}}>
       <TouchableOpacity onPress={()=>alert("No Page Found for This!!")}   style={{borderWidth:0.6,backgroundColor:'#ffffff',marginHorizontal:30,height:'21%',flexDirection:'row',borderRadius:4}}>
       <Logo name="google" color="black" size={30} style={{paddingTop:4,paddingLeft:7}} />
       <Text style={styles.text_Style}>Sign In with Google</Text>
           
       </TouchableOpacity>
   </View>
   <View style={{marginTop:-135,}}>
       <TouchableOpacity onPress={()=>navigation.navigate("SignInWithApple")}  style={{borderWidth:0.6,backgroundColor:'#ffffff',marginHorizontal:30,height:'21%',flexDirection:'row',borderRadius:4}}>
       <Logo name="apple" color="black" size={30} style={{paddingTop:4,paddingLeft:7}} />
       <Text style={styles.text_Style}>Sign In with Apple</Text>
           
       </TouchableOpacity>
   </View>
   <View style={{marginTop:-135}}>
       <TouchableOpacity onPress={()=>navigation.navigate("SignInWithEmail")} style={{borderWidth:0.6,backgroundColor:'#ffffff',marginHorizontal:30,height:'21%',flexDirection:'row',borderRadius:4}}>
       <EmailLogo name="email" color="black" size={25} style={{paddingTop:4,paddingLeft:7}} />
       <Text style={styles.text_Style}>Sign In via email</Text>
           
       </TouchableOpacity>
   </View>
   <View style={{marginTop:-135}}>
       <TouchableOpacity onPress={()=>navigation.navigate("SingleSignIn")} style={{borderWidth:0.6,backgroundColor:'#ffffff',marginHorizontal:30,height:'21%',flexDirection:'row',borderRadius:4}}>
       <Text style={styles.text_Style}>Single Sign-On</Text>
           
       </TouchableOpacity>
   </View>

    <View style={{marginTop:-60}}>
        <Text style={{textAlign:'center', fontSize:12}}>Don't have a Sociallite Account?</Text>
        <TouchableOpacity onPress={()=>navigation.navigate("SignUpScreen")} >
        <Text style={{textAlign:'center', fontWeight:'bold',color:"#227235"}}>Create a new account</Text>
            </TouchableOpacity>
     
    </View>
        </View>

        </>
    )
}
export default SignInScreen

const styles= StyleSheet.create({
        text_Style:{
            color:'#000000',
            textAlign:'center',
            paddingLeft:30,
            paddingTop:4,
            fontSize:18,
    },
    touch_Style:{
        backgroundColor:'#5DA9DD',
        marginTop:30,
        marginHorizontal:30,
        height:'20%',
        borderRadius:4,
        flexDirection:'row'
    }
})