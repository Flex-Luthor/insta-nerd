'use strict';
 
import React, {
  StyleSheet,
  AppRegistry,
  Component,
  View,
  Text 
} from 'react-native';

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
    padding: 10
  }
});

class PostForm extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>
          Wanna nerd out m8? 
        </Text>
      </View>
    );
  }
}

export default PostForm;
