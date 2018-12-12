import { Component, OnInit } from '@angular/core';
import { Role } from '../../../entity/role';
import { RoleService } from './../../services/role.service';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

//import { ModalService } from '../_services';

@Component({
  selector: 'app-rolelist',
  templateUrl: './rolelist.component.html',
  styleUrls: ['./rolelist.component.css']
})
/*export class RolelistComponent implements OnInit {
  currentRole: Role;
  rolelist: Role[] = [];


  constructor(private roleService: RoleService) {
    this.currentRole = JSON.parse(localStorage.getItem('currentRole'));
}*/


export class RolelistComponent implements OnInit{
public data: any;

    constructor(
       private $modal: $ModalManagerService,
        private http: HttpClient

    ) {
        super();
    }

    ngOnInit(): void {
        this.http.get('http://localhost:8181/role/roleList',{responseType:"json"}).subscribe(
        response => {
            this.data = response;
            console.log("data :"+response);
            var sample=JSON.stringify(response);
       });
    }
}
//$("#divv").html(content);





/*constructor() {}
  ngOnInit() {
    
  }

 



}*/
