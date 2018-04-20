import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';

import { GiftedChat } from 'react-native-gifted-chat';

export default class Chat extends React.Component {
  state = {
    messages: [{
      _id: 1,
      text: 'Привет! Добро пожаловать на воркшоп в Mail.Ru',
      createdAt: new Date(),
      user: {
        _id: 2,
        name: 'MRG',
        avatar: 'https://ict2go.ru/uploads/media/events_lid_image/0001/06/thumb_5562_events_lid_image_small.png'
      }
    }]
  }

  onSend = (messages = []) => {
    this.setState(previousState => ({
      messages: GiftedChat.append(previousState.messages, messages),
    }))
  }

  render () {
    return (
      <GiftedChat
        messages={this.state.messages}
        onSend={messages => this.onSend(messages)}
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
