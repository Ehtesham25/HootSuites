import React from "react"
import {Text,TouchableOpacity,View,ScrollView,TextInput} from "react-native"
import Logo from "react-native-vector-icons/FontAwesome"
import StarLogo from "react-native-vector-icons/MaterialCommunityIcons"
import BouncyCheckbox from "react-native-bouncy-checkbox";

const SignInWithTwter =()=>{
    return(
        <>
        <ScrollView>
        <View style={{flex:1, backgroundColor:'#ffffff'}}>
            <View style={{flexDirection:'row',marginTop:40,borderBottomWidth:0.4}}>
            <Logo name="twitter" color="#5DA9DD" size={40} style={{paddingTop:2,paddingLeft:7}} />
            <TouchableOpacity>
                <Text style={{marginLeft:192,paddingTop:16}}>Sign Up with Twitter {'>'}</Text>
            </TouchableOpacity>
          
            </View>
            <View style={{marginTop:20}}>  
                <Text style={{fontSize:20}}>  Authorize Sociallite Inc. to {"\n"}   access your account?</Text>           
          </View>
          <View style={{flexDirection:'row',marginTop:10}}>
          <Logo name="twitter" color="#5DA9DD" size={40} style={{paddingTop:2,paddingLeft:7,paddingTop:16}} />
          <View style={{marginLeft:10,marginTop:19}}>
          <Text style={{marginBottom:6}}> Sociallite Inc.</Text>
          <Text style={{marginBottom:6}}>By Sociallite Inc.</Text>
          <TouchableOpacity>
              <Text style={{marginBottom:6}}>www.Sociallite.com</Text>
              <Text style={{color:'#4064AC',marginBottom:6}}>privacy Policy</Text>
              <Text style={{color:'#4064AC',marginBottom:6}}>Terms and Conditions</Text>
          </TouchableOpacity>
          </View>
          </View>
          {/* start input text view */}
          <View style={{marginTop:22}}> 
              <TextInput placeholder="Username or email"
              style={{borderWidth:0.4,borderRadius:10,margin:10,fontSize:14,paddingLeft:20}}
              / >
                <TextInput placeholder="Password"
                secureTextEntry={true}
              style={{borderWidth:0.4,borderRadius:10,margin:10,fontSize:14,paddingLeft:20}}
              / >
          </View>
          <View style={{flexDirection:'row',marginBottom:10}}>
              <BouncyCheckbox
               isChecked
               textColor="#000"
               fillColor="black"
               text="Remember me."
               onPress={(checked) => console.log("Checked: ", checked)}
              />
              <TouchableOpacity>
              <Text style={{color:'#4064AC',paddingTop:12}}>Forget Password?</Text>
              </TouchableOpacity>            
          </View>
          <View style={{flexDirection:'row',marginLeft:10}}>
              <TouchableOpacity style={{backgroundColor:'#0078D7',height:35, borderRadius:6,width:150}}>
                  <Text style={{color:'#ffffff', fontSize:20,paddingTop:4, textAlign:'center'}}>Authorize app</Text>
              </TouchableOpacity>
              <TouchableOpacity style={{marginLeft:10, width:120}}>
                  <Text style={{fontSize:20, paddingTop:2,height:35, textAlign:'center',borderRadius:6,borderWidth:0.3}}>Cancel</Text>
              </TouchableOpacity>
          </View>

          <View style={{marginTop:16,marginLeft:10}}>
              <Text style={{color:'#1FA363'}}>This application will be able to:</Text>
             <View style={{flexDirection:'row'}}>
             <Text style={{fontSize:33}}>{`\u2022`}</Text>
                 <Text style={{fontSize:13,marginTop:4,marginLeft:6}}>See Tweets from your timeline (including {"\n"} Protected Tweets) as well as your Lists and {"\n"} collections</Text>
                 </View>

                 <View style={{flexDirection:'row'}}>
               <Text style={{fontSize:33}}>{`\u2022`}</Text>
                 <Text style={{fontSize:13,marginTop:14,marginLeft:6}}>See Your Twitter profile information and account {"\n"} settings</Text>
                 </View>
                 <View style={{flexDirection:'row'}}>
               <Text style={{fontSize:33}}>{`\u2022`}</Text>
                 <Text style={{fontSize:13,marginTop:14,marginLeft:6}}>See accounts you follow, mute, and block. {"\n"} settings</Text>
                 </View>
                 <View style={{flexDirection:'row'}}>
               <Text style={{fontSize:33}}>{`\u2022`}</Text>
                 <Text style={{fontSize:13,marginTop:14,marginLeft:6}}>Follow and unfollow accounts for you.</Text>
                 </View>
                 <View style={{flexDirection:'row'}}>
               <Text style={{fontSize:33}}>{`\u2022`}</Text>
                 <Text style={{fontSize:13,marginTop:14,marginLeft:6}}>Updata Your profile and account settings.</Text>
                 </View>
                 <View style={{flexDirection:'row'}}>
               <Text style={{fontSize:33}}>{`\u2022`}</Text>
                 <Text style={{fontSize:13,marginTop:14,marginLeft:6}}>Post an delete Tweets for you, and engage with {"\n"} Tweets posted by others (Like, un-like, or reply to {"\n"} a Tweet, Retweet etc.) for you</Text>
                 </View>
                 <View style={{flexDirection:'row'}}>
               <Text style={{fontSize:33}}>{`\u2022`}</Text>
                 <Text style={{fontSize:13,marginTop:14,marginLeft:6}}>Create, manage, and delete Lists and collections {"\n"} for you.</Text>
                 </View>
                 <View style={{flexDirection:'row'}}>
               <Text style={{fontSize:33}}>{`\u2022`}</Text>
                 <Text style={{fontSize:13,marginTop:14,marginLeft:6}}>Mute, block, and report accounts for you.</Text>
                 </View>
                 <View style={{flexDirection:'row'}}>
               <Text style={{fontSize:33}}>{`\u2022`}</Text>
                 <Text style={{fontSize:13,marginTop:14,marginLeft:6}}>Send Direct Messages for you and read, manage, {"\n"} and delete your Direct Messages</Text>
                 </View>
                 <View style={{flexDirection:'row'}}>
               <Text style={{fontSize:33}}>{`\u2022`}</Text>
              
                 <Text style={{fontSize:13,marginTop:14,marginLeft:6}}>See You adversting data including:</Text>
                 </View>
                 <View style={{flexDirection:'row', marginLeft:19,marginTop:6}}>
                 <StarLogo name="star-four-points" color="black" size={18}/>                    
                     <Text style={{marginLeft:8}}>Campaigns</Text>
                 </View>
                 <View style={{flexDirection:'row', marginLeft:19,marginTop:6}}>
                 <StarLogo name="star-four-points" color="black" size={18}/>                    
                     <Text style={{marginLeft:8}}>Audience</Text>
                 </View>
                 <View style={{flexDirection:'row', marginLeft:19,marginTop:6}}>
                 <StarLogo name="star-four-points" color="black" size={18}/>                    
                     <Text style={{marginLeft:8}}>Business and ad account information</Text>
                 </View>
                 <View style={{flexDirection:'row', marginLeft:19,marginTop:6}}>
                 <StarLogo name="star-four-points" color="black" size={18}/>                    
                     <Text style={{marginLeft:8}}>Ad account and user settings</Text>
                 </View>
                 <View style={{flexDirection:'row', marginLeft:19,marginTop:6}}>
                 <StarLogo name="star-four-points" color="black" size={18}/>                    
                     <Text style={{marginLeft:8}}>Creative adn media</Text>
                 </View>
          </View>
          <Text style={{textAlign:'center',marginTop:19,}}>Learn more about third-party app permissions in the <Text style={{color:"#4064AC"}}>Help Center</Text></Text>
        </View>   
       {/* end of main View */}
       {/* footer view */}
       <View style={{justifyContent:'center', marginTop:10,marginLeft:10, marginBottom:10}}>
           <Text>we recommend reviewing the app's terms and privacy Policy {"\n"} to understand
           how it will use data from your twitter account.</Text>

           <Text>By authorizing an app you continue to operate under Twitter's <Text style={{color:"#4064AC"}}>Terms {"\n"} of Services.</Text>
           In particular, some usage information will be shared back with {"\n"} Twitter. For more, see
           our <Text style={{color:'#4064AC'}}>Privacy policy</Text></Text>
       </View>
       </ScrollView>
        </>
    )
}
export default SignInWithTwter