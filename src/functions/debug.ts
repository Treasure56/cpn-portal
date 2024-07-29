
type Env = 'production' | 'development'
const ENV = process.env.NEXT_PUBLIC_ENV || 'development';

export function debugLog(...args: any[]) {
    if (ENV === 'development') {
        return console.log(...args);
    }
}