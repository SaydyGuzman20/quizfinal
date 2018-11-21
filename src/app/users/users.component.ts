import { Component, OnInit } from '@angular/core';
import { UsersService } from '../services/users.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  status:any = null;
  users = null;
  user: any = {};
  textButton:string = null;


  constructor(private usersService:UsersService ,private route:ActivatedRoute) { 
    this.users = usersService.getUsers();
    this.status = this.route.snapshot.params['status'];
    this.textButton = (this.status == 'create') ? 'Crear Contacto' : 'Actualizar Contacto';
  }

  ngOnInit() {
  }
    validateStatusButton(){
      if (this.status == 'create') {
          this.createUser();
      } else {
          this.updateUser();
      }
  }

  getUser(id){
    this.usersService.getUser(id).valueChanges().subscribe(user => {
      this.user= user;
      this.textButton = 'Actualizar Contacto';
      this.status = id;
  });
}
  cancelUser(){
      this.status = 'create';
      this.textButton = 'Crear contacto';
      this.user = {};
  }

  createUser() {
      this.user.id = Date.now();
      this.usersService.createUser(this.user);
      this.cancelUser();
  }

  updateUser(){
      this.usersService.updateUser(this.user);
      this.cancelUser();
  }

  deleteUser(id){
      this.usersService.deleteUser(id);
  }
}

