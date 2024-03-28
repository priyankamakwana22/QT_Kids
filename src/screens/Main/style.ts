import {StyleSheet, Dimensions} from 'react-native';

const styles = StyleSheet.create({
  cont: {backgroundColor: '#ffff', margin: 10},
  container: {
    borderRadius: 30,
    height: 200,
    width: Dimensions.get('screen').width / 2.5,
    alignItems: 'center',

    justifyContent: 'center',
  },
  txt: {fontSize: 20, color: 'black'},
  img: {height: '50%', width: '50%'},
});

export default styles;
