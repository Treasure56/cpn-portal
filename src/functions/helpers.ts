import { AppSelectOption } from "@/components/form/AppSelect";

export function formDataToObject<T>(formData: FormData) {
    return Object.fromEntries(formData.entries()) as T
}

export function fallbackImage(src?: string) {
    if (!src || !src.toLowerCase().startsWith('http')) return '/images/user-avatar.png'
    return src;
}


export function capitalizeFirst(s: string) {
    return s.split('').map((v, i) => i == 0 ? v.toUpperCase() : v).join('');
}

export function formatNumber(num: number | string, asMoney = false): string {
    if(!num) return ''
    const _num = num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
    if (asMoney) return `₦${_num}`
    return _num;
}


export function formatDate(date: string) {
    const dt = new Date(date);
    const year = dt.getFullYear();
    const month = String(dt.getMonth() + 1).padStart(2, '0');
    const day = String(dt.getDate()).padStart(2, '0');
    return `${month}/${day}/${year}`;
}

export function formatDuration(duration: number | string): string {
    const _duration = Number(duration)
    if(_duration < 12) return `${_duration} months`
    else return `${_duration / 12} years`
}

export function isVideo(url: string) {
    return ['mp4', 'm4a', 'webm'].includes(url.toLowerCase().split('.').pop() ?? '')
}

export function splitStringToNestedArrays(input: string): { v: string; i: number }[][] {
    // Initialize variables
    let result: { v: string; i: number }[][] = [];
    let index = 0;  // This will keep track of the original index in the input string

    // Split the input string into words
    const words = input.split(' ');

    // Process each word
    for (const word of words) {
        // Create an array for each word
        let wordArray: { v: string; i: number }[] = [];

        // Process each character in the word
        for (const char of word) {
            // Add the character object to the wordArray
            wordArray.push({ v: char, i: index });
            // Increment the index for the next character
            index++;
        }

        // Add the wordArray to the result array
        result.push(wordArray);

        // Increment the index for the space (if there are more words)
        index++;
    }

    return result;
}

export function buildUrlQuery(obj: { [key: string]: any } | undefined) {
    if (!obj) return '';
    return "?" + Object.entries(obj).map(v => `${v[0]}=${v[1] ?? ''}`).join('&')
}

// trimFormData.ts

/**
 * Trims the FormData object based on the provided key(s).
 * 
 * @param formData - The FormData object to be trimmed.
 * @param p2 - A single key (string) or an array of keys (string[]) to keep in the FormData.
 * @returns A new FormData object containing only the specified keys.
 */
export function trimFormData(formData: FormData, p2: string | string[]): FormData {
    // Create a new FormData instance to store the trimmed entries
    const trimmedData = new FormData();

    // Convert p2 to an array if it is a single string
    const keysToKeep = Array.isArray(p2) ? p2 : [p2];

    // Iterate over the FormData entries
    formData.forEach((value, key) => {
        if (keysToKeep.includes(key)) {
            trimmedData.append(key, value);
        }
    });

    return trimmedData;
}



export function withAll(list: (string| AppSelectOption)[], title = ''):(string| AppSelectOption)[] {
    return [{ title: `All ${title}`, value: '' }, ...list]
}

