import React, { ReactElement } from 'react';
import { Text, TextStyle } from 'react-native';
import { Typography } from '../../../styles';

const Body2 = ({ children, txtStyle }: BodyProps) => {
  return <Text style={{ ...Typography.BODY_2, ...txtStyle }}>{children}</Text>;
};

type BodyProps = {
  children: ReactElement;
  txtStyle?: TextStyle;
};
export default Body2;
