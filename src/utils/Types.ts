export type songItem = {
    artistName:string,
    collectionName:string,
    collectionPrice:number,
    currency:number,
    description:string,
    artworkUrl100: string,
    collectionViewUrl:string
}

export type songFuncType = 
{
    animate:(val: number, hide: boolean, song:songItem)=>void;
    songItem:songItem
}