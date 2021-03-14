import React from 'react';
import { SafeAreaView, View, Text, ImageBackground, Image, FlatList, ActivityIndicator,
     RefreshControl, ScrollView,TouchableOpacity } from 'react-native';




const SongList = (props) => {
    const { navigation } = props
    const [songResult, setSongResult] = React.useState([]);
    const [loader, setLoader] = React.useState(false)
    const [refreshing, setRefreshing] = React.useState(false);
    


    

    React.useEffect(() => {

        fetchSong();
    }, [])

    const onRefresh = React.useCallback(() => {
        //setRefreshing(true);
        fetchSong();
    }, []);

    const fetchSong = () => {

        setLoader(true)
        setRefreshing(true);

        fetch("https://itunes.apple.com/search?term=Michael+jackson", {
            method: "get",
            headers: {
                Accept: "application/json",
                'Content-Type': "application/json",

            },

        }).then(res => res.json())
            .then(res => {

                console.log("status SongList : ", res.resultCount)
                setSongResult(res.results);
                console.log("Song Result :" + songResult);
                setLoader(false)
                setRefreshing(false);

            })
            .catch(err => {
                console.error("error Song List : ", err);

            });
    }



    return (

        <SafeAreaView style={{ flex: 1 }}>

            <ScrollView refreshControl={
                <RefreshControl
                    refreshing={refreshing}
                    onRefresh={onRefresh}
                />
            }>

                <View style={{ flex: 1 }}>



                    <FlatList data={songResult} 
                    renderItem={({ item }) => <View style={{
                        height: 60, width: '100%', backgroundColor: 'white', flexDirection: 'row', alignItems: 'center',
                        marginTop: 3, elevation: 5
                    }}>
                        <Image source={{ uri: item.artworkUrl60 }} style={{ height: 40, width: 40, marginLeft: 5 }} />
                        <View style={{ flexDirection: 'column', marginLeft: 5 }}>
                        <TouchableOpacity onPress={()=> navigation.navigate("SongDetails",{trackName:item.trackName,
                        artist:item.artistName,image:item.artworkUrl60,desc:item.longDescription,image1:item.artworkUrl100})}>
                            <Text>
                                {item.trackName}
                            </Text>
                            <Text>
                                Artist Name: {item.artistName}
                            </Text>
                            </TouchableOpacity>
                        </View>
                        
                    </View>}
                    keyExtractor={item => item.trackId} />

                    {loader && <View style={{ width: '100%', height: '100%', backgroundColor: 'transparent', position: 'absolute', justifyContent: 'center' }}><ActivityIndicator color='red' /></View>}

                </View>

            </ScrollView>
        </SafeAreaView>
    );
};

export default SongList;