import { Component, OnInit } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  
  /*public loginForm=document.getElementById("LoginForm");
  public regForm=document.getElementById("RegForm");
  public indicator=document.getElementById("Indicator");
  */
  indstyle='indstyle1';
  frmLstyle='LoginForm2';
  frmRstyle='RegForm1';
  
 
  
  
  constructor() { }

  ngOnInit(): void {
  }

  public messageL(){
    alert("Login form is being implemented...");
    
  }
  public messageR(){
    alert("Register form is being implemented...");
    
  }


  public register(){
    this.indstyle='indstyle2';
    this.frmRstyle='RegForm2';
    this.frmLstyle='LoginForm1';
    
    
    /* 
    this.regForm.style.transform="translateX(0px)";
    this.loginForm.style.transform="translate(0px)";
    
   */ 
  
    
  }

  public login(){
    this.indstyle='indstyle1';
    this.frmRstyle='RegForm1';
    this.frmLstyle='LoginForm2';
    
    
    
    /*
    this.regForm.style.transform="translateX(300px)";
    this.loginForm.style.transform="translate(300px)";
    */
    
    
    
  }



}
