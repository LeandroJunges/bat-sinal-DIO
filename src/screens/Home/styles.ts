import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection:'column',
    backgroundColor:'#000',
    justifyContent:'center'
  },
  textButton:{
    color: "#000",
    fontSize: 20,
    fontWeight: 'bold',
    textAlign:'center',
  },
    logoContainer: {
    flexDirection:'column',
    borderColor:'#d69705',
    borderWidth:2,
    justifyContent:'center',
    alignSelf:'center',
    marginBottom:40,
    paddingTop:10,
    paddingBottom:10,
    backgroundColor: '#FFF',
    
  },
  buttonContainer:{
    justifyContent:'center',
    alignItems:'center',
    height: 50,    
    marginTop: 20,
    backgroundColor:'#d69705',
    borderRadius: 50
  }

});