import {gql} from '@apollo/client';

export const searchRepos = gql`
    query  SEARCH($query: String!) { 
        search(
            first: 20
            query:$query
            type: REPOSITORY
        ){
            nodes{
            ...on Repository{
                name
                description
                owner {
                    login
                    id
                    }
                }
            }
        }
    }
`;

export const repoDetails = gql`
    query repoDetails($name:String!, $owner:String!) {
        repository(name:$name owner:$owner){
        nameWithOwner
        createdAt
        description
        id
        viewerHasStarred
        pullRequests(first:5 orderBy:{field:UPDATED_AT direction:DESC}){
            nodes{
                ...on PullRequest{
                author{
                    login
                }
                }
            }
            }
        issues(first:5 orderBy:{field:UPDATED_AT direction:DESC})
        {
        nodes{
            ...on Issue{
                    title
                    updatedAt
            
                    }
                }
            }
        }
    }
`

export const getMyRepos = gql`
    query{
        viewer{
            login
            repositories(first:20){
            nodes{
                ...on Repository{
                name
                id
                description
                }
            }
            }
        }
}
`

export const getStarredRepos = gql`
    query{
        viewer{
            starredRepositories(last:10 orderBy:{field:STARRED_AT direction:DESC})
                {
                    nodes{
                        ...on Repository {
                        nameWithOwner
                        description
                    }
                }
            }
        }
    }
`