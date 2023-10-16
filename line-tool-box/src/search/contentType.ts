export type Query = string;
export type Result = {
    chatCount: number,
    lastestMessageCreatedAt: number,
    latestMessageCreatedAt: number,
    memberCount: number,
    postCount: number,
    square: {
        desc: string,
        emblems: any[],
        emid: string,
        joinMethodType: number,
        name: string,
        profileImageObsHash: string // https://obs.line-scdn.net/0hWbAF2ZIXCE18PxswHY13GkJpVWMHTBFfAUcFKlg3Ai1SDUgSEgoULl06VSoCD0sYQQpDKV9qVXRSD0o/preview.100x100
    }
}

/**
 * chatCount
: 
4
lastestMessageCreatedAt
: 
0
latestMessageCreatedAt
: 
0
memberCount
: 
18
postCount
: 
8
square
: 
desc
: 
"ABC商工会の資料室です。情報交換等に活用してください"
emblems
: 
[]
emid
: 
"-1JAd1P11aRVlTaP-dK_tTm_jw8bNktCz1vsEc6rHSQ7DDLmmx60QZsO9Jc"
joinMethodType
: 
2
name
: 
"ABC商工会　S466"
profileImageObsHash
: 
"0hdN3EArp"
 */