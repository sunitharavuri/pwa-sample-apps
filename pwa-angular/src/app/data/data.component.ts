import { Component, OnInit } from '@angular/core';
import { ChallengeService } from '../data.service';
import { Challenge } from '../data';
import {
    FormBuilder,
    FormGroup,
    FormControl,
    Validators,
} from '@angular/forms';
@Component({
    selector: 'app-challenge',
    templateUrl: './challenge.component.html',
    styleUrls: ['./challenge.component.css'],
    providers: [ChallengeService]
})
export class ChallengeComponent implements OnInit {
    challenges: Challenge[];
    challenge: Challenge;
    name: string;
    description: string;
    priority: string;
    start_date: Date;
    end_date: Date;
    image: String;


    constructor(private challengeService: ChallengeService) { }
    addChallenge(event) {
        //event.preventDefault();
        const newChallenge = {
            name: this.name,
            description: this.description,
            priority: this.priority,
            start_date: this.start_date,
            end_date: this.end_date,
            image: this.image

        }
        this.challengeService.addChallenge(newChallenge)
            .subscribe(challenge => {
                this.challenges.push(challenge);
                this.challengeService.getChallenges()
                    .subscribe(challenges =>
                        this.challenges = challenges);
                //this.reset();
            });
        event.preventDefault();

    }

    deleteChallenge(id: any) {
        var challenges = this.challenges;
        this.challengeService.deleteChallenge(id)
            .subscribe(data => {
                if (data.n == 1) {
                    for (var i = 0; i < challenges.length; i++) {
                        if (challenges[i]._id == id) {
                            challenges.splice(i, 1);
                        }
                    }
                }
            })
    }

    ngOnInit() {
        this.challengeService.getChallenges()
            .subscribe(challenges =>
                this.challenges = challenges);
    }
}


