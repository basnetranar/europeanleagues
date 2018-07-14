import { Component, OnInit } from '@angular/core';
import {HttpClient,HttpHeaders} from "@angular/common/http";

@Component({
  selector: 'app-premier-league',
  templateUrl: './premier-league.component.html',
  styleUrls: ['./premier-league.component.css']
})
export class PremierLeagueComponent implements OnInit {
 
 // baseUrl:string = 'http://api.football-data.org/v2/competitions/2021/standings';
 // auth:string = "X-Auth-Token";
 // key:string = 'b12b9f38b6364eef9bf114fa054a82a1';

  constructor(private http:HttpClient) { }

  // tableFinal = []; //Array to store the final table standing
  // tempTable:table; //temporary object to store each teams data

  ngOnInit() {
  	
  	//http.get request and assign headers for the request
  	// this.http.get(this.baseUrl,{headers: new HttpHeaders().set(this.auth,this.key)}) 
  	// 	.subscribe(res => {

  	// 		//organize the datas from the response
  	// 		//first check if standings/table has any data

  	// 		if(res['standings'].length != 0){
	  // 			for (let teams in res['standings'][0].table ){
	  				
	  // 				this.tempTable = {
		 //  				team: res['standings'][0].table[teams].team.name,
		 //  				matchesPlayed: res['standings'][0].table[teams].playedGames,
			// 			won: res['standings'][0].table[teams].won,
			// 			lost: res['standings'][0].table[teams].lost,
			// 			drawn: res['standings'][0].table[teams].draw,
			// 			goalScored: res['standings'][0].table[teams].goalsFor,
			// 			goalAgainst: res['standings'][0].table[teams].goalsAgainst,
			// 			position: res['standings'][0].table[teams].position,
			// 			points: res['standings'][0].table[teams].points,
			// 			goalDifference: res['standings'][0].table[teams].goalDifference
			// 		};
			// 		this.tableFinal.push(this.tempTable);
	  // 			};
	  // 		};
  	// 	});
  }
}
