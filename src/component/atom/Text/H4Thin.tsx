import React, { ReactElement } from 'react';
import { TextStyle, Text } from 'react-native';
import { Typography } from '../../../styles';

const H4Thin = ({ children, txtStyle }: H4ThinProps) => {
  return <Text style={{ ...Typography.H4_THIN, ...txtStyle }}>{children}</Text>;
};

type H4ThinProps = {
  children: ReactElement;
  txtStyle?: TextStyle;
};
export default H4Thin;
