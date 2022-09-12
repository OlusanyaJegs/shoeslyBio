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
  ScrollView,
  Alert,
} from 'react-native';
import React, { useContext, useState } from 'react';
import Icon from 'react-native-vector-icons/AntDesign';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Signup = ({navigation}) => {
  const [name, setName]= useState("")
  const [email, setEmail]= useState("")
  const [password, setPassword]= useState("")
  const [confirmPassword, setConfirmPassword]= useState("")
  const [isPasswordInvisible, setIsPaswordInvisible]= useState(true)

    const storeData = async (userDetails) => {
      try {
        const jsonValue = JSON.stringify(userDetails)
        await AsyncStorage.setItem('user', jsonValue)
      } catch (e) {
        // saving error
      }
    }


  const signup=()=>{
    if (password != confirmPassword) {
      Alert.alert("Password Mismatch")
    }
    else if(name ==='' || email ==='' || password===''){
      Alert.alert("Please Enter details")
    }else{
      console.log(email+"====="+password+"===== "+name);
      let user ={
        "name":name,
        "email":email,
        "password":password
      }

      console.log("----- "+user);
      storeData(user)
      
      navigation.navigate('home');
    }
  }
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={{flex: 1, padding: 20}}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View
          style={{
            borderWidth: 0.5,
            width: '14%',
            padding: 10,
            borderRadius: 12,
          }}>
          <Icon
            style={{textAlign: 'center'}}
            name="left"
            size={16}
            color="#111827"
            onPress={()=>navigation.goBack()}
          />
        </View>
        <View style={{marginVertical: 30}}>
          <Text style={{fontSize: 24, fontWeight: '700'}}>
            Create an Account
          </Text>
          <Text style={{fontSize: 12, lineHeight: 22}}>
            Hi, Lets create an account to continue.
          </Text>
        </View>
        {/* form */}
        <View>
          <View style={{marginBottom: 30}}>
            <Text style={{fontSize: 14, fontWeight: '700'}}>Name</Text>
            <TextInput style={styles.input} onChangeText={(name)=>setName(name)} placeholder="Enter your name" />
          </View>
          <View style={{marginBottom: 30}}>
            <Text style={{fontSize: 14, fontWeight: '700'}}>Email</Text>
            <TextInput style={styles.input} onChangeText={(email)=>setEmail(email)} placeholder="example@gmail.com" />
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
                onPress={()=>setIsPaswordInvisible(!isPasswordInvisible)}              />
            </View>
          </View>
          <Text style={{marginBottom: 30}}>
            Your password must 8 or more characters{' '}
          </Text>
          <View style={{marginBottom: 30}}>
            <Text style={{fontSize: 14, fontWeight: '700'}}>
              Confirm Password
            </Text>
            <View style={{position: 'relative'}}>
              <TextInput
                style={styles.input}
                secureTextEntry={isPasswordInvisible}
                onChangeText={(confirmPassword)=>setConfirmPassword(confirmPassword)}
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
                onPress={()=>setIsPaswordInvisible(!isPasswordInvisible)}              />
            </View>
          </View>

          <Text style={{fontSize: 12, lineHeight: 22}}>Forgot Password?</Text>
        </View>
        {/* footer */}
        <View style={{flex: 1, justifyContent: 'flex-end'}}>
          <View
            style={{
              paddingVertical: 30,
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <Icon style={{}} name="checkcircle" size={22} color="#111827" />
            <Text style={{width: '85%'}}>
              By Signing up, you agree to the Terms of Service and Privacy
              Policy
            </Text>
          </View>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <TouchableOpacity
              onPress={() => {
                signup()
              }}
              style={{
                backgroundColor: '#101010',
                paddingVertical: 12,
                borderRadius: 100,

                width: '100%',
              }}>
              <Text style={{color: '#Fff', textAlign: 'center'}}>
                Get Started
              </Text>
            </TouchableOpacity>
            {/* <TouchableOpacity>
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
            <Text>Already have an account? </Text>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('signin');
              }}>
              <Text style={{fontWeight: '700', fontSize: 14}}>Sign In</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
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

export default Signup;
