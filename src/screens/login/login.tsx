import React, {ReactElement, useEffect, useState} from 'react';
import { Text, View, TextInput, TouchableOpacity, ActivityIndicator } from 'react-native';
import styles from './styles';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {navPropsLogin} from '../../types/types';

type loginProps = navPropsLogin;

const login = ({navigation, route:{params:{setLogin, setAuthToken}}}:loginProps): ReactElement => {

    const [token, setToken] = useState<string>("");
    const [isInvalid, setInvalid] = useState<boolean>(false);
    const [loading, setloading] = useState<boolean>(true);

    const setInvalidTimer = ():void =>
    {
        setToken("");
        setInvalid(true);
        setTimeout(() => {
            setInvalid(false);
        }, 2000);
    }
    
    const loginFetch = async (showerr:boolean, sToken?:string|null) :Promise<void> =>
    {
        try {
            let r = await  fetch(
                "https://api.github.com/user", 
                {
                headers:{
                    "Authorization":`Token ${(sToken)? sToken:token}`
                }
            })
            let rjson = await r.json();
            if(rjson.login) 
            {
                await AsyncStorage.setItem("git-token", (sToken)? sToken:token);
                setLogin(true);
                setAuthToken((sToken)? sToken:token);
            }
            else 
            {
                setloading(false);
                if(showerr) setInvalidTimer()
            }
        } catch (e) {
            console.log(e, "error");
            setloading(false);
            if(showerr) setInvalidTimer();
        }
    }

    const getStorageToken = async (): Promise<void> =>
    {
        try {
           let token = await AsyncStorage.getItem("git-token");
           loginFetch(false, token);
        } catch (error) {
           await setToken("");
        }
    }

    useEffect(()=>{
        getStorageToken();
    }, [])

    if(loading) return (
        <View style={styles.container}>
            <ActivityIndicator size="large" color="blue" />
        </View>
    )

    return (
        <View style={styles.container}>
            {(isInvalid) && <Text style={styles.error} >Invalid Credentials</Text>}

            <TextInput
                value= {token}
                onChangeText={(text)=>setToken(text)}
                placeholder={"Enter personal token"}
                style={styles.textInputStyle}
            />
            
            <TouchableOpacity 
                style={styles.button}
                onPress={()=>loginFetch(true)}
            >
                <Text style={styles.text} >Login</Text>
            </TouchableOpacity>

        </View>
    );
};

export default login;

