import React, { ReactElement } from 'react';
import { Text, TextStyle } from 'react-native';
import { Typography } from '../../../styles';

const Caption = ({ children, txtStyle }: CaptionProps) => {
  return <Text style={{ ...Typography.CAPTION, ...txtStyle }}>{children}</Text>;
};

type CaptionProps = {
  children: ReactElement;
  txtStyle?: TextStyle;
};
export default Caption;
