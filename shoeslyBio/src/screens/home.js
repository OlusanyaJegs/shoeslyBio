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
} from 'react-native';
import React, { useContext, useState } from 'react';
import Icon from 'react-native-vector-icons/AntDesign';
import Ionicon from 'react-native-vector-icons/Ionicons';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Home = ({navigation}) => {
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
          <>
              <Text>Welcome {userDetails.name} </Text>
          </>
        <View
          style={{
            borderWidth: 0.3,
            borderRadius: 20,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            paddingVertical: 5,
            paddingHorizontal: 15,
          }}>
            
          <Icon
            style={{textAlign: 'center'}}
            name="search1"
            size={20}
            color="#101010"
          />
          <TextInput style={{}} placeholder="What are you looking for?" />
          <Ionicon
            style={{textAlign: 'center'}}
            name="camera-outline"
            size={30}
            color="#101010"
          />
        </View>
        <View style={{marginTop: 20}}>
          <ImageBackground
            source={require('../assets/Images/nike-shoe.png')}
            resizeMode="cover"
            style={{
              height: 200,
              justifyContent: 'flex-end',
            }}
            imageStyle={{
              borderRadius: 20,
            }}>
            <View style={{padding: 20}}>
              <Pressable style={styles.button} onPress={()=>getData()}>
                <Text
                  style={[
                    styles.text__center,
                    styles.text__white,
                    {fontSize: 12, fontWeight: '700'},
                  ]}>
                  New
                </Text>
              </Pressable>
              <Text
                style={[
                  styles.text__white,
                  {fontSize: 20, fontWeight: '700', paddingBottom: 10},
                ]}>
                Nike Air Max 98 Noir Black{' '}
              </Text>
              <Text
                style={[styles.text__white, {fontSize: 12, fontWeight: '700'}]}>
                $ 89,99 USD
              </Text>
            </View>
          </ImageBackground>
        </View>
        {/* brands */}
        <View style={{marginVertical: 20}}>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <Text
              style={[styles.text__black, {fontSize: 20, fontWeight: '700'}]}>
              Brands
            </Text>
            <Text
              style={{
                textAlignVertical: 'center',
                fontWeight: '600',
                fontSize: 12,
              }}>
              SEE ALL
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
        <View style={{marginVertical: 20}}>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <Text
              style={[styles.text__black, {fontSize: 20, fontWeight: '700'}]}>
              Special For Your
            </Text>
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
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            {/* item */}
            <View>
              <View
                style={{
                  backgroundColor: 'rgba(16,16,16, 0.05)',
                  padding: 20,
                  borderRadius: 20,
                  justifyContent: 'center',
                  alignItems: 'center',
                  marginRight: 20,
                  marginVertical: 20,
                }}>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',

                    alignItems: 'center',
                    width: 125,
                    paddingBottom: 20,
                  }}>
                  <Image source={require('../assets/icons/nike-i-shoe.png')} />
                  <Icon
                    style={{textAlign: 'center'}}
                    name="hearto"
                    size={20}
                    color="#101010"
                  />
                </View>
                <Image
                  style={{width: 125}}
                  source={require('../assets/Images/nnike-shoe.png')}
                />
              </View>
              <View>
                <Text style={{fontSize: 12, lineHeight: 22}}>
                  {' '}
                  Jordan 1 Retro High Tie Dye
                </Text>
                <Text style={{fontSize: 13}}>
                  <Icon
                    style={{textAlign: 'center'}}
                    name="star"
                    size={20}
                    color="#FFD700"
                  />
                  <Text style={{fontWeight: '700'}}> 4.5</Text> (1045 Reviews)
                </Text>
                <Text style={{fontSize: 14, fontWeight: '700', lineHeight: 24}}>
                  $235,00
                </Text>
              </View>
            </View>

            {/* item */}
            <View>
              <View
                style={{
                  backgroundColor: 'rgba(16,16,16, 0.05)',
                  padding: 20,
                  borderRadius: 20,
                  justifyContent: 'center',
                  alignItems: 'center',
                  marginRight: 20,
                  marginVertical: 20,
                }}>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',

                    alignItems: 'center',
                    width: 125,
                    paddingBottom: 20,
                  }}>
                  <Image source={require('../assets/icons/nike-i-shoe.png')} />
                  <Icon
                    style={{textAlign: 'center'}}
                    name="heart"
                    size={20}
                    color="#101010"
                  />
                </View>
                <Image
                  style={{width: 125}}
                  source={require('../assets/Images/nnike-shoe.png')}
                />
              </View>
              <View>
                <Text style={{fontSize: 12, lineHeight: 22}}>
                  {' '}
                  Jordan 1 Retro High Tie Dye
                </Text>
                <Text style={{fontSize: 13}}>
                  <Icon
                    style={{textAlign: 'center'}}
                    name="star"
                    size={20}
                    color="#FFD700"
                  />
                  <Text style={{fontWeight: '700'}}> 4.5</Text> (1045 Reviews)
                </Text>
                <Text style={{fontSize: 14, fontWeight: '700', lineHeight: 24}}>
                  $235,00
                </Text>
              </View>
            </View>

            {/* item */}
            <View>
              <View
                style={{
                  backgroundColor: 'green',
                  padding: 20,
                  borderRadius: 20,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <View>
                  <Image ource={require('../assets/icons/nike-i-shoe.png')} />
                  <Icon
                    style={{textAlign: 'center'}}
                    name="hearto"
                    size={20}
                    color="#101010"
                  />
                </View>
                <Image source={require('../assets/Images/nnike-shoe.png')} />
              </View>
              <View>
                <Text>Jordan 1 Retro High Tie Dye</Text>
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
            </View>
          </View>
        </View>
        {/* most popular */}
        <View style={{marginTop: 20}}>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <Text
              style={[styles.text__black, {fontSize: 20, fontWeight: '700'}]}>
              Most Popular
            </Text>
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
                  source={require('../assets/Images/jordan-shoe.png')}
                />
              </View>
              <View>
                <Image source={require('../assets/icons/puma-logo.png')} />
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
                  name="hearto"
                  size={20}
                  color="#101010"
                />
              </View>
            </View>

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
                  source={require('../assets/Images/adidas-shoe.png')}
                />
              </View>
              <View>
                <Image source={require('../assets/icons/adidas-i-shoe.png')} />
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
                  name="hearto"
                  size={20}
                  color="#101010"
                />
              </View>
            </View>

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
        <Image source={require('../assets/icons/home.png')} />
        <Image source={require('../assets/icons/sHome.png')} />
        <Image source={require('../assets/icons/info.png')} />
        <Image source={require('../assets/icons/love.png')} />
        <TouchableHighlight onPress={()=>{navigation.navigate('profile')}}>
          <Image source={require('../assets/icons/profile.png')} />
        </TouchableHighlight>
      </View>
    </View>
  );
};

export default Home;

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
