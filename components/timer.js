import React, { Component } from "react";
import CountDown from "react-native-countdown-component";
import { Text } from "react-native";

class Timer extends Component {
  render() {
    return (
      <SafeAreaView>
        <CountDown
          until={10}
          onFinish={() => alert("finished")}
          onPress={() => alert("hello")}
          size={50}
        />
      </SafeAreaView>
    );
  }
}

export default Timer;
