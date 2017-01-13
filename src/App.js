import {createElement, Component} from 'rax';
import {View, Text} from 'rax-components';
import styles from './App.css';

class App extends Component {
  render() {
    return (
      <View style={styles.app}>
        <View style={styles.appHeader}>
          <Text style={styles.appBanner}>Welcome to Rax</Text>
        </View>
        <Text style={styles.appIntro}>
          To get started, edit src/App.js and save to reload.I just have a try,it's awesome!
        </Text>
      </View>
    );
  }
}

export default App;
