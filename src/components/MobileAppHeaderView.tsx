/**
 * @summary provided  header component
 * @param
 * @returns
 * @todo Check If this function required later
 * @author Anjali Gunjal
 **/
import React, {Component} from 'react';
import {TextStyle} from 'react-native';

import {Appbar} from 'react-native-paper';

import {styles} from '../themes/styles';

interface headerProps {
  backIcon?: 'backArrow';
  searchIcon?: 'searchIcon';
  threeDotsIcon?: 'threeDotsIcon';
  title: String | any;
  titlestyle?: TextStyle;
  subTitleStyle?: TextStyle;
  subTitle?: String | any;
  onLeftHeaderClick?: Function | any;
  search?: Function | any;
  threeDots?: Function | any;
  onSearchClicked?: Function | any;
}
const HeaderViewComponent = (props: headerProps) => {
  return (
    <Appbar.Header>
      {props.backIcon == 'backArrow' ? (
        <Appbar.BackAction onPress={props.onLeftHeaderClick} />
      ) : null}
      <Appbar.Content
        title={props.title}
        subtitle={props.subTitle}
        style={props.titlestyle}
        subtitleStyle={props.subTitleStyle}
      />
      {props.searchIcon == 'searchIcon' ? (
        <Appbar.Action icon="magnify" onPress={props.search} />
      ) : null}
      {props.threeDotsIcon == 'threeDotsIcon' ? (
        <Appbar.Action icon="dots-vertical" onPress={props.threeDots} />
      ) : null}
    </Appbar.Header>
  );
};

export default HeaderViewComponent;
