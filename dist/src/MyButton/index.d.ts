import React from 'react';
export type ButtonProps = {
    onPress: () => void;
    text: string;
    color?: string;
    textColor?: string;
};
export declare const MyButton: ({ text, onPress, color, textColor }: ButtonProps) => React.JSX.Element;
