import React, { ReactElement } from 'react';
import { StyleSheetProperties, Text } from 'react-native';
import { Typography } from '../../../styles';

const H2 = ({ children, txtStyle }: H2Props) => {
  return <Text style={{ ...Typography.H2, ...txtStyle }}>{children}</Text>;
};

type H2Props = {
  children: ReactElement;
  txtStyle?: StyleSheetProperties;
};
export default H2;
