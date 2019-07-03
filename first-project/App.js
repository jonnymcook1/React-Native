import React, {Component} from 'react';
import { StyleSheet, Text, View, ImageBackground, TouchableHighlight } from 'react-native';

const Beaches = [

  {
    url: "https://images.unsplash.com/photo-1443397646383-16272048780e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=667&q=80",
    caption: "Lonley Boat"
  },
  {
    url: "https://images.unsplash.com/photo-1504532724559-22878efd533a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80",
    caption: "Chillin"
  },
  {
    url: "https://images.unsplash.com/photo-1501438400798-b40ff50396c8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80",
    caption: "Pina Colada anyone"
  }

]

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      index: 0,
      imageWidth: null
    };
  }

  newImage(event) {
    const { index, imageWidth } = this.state,
         X = event.nativeEvent.locationX,
         touchCalc = (X < imageWidth/2) ? -1 : +1;
 
    let newIndex = (index + touchCalc) % Beaches.length;
 
    if (newIndex < 0) {
       newIndex = Beaches.length - Math.abs(newIndex);
    }
 
    this.setState({
       index: newIndex
    });
 }
 
 onNewLayout(event) {
     this.setState({
         imageWidth: event.nativeEvent.layout.width
     });
 }


  render() { 

    const image= Beaches[this.state.index];

  return (
    <View style={styles.container}>
      <View style = {styles.empty}/>
        <TouchableHighlight onPress={this.newImage.bind(this)} style={styles.image}>
          <ImageBackground source = {{url: image.url}} style={styles.image} onLayout={this.onNewLayout.bind(this)}>
              <Text style={styles.imageCaption}>{image.caption}</Text>
          </ImageBackground>
        </TouchableHighlight>
        <View style={styles.empty}/>
    </View>
  );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    flex: 2,
    width: 320,
    justifyContent: 'flex-end',
    alignItems: 'center'
  },
  imageCaption: {
      textAlign: 'center',
      backgroundColor: 'rgba(100, 100, 100, 0.5)',
      color: 'white',
      width: 320
  },
  empty: {
      flex: 1
  }
});
