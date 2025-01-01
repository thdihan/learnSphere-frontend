import { ReactNode } from 'react';

export type TResponse<T> = {
    data?: T;
    error?: TError;
    meta?: TMeta;
    success: boolean;
};

export type TError = {
    data: {
        message: string;
        stack: string;
        success: string;
    };
    status: number;
};
type TMeta = {
    limit: number;
    page: number;
    total: number;
    totalPages: number;
};

export type TRoute = {
    path: string;
    element: ReactNode;
};

export type TUserPaths = {
    name: string;
    path?: string;
    element?: ReactNode;
    children?: TUserPaths[];
};
