import { ViewProperties } from 'react-native';

export interface ReactNativeBGImageProps extends ViewProperties {
  /**
   * The name of the image that is stored in the native code.
   */
  drawable: string;
}