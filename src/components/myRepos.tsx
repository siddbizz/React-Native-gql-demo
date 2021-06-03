import * as React from 'react';
import { Text, View, FlatList } from 'react-native';
import {SearchStyles} from './style';
import {myRepoType, myRepoInfo} from '../types/types';
import { useQuery } from "@apollo/client";
import {getMyRepos} from '../Graphql/Queries';


const myRepos = () => {
  const { data } = useQuery<myRepoType>(getMyRepos);

  if(!data) return <Text>loading ....</Text>

  const {viewer:{repositories:{nodes:repoNodes}}} = data;

  const renderRepos = (item: myRepoInfo, index: number) => 
    {
        return (
            <View 
                style={SearchStyles.cardContainer} 
            >
                
                <View style={SearchStyles.cardView1} >
                    <Text style={SearchStyles.cardText1} >{item.name}</Text>
                    <Text>{(item.description)? item.description.substr(0,40):"No description available"}</Text>
                </View>
                
            </View>
        )
    }

  return (
    <View style={SearchStyles.container}>
      <FlatList
          style={SearchStyles.flatListStyle}
          showsHorizontalScrollIndicator={false}
          scrollEventThrottle={16}
          updateCellsBatchingPeriod={10}
          data={repoNodes}
          renderItem={({ item, index }) => renderRepos(item, index)}
          keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
};

export default myRepos;
