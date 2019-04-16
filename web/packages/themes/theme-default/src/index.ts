import indigo from './colors/indigo'
import pink from './colors/pink';
import grey from './colors/grey';
import { white } from './colors/common';
export default () => {
    return {
        primary: indigo[600],
        secondary: pink[600],
        background: grey[400],
        surface: grey[100],
        onPrimary: white,
        onSecondry: white,
        onSurface: grey[100],
        textPrimaryLight: white,
        textSecondryLight: white,
        textHintLight: grey[500],
        textPrimaryDark: white,
        textSecondryDark: white,
        textHintDark: grey[500],
        textDisabledLight: grey['A200'],
        textIconLight: indigo[400]
    }
}