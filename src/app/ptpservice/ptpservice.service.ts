import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Player } from '../models/player';

@Injectable()
export class PTPService {

    constructor(private http: HttpClient) {}

    getLeaderboard() {
        return this.http.get<any[]>('http://198.12.64.182:3000/db/board').toPromise()
        .then(res =>{
            console.log(res);
            return <Player[]>res
        })
        .then(data => { return data; });
    }
    getAdmins() {
        return this.http.get<any[]>('http://198.12.64.182:3000/db/admins').toPromise()
        .then(res =>{
            console.log(res);
            return <Player[]>res
        })
        .then(data => { return data; });
    }
}