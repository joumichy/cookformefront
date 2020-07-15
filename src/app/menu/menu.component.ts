import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import {FormGroup, Validators, FormControl}from '@angular/forms';
import { analyzeAndValidateNgModules } from '@angular/compiler';
import { UserInfo } from '../userclass/userinfo';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {
  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );
    


  constructor(private breakpointObserver: BreakpointObserver, private activatedRoute: ActivatedRoute,private router : Router) {
   

  }

  sub :any;
  data: any;
  userInfo:UserInfo;
  state$: Observable<object>;
  
  ngOnInit(){
    this.sub = this.activatedRoute
      .queryParams
      .subscribe(params => {
        //assign any key
        this.data = params['data'];
        console.log(params);

        this.userInfo = JSON.parse(this.data);


        console.log(this.userInfo.username);
       
      });
    
    
  }


  

  onClickParametre(){
    console.log(this.data)
   

    this.router.navigate(['/parametre'], {queryParams :{data : this.data}});

  }

  
  onClickMarket(){
    console.log(this.data)
   

    this.router.navigate(['/market'], {queryParams :{data : this.data}});


  }

  onClickHistory(){
    console.log(this.data)
   

    this.router.navigate(['/historique-commande'], {queryParams :{data : this.data}});


  }


}
