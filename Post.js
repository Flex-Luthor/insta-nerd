'use strict';
 
import React, {
  StyleSheet,
  Component,
  NavigatorIOS
} from 'react-native';

import PostForm from './PostForm';
import Rebase from 're-base';
let base = Rebase.createClass('https://insta-nerd.firebaseio.com/')

class Post extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: {}
    } 
  }

  componentWillMount() {
    base.syncState('insta-nerd', {context: this, state: 'posts'})
  }

  addPost(post) {
    var timestamp = (new Date()).getTime();
    this.state.posts['post-' + timestamp] = post
    this.setState({posts: this.state.posts})
  }

  render() {
    return (
      <NavigatorIOS 
        style={styles.container}
        initialRoute={{title: 'Post Form', component: PostForm, passProps: {addPost: this.addPost.bind(this)}}}
      /> 
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1 
  }
});

export default Post;
