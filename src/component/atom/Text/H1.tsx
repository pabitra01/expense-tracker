import React, { ReactElement } from 'react';
import { StyleSheetProperties, Text } from 'react-native';
import { Typography } from '../../../styles';

const H1 = ({ children, txtStyle }: H1Props) => {
  return <Text style={{ ...Typography.H1, ...txtStyle }}>{children}</Text>;
};

type H1Props = {
  children: ReactElement;
  txtStyle?: StyleSheetProperties;
};
export default H1;
