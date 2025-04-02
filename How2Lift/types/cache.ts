export interface Cachable<T> {
    id: string;
    data: T;
    expires?: number;
}