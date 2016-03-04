'use strict';
 
import React, {
  StyleSheet,
  Component,
  NavigatorIOS
} from 'react-native';

import PostForm from './PostForm';

const styles = StyleSheet.create({
  container: {
    flex: 1 
  }
});

class Post extends Component {
  render() {
    return (
      <NavigatorIOS 
        style={styles.container}
        initialRoute={{title: 'Post Form', component: PostForm}}
      /> 
    );
  }
}

export default Post;
