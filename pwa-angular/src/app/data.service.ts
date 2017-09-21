import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Challenge } from './data';
import 'rxjs/add/operator/map';

@Injectable()
export class ChallengeService {
    //BASE_URL ='http://localhost:9000/api';
    constructor(private http: Http) { }
    getChallenges() {


        return this.http.get('http://localhost:9000/api/challenges')
            .map(res => res.json()
            );




    }

    addChallenge(newChallenge) {
        var headers = new Headers();
        headers.append('challenge-Type', 'application/json');
        return this.http.post('http://localhost:9000/api/challenge', newChallenge, { headers: headers })
            .map(res => res.json());
    }

    deleteChallenge(id) {

        return this.http.delete('http://localhost:9000/api/challenge/' + id)
            .map(res => res.json());

    }
}
