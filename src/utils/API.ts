const apiUrl: string = "https://itunes.apple.com/search?term=Michael+jackson";

type APIprops = {
    resultCount: Number;
    results:[]
}

export const defaultSong = {
    artistName:"",
    collectionName:"",
    collectionPrice:0,
    currency:0,
    description:"",
    artworkUrl100: "",
    collectionViewUrl:""
}

export const apiCall = async () : Promise<APIprops> => 
{
    try {
        let res = await fetch(apiUrl);
        return res.json();

    } catch (e) {
        return e;
    }
}