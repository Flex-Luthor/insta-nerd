'use strict';
 
import React, {
  Image,
  StyleSheet,
  View,
  Text,
  Component,
  ListView,
  TouchableHighlight,
  ActivityIndicatorIOS
} from 'react-native';

import realm from './db_schema';
import PostDetail from './PostDetail';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    padding: 10
  },
  thumbnail: {
    width: 53,
    height: 81,
    marginRight: 10
  },
  rightContainer: {
    flex: 1
  },
  title: {
    fontSize: 20,
    marginBottom: 8
  },
  author: {
    color: '#656565'
  },
  separator: {
    height: 1,
    backgroundColor: '#dddddd'
  },
  listView: {
    backgroundColor: '#F5FCFF'
  },
  loading: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
});

class FeedList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataSource: new ListView.DataSource({
        rowHasChanged: (row1, row2) => row1 !== row2
      })
    }
  }

  componentWillMount() {
    let posts = realm.objects('Post')
    this.setState({
      dataSource: this.state.dataSource.cloneWithRows(posts)
    });
  }

  showPostDetail(post) {
    this.props.navigator.push({
      title: post.titleOfPic,
      component: PostDetail,
      passProps: {post}
    });
  }

   renderPost(post) {
    return(
      <TouchableHighlight onPress={() => this.showPostDetail(post)}  underlayColor='#dddddd'>
        <View>
          <View style={styles.container}>
            <Image
              source={{uri: post.picUrl}}
              style={styles.thumbnail} />
            <View style={styles.rightContainer}>
              <Text style={styles.title}>{post.titleOfPic}</Text>
              <Text style={styles.author}>{post.descOfPic}</Text>
            </View>
          </View>
          <View style={styles.separator} />
        </View>
      </TouchableHighlight>
    ); 
  } 

  render() {
    return (
      <ListView
        dataSource={this.state.dataSource}
        renderRow={this.renderPost.bind(this)}
        style={styles.listView}
      /> 
    );
  }
}

export default FeedList;
