import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  cont : {
    paddingTop: 10,
    backgroundColor:'#ffffff'},
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    
  },
  bar : {flexDirection:'row', flex: 1,height: 200, width: '90%',alignItems:'center', marginBottom:20 },
  oddBar : {flexDirection:'row-reverse', flex: 1,height: 200, width: '90%',alignItems:'center', marginBottom:20 },
  ice : {alignItems:'center',justifyContent:'center' ,height: '100%', width: '50%',flex:0.6, borderTopLeftRadius:120, borderBottomLeftRadius:120, borderTopRightRadius: 20, borderBottomRightRadius: 20},
  oddIce : {alignItems:'center', justifyContent:'center' ,height: '100%', width: '50%',flex:0.6, borderTopRightRadius:120, borderBottomRightRadius:120, borderTopLeftRadius: 20, borderBottomLeftRadius: 20},
  stick: {height: '30%',backgroundColor: '#d6c2ac',flex:0.4, alignItems:'center', justifyContent:'center', borderTopRightRadius:20, borderBottomRightRadius:20 },
  oddStick: {height: '30%',backgroundColor: '#d6c2ac',flex:0.4, alignItems:'center', justifyContent:'center', borderTopLeftRadius:20, borderBottomLeftRadius:20 } ,
  txt : {fontSize: 25, fontWeight: 'bold', textAlign:'center', color: 'black'},
  img : {alignItems:'center',height: 50, width: 50}
});

export default styles;



