import React from 'react';
import {FlatList, Image, Text, View} from 'react-native';
import styles from '../Main/style';
import mainMockData from '../../mockData/mainMockData';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamsList} from '../../../App';
import HeaderTop from '../HeaderTop';

interface MainProps {
  navigation: StackNavigationProp<RootStackParamsList, 'Main'>;
  route: any
}

const Main = ({navigation, route}: MainProps) => {
  const {title} = route.params;
  return (<View style={{flex: 1,flexDirection: 'column', alignItems:'center', justifyContent:'center'}} >
    <HeaderTop title={title} />
    <FlatList
      style={{flex: 0.8 ,paddingLeft: 20, paddingRight: 20, backgroundColor: '#ffff'}}
      data={mainMockData}
      numColumns={2}
      keyExtractor={item => item.id.toString()}
      renderItem={({item}) => (
        <View style={styles.cont}>
          <View style={[styles.container, {backgroundColor: `${item.color}`}]}>
            <Image
              style={styles.img}
              source={{uri: `${item.img}`}}
              resizeMode="contain"
            />
            <Text style={styles.txt}>{item.name}</Text>
          </View>
        </View>
      )}></FlatList></View>
  );
};

export default Main;
