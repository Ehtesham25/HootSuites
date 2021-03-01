import React from "react"
import {Text,View,TextInput,TouchableOpacity} from "react-native"

import Logo from "react-native-vector-icons/FontAwesome"

const SignInWithApple =({navigation})=>{
 let date= new Date().getFullYear()
    return(
        <>
        <View style={{flex:1, backgroundColor:'#ffffff'}}>
            <View style={{justifyContent:'center',marginTop:30, height:50, alignItems:"center",backgroundColor:'#000000'}}>
            <Logo name="apple" color="#ffffff" size={40}  />
            </View>
            <View style={{justifyContent:'center',marginTop:33 ,alignItems:'center'}}>
            <Logo name="apple" color="#000" size={60}  />
            <Text style={{textAlign:'center',marginTop:10}}>Use your Apple ID to sign in to {"\n"} Hootsuite.</Text>
            </View>
            <View style={{marginTop:17 ,}}>
          <TextInput placeholder="Apple ID"
          style={{fontSize:22,paddingLeft:10,borderWidth:0.5,margin:10,borderRadius:10}}
          />
          <TouchableOpacity style={{justifyContent:"center",borderRadius:10, alignItems:'center',margin:15,backgroundColor:'#E5F1FB',height:40}}>
             <Text style={{fontSize:20, color:'#000'}}>Sign In</Text>
          </TouchableOpacity>
            </View>
           <View>
               <TouchableOpacity>
               <Text style={{color:'#4064AC',fontSize:16, textAlign:'center'}}>Forgot Apple ID or Password?</Text>
               </TouchableOpacity>
               </View>  
               <View style={{marginTop:20}}>
                   <Text style={{textAlign:'center',fontSize:14}}>In setting up Sign in with apple, information about {"\n"}
                   your interactions with Apple and this may {"\n"} be used by Apple to help prevent
                   fraud</Text>
               </View>
        </View>
        {/* end of main div */}
        {/* Footer  */}
        <View style={{marginBottom:20}}>
            <Text style={{textAlign:'center',paddingTop:10}}> &#xA9; {date} Copyright Apple inc. All rights reserved.</Text>
            <Text style={{textAlign:'center',color:"#4064AC"}}>Privacy policy</Text>
        </View>
    
        </>

    )
}
export default  SignInWithApple