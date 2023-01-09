import React, { ReactElement } from 'react';
import { StyleSheetProperties, Text } from 'react-native';
import { Typography } from '../../../styles';

const H3Thin = ({ children, txtStyle }: H3ThinProps) => {
  return <Text style={{ ...Typography.H3_THIN, ...txtStyle }}>{children}</Text>;
};

type H3ThinProps = {
  children: ReactElement;
  txtStyle?: StyleSheetProperties;
};
export default H3Thin;
