import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import * as ExpoFont from 'expo-font'
import { StyleSheet, Text, View } from "react-native";
import firstMessage from "first-package";
import secondMessage from "second-package";

import Share16 from './share16.svg'

export default function App() {
  const [ready, setReady] = useState(false)
  useEffect(() => {
    ;(async () => {
      try {
        await ExpoFont.loadAsync({
          'Roboto-Black': require('./Roboto-Black.ttf'),
        })
        setReady(true)
      } catch (e) {
        console.log('e', e)
      }
    })();
  }, [])

  if (!ready) {
    return null
  }

  return (
    <View style={styles.container}>
      <Text style={{
        fontFamily: 'Roboto-Black',
      }}>Hello from the first application</Text>
      <Share16/>
      <Text>{firstMessage}</Text>
      <Text>{secondMessage}</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
