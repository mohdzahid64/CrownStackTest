import React from 'react';
import { SafeAreaView, View, Text, ImageBackground, Image, ActivityIndicator } from 'react-native';




const SongDetail = (props) => {

    const { navigation,route } = props

    const { trackName,artist,image,desc,image1 } = route.params;

    return (

        <SafeAreaView style={{ flex: 1 }}>
            <View style={{ flex: 1, backgroundColor: '#c7c9c8', alignItems: 'center', justifyContent: 'center' }}>

                <View style={{ width: '98%', height: '98%', backgroundColor: 'white', 
                elevation: 5,borderRadius:5 }}>

                    <View style={{alignItems:'center',marginTop:5}}>
                    <Image source={{ uri: image }} style={{ height: 110, width: 110, marginLeft: 5,borderRadius:50 }} />
                    <Text style={{color:'#8f0101',fontSize:20}}>
                        {artist}
                    </Text>
                    <Text style={{color:'#8f0101',fontSize:20}}>
                        {trackName}
                    </Text>

                    <Text style={{color:'#050147',fontSize:18,marginTop:40,marginHorizontal:5}}>
                        {desc}
                    </Text>
                    </View>
                </View>

            </View>


        </SafeAreaView>
    );
};

export default SongDetail;