import React, {useEffect} from 'react';
import {View, Text, Image} from 'react-native';
import styles from './style';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamsList} from '../../../App';

interface SplashProp {
  navigation: StackNavigationProp<RootStackParamsList, 'Splash'>;
}

const Splash = ({navigation}: SplashProp) => {
  useEffect(() => {
    setTimeout(navigateToDashboard, 2000);
  });
  const navigateToDashboard = () => {
    navigation.replace('Dashboard');
  };
  return (
    <View style={styles.container}>
      <Image style={styles.img} source={require('../../assets/app_logo.png')} />
      
    </View>
  );
};

export default Splash;
