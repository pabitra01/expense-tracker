import React, { ReactElement } from 'react';
import { StyleSheetProperties, Text } from 'react-native';
import { Typography } from '../../../styles';

const H6Thin = ({ children, txtStyle }: H6ThinProps) => {
  return <Text style={{ ...Typography.H6_THIN, ...txtStyle }}>{children}</Text>;
};

type H6ThinProps = {
  children: ReactElement;
  txtStyle?: StyleSheetProperties;
};
export default H6Thin;
