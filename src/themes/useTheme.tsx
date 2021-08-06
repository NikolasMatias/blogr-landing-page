import {getFromLS, setToLS} from "../utils/storage";
import {useEffect, useState} from "react";
import _ from 'lodash';

export const useTheme = () => {
    const themes = getFromLS('all-themes')
    console.log(themes);
    const [theme, setTheme] = useState<any>(themes?.data?.original)
    const [themeLoaded, setThemeLoaded] = useState<boolean>(false)

    const setMode = (mode : any) => {
        setToLS('theme', mode);
        setTheme(mode);
    }

    const getFonts = () => {
        return theme?.data?.original?.fonts.map((font : any) => font.fontFamily)
    }

    useEffect(() => {
        const localTheme = getFromLS('theme');
        localTheme ? setTheme(localTheme) : setTheme(themes?.data?.original)
        setThemeLoaded(true)
    }, [])

    return { theme, themeLoaded, setMode, getFonts }
}