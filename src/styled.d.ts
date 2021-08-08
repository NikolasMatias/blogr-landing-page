// styled.d.ts
import 'styled-components';
interface IPalette {
    main: string
    contrastText: string
}

interface IPrimary {
    lightRed: string,
    veryLightRed: string,
    veryDarkBlue: string
}

interface INeutral {
    white: string,
    grayishBlue: string,
    veryDarkGrayishBlue: string,
    veryDarkBlackBlue: string
}

interface IGradient {
    veryLightRed: string,
    lightRed: string,
    veryDarkGrayBlue: string,
    veryDarkDesaturatedBlue: string
}

interface IFont {
    family: string,
    weights: number[],
    url: string
}

declare module 'styled-components' {
    export interface DefaultTheme {
        borderRadius: string
        palette: {
            primary: IPrimary,
            neutral: INeutral,
            gradient: IGradient
        },
        typography: {
            fontSizeDefault: string,
            main: IFont,
            secondary: IFont
        }
    }
}