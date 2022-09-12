import {
  View,
  Text,
  TextInput,
  ImageBackground,
  Pressable,
  StyleSheet,
  Image,
  ScrollView,
  TouchableHighlight,
  TouchableOpacity,
} from 'react-native';
import React, { useContext, useEffect, useState } from 'react';
import Icon from 'react-native-vector-icons/AntDesign';
import Ionicon from 'react-native-vector-icons/Ionicons';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Profile = ({navigation}) => {
  const [userDetails, setUserDetails] = useState([])
  const getData = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem('user')
      setUserDetails(JSON.parse(jsonValue))
      return jsonValue != null ? JSON.parse(jsonValue) : null;
    } catch(e) {
      console.log("Error "+e);
      // error reading value
    }
  }

  useEffect(()=>{
    getData()
  },[])

  return (
    <View style={{flex: 1}}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{paddingBottom: '20%'}}
        style={{
          paddingHorizontal: 20,
          paddingTop: 40,
          flex: 1,
        }}>
       
      
        {/* brands */}
        <View style={{marginVertical: 20}}>
        <View
            style={{
              backgroundColor: 'rgba(16,16,16, 0.05)',
              // height: 60,
              // width: 60,
              borderRadius: 30,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Image source={require('../assets/icons/user.png')} style={{height: 120, width:120}}/>
            <Text
              style={[styles.text__black, {fontSize: 20, fontWeight: '700', padding: 10}]}>
              {userDetails.name}
            </Text>
            <Text
              style={[styles.text__black, {fontSize: 20, fontWeight: '700', padding: 10}]}>
              {userDetails.email}
            </Text>
          </View>
          <TouchableOpacity
              onPress={() => {
                // AsyncStorage.clear()
                navigation.navigate("signin")
              }}
              style={{
                backgroundColor: 'black',
                paddingVertical: 10,
                borderRadius: 100,

                width: '100%',
              }}>
              <Text style={{color: '#ffffff', textAlign: 'center'}}>
                Log out
              </Text>
            </TouchableOpacity>
          <View style={{ alignItems: 'center', justifyContent: 'center'}}>
            <Text
                style={[styles.text__black, {fontSize: 15, fontWeight: '700'}]}>
                Advertisement
            </Text>
          </View>
          
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginTop: 20,
            }}>
            {/* item */}
            <View
              style={{
                alignItems: 'center',
              }}>
              <View
                style={{
                  backgroundColor: 'rgba(16,16,16, 0.05)',
                  height: 60,
                  width: 60,
                  borderRadius: 30,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Image source={require('../assets/icons/nike.png')} />
              </View>

              <Text
                style={[
                  styles.text__center,
                  {fontSize: 14, fontWeight: '700'},
                ]}>
                Nike
              </Text>
              <Text style={{color: '#B7B7B7', fontSize: 11}}>1001 Items</Text>
            </View>
            {/* item */}
            <View
              style={{
                alignItems: 'center',
              }}>
              <View
                style={{
                  backgroundColor: 'rgba(16,16,16, 0.05)',
                  height: 60,
                  width: 60,
                  borderRadius: 30,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Image source={require('../assets/icons/puma.png')} />
              </View>

              <Text
                style={[
                  styles.text__center,
                  {fontSize: 14, fontWeight: '700'},
                ]}>
                Puma
              </Text>
              <Text style={{color: '#B7B7B7', fontSize: 11}}>800 Items</Text>
            </View>
            {/* item */}
            <View
              style={{
                alignItems: 'center',
              }}>
              <View
                style={{
                  backgroundColor: 'rgba(16,16,16, 0.05)',
                  height: 60,
                  width: 60,
                  borderRadius: 30,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Image source={require('../assets/icons/addidas.png')} />
              </View>

              <Text
                style={[
                  styles.text__center,
                  {fontSize: 14, fontWeight: '700'},
                ]}>
                adidas
              </Text>
              <Text style={{color: '#B7B7B7', fontSize: 11}}>600 Items</Text>
            </View>
            {/* item */}
            <View
              style={{
                alignItems: 'center',
              }}>
              <View
                style={{
                  backgroundColor: 'rgba(16,16,16, 0.05)',
                  height: 60,
                  width: 60,
                  borderRadius: 30,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Image source={require('../assets/icons/reebok.png')} />
              </View>

              <Text
                style={[
                  styles.text__center,
                  {fontSize: 14, fontWeight: '700'},
                ]}>
                Reebok
              </Text>
              <Text style={{color: '#B7B7B7', fontSize: 11}}>700 Items</Text>
            </View>
          </View>
        </View>
        {/* for you */}
        
        {/* most popular */}
        <View style={{marginTop: 20}}>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <Text
              style={{
                textAlignVertical: 'center',
                fontWeight: '600',
                fontSize: 12,
              }}>
              SEE ALL
            </Text>
          </View>
          {/* shoes */}
          <View style={{}}>
         
            {/* item */}
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                marginBottom: 10,
              }}>
              <View
                style={{
                  backgroundColor: 'rgba(16,16,16, 0.05)',
                  padding: 10,
                  borderRadius: 20,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Image
                  style={{width: 70, resizeMode: 'contain'}}
                  source={require('../assets/Images/nnike-shoe.png')}
                />
              </View>
              <View>
                <Image source={require('../assets/icons/nike-i-shoe.png')} />
                <Text style={{fontSize: 12}}>Jordan 1 Retro High Tie Dye</Text>
                <Text style={{fontSize: 13}}>
                  <Icon
                    style={{textAlign: 'center'}}
                    name="star"
                    size={20}
                    color="#FFD700"
                  />
                  <Text style={{fontWeight: '700'}}> 4.5</Text> #FFD700
                </Text>
                <Text style={{fontSize: 14, fontWeight: '700'}}>$235,00</Text>
              </View>
              <View>
                <Icon
                  style={{textAlign: 'center'}}
                  name="heart"
                  size={20}
                  color="#101010"
                />
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-around',
          paddingVertical: 20,
          backgroundColor: '#fff',
        }}>
        <TouchableHighlight onPress={()=>{navigation.navigate('home')}}>
          <Image source={require('../assets/icons/home.png')}  />
        </TouchableHighlight>
        <Image source={require('../assets/icons/sHome.png')} />
        <Image source={require('../assets/icons/info.png')} />
        <Image source={require('../assets/icons/love.png')} />
        <Image source={require('../assets/icons/profile.png')} />
      </View>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#52BD94',
    width: '15%',
    paddingVertical: 6,
    borderRadius: 8,
    marginBottom: 10,
  },
  text__center: {
    textAlign: 'center',
  },
  text__white: {
    color: '#fff',
  },
  text__black: {
    color: '#101010',
  },
});
