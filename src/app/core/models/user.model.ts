export interface User {
    _id?: string;
    name: string;
    lastname: string;
    institution: string;
    phone: number;
    speciality: string;
    verified?: boolean;
    updatedAt?: Date;
    createdAt?: Date;
}