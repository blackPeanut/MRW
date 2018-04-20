import React, { Component } from 'react'
import { View, TouchableOpacity, Button, TextInput, StyleSheet } from 'react-native'

export default class Login extends Component {
  state = {
    name: ''
  }

  handleNavigateToChat = () => {
    this.props.navigation.navigate('Chat', { name: this.state.name})
  }

  onChangeText = (txt) => {
    this.setState({ name: txt })
  }

  render() {
    const { name } = this.state

    return (
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          placeholder='Имя'
          value={this.state.name}
          onChangeText={this.onChangeText}
          underlineColorAndroid='transparent'
        />

        <Button
          title='Коснись, что бы войти'
          onPress={this.handleNavigateToChat}
          disabled={!name}
        />
      </View>
    )
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  input: {
    width: 280,
    padding: 10,
    marginBottom: 50,
    borderBottomWidth: 1
  }
})

