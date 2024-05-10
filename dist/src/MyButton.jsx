"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MyButton = void 0;
const react_1 = __importDefault(require("react"));
const react_native_1 = require("react-native");
const styles = react_native_1.StyleSheet.create({
    button: {
        paddingVertical: 8,
        paddingHorizontal: 16,
        borderRadius: 4,
        alignSelf: 'flex-start',
        flexGrow: 0,
        backgroundColor: 'purple',
    },
    buttonText: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
    },
    buttonContainer: {
        alignItems: 'flex-start',
        flex: 1,
    },
});
const MyButton = ({ text, onPress, color, textColor }) => (<react_native_1.View style={styles.buttonContainer}>
    <react_native_1.TouchableOpacity style={[styles.button, !!color && { backgroundColor: color }]} onPress={onPress} activeOpacity={0.8}>
      <react_native_1.Text style={[styles.buttonText, !!textColor && { color: textColor }]}>
        {text}
      </react_native_1.Text>
    </react_native_1.TouchableOpacity>
  </react_native_1.View>);
exports.MyButton = MyButton;
