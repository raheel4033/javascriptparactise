var collection = {
    "4444":{
        "album":"Kabir Singh",
        "artist":"Arijit",
        "tracks":[
            "Tujhe kitna chahne",
            "Bekhayali",
        ]
    },
    "2006":{
        "album":"Doorie",
        "artist":"Atif Aslam",
        "tracks":[
            "Doorie",
            "Hum kis gali"
        ]
    },
    "1717":
    {
        "artist":"Masti",
        "tracks":[]
    },
    "4342":
    {
        "album":"Maroon 5"
    }
};
var collectionCopy =   JSON.parse(JSON.stringify(collection));

function updateRecords(id,prop,value)
{
    if(value == "")
    {
        delete collection[id][prop];
    }else if (prop == "tracks")
    {
        collection[id][prop] = collection[id][prop] || [];
        collection[id][prop].push(value);
    }
    else
    {
        collection[id][prop]=value;
    }

    return collection;
}

console.log(updateRecords(4342,"artist","Girls like you"));

