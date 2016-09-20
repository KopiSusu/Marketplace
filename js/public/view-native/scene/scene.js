/* @flow */
/*eslint-disable prefer-const */

import React, { Component } from "react";
import Home from "./home/home";
import Files from "./files/files";
import Chat from "./chat/chat";
import Calendar from "./calendar/calendar";

import {
  Navigator,
  View
} from 'react-native';

const routes = {
  Home,
  Files,
  Chat,
  Calendar
}

class Scene extends React.Component {

  renderScene(route: Object, navigator: Object) {
    let Component = routes[route.component];
    return (
      <View style={{flex: 1}}>
        <Component
          navigator={navigator}
          route={route}
        />
      </View>
    );
  }
  render() {
    return (
      <Navigator
        style={{flex: 1}}
        renderScene={this.renderScene}
        initialRoute={{
          component: 'Home',
        }}
      />
    );
  }
}

export default Scene;