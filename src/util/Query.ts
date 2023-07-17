export const objectToQueryString = (obj: any): string => {
    const queryParams: string[] = [];
    for (const key in obj)
        if (obj.hasOwnProperty(key) && obj[key] !== undefined)
            queryParams.push(`${encodeURIComponent(key)}=${encodeURIComponent(obj[key])}`);
    return queryParams.length > 0 ? `?${queryParams.join('&')}` : '';
}