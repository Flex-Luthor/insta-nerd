'use strict';
 
import React, {
  StyleSheet,
  Image,
  View,
  Text,
  Component,
  NavigatorIOS
} from 'react-native';
 
const styles = StyleSheet.create({
  container: {
      marginTop: 75,
      alignItems: 'center'
  },
  image: {
      width: 107,
      height: 165,
      padding: 10
  },
  description: {
      padding: 10,
      fontSize: 15,
      color: '#656565'
  }
});
 
class PostDetail extends Component {
  render() {
    const post = this.props.post;
    const imageURI = (typeof post.picUrl !== 'undefined') ? post.picUrl : '';
    const description = (typeof post.descOfPic !== 'undefined') ? post.descOfPic : '';
    return (
      <View style={styles.container}>
          <Image style={styles.image} source={{uri: imageURI}} />
          <Text style={styles.description}>{description}</Text>
      </View>
    );
  }
}
 
export default PostDetail;

