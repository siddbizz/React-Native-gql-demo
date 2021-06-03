import { StyleSheet } from "react-native";
import { Dimensions } from 'react-native';

const window = Dimensions.get('window');
export const WIDTH = window.width;
const HEIGHT = window.height;

const styles = StyleSheet.create({
    container:{
        flex:1, alignItems:"center", paddingTop:30,
    },
    container2:{width:"90%", height:"80%", marginTop:20},
    button:{backgroundColor:"#3863a0", width: "45%", height: 50, justifyContent:"center", alignItems:"center", borderRadius:5},
    buttonContainer:{width:"90%", flexDirection:"row", justifyContent:"space-between"},
    buttonText:{color:"white", fontWeight:"bold"}
});

export default styles;