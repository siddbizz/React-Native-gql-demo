import {gql} from '@apollo/client';

export const ADD_STAR = gql`
  mutation AddStar($ID: String!) {
    addStar(input:{starrableId:$ID}) 
       {
        clientMutationId
        starrable{
            id
            viewerHasStarred
        }
    }
  }
`;

export const REMOVE_STAR = gql`
  mutation RemoveStar($ID: String!) {
    removeStar(input:{starrableId:$ID}) 
       {
        clientMutationId
        starrable{
            id
            viewerHasStarred
        }
    }
  }
`;


export const CREATE_ISSUE = gql `
    mutation CreateIssue($repoId:String!, $title: String!){
        createIssue(input:{repositoryId:$repoId title:$title})
        {
            clientMutationId
            issue{
                title
                createdAt
            }
        }
    }
`

export const PULL_REQ = gql `
  mutation PullRequest($repoId:String!, $title: String!)
  {
    createPullRequest(input:{
         repositoryId:$repoId
         baseRefName:"master"
         headRefName:"master"
         title:$title
       }){
         pullRequest{
           id
         }
       }
  }
`

// # mutation{
//     #   createIssue(input:{repositoryId:"123" title:"not working"})
//     #   {
//     #     issue{
//     #     	id
//     #   	}
//     #   }
//     # }
    
    // # mutation{
    //  createPullRequest(input:{
    //      repositoryId:"123"
    //      baseRefName:"abc"
    //      headRefName:"abc"
    //      title:"abc def"
    //    }){
    //      pullRequest{
    //        id
    //      }
    //    }
    //  }
    
    
//     # mutation{
//     #   removeStar(input:{starrableId:"MDEwOlJlcG9zaXRvcnkyOTAyODc3NQ=="})
//     #   {
//     #     starrable
//     #     {
//     #       id
//     #     }
//     #   }
//     # }
    

    
//     # query{
//     #   viewer{
//     #     starredRepositories(last:10 orderBy:{field:STARRED_AT direction:DESC})
//     #     {
//     #       nodes{
//     #         ...on Repository {
//     #           nameWithOwner
//     #           description
//     #         }
//     #       }
//     #     }
//     #   }
//     # }
    
//     # query{
//     #   repository(name:"react-native" owner:"facebook"){
//     #     nameWithOwner
//     #     createdAt
//     #     description
//     #     id
//     #     viewerHasStarred
//     #     pullRequests(last:5 orderBy:{field:UPDATED_AT direction:DESC}){
//     #           nodes{
//     #             ...on PullRequest{
//     #               baseRefName
//     #               headRefName
//     #               title
//     #               author{
//     #                 login
//     #               }
//     #             }
//     #           }
//     #         }
//     #     issues(last:5 orderBy:{field:UPDATED_AT direction:DESC})
//     #     {
//     #       nodes{
//     #         ...on Issue{
//     #           title
//     #           updatedAt
              
//     #         }
//     #       }
//     #     }
//     #   }
//     # }
    
    
//     # query { 
//     #   search(
//     #     first: 20
//     #     query:"game 2d"
//     #     type: REPOSITORY
//     #   ){
//     #     nodes{
//     #       ...on Repository{
//     #         name
//     #         description
//     #         owner {
//     #           login
//     #           id
//     #         }
//     #       }
//     #     }
//     #   }
//     # }