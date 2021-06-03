import { StyleSheet } from 'react-native';


export const SearchStyles = StyleSheet.create({
    container: {flex:1, alignItems:"center"},
    
    textInputStyle:{width:"80%", height:50, marginBottom: 20, borderColor:"#d1d1d1", 
                borderWidth:2, backgroundColor:"white"},

    container1:{width:"100%", flexDirection:"row", justifyContent:"space-between"},

    flatListStyle:{ width:"100%", marginBottom:20},

    cardContainer:{width:"97%", height:80, flexDirection:"row",
        alignItems:"center", justifyContent:"space-around", alignSelf:"center", 
        paddingLeft:5, borderColor:"#b0b1b2", borderWidth:1, marginBottom:10},

    cardView1:{width: "85%", height:"100%", justifyContent:"space-evenly"},

    cardText1:{fontSize:13, fontWeight:"bold", marginBottom:5},

    cardText2:{fontSize:20, fontWeight:"bold"}
  });

  