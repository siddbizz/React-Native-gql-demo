import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {flex:1, alignItems:"center"},

    cardView1:{width: "85%", height:"100%", justifyContent:"space-evenly"},

    cardText1:{fontSize:13, fontWeight:"bold", marginBottom:5},

    cardContainer:{width:"97%", height:80, flexDirection:"row",
        alignItems:"center", justifyContent:"space-around", alignSelf:"center", 
        paddingLeft:5, borderColor:"#b0b1b2", borderWidth:1, marginBottom:10},

        flatListStyle:{ width:"100%", marginBottom:20},
  });
  
export default styles;