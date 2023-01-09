import React, { ReactElement } from 'react';
import { StyleSheetProperties, Text } from 'react-native';
import { Typography } from '../../../styles';

const H4 = ({ children, txtStyle }: H4Props) => {
  return <Text style={{ ...Typography.H4, ...txtStyle }}>{children}</Text>;
};

type H4Props = {
  children: ReactElement;
  txtStyle?: StyleSheetProperties;
};
export default H4;
