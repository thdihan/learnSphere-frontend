export type TUser = {
    _id: string;
    role: 'student' | 'teacher';
    name: string;
    email: string;
    password: string;
};
