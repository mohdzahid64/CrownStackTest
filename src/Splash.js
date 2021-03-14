import React from 'react';
import { SafeAreaView, View, Text, ImageBackground, Image, ActivityIndicator } from 'react-native';




const Splash = (props) => {

  const { navigation } = props

  React.useEffect(() => {
    setTimeout(() => {
      navigation.replace("SongList");
    }, 5000)
  }, [])
  return (

    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ flex: 1, backgroundColor: '#f52e20', alignItems: 'center', justifyContent: 'center' }}>
        <Image source={require('../assets/c.png')} style={{ height: 40, width: 40 }} />
        <Text style={{ color: 'white', fontSize: 22, fontWeight: '600' }}>
          Crown Stack
        </Text>

      </View>


    </SafeAreaView>
  );
};

export default Splash;