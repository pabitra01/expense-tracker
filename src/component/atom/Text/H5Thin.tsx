import React, { ReactElement } from 'react';
import { Text, TextStyle } from 'react-native';
import { Typography } from '../../../styles';

const H5Thin = ({ children, txtStyle }: H5ThinProps) => {
  return <Text style={{ ...Typography.H5_THIN, ...txtStyle }}>{children}</Text>;
};

type H5ThinProps = {
  children: ReactElement;
  txtStyle?: TextStyle;
};
export default H5Thin;
