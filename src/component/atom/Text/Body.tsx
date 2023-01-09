import React, { ReactElement } from 'react';
import { TextStyle, Text } from 'react-native';
import { Typography } from '../../../styles';

const Body = ({ children, txtStyle, numberOfLines }: BodyProps) => {
  return (
    <Text style={{ ...Typography.BODY_1, ...txtStyle }} numberOfLines={numberOfLines}>
      {children}
    </Text>
  );
};

type BodyProps = {
  children: ReactElement;
  txtStyle?: TextStyle;
  numberOfLines?: number;
};
export default Body;
