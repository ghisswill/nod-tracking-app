export class User {
    constructor(
        public id?: number,
        public lastName?: string,
        public firstName?: string,
        public username?: string,
        public email?: string,
        public password?: string,
        public phone?: string,
        public cars?: string,
        public type?: string[]
    ) {}
}

export enum Roles {
    ADMINISTRATOR = 'admin',
    USER = 'user'
}


// id: 
// f_username: 
// userName: ghiss
// password: ghiss
// tel: 06060607
// email: ghis@test.com