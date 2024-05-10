import { StyleProp, TextStyle, ViewStyle } from 'react-native';

// Define prop types for MyButton component
interface MyButtonProps {
  text: string;
  onPress: () => void;
  color?: string;
  textColor?: string;
}

// Export MyButtonProps and MyButtonStyles interfaces
export type { MyButtonProps };

// Export MyButton component with specified props
export declare const MyButton: React.FC<MyButtonProps>;
