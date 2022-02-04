import React from "react"
import image from  "../assets/sociallite.png"
import {Text,View,Image, TouchableOpacity,Dimensions} from "react-native"
import Logo from "react-native-vector-icons/FontAwesome"
import EmailLogo from "react-native-vector-icons/Entypo"

const SignUpScreen =({navigation})=>{
return(
    <>
    <View style={{flex:1, backgroundColor:'#ffffff'}}>
    <View style={{backgroundColor:'#ffffff',alignItems:'center', justifyContent:'center'}}>
  <Image
  style={{marginTop:13, width:Dimensions.get('screen').width/3,backgroundColor:"#ffffff", height:160}} source={image}/>
 
</View>
   <View>
       <Text style={{textAlign:'center', fontSize:23, marginTop:20, justifyContent:'center'}}>Create a new Sociallite {"\n"} account</Text>
     <Text style={{textAlign:'center',fontSize:15  }}>By signing up, I accept and agree {"\n"} to the <Text style={{color:'#0082FF',}}>Terms of Service</Text> {"\n"}and <Text style={{color:'#0082FF'}}>Privacy Policy</Text></Text>
   </View>

   <View>
       <TouchableOpacity onPress={()=>navigation.navigate("SignInWithTwter")} style={{backgroundColor:'#5DA9DD',marginTop:30,marginHorizontal:30,height:'20%',flexDirection:'row',borderRadius:4}}>
         <Logo name="twitter" color="#ffffff" size={34} style={{paddingTop:2,paddingLeft:7}} />
          <Text style={{color:'#ffffff',textAlign:'center',paddingLeft:20,paddingTop:4,fontSize:18}}>Sign Up with Twitter</Text>
                 </TouchableOpacity>
   </View>
   <View style={{marginTop:-90}}>
       <TouchableOpacity onPress={()=>navigation.navigate("SignInWithFB")} style={{backgroundColor:'#4064AC',marginHorizontal:30,height:'21%',flexDirection:'row',borderRadius:4}}>
       <Logo name="facebook" color="#ffffff" size={34} style={{paddingTop:2,paddingLeft:7}} />
          <Text style={{color:'#ffffff',textAlign:'center',paddingLeft:30,paddingTop:4,fontSize:18}}>Sign Up with Facebook</Text>
       </TouchableOpacity>
   </View>
   <View style={{marginTop:-120,}}>
       <TouchableOpacity onPress={()=>alert("No Page Found for This!!")}  style={{borderWidth:0.6,backgroundColor:'#ffffff',marginHorizontal:30,height:'21%',flexDirection:'row',borderRadius:4}}>
       <Logo name="google" color="black" size={30} style={{paddingTop:2,paddingLeft:7}} />
          <Text style={{color:'#000000',textAlign:'center',paddingLeft:30,paddingTop:4,fontSize:18}}>Sign Up with Google</Text>
           
       </TouchableOpacity>
   </View>
   <View style={{marginTop:-120}}>
       <TouchableOpacity onPress={()=>navigation.navigate("SignInWithEmail")} style={{borderWidth:0.6,backgroundColor:'#ffffff',marginHorizontal:30,height:'21%',flexDirection:'row',borderRadius:4}}>
       <EmailLogo name="email" color="black" size={25} style={{paddingTop:4,paddingLeft:7}} />
          <Text style={{color:'#000000',textAlign:'center',paddingLeft:30,paddingTop:4,fontSize:18}}>Sign Up via email</Text>
           </TouchableOpacity>
   </View>

 <View style={{justifyContent:'center', alignItems:'center',marginTop:-40}}>
 <Text style={{fontSize:12}}>Already have a Sociallite Account? </Text>
 <TouchableOpacity onPress={()=>navigation.navigate("SignInScreen")}>
 <Text style={{fontWeight:'bold',color:"#227235"}}>Log in to your account</Text>
 </TouchableOpacity>

 </View>
    </View>
    </>
)
}
export default SignUpScreen