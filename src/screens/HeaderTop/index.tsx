import React from 'react';
import {View, Text, Image, Pressable} from 'react-native';
import styles from './style';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamsList } from '../../../App';
import GlobalStyle from '../../utils/GlobalStyle';

interface HeaderProps {
  navigation : StackNavigationProp<RootStackParamsList, 'HeaderTop'>;
  route: any;
  title:string
}

const HeaderTop = ({navigation, route,title}: HeaderProps) => {
  const back = () => {
    navigation.navigate('ContactUs');
  }

  return (
    <View style = {styles.cont} >
    <View style={styles.container}>
      <Pressable onPress={back} >
        <Image style={styles.menu} source={{uri: 'https://cdn-icons-png.flaticon.com/512/3114/3114883.png'}}/>
      </Pressable>
      <Text style={[styles.heading, GlobalStyle.ButtonFont ]} >{title}</Text>
      <Pressable>
        <Image style={styles.menu} source={{uri:'https://static.vecteezy.com/system/resources/previews/018/972/609/original/cute-sun-illustration-design-png.png'}}/>
      </Pressable>
    </View>
    </View>
  );
};

export default HeaderTop;


