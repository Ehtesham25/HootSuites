import React,{useState} from "react"
import {Text,View,Image, TextInput,TouchableOpacity, StyleSheet} from "react-native"
import image from  "../assets/hoot.png"
import Eyeoff from "react-native-vector-icons/Entypo"
import Eyeon from "react-native-vector-icons/FontAwesome";
import {useTheme} from "react-native-paper"

const SignInWithEmail =()=>{
       
   const { colors } = useTheme();
    const [data, setData] = useState({
        username: '',
        password: '',
        secureTextEntry: true,
    });
    const updateSecureTextEntry = () => {
        setData({
            ...data,
            secureTextEntry: !data.secureTextEntry
        });
    }

    return(
        <>
        <View style={{flex:1, backgroundColor:'#ffffff'}}>
        <View style={{marginTop:20,alignItems:'center', justifyContent:'center'}}>
  <Image
  style={{marginLeft:18,marginTop:13, width:260,backgroundColor:"#ffffff", height:100, borderRadius:20}} source={image}/>
</View>
<Text style={{textAlign:'center', fontSize:22, fontWeight:'bold'}}>Sign in your Hootsuite account</Text>
<View style={{marginTop:20}}>
    <Text style={{fontSize:22, marginLeft:22}}>Email</Text>
    <TextInput
    keyboardType='email-address'
    style={{borderBottomWidth:1.4,fontSize:22,marginLeft:10,marginRight:47, borderBottomColor:'#000'}}
    />
</View>
<View>
<Text style={{fontSize:22, marginLeft:22,marginTop:10}}>Password</Text>

<View style={styles.action}>
        
                <TextInput 
 
                    secureTextEntry={data.secureTextEntry ? true : false}
                    style={[styles.textInput, {
                        color: colors.text,
                        marginHorizontal:10,
                        fontSize:22,
                        borderBottomWidth:1.4
                    }]}
                    autoCapitalize="none"
                    
                />
                <TouchableOpacity
                    onPress={updateSecureTextEntry}
                >
                    {data.secureTextEntry ? 
                     <Eyeon 
                     name="eye"
                     color="grey"
                     size={20}
                     style={{marginRight:20}}
                 />
                    :
                    <Eyeoff 
                        name="eye-with-line"
                        color="grey"
                        size={20}
                        style={{marginRight:20}}
                    />
                   
                    }
                </TouchableOpacity>
            </View>

</View>
<View style={{marginTop:20}}>
<TouchableOpacity style={{justifyContent:'center',borderRadius:9, alignItems:'center', height:40,marginHorizontal:10, backgroundColor:'green'}}>
                 <Text style={{color:'#ffffff', fontSize:18,fontWeight:'bold'}}>Sign in</Text>
             </TouchableOpacity>
</View>
</View>
       
        </>
    )
}
export default SignInWithEmail

const styles = StyleSheet.create({
    container: {
      flex: 1, 
      backgroundColor: '#009387'
    },
    header: {
        flex: 1,
        justifyContent: 'flex-end',
        paddingHorizontal: 20,
        paddingBottom: 50
    },
    footer: {
        flex: 3,
        backgroundColor: '#fff',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingHorizontal: 20,
        paddingVertical: 30
    },
    text_header: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 30
    },
    text_footer: {
        color: '#05375a',
        fontSize: 18
    },
    action: {
        flexDirection: 'row',
        marginTop: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#f2f2f2',
        paddingBottom: 5
    },
    actionError: {
        flexDirection: 'row',
        marginTop: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#FF0000',
        paddingBottom: 5
    },
    textInput: {
        flex: 1,
        marginTop: Platform.OS === 'ios' ? 0 : -12,
        paddingLeft: 10,
        color: '#05375a',
    },
    errorMsg: {
        color: '#FF0000',
        fontSize: 14,
    },
    button: {
        alignItems: 'center',
        marginTop: 50
    },
    signIn: {
        width: '100%',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10
    },
    textSign: {
        fontSize: 22,
        fontWeight: 'bold'
    },
    imgstyle:{
        height:70,
        borderRadius:20,
        marginBottom:-20

        
    }
  });