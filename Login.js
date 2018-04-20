import React, { Component } from 'react'
import {
  View,
  Button,
  Text,
  StyleSheet
} from 'react-native'

export default class Login extends Component {
  handleNavigateToChat = () => {
    this.props.navigation.navigate('Chat')
  }

  onChangeText = (text) => {
    this.setState({ name: text })
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Login</Text>
        <Button title='Chat' onPress={this.handleNavigateToChat} />
      </View>
    )
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})

