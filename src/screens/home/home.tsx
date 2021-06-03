import React, {ReactElement, useState} from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { navPropsHome } from '../../types/types';
import {Search, Repos} from '../../components';
import  styles from './styles';

type HomeProps= navPropsHome;

const Home = ({navigation, route}: HomeProps): ReactElement => {
  const [buttonVal, setButtonVal] =  useState<number>(0);

  return (
    <View style={styles.container}>
      <View style={styles.buttonContainer} >
        <TouchableOpacity 
          style={[styles.button, {backgroundColor: (buttonVal==0)?"#3863a0":"#c9c9c9" }]} 
          onPress={()=>setButtonVal(0)}
        >
          <Text style={styles.buttonText} >Search Repos</Text>
        </TouchableOpacity>

        <TouchableOpacity 
          style={[styles.button,{backgroundColor: (buttonVal==1)?"#3863a0":"#c9c9c9" }]} 
          onPress={()=>setButtonVal(1)}
        >
          <Text style={styles.buttonText} >My Repos</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.container2} >
        {(buttonVal == 0)?
          <Search
            navigation={navigation}
            route={route}
          />
        :
          <Repos/>
        }
      </View>
      
    </View>
  );
};

export default Home;
