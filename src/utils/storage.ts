export const setToLS : any = (key : string, value: any) => {
    window.localStorage.setItem(key, JSON.stringify(value));
}

export const getFromLS : any = (key : string) => {
    const value: string | null = window.localStorage.getItem(key);

    if (value) {
        return JSON.parse(value);
    }
}