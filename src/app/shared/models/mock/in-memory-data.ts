import { InMemoryDbService, RequestInfo } from 'angular-in-memory-web-api';
import { Observable } from 'rxjs';
import { UserData } from './user.data';

export class InMemoryData implements InMemoryDbService {
    createDb(): any {
        const userData = UserData;
        return { userData };
    }
}