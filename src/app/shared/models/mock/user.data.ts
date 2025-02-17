import { userMock } from "./user-mock.data";

export class UserData {
    static users: userMock[] = [
        {
            token: '',
            user: {
                userId: 1,
                lastName: 'SA',
                firstName: 'sa',
                username: 'sa',
                email: 'sa@sa.com',
                password: '1234'
            }
        }
    ];
}