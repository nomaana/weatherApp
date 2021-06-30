import React, {Component} from 'react';
import {TextInput} from 'react-native-paper';
import {View, StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

interface textInputProps {
  type: 'normal';
  label: string;
  value: string;
  onChangeText?: Function;
}
interface textInputState {
  error?: any;
}

export default class FloatingInputField extends Component<
  textInputProps,
  textInputState
> {
  constructor(props: textInputProps) {
    super(props);
    const {value} = this.props;
  }

  render() {
    if (this.props.type == 'normal') {
      return (
        <View>
          <TextInput
            mode="outlined"
            label={this.props.label}
            style={Styles.inputStyle}
            placeholder={'Enter The City'}
            placeholderTextColor="gray"
            theme={{colors: {primary: 'blue'}, roundness: 10}}
            value={this.props.value}
            onChangeText={(val) => this.props.onChangeText(val)}
          />
        </View>
      );
    }
  }
}

const Styles = StyleSheet.create({
  inputStyle: {
    marginHorizontal: wp('3%'),
    fontSize: hp('2.8%'),
  },
});
