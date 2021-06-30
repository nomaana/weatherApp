/**
 * @summary provided  header component
 * @param
 * @returns
 * @todo Check If this function required later
 * @author Noman
 **/
import React, {Component} from 'react';
import {TextStyle, View, Text, Image} from 'react-native';
import {Title, Card} from 'react-native-paper';

// redux
import {connect} from 'react-redux';
import {RootState} from '../store/index';
import {ThunkDispatch} from 'redux-thunk';

import {SampleState} from '../store/reducers/sample/sampleReducer';
import HeaderViewComponent from '../components/MobileAppHeaderView';

interface StateProps {
  data: SampleState;
}

const mapStateToProps = (states: RootState) => {
  return {
    data: states.sample,
  };
};

interface buttonProps {
  title: String | any;
  buttonstyle?: TextStyle;
  onButtonPress?: Function | any;
  setinfo: any;
}
type Props = buttonProps & StateProps;

class Home extends Component<Props, any> {
  constructor(props: Props) {
    super(props);
    this.check();
    this.state = {
      info: '',
      setinfo: '',
      name: 'Loading',
      temp: 'loading',
      humidity: 'loading',
      desc: 'loading',
      icon: 'loading',
    };
  }

  check = () => {
    if (this.props.data.firstName == '') {
      this.getWeather('london');
    } else {
      this.getWeather(this.props.data.firstName);
    }
  };

  getWeather = (cityName: string) => {
    // let MyCity;
    // const {city} = this.props.route.params;
    // MyCity = city;
    console.log('mycity', cityName);
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=london&APPID=0d119ac4ee5b51f02900df834efad291&units=metric`,
    )
      .then((data) => data.json())
      .then((res) => {
        console.log(res);
        this.setState({
          name: res.name,
          temp: res.main.temp,
          humidity: res.main.humidity,
          desc: res.weather[0].description,
          icon: res.weather[0].icon,
        });
      })
      .catch((error) => console.log(error, 'errro'));
  };
  render() {
    return (
      <View>
        <HeaderViewComponent
          title={'Weather App'}
          titlestyle={{alignItems: 'center'}}
          onLeftHeaderClick={() => this.props.navigation.goBack()}
        />
        <View style={{alignItems: 'center'}}>
          <Title style={{color: 'blue', marginTop: 30, fontSize: 30}}>
            {this.state.name}
          </Title>
          <Image
            style={{width: 120, height: 120}}
            source={{
              uri:
                'https://openweathermap.org/img/w/' + this.state.icon + '.png',
            }}
          />
        </View>
        <Card style={{margin: 5, padding: 12}}>
          <Title style={{color: 'blue'}}>Temprature-{this.state.temp} </Title>
        </Card>
        <Card style={{margin: 5, padding: 12}}>
          <Title style={{color: 'blue'}}>Humidity-{this.state.humidity} </Title>
        </Card>
        <Card style={{margin: 5, padding: 12}}>
          <Title style={{color: 'blue'}}>Description-{this.state.desc} </Title>
        </Card>
      </View>
    );
  }
}
export default connect(mapStateToProps, null)(Home);
