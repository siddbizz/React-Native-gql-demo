import { StyleSheet, Dimensions } from "react-native";
const window = Dimensions.get('window');
export const WIDTH = window.width;

const styles = StyleSheet.create({
    container:{
        flex:1, alignItems:"center", marginTop:10
    },
    
    container1:{width:"95%", height:"10%", borderColor:"#a4bcdd", borderWidth:1},

    container2:{width:"95%", height:"20%", borderColor:"#a4bcdd", borderWidth:1},

    container3:{width:"95%", height:"20%", borderColor:"#a4bcdd", borderWidth:1},
    
    title1:{width:"100%", height: 30, borderBottomColor:"#a4bcdd", borderBottomWidth:2, 
            justifyContent:"center", alignItems:"center"},
    
    title2:{width:"100%", height: 30, borderBottomColor:"#a4bcdd", borderBottomWidth:2, 
    justifyContent:"center", alignItems:"center"},
    
    title3:{width:"100%", height: 30, borderBottomColor:"#af5d5d", borderBottomWidth:2, 
            justifyContent:"center", alignItems:"center"},
    
    blueText:{fontSize:15, color:"blue", fontWeight:"bold"},

    redText:{fontSize:15, color:"#af5d5d", fontWeight:"bold"},

    renderRowStyle:{width:"70%", height:25, borderWidth:1, borderRadius:5,
            borderColor:"#bdbebf", alignSelf:"center", alignItems:"center", margin:5},

    buttonContainer:{width:"95%", height:80, flexDirection:"row", backgroundColor:"#bfbfbf", 
        justifyContent:"space-around", alignItems:"center", marginTop:5},

    issueButton:{alignSelf:"center", alignItems:"center", justifyContent:"center", width:110, height:50
    , backgroundColor:"red", borderRadius:5},

    prButton:{alignSelf:"center", alignItems:"center", justifyContent:"center", width:120, height:50
        , backgroundColor:"#666191", borderRadius:5},

    star:{fontSize:30}

});

export default styles;