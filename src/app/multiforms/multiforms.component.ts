import { mainData } from './../data.model';
import { Component, OnInit } from '@angular/core';
import { FormBuilder,Validators,FormGroup } from "@angular/forms"
import {MatDialog} from '@angular/material/dialog';
import { DialogElementsExampleDialogComponent } from '../dialog-elements-example-dialog/dialog-elements-example-dialog.component';
@Component({
  selector: 'app-multiforms',
  templateUrl: './multiforms.component.html',
  styleUrls: ['./multiforms.component.css']
})

export class MultiformsComponent implements OnInit {

  isLinear=true;
  AllData:mainData[]=[]

// ngModel Intialization 
  Firstname=''
  Lastname=''
  Age=''
  Email=''
  Phone=''
  Location=''
  Street =''
  City=''
  Pin=''
// intialization END


  constructor(private builder: FormBuilder,public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  Empregister = this.builder.group({
    basic: this.builder.group({
      firstname:this.builder.control('',[Validators.required,Validators.minLength(3),Validators.pattern('[a-zA-Z]*')]),
      lastname:this.builder.control('',[Validators.required,Validators.pattern('[a-zA-Z]*')]),
      age:this.builder.control('',[Validators.required,Validators.pattern('[0-9]*')]),

    }),
    contact: this.builder.group({
      email:this.builder.control('',[Validators.required,Validators.email]),
      phone:this.builder.control('',[Validators.required,Validators.pattern('[0-9]*')]),
      location:this.builder.control('',Validators.required),

    }),
    address: this.builder.group({
      street:this.builder.control('',Validators.required),
      city:this.builder.control('',Validators.required),
      pin:this.builder.control('',[Validators.required,Validators.pattern('[0-9]*')])
    })
  });


  get Basicform(){
    return this.Empregister.get("basic") as FormGroup;
  }
  get contactform(){
    return this.Empregister.get("contact") as FormGroup;
  }
  get addressform(){
    return this.Empregister.get("address") as FormGroup;
  }


  onSubmit(){
    if(this.Empregister.valid){

      this.AllData.push(new mainData(this.Firstname,this.Lastname,this.Age,this.Email,this.Phone,this.Location,this.Street,this.City,this.Pin))
      this.Empregister.reset();

    }
  }
  openDialog() {
    this.dialog.open(DialogElementsExampleDialogComponent);
  }

  
  } 
      
  