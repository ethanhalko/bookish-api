export interface ErrorExt extends Error {
    errno?: number;
    code?: string;
    path?: string;
    syscall?: string;
}
