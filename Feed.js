'use strict';
 
import React, {
  StyleSheet,
  Component,
  NavigatorIOS
} from 'react-native';

import FeedList from './FeedList';

const styles =StyleSheet.create({
  container: {
    flex: 1 
  }
});

class Feed extends Component {
  render() {
    return (
      <NavigatorIOS 
        style={styles.container}
        initialRoute={{title: 'Your Feed', component: FeedList}}
      /> 
    );
  }
}

export default Feed;
