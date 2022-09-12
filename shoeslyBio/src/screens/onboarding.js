import React, { useContext } from 'react';
import {
  Button,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Image,
  TouchableOpacity,
} from 'react-native';

const Onboarding = ({navigation}) => {

  return (
    <View style={styles.Onboarding}>
      <Image source={require('../assets/Images/onboard-img.png')} />

      <View style={styles.middle__text}>
        <Text
          style={[
            styles.text__center,
            {fontSize: 36, fontWeight: '700', lineHeight: 46},
          ]}>
          Goods Arrived On Time
        </Text>
        <Text
          style={[
            styles.text__center,
            {fontSize: 12, fontWeight: '400', lineHeight: 22, marginTop: 20},
          ]}>
          Get your dream item easily and safely with Shoesly. and get other
          interesting offers
        </Text>
      </View>

      <View style={{width: '100%'}}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('signup');
          }}
          style={styles.onboardingButton}>
          <Text style={[{color: '#fff'}, styles.text__center]}>SIGN UP</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => {
           navigation.navigate('signin');
        }}>
          <Text
            style={[
              styles.text__center,
              {
                marginTop: 20,
              },
            ]}>
            SIGN IN
          </Text>
        </TouchableOpacity>

      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  Onboarding: {
    flex: 1,
    justifyContent: 'space-evenly',
    paddingHorizontal: 20,
    alignItems: 'center',
  },

  text__center: {
    textAlign: 'center',
  },

  onboardingButton: {
    elevation: 8,
    borderRadius: 100,
    paddingVertical: 16,
    paddingHorizontal: 12,
    alignSelf: 'stretch',
    backgroundColor: '#101010',
    // width: '100%',
  },
});

export default Onboarding;
