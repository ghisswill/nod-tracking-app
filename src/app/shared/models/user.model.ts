export class User {
    constructor(
        public userId?: number,
        public lastName?: string,
        public firstName?: string,
        public username?: string,
        public email?: string,
        public password?: string
    ) {}
}