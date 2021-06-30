/**
 * @summary provided  header component
 * @param
 * @returns
 * @todo Check If this function required later
 * @author Anjali Gunjal
 **/
import React, {Component} from 'react';
import {TextStyle} from 'react-native';

import {Button} from 'react-native-paper';

interface buttonProps {
  title: String | any;
  buttonstyle?: TextStyle;
  onButtonPress?: Function | any;
}
const ButtonComponent = (props: buttonProps) => {
  return (
    <Button
      icon="content-save"
      mode="contained"
      theme={{colors: {primary: 'blue'}}}
      style={[props.buttonstyle, {margin: 20}]}
      onPress={props.onButtonPress}>
      {props.title}
    </Button>
  );
};

export default ButtonComponent;
