import React, {ReactElement, useEffect} from 'react';
import { Text, View, FlatList } from 'react-native';
import styles from './styles';
import { useQuery } from "@apollo/client";
import {getStarredRepos} from '../../Graphql/Queries';
import {navPropsWatchlist, starredRepoType, starredRepoInfo} from '../../types/types';

type watchlistProps = navPropsWatchlist;

const watchlist = (props: watchlistProps): ReactElement => {
  const { data, refetch } = useQuery<starredRepoType>(getStarredRepos);

  useEffect(()=>{
    refetch();
  }, [])

  if(!data) return <Text>loading ....</Text>

  const {viewer:{starredRepositories:{nodes:starNodes}}} = data;

  const renderRepos = (item: starredRepoInfo, index: number) => 
    {
        return (
            <View 
                style={styles.cardContainer} 
            >
                
                <View style={styles.cardView1} >
                    <Text style={styles.cardText1} >{item.nameWithOwner}</Text>
                    <Text>{(item.description)? item.description.substr(0,40):"No description available"}</Text>
                </View>
                
            </View>
        )
    }

  return (
    <View style={styles.container}>
      <FlatList
          style={styles.flatListStyle}
          showsHorizontalScrollIndicator={false}
          scrollEventThrottle={16}
          updateCellsBatchingPeriod={10}
          data={starNodes}
          renderItem={({ item, index }) => renderRepos(item, index)}
          keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
};

export default watchlist;
