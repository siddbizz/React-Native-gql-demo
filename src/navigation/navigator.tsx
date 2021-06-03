import React, {Dispatch, ReactElement, SetStateAction, useState} from 'react';
import {Alert, Text} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Home, Login, Details, Watchlist } from '../screens';
import {ApolloClient, InMemoryCache, createHttpLink, ApolloProvider} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

export type navigatorProps = {
    Home: undefined;
    Login:{setLogin: Dispatch<SetStateAction<boolean>>, setAuthToken:Dispatch<SetStateAction<string>>};
    Details:{name:string, owner:string};
    Watchlist:undefined
}

const Stack = createStackNavigator<navigatorProps> ();

const navigator = () : ReactElement => {

  const [isLoggedIn, setLogin]  = useState<boolean>(false); 
  const [authToken, setAuthToken] = useState<string>("");

  const httpLink = createHttpLink({
    uri: 'https://api.github.com/graphql',
  });
  
  const authLink = setContext((_, { headers }) => {
    const token = authToken;
    // return the headers to the context so httpLink can read them
    return {
      headers: {
        ...headers,
        authorization: token ? `Token ${token}` : "",
      }
    }
  });

  const client = new ApolloClient({
    cache: new InMemoryCache(),
    link: authLink.concat(httpLink),
  });


  const logout = async(): Promise<void> => 
  {
    try {
      await AsyncStorage.removeItem("git-token");
      setLogin(false);
    } catch (error) {
      Alert.alert("Logout Failed!");
    }
  }

  return (
    <ApolloProvider client={client} >
        <NavigationContainer>
          <Stack.Navigator>
            {
                isLoggedIn ? (
                    <>
                      <Stack.Screen name="Home" component={Home} 
                        options={({navigation})=>({
                          headerLeft:()=>(
                            <Text style={{fontSize:25, fontWeight:"bold", paddingLeft:10, color:"red"}} 
                              onPress={logout} 
                            >
                            &#9746;
                            </Text>
                          ),
                          headerRight:()=>(
                            <Text style={{fontSize:25, fontWeight:"bold", paddingRight:10}} 
                              onPress={()=>navigation.navigate("Watchlist")}
                            >
                              &#9733;
                            </Text>  
                          ),
                          headerTitleAlign:"center"
                        })}
                      />
                      <Stack.Screen name="Details" component={Details} />
                      <Stack.Screen name="Watchlist" component={Watchlist} />
                    </>

                  ) : 
                  
                  (
                    <Stack.Screen  name="Login" component={Login} initialParams={{setLogin, setAuthToken}} />
                  )
            }
            
          </Stack.Navigator>
      </NavigationContainer>
    </ApolloProvider>
  );
};

export default navigator;