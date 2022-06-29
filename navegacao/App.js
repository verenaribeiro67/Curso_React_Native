import React from 'react'
import Icon from 'react-native-vector-icons/FontAwesome'
import { ImageBackground, StyleSheet, Text, View } from 'react-native'
import Enter from './src/Enter'
import Bg from './assets/bg.jpg'

const App = () => {

        return (
            <View style={styles.container}>

                <ImageBackground source={Bg} resizeMode='cover' style={styles.header}>
                    <Text style={styles.txtHeader}>QUIZ</Text>
                    <Icon name="question" size={30} color="#fff"/>
                </ImageBackground>

                <View style={styles.body}>
                    <Enter/>
                </View>


            </View>
        )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  header: {
    flex: 3,
    backgroundColor: '#1083ad',
    alignItems: 'center',
    justifyContent: 'center'
  },
  txtHeader: {
    color: '#fff',
    fontFamily: 'bold',
    fontSize: 40
  },
  body: {
    flex: 7,
    backgroundColor: '#fffefe'
  },
    bgImagem: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width: 100
    }
})

export default App