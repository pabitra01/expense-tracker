import React, { ReactElement } from 'react';
import { Text, TextStyle } from 'react-native';
import { Typography } from '../../../styles';

const H5 = ({ children, txtStyle }: H5Props) => {
  return <Text style={{ ...Typography.H5, ...txtStyle }}>{children}</Text>;
};

type H5Props = {
  children: ReactElement;
  txtStyle?: TextStyle;
};
export default H5;
