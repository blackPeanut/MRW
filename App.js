import React from 'react';
import { StackNavigator } from 'react-navigation';
import Chat from './Chat'
import Login from './Login'

export default StackNavigator({
  Login: {
    screen: Login,
  },
  Chat: {
    screen: Chat,
  }
});

class App extends React.Component {
  render = () => <StackNavigator />
}
