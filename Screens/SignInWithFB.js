import React from "react"
import {Text,View,TextInput,TouchableOpacity} from "react-native"
import FB from "react-native-vector-icons/Fontisto"
import Cross from "react-native-vector-icons/MaterialIcons"

const SignInWithFB =({navigation})=>{
    return(
        <>
        <View style={{flex:1, backgroundColor:"black"}}> 
        
        <View style={{marginTop:10, marginHorizontal:10,backgroundColor:'white',borderRadius:5}}>
        <Cross name="cancel" onPress={()=>navigation.navigate("SignInScreen")} size={30} style={{marginTop:-6,position:'relative',marginLeft:-6}}/> 
          <View style={{justifyContent:'center', alignItems:'center',marginTop:10, backgroundColor:'#4267B2',marginHorizontal:4}}>
            <FB name ="facebook" color="#ffffff" size={55}/>
            </View>
            <View>
                {/* icon view */}
                <View style={{justifyContent:'center',alignItems:"center",marginTop:30}}>
            <FB name ="facebook" color="#4267B2" size={35}/>
            </View>
            {/* end of icon view */}
            <Text style={{textAlign:'center' , fontSize:18}}>Log in to your Facebook {"\n"} account to connect to Hootsuite</Text>

            </View>
            {/* input tag view view */}
            <View style={{backgroundColor:'#ffffff', marginTop:20, marginHorizontal:10,borderWidth:0.4}}>
            <TextInput placeholder="Mobile number or email address" style={{borderBottomWidth:0.4}}/>
            <TextInput placeholder="Facebook password" secureTextEntry={true}/>
            </View>
            <TouchableOpacity style={{backgroundColor:"#4267B2",height:40,marginTop:10, marginHorizontal:10, borderRadius:10}}>
                <Text style={{textAlign:'center', fontSize:22,paddingTop:4, color:'#ffffff'}}>Log In</Text>
            </TouchableOpacity>
            <View>
                <TouchableOpacity style={{marginTop:15}}>
                    <Text style={{textAlign:'center', fontSize:17}}>Create account</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{marginTop:10}}>
                    <Text style={{textAlign:'center', fontSize:17}}>Not now</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{marginTop:15}}>
                    <Text style={{textAlign:'center', color:'#4064AC', fontSize:17}}>Forgotten password? Help Center</Text>
                </TouchableOpacity>
            </View>

            <View style={{marginTop:240}}>
                <Text style={{textAlign:'center'}}>Facebook Inc.</Text>
            </View>
            <View style={{marginTop:100, backgroundColor:'white'}}></View>
            
           
                  
      </View>
      </View>
     
      {/* end of main view */}
        </>
    )
}
export default SignInWithFB