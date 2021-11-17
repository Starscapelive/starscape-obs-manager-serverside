# The server side of starscape obs manager
## database 
we just list 1 data in db.json files for privacy
## api
1. API_ROOT/obs/searchPlugin
type: POST
params
{
    "obsVersion":"",
    "platform":0,
    "name":"",
    "sortBy":0,
    "offset":0,
    "limit":0
}
response: 
```
{
    "code": 0,
    "data": {
        "items": [
            {
               <!-- plugin data -->
            },
            {
                <!-- plugin data -->
            }
        ],
        "totalCnt": 2
    }
}
```

2. API_ROOT/obs/getPluginDetails
type: POST
params
{
    "id":"xxxxxx"
}
response: 
```
{
    "code": 0,
    "data": {
        <!-- plugin data -->
    }
}
```


3. API_ROOT/obs/getMyPluginList
type: POST
params
{
    "ids": ["x","x"],
    "names": ["xx", "xx"]
}
response: 
```
{
    "code": 0,
    "data": {
        "items": [
            {
               <!-- plugin data -->
            },
            {
                <!-- plugin data -->
            }
        ]
    }
}
```


4. API_ROOT/obs/getOBSManagerConfig
type: GET

response: 
```
{
    "code": 0,
    "data": {
        "version": "0.3.3",
        "downloadLink": "  https://starh5.s3.us-west-2.amazonaws.com/master/app-release/obs/binary/starscape-obs-manager-Setup.0.3.3.exe"
    }
}
```