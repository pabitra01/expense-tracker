import { Dimensions, PixelRatio } from 'react-native';
const WINDOW_WIDTH = Dimensions.get('window').width;
const guidelineBaseWidth = 375;

export const scaleSize = (size: number) => (WINDOW_WIDTH / guidelineBaseWidth) * size;

export const scaleFont = (size: number) => size * PixelRatio.getFontScale();

function dimensions(top: number, right = top, bottom = top, left = right, property: string): any {
  const styles = <any>{};
  styles[`${property}Top`] = top;
  styles[`${property}Right`] = right;
  styles[`${property}Bottom`] = bottom;
  styles[`${property}Left`] = left;
  return styles;
}

export function margin(top: number, right: number, bottom: number, left: number): any {
  return dimensions(top, right, bottom, left, 'margin');
}

export function padding(top: number, right: number, bottom: number, left: number): any {
  return dimensions(top, right, bottom, left, 'padding');
}
export function paddingVertical(val: number): any {
  return dimensions(val, 0, val, 0, 'padding');
}
export function paddingHorizontal(val: number): any {
  return dimensions(0, val, 0, val, 'padding');
}
export function boxShadow(
  color: string,
  offset = { height: 2, width: 2 },
  radius = 8,
  opacity = 0.2,
) {
  return {
    shadowColor: color,
    shadowOffset: offset,
    shadowOpacity: opacity,
    shadowRadius: radius,
    elevation: radius,
  };
}

export const borderLeftRadius = (val: number) => {
  return {
    borderTopLeftRadius: val,
    borderBottomLeftRadius: val,
  };
};

export const borderRightRadius = (val: number) => {
  return {
    borderTopRightRadius: val,
    borderBottomRightRadius: val,
  };
};
