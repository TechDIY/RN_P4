/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import cheerio from 'react-native-cheerio';

var getUrl = "https://dictionary.cambridge.org/zht/%E8%A9%9E%E5%85%B8/%E8%8B%B1%E8%AA%9E-%E6%BC%A2%E8%AA%9E-%E7%B9%81%E9%AB%94/";  

type Props = {};
export default class App extends Component<Props> {

  componentDidMount () {
    console.log("testData",responseData)
    fetch(getUrl+'slender')
      .then((response) => response.text())        // json方式解析，如果是text就是 response.text()
      .then((responseData) => {   // 获取到的数据处理
        const Tags = cheerio.load(responseData)
        console.log("testData",Tags('.pos').text())
        console.log("testData",Tags('.ipa').text())
        console.log("testData",Tags('.trans').text())
        console.log("testData",Tags('.eg').text())
      })
      .catch((error) => {     // 错误处理 
      })
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to React Native!
        </Text>
        <Text style={styles.instructions}>
          To get started, edit App.js
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
