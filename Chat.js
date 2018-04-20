import React, { Component } from 'react'
import {
  StyleSheet,
} from 'react-native'
import { GiftedChat } from 'react-native-gifted-chat'
import Backend from './Backend'

export default class Chat extends React.Component {
  static navigationOptions = ({ navigation }) => {
    const { params } = navigation.state

    return {
      title: params ? params.name : null,
    }
  }

  state = {
    messages: []
  }

  componentDidMount() {
    Backend.loadMessages((message) => {
      this.setState((previousState) => {
        return {
          messages: GiftedChat.append(previousState.messages, message)
        }
      })
    })
  }

  componentWillUnmount() {
    Backend.closeChat()
  }

  onSend = (message) => {
    Backend.sendMessage(message)
  }

  render () {
    return (
      <GiftedChat
        messages={this.state.messages}
        onSend={this.onSend}
        listViewProps={{style: styles.chatContainer}}
        user={{
          _id: 1,
          name: 'Daniel'
        }}
      />
    )
  }
}

const styles = StyleSheet.create({
  chatContainer: {
    backgroundColor: 'white'
  }
})
