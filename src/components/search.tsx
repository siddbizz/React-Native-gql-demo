import React, {useState, ReactElement} from 'react';
import { Text, View, TextInput, FlatList, TouchableOpacity } from 'react-native';
import { useLazyQuery } from "@apollo/client";
import {searchRepos} from '../Graphql/Queries';
import {SearchStyles} from './style';
import {RepoType, navPropsHome} from '../types/types';

type searchProps = navPropsHome;

const search = ({navigation, route}: searchProps):ReactElement => {
    const [searchText, setSearchText] = useState<string>("");

    const [searchApi, { loading, data, error }] = useLazyQuery(searchRepos);
    
    const renderRepos = (item: RepoType, index: number) => 
    {
        return (
            <TouchableOpacity 
                style={SearchStyles.cardContainer} 
                onPress={()=>navigation.navigate("Details", {name: item.name, owner:item.owner.login})}
            >
                
                <View style={SearchStyles.cardView1} >
                    <Text style={SearchStyles.cardText1} >{item.name}</Text>
                    <Text>{(item.description)? item.description.substr(0,40):"No description available"}</Text>
                </View>
                
                <TouchableOpacity>
                    <Text style={SearchStyles.cardText2} >&#10159;</Text>
                </TouchableOpacity>
            </TouchableOpacity>
        )
    }

    return (
        <View style={SearchStyles.container}>
            <View style={SearchStyles.container1} >
                <TextInput
                    value= {searchText}
                    onChangeText={(text)=>setSearchText(text)}
                    placeholder={"Search Repos"}
                    style={SearchStyles.textInputStyle}
                />

                <Text onPress={() => searchApi({ variables: { query: searchText } })}  style={{fontSize:35}}>
                    &#128269;
                </Text>
            </View>

            
            {data? 
                // data.search.nodes.map((v:RepoType, i:string)=><Text key={i} >{v.name}</Text>)
                <FlatList
                    style={SearchStyles.flatListStyle}
                    showsHorizontalScrollIndicator={false}
                    scrollEventThrottle={16}
                    updateCellsBatchingPeriod={10}
                    data={data.search.nodes}
                    renderItem={({ item, index }) => renderRepos(item, index)}
                    keyExtractor={(item, index) => index.toString()}
                />
                : 
                null}

            {error? <Text style={{color:"red"}} >Error</Text>:null}
        </View>
  );
};

export default search;

