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

class FeedList extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>
          This is an awesome feed
        </Text>
      </View>
    );
  }
}

export default FeedList;
