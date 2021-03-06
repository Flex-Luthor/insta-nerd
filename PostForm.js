'use strict';
 
import React, {
  View,
  StyleSheet,
  Text,
  Component,
  TextInput,
  TouchableHighlight,
  ActivityIndicatorIOS,
  AsyncStorage
} from 'react-native';

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
    padding: 10
  },
  searchInput: {
    height: 36,
    marginTop: 10,
    marginBottom: 10,
    fontSize: 18,
    borderWidth: 1,
    flex: 1,
    borderRadius: 4,
    padding: 5
  },
  button: {
    height: 36,
    backgroundColor: '#f39c12',
    borderRadius: 8,
    justifyContent: 'center',
    marginTop: 15
  },
  buttonText: {
    fontSize: 18,
    color: 'white',
    alignSelf: 'center'
  },
  instructions: {
    fontSize: 18,
    alignSelf: 'center',
    marginBottom: 15
  },
  fieldLabel: {
    fontSize: 15,
    marginTop: 15
  },
  errorMessage: {
    fontSize: 15,
    alignSelf: 'center',
    marginTop: 15,
    color: 'red'
  }
});


class PostForm extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      titleOfPic: '',
      descOfPic: '',
      picUrl: '' 
    } 
  }

  pictureTitleInput(event) {
    this.setState({titleOfPic: event.nativeEvent.text})
  }

  descriptionOfPictureInput(event) {
    this.setState({descOfPic: event.nativeEvent.text})
  }

  urlOfPictureInput(event) {
    this.setState({picUrl: event.nativeEvent.text})
  }

  postPicture() {
    let post = {
      title: this.state.titleOfPic,
      description: this.state.descOfPic,
      picUrl: this.state.picUrl
    }

    this.props.addPost(post);

    alert('Your nerd just got submitted! :)');
    this._textInput.setNativeProps({text: ''});
    this._textInput2.setNativeProps({text: ''});
    this._textInput3.setNativeProps({text: ''});
  }

  render() {
    return (
      <View style={styles.container}>
        <View>
          <Text style={styles.fieldLabel}>Picture Title:</Text>
          <TextInput style={styles.searchInput} onChange={this.pictureTitleInput.bind(this)} ref={component => this._textInput = component} />
        </View>
        <View>
          <Text style={styles.fieldLabel}>Description of the picture:</Text>
          <TextInput style={styles.searchInput} onChange={this.descriptionOfPictureInput.bind(this)} ref={component => this._textInput2 = component} />
        </View>
        <View>
          <Text style={styles.fieldLabel}>Url of the picture:</Text>
          <TextInput style={styles.searchInput} onChange={this.urlOfPictureInput.bind(this)} ref={component => this._textInput3 = component} />
        </View>
        <TouchableHighlight style={styles.button}
          underlayColor='#f1c40f'
          onPress={this.postPicture.bind(this)}>
          <Text style={styles.buttonText}>Post</Text>
        </TouchableHighlight>
        <Text style={styles.errorMessage}> {this.state.errorMessage} </Text>
      </View>
    );
  }
}

export default PostForm;
