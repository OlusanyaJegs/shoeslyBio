import {
  View,
  Text,
  StatusBar,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Image,
  KeyboardAvoidingView,
  Platform,
  Alert,
} from 'react-native';
import React, { useContext, useEffect, useState } from 'react';
import Icon from 'react-native-vector-icons/AntDesign';
import LocalAuthentication from 'rn-local-authentication';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Signin = ({navigation}) => {
  const [email, setEmail]= useState("")
  const [password, setPassword]= useState("")
  const [isPasswordInvisible, setIsPaswordInvisible]= useState(true)
  const [userDetails, setUserDetails] = useState([])

useEffect(() => {
  getData()
}, [])

  const check =async()=>{
    const rnBiometrics = new ReactNativeBiometrics()

    const { biometryType } = await rnBiometrics.isSensorAvailable()
    console.log("tempt "+biometryType);

    // if (biometryType === BiometryTypes.Biometrics) {
    //   //do something face id specific
    // }
  }
  const biometricCapturing = () =>{
    check()
    LocalAuthentication.authenticateAsync({
      reason: "Please, authenticate!"
    }).then(response => {
        if (response.success) {
          setUserDetails(getData())
          setEmail(userDetails.email)
          setPassword(userDetails.password)
          Alert.alert("Authenticated successfully!");
            navigation.navigate('home')
        } else {
            Alert.alert("Something went wrong");
        }
    })
  }

  const login = async() =>{

    // setUserDetails(await getData())
    if(email === userDetails.email && password === userDetails.password){
      navigation.navigate('home');
    }
    else{
      console.log("=====sd=========== "+userDetails);
      Alert.alert("Invalid User Name or Password")
    }
  }

  const getData = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem('user')
      setUserDetails(JSON.parse(jsonValue))
      return jsonValue != null ? JSON.parse(jsonValue) : null;
    } catch(e) {
      // error reading value
    }
  }

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={{flex: 1, padding: 20}}>
      {/* icon */}
      <View
        style={{borderWidth: 0.5, width: '14%', padding: 10, borderRadius: 12}}>
        <Icon
          style={{textAlign: 'center'}}
          name="left"
          size={16}
          color="#111827"

          onPress={()=>navigation.navigate('Home')}
        />
      </View>
      <View style={{marginVertical: 30}}>
        <Text style={{fontSize: 24, fontWeight: '700'}}>Hi There! 👋</Text>
        <Text style={{fontSize: 12, lineHeight: 22}}>
          Welcome back, Sign in to your account.
        </Text>
      </View>
      <View>
        <View style={{marginBottom: 30}}>
          <Text style={{fontSize: 14, fontWeight: '700'}}>Email</Text>
          <TextInput 
            style={styles.input} 
            onChangeText={(email)=>setEmail(email)} 
            placeholder="example@gmail.com"
            />
        </View>
        <View style={{marginBottom: 30}}>
          <Text style={{fontSize: 14, fontWeight: '700'}}>Password</Text>
          <View style={{position: 'relative'}}>
            <TextInput 
            style={styles.input} 
            onChangeText={(password)=>setPassword(password)}
            secureTextEntry={isPasswordInvisible}
            placeholder="Enter your Password" 
            />
            <Icon
              style={{
                textAlign: 'center',
                position: 'absolute',
                right: 10,
                bottom: 10,
              }}
              size={22}
              color="#111827"
              name={isPasswordInvisible ?"eye":"eyeo"}
              onPress={()=>setIsPaswordInvisible(!isPasswordInvisible)}
            />
          </View>
        </View>
        <Text style={{fontSize: 12, lineHeight: 22}}>Forgot Password?</Text>
      </View>
      {/* footer */}
      <View style={{flex: 1, justifyContent: 'flex-end'}}>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <TouchableOpacity
            onPress={() => {
              // navigation.navigate("home")
              login()
            }}
            style={{
              backgroundColor: '#101010',
              paddingVertical: 12,
              borderRadius: 100,

              width: '100%',
            }}>
            <Text style={{color: '#Fff', textAlign: 'center'}}>SIGN IN</Text>
          </TouchableOpacity>
          {/* <TouchableOpacity onPress={()=>biometricCapturing()}>
            <Image source={require('../assets/Images/fingerPrint.png')} />
          </TouchableOpacity> */}
        </View>
        {/* bottom text */}
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            marginVertical: 20,
          }}>
          <Text>Don’t have an account? </Text>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('signup');
            }}>
            <Text style={{fontWeight: '700', fontSize: 14}}>
              Create Account
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  input: {
    borderBottomWidth: 0.5,
  },
  text__center: {
    textAlign: 'center',
  },
});

export default Signin;
