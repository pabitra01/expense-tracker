import React, { ReactElement } from 'react';
import { StyleSheetProperties, Text } from 'react-native';
import { Typography } from '../../../styles';

const H2Thin = ({ children, txtStyle }: H2ThinProps) => {
  return <Text style={{ ...Typography.H2_THIN, ...txtStyle }}>{children}</Text>;
};

type H2ThinProps = {
  children: ReactElement;
  txtStyle?: StyleSheetProperties;
};
export default H2Thin;
