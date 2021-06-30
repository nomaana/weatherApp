import React, {Component} from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  Button,
  StyleSheet,
  StatusBar,
  FlatList,
} from 'react-native';

import {Card} from 'react-native-paper';

// redux
import {connect} from 'react-redux';
import {RootState} from '../store/index';
import {ThunkDispatch} from 'redux-thunk';

import {SampleState} from '../store/reducers/sample/sampleReducer';
import {setFirstName} from '../store/actions/sample/sampleAction';

//component
import HeaderViewComponent from '../components/MobileAppHeaderView';
import ButtonComponent from '../components/MobileAppButton';
import MobileAppTextInput from '../components/MobileAppTextInput';

interface DispatchProps {
  setFirstName: (firstName: string) => void;
}

interface StateProps {
  data: SampleState;
}
type Props = StateProps & DispatchProps;

const mapStateToProps = (states: RootState) => {
  return {
    data: states.sample,
  };
};

const mapDispatchToProps = (
  dispatch: ThunkDispatch<{}, {}, any>,
): DispatchProps => {
  return {
    setFirstName: (firstName) => dispatch(setFirstName(firstName)),
  };
};

class SampleScreen extends Component<Props, any> {
  constructor(props: Props) {
    super(props);
    this.state = {
      city: [],
      setCities: [],
    };
  }

  fetchCity = (text: any) => {
    this.props.setFirstName(text);
    fetch(
      'https://api.weather.com/v3/location/search?apiKey=6532d6454b8aa370768e63d6ba5a832e&language=en-US&query=' +
        text +
        '&locationType=city&format=json',
    )
      .then((item) => item.json())
      .then((cityData) => {
        this.setState({city: cityData.location.displayName});
        // console.log(cityData.location.displayName);
      })
      .catch((err) => console.log('error', err));
  };
  listClick = (cityName) => {
    this.props.setFirstName(cityName);
    this.props.navigation.navigate('Home');
  };
  onButtonPress = () => {
    this.props.setFirstName(this.props.data.firstName);
    this.props.navigation.navigate('Home');
  };

  render() {
    return (
      <View style={{flex: 1}}>
        <HeaderViewComponent
          title={'Weather App'}
          titlestyle={{alignItems: 'center'}}
          onLeftHeaderClick={() => this.props.navigation.goBack()}
        />
        <MobileAppTextInput
          type="normal"
          label={'City'}
          value={this.props.data.firstName}
          onChangeText={(text: any) => this.fetchCity(text)}
        />
        <ButtonComponent
          title={'Save Changes'}
          onButtonPress={() => this.onButtonPress()}
        />

        <FlatList
          data={this.state.city}
          renderItem={({item, index}) => {
            return (
              <Card
                onPress={() => this.listClick(item)}
                style={{margin: 2, padding: 12}}>
                <Text>{item}</Text>
              </Card>
            );
          }}
          keyExtractor={(item, index) =>
            index.toString() +
            new Date().getTime().toString() +
            Math.floor(
              Math.random() * Math.floor(new Date().getTime()),
            ).toString()
          }
        />
        {/* <View>
          <Text>{this.props.data.firstName}</Text>
        </View>
        <TouchableOpacity
          style={{height: 40, width: 100, backgroundColor: 'red'}}
          onPress={() => this.button()}>
          <Text>onPress</Text>
        </TouchableOpacity> */}
      </View>
    );
  }
}
const sampleStyles = StyleSheet.create({});
export default connect(mapStateToProps, mapDispatchToProps)(SampleScreen);
