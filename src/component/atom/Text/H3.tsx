import React, { ReactElement } from 'react';
import { StyleSheetProperties, Text } from 'react-native';
import { Typography } from '../../../styles';

const H3 = ({ children, txtStyle }: H3Props) => {
  return <Text style={{ ...Typography.H3, ...txtStyle }}>{children}</Text>;
};

type H3Props = {
  children: ReactElement;
  txtStyle?: StyleSheetProperties;
};
export default H3;
