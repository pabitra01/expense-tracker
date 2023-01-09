import React, { ReactElement } from 'react';
import { StyleSheetProperties, Text } from 'react-native';
import { Typography } from '../../../styles';

const H6 = ({ children, txtStyle }: H6Props) => {
  return <Text style={{ ...Typography.H6, ...txtStyle }}>{children}</Text>;
};

type H6Props = {
  children: ReactElement;
  txtStyle?: StyleSheetProperties;
};
export default H6;
