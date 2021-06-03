import React, {ReactElement, useEffect, useState} from 'react';
import { Text, View, FlatList, TouchableOpacity, TextInput, Alert } from 'react-native';
import styles from './styles';
import {navPropsDetails, RepoDetailType } from '../../types/types';
import { useQuery, useMutation } from "@apollo/client";
import {repoDetails} from '../../Graphql/Queries';
import {ADD_STAR, REMOVE_STAR, CREATE_ISSUE} from '../../Graphql/Mutations';

type detailsProps = navPropsDetails;

const details = ({route}: detailsProps): ReactElement => {

  const { data, refetch } = useQuery<RepoDetailType> (repoDetails, {
    variables: { name:route.params.name, owner:route.params.owner }
  });

  const [addStar] = useMutation(ADD_STAR);
  const [removeStar] = useMutation(REMOVE_STAR);
  const [createIssue] = useMutation(CREATE_ISSUE);

  const [issueTitle, setIssueTitle] = useState<string>("")

  if(!data) return <Text>loading....</Text>

  const {repository:{nameWithOwner, description, viewerHasStarred, id, issues:{nodes: issueNodes}, pullRequests:{nodes:prNodes}}} = data;
  
  

  const renderRow = (item:(any), index:number, type:string) => 
  {
    return(
      <View style={styles.renderRowStyle}>
        {(type == "P")?<Text>{item.author.login}</Text>: <Text>{item.title}</Text>}
      </View>
    )
  }

  const refetchObject = {query:repoDetails,  variables: { name:route.params.name, owner:route.params.owner }}

  const editStar = () => {
    if(viewerHasStarred){
      removeStar({ 
        variables: { ID:id },
        refetchQueries:[refetchObject] 
      });
    } else 
    {
      addStar({ 
        variables: { ID:id },
        refetchQueries:[refetchObject] 
      });
    }
    
  }

  

  const createIssueAction = async () => 
  {
    try {
      await createIssue({ 
        variables: { repoId:id, title:issueTitle },
        refetchQueries:[refetchObject]
      });
      setIssueTitle("");
    } catch (error) {
      Alert.alert("Issue creation failed");
    }
    
  }

  return (
    <View style={styles.container}>
      <View
        style={styles.container1}
      >
        <View style={styles.title1} >
            <Text style={styles.blueText} >{nameWithOwner}</Text>
        </View>

        <View style={{width:"100%", height:"30%"}} >
          <Text>{(description)? description.substr(0,40): "No description Available"}</Text>
        </View>
      </View>

      {(prNodes.length> 0) && <View style={styles.container2} >
            <View style={styles.title2} >
                <Text style={styles.blueText} >{`Pull Requests  (recent ${prNodes.length})`}</Text>
            </View>

            <FlatList
                    style={{ width:"100%", marginBottom:20}}
                    showsHorizontalScrollIndicator={false}
                    scrollEventThrottle={16}
                    updateCellsBatchingPeriod={10}
                    data={prNodes}
                    renderItem={({ item, index }) => renderRow(item, index, "P")}
                    keyExtractor={(item, index) => index.toString()}
                />
        </View>}

        {(issueNodes.length> 0) && <View style={styles.container3} >
            <View style={styles.title3} >
                <Text style={styles.redText} >{`Issues  (recent ${issueNodes.length})`}</Text>
            </View>

            <FlatList
                    style={{ width:"100%", marginBottom:20}}
                    showsHorizontalScrollIndicator={false}
                    scrollEventThrottle={16}
                    updateCellsBatchingPeriod={10}
                    data={issueNodes}
                    renderItem={({ item, index }) => renderRow(item, index, "I")}
                    keyExtractor={(item, index) => index.toString()}
                />
        </View>}

        <View style={styles.buttonContainer} >
        <Text style={{fontSize:15}} >{`${(viewerHasStarred)? "Remove": "Add"} Star`}</Text>
        
      <TouchableOpacity  onPress={editStar} >
          <Text style={[styles.star,{color:(viewerHasStarred)? "black": "white"}]} >&#9733;</Text>
        </TouchableOpacity>
      </View>
      
      <View style={styles.buttonContainer} >
        <TouchableOpacity style={[styles.issueButton, {backgroundColor:(issueTitle.length<=0)?"grey":"red"}]} 
          disabled={issueTitle.length<=0} 
          onPress={createIssueAction}  
        >
          <Text style={{fontSize:14, color:"white"}} >Create Issue</Text>
        </TouchableOpacity>

       <TextInput
          onChangeText={(text)=>setIssueTitle(text)}
          value={issueTitle}
          style={{width:"60%", height:50, backgroundColor:"white"}}
       />
      </View>
      
    </View>
  );
};

export default details;
