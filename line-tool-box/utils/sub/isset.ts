export function isset<T = any>(value: T | null | undefined): value is T {
    return value !== null && value !== undefined;
}