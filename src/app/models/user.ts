export interface User {
    id: number ;
    username: string;
    password: string;
    first_name: string;
    second_name: string;
    email: string;
    phoneNumber: string;
    registrationDate: Date | null;
    rating: number;   
}
