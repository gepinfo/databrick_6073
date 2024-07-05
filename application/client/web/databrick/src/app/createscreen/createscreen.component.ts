import { Component, OnInit, ViewChild } from '@angular/core';
import { CreatescreenService } from './createscreen.service';





@Component({
  selector: 'app-createscreen',
  templateUrl: './createscreen.component.html',
  styleUrls: ['./createscreen.component.scss'],
})

export class CreatescreenComponent implements OnInit {
    public ticket:any = {
        created_date: '',
        created_by: '',
        last_modified_by: '',
        last_modified_date: '',
        name: '',
        email: '',
    }




    constructor (
        private createscreenService: CreatescreenService,
    ) { }

    ngOnInit() {
        this.ticket.created_by = sessionStorage.getItem('email') || ''; 
        


    
    }
    Create() {
        this.createscreenService.Create(this.ticket).subscribe((data:any) => {
            this.ticket.name = ''
 	 	this.ticket.email = ''
        },
        (error:Error) => {
            console.log('Error', error);
        });
    }


}