import React from "react"
import {Text,View, Image,TouchableOpacity} from "react-native"
import image from  "../assets/hoot.png"
import Logo from "react-native-vector-icons/FontAwesome"
import EmailLogo from "react-native-vector-icons/Entypo"

const SignInScreen =({navigation}) =>{
    return(
        <>
        <View style={{flex:1,backgroundColor:'#ffffff'}}>
   <View style={{backgroundColor:'#ffffff',alignItems:'center', justifyContent:'center'}}>
  <Image
  style={{marginLeft:18,marginTop:13, width:260,backgroundColor:"#ffffff", height:100, borderRadius:20}} source={image}/>
    </View>
    <View >
        <Text style={{textAlign:'center',fontSize:20}}>Sign in to your Hootsuite {"\n"} account</Text>
    </View>

   <View style={{marginTop:22}}>
       <TouchableOpacity onPress={()=>navigation.navigate("SignInWithTwter")}  style={{backgroundColor:'#5DA9DD',marginTop:30,marginHorizontal:30,height:'20%',flexDirection:'row'}}>
         <Logo name="twitter" color="#ffffff" size={34} style={{paddingTop:2,paddingLeft:7}} />
          <Text style={{color:'#ffffff',textAlign:'center',paddingLeft:20,paddingTop:4,fontSize:18}}>Sign In with Twitter</Text>
                 </TouchableOpacity>
   </View>
   <View style={{marginTop:-104}}>
       <TouchableOpacity onPress={()=>navigation.navigate("SignInWithFB")} style={{backgroundColor:'#4064AC',marginHorizontal:30,height:'21%',flexDirection:'row'}}>
       <Logo name="facebook" color="#ffffff" size={34} style={{paddingTop:2,paddingLeft:7}} />
          <Text style={{color:'#ffffff',textAlign:'center',paddingLeft:30,paddingTop:4,fontSize:18}}>Sign In with Facebook</Text>
       </TouchableOpacity>
   </View>
   <View style={{marginTop:-135,}}>
       <TouchableOpacity  style={{borderWidth:0.6,backgroundColor:'#ffffff',marginHorizontal:30,height:'21%',flexDirection:'row'}}>
       <Logo name="google" color="black" size={30} style={{paddingTop:4,paddingLeft:7}} />
          <Text style={{color:'#000000',textAlign:'center',paddingLeft:30,paddingTop:4,fontSize:18}}>Sign In with Google</Text>
           
       </TouchableOpacity>
   </View>
   <View style={{marginTop:-135,}}>
       <TouchableOpacity onPress={()=>navigation.navigate("SignInWithApple")}  style={{borderWidth:0.6,backgroundColor:'#ffffff',marginHorizontal:30,height:'21%',flexDirection:'row'}}>
       <Logo name="apple" color="black" size={30} style={{paddingTop:4,paddingLeft:7}} />
          <Text style={{color:'#000000',textAlign:'center',paddingLeft:30,paddingTop:4,fontSize:18}}>Sign In with Apple</Text>
           
       </TouchableOpacity>
   </View>
   <View style={{marginTop:-135}}>
       <TouchableOpacity onPress={()=>navigation.navigate("SignInWithEmail")} style={{borderWidth:0.6,backgroundColor:'#ffffff',marginHorizontal:30,height:'21%',flexDirection:'row'}}>
       <EmailLogo name="email" color="black" size={25} style={{paddingTop:4,paddingLeft:7}} />
          <Text style={{color:'#000000',textAlign:'center',paddingLeft:30,paddingTop:4,fontSize:18}}>Sign In via email</Text>
           
       </TouchableOpacity>
   </View>
   <View style={{marginTop:-135}}>
       <TouchableOpacity onPress={()=>navigation.navigate("SingleSignIn")} style={{borderWidth:0.6,backgroundColor:'#ffffff',marginHorizontal:30,height:'21%',flexDirection:'row'}}>
          <Text style={{color:'#000000',textAlign:'center',paddingLeft:30,paddingTop:4,fontSize:18}}>Single Sign-On</Text>
           
       </TouchableOpacity>
   </View>

    <View>
        <Text style={{textAlign:'center', fontSize:12}}>Don't have a Hootsuite Account?</Text>
        <Text style={{textAlign:'center', fontWeight:'bold'}}>Create a new account</Text>
    </View>
        </View>

        </>
    )
}
export default SignInScreen