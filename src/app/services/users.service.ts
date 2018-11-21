import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private db:AngularFireDatabase) { }

  public getUsers() {        
    return this.db.list('user').valueChanges();
}

public getUser(id){
    return this.db.object('user/'+id);
}

public createUser(user){
    this.db.database.ref('user/'+user.id).set(user);
}

public updateUser(user){
    this.db.database.ref('user/'+user.id).set(user);
}

public deleteUser(id){
    this.db.object('user/'+id).remove();
}

}
