'use strict';
 
import React, {
  StyleSheet,
  AppRegistry,
  AsyncStorage,
  Component,
  View,
  Text 
} from 'react-native';

import realm from './db_schema';

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
    padding: 10
  }
});

class FeedList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      titleOfPic: '',
      descOfPic: '',
      picUrl: '' 
    } 
  }

  componentDidMount() {
    let posts = realm.objects('Post')
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>
          This is an awesome feed
          {this.state.picUrl}
        </Text>
      </View>
    );
  }
}

export default FeedList;
