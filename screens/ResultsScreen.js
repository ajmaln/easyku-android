import React from 'react';
import { ScrollView, StyleSheet, View, ToastAndroid, } from 'react-native';

import WebBrowser from 'expo/src/WebBrowser';
import { MonoText } from '../components/StyledText';
import ListItem from '../components/ListItem';

export default class ResultScreen extends React.Component {
  static navigationOptions = {
    title: 'Results',
  };

  state = {
    results: []
  }

  componentDidMount() {
    fetch('https://kerala-university-api.herokuapp.com/results').then(response => {
      response.json().then(results => this.setState({ results })).catch(this.handleError)
    }).catch(this.handleError)
  }

  handleError = (error) => ToastAndroid.show(error.message, ToastAndroid.SHORT)

  render() {
    const { results } = this.state;
    return (
      <ScrollView style={styles.container}>
        {/* Go ahead and delete ExpoLinksView and replace it with your
           * content, we just wanted to provide you with some helpful links */}
        {
          results.length > 0 &&
          results.map(resultList =>
            Object.keys(resultList).map((date, i) =>
              <View key={i}>
                <View style={[styles.codeHighlightContainer]}>
                  <MonoText style={[styles.codeHighlightText, styles.dateCentered]}>{date}</MonoText>
                </View>
                {
                  resultList[date].map((result, key) =>
                    <ListItem result={result} />
                  )
                }
              </View>
            )
          )
        }
      </ScrollView>
    );
  }

  handlePress = (url) => {
    WebBrowser.openBrowserAsync(url)
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
  optionsTitleText: {
    fontSize: 16,
    marginLeft: 15,
    marginTop: 9,
    marginBottom: 12,
  },
  optionIconContainer: {
    flex: 1,
    marginRight: 9,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  optionTextContainer: {
    flex: 7
  },
  option: {
    display: 'flex',
    backgroundColor: '#fdfdfd',
    paddingHorizontal: 15,
    paddingVertical: 15,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: '#EDEDED',
  },
  optionText: {
    fontSize: 15,
    marginTop: 1,
  },
  codeHighlightText: {
    color: 'rgba(96,100,109, 0.8)',
  },
  codeHighlightContainer: {
    backgroundColor: 'rgba(0,0,0,0.05)',
    borderRadius: 3,
    paddingHorizontal: 4,
  },
  dateCentered: {
    textAlign: 'center'
  }
});