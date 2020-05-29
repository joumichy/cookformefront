import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import {FormGroup, Validators, FormControl}from '@angular/forms';
import { analyzeAndValidateNgModules } from '@angular/compiler';

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
  userInfo:any;
  state$: Observable<object>;
  
  ngOnInit(){
    this.sub = this.activatedRoute
      .queryParams
      .subscribe(params => {
        //assign any key
        this.data = params['data'];
        console.log(params);

        this.userInfo = JSON.parse(this.data);


        console.log(this.userInfo['username']);
        console.log(this.userInfo['email']);
      });
    
    
  }


  

  onClickParametre(){
    console.log(this.data)
   

    this.router.navigate(['/parametre'], {queryParams :{data : this.data}});


  }

}
