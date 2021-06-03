import {StackNavigationProp} from '@react-navigation/stack';
import {RouteProp} from '@react-navigation/native';
import {navigatorProps} from '../navigation/navigator';

export type navPropsLogin = {
    navigation:StackNavigationProp<navigatorProps, "Login">;
    route: RouteProp<navigatorProps, "Login">;
}

export type navPropsHome = {
    navigation:StackNavigationProp<navigatorProps, "Home">;
    route: RouteProp<navigatorProps, "Home">;
}

export type navPropsDetails = {
    navigation:StackNavigationProp<navigatorProps, "Details">;
    route: RouteProp<navigatorProps, "Details">;
}

export type navPropsWatchlist = {
    navigation:StackNavigationProp<navigatorProps, "Watchlist">;
    route: RouteProp<navigatorProps, "Watchlist">;
}

export type RepoType = 
{
    name:string;
    description:string;
    id:string;
    owner: {
        login:string,
        id: string
    }
} 

export type RepoDetailType = 
{
    repository:{
        nameWithOwner:string;
        description:string;
        createdAt:string;
        id:string;
        viewerHasStarred:boolean;
        issues:{
            nodes:[
                {
                    title:string,
                    updatedAt:string
                }
            ]
        };
        pullRequests:{
            nodes:[
                {
                    author:{
                        login:string
                    }
                }
            ]
        }
    }
    
} 

export type myRepoType = 
{
    viewer:{
        login:string;
        repositories:{
            nodes:[
                myRepoInfo
            ]
        }
    }
}

export type starredRepoType = {
    viewer:
    {
        starredRepositories:{
            nodes:[
                starredRepoInfo
            ]
        }
    }
}

export type starredRepoInfo = {
    nameWithOwner:string,
    description:string,
}

export type myRepoInfo = 
{
    name:string,
    description:string,
    id:string,
}

