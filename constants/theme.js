import { Dimensions } from "react-native";
const { width } = Dimensions.get("window");

export const themeColors = {
    primary: '#344FA1',
    secondary: '#031956',
    textColor: '#F7FEFF',
    headerColor: '#98B4FF'
}

export const themeSizes = {
    header: 30,
    text: 22,
    width: width*0.8
}