import React, {Component} from 'react';
import StackNavigation from './navigator/StackNavigation';
class AppEntry extends Component {
  constructor(props: any) {
    super(props);
  }
  render() {
    return <StackNavigation />;
  }
}
export default AppEntry;
