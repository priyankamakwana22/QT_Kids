import {StackNavigationProp} from '@react-navigation/stack';
import React from 'react';
import {FlatList, Image, Pressable, Text, View} from 'react-native';
import {RootStackParamsList} from '../../../App';
import styles from './style';
import dashBoardMockData from '../../mockData/dashBoardMockData';
import HeaderTop from '../HeaderTop';

interface DashboardProps {
  navigation: StackNavigationProp<RootStackParamsList, 'Dashboard'>;
}

const Dashboard = ({navigation}: DashboardProps) => {
  return (
    <View style={styles.cont}>
      <FlatList
        data={dashBoardMockData}
        keyExtractor={item => item.id.toString()}
        renderItem={({item, index}) => (
          <View style={styles.container}>
            <Pressable
              style={index % 2 == 0 ? styles.bar : styles.oddBar}
              onPress={() => {
                navigation.navigate('Main', {title: `${item.name}`});
              }}

              // onPress={() => navigation.navigate('Main')}
            >
              <View
                style={[
                  index % 2 == 0 ? styles.ice : styles.oddIce,
                  {backgroundColor: `${item.color}`},
                ]}>
                <Image
                  style={styles.img}
                  source={{
                    uri: `${item.img}`,
                  }}
                />
              </View>
              <View style={index % 2 == 0 ? styles.stick : styles.oddStick}>
                <Text style={styles.txt}>{item.name}</Text>
              </View>
            </Pressable>
          </View>
        )}
      />
    </View>
  );
};

export default Dashboard;
