import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {flex:1, justifyContent:"center", alignItems:"center"},
    textInputStyle:{width:"80%", height:60, marginBottom: 20, borderColor:"#d1d1d1", 
                borderWidth:2, backgroundColor:"white"},
    button:{width:120, height:50, backgroundColor:"#7c7fc9", alignItems:"center", justifyContent:"center"},
    text:{color:"white"},
    error:{color:"red", marginBottom: 20, fontWeight:"bold"}
  });
  
export default styles;