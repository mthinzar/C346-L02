import React from 'react';
import {View, Text} from 'react-native';

// This is new comment

const Welcome = ({code, name}) => {
  return (
      <View>
        <Text>Welcome to {code} - {name}</Text>
      </View>
  );
};

// export default Welcome;

class ModuleInfo extends React.Component {
  render() {
    return (
        <View>
          <Text></Text>
          <Welcome code="C346" name="Mobile App Development"/>
          <Welcome code="C105" name="Introduction to Programming"/>
          <Welcome code="C337" name="Immersive Technologies"/>
        </View>
    );
  }
}

export default ModuleInfo;