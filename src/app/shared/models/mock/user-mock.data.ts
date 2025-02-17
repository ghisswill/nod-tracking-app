import { User } from "../user.model";

export class userMock {
    constructor(
        public token: string,
        public user: User
    ) {}
}