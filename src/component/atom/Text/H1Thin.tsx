import React, { ReactElement } from 'react';
import { StyleSheetProperties, Text } from 'react-native';
import { Typography } from '../../../styles';

const H1Thin = ({ children, txtStyle }: H1ThinProps) => {
  return <Text style={{ ...Typography.H1_THIN, ...txtStyle }}>{children}</Text>;
};

type H1ThinProps = {
  children: ReactElement;
  txtStyle?: StyleSheetProperties;
};
export default H1Thin;
