import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

import WebView from 'react-native-webview';

const RelaxScreen = () => {

  return (
    <ScrollView>
      <View style={styles.container}>

        <View style={styles.header}>
          <Text style={{ fontSize: 22, fontWeight: 'bold' }}>ผ่อนคลาย</Text>
        </View>

        <View style={styles.video}>
          <WebView source={{ uri: 'https://www.youtube.com/embed/vXZ5l7G6T2I' }} />
          <Text style={styles.text} numberOfLines={1}>
            Use this Video to Stop a Panic Attack
          </Text>
        </View>

        <View style={styles.video}>
          <WebView source={{ uri: 'https://www.youtube.com/embed/4bJpYf7RTqE' }} />
          <Text style={styles.text} numberOfLines={1}>
            Calm a Panic Attack in 3 Easy Steps
          </Text>
        </View>

        <View style={styles.video}>
          <WebView source={{ uri: 'https://www.youtube.com/embed/IAODG6KaNBc' }} />
          <Text style={styles.text} numberOfLines={1}>
            Calm a Panic Attack in 3 Easy Steps
          </Text>
        </View>

      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: '100%',
  },
  video: {
    width: '85%',
    height: 250,
    margin: 10
  },
  text: {
    fontSize: 18,
    margin: 9
  },
  header: {
    flex: 1,
    width: '100%',
    height: '10%',
    alignItems: 'stretch',
    margin: 10,
    padding: 15
  },
});

export default RelaxScreen;