import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../../models/user';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private loggedUser: any;
  private URL_SERVER: string = 'https://serveur-demo.macademia.fr/';

  constructor(private httpClient: HttpClient) { }

  public async checkUser({login, password}: {login: string, password: string}): Promise<boolean> {
    const user: User = new User(login, password);
    return this.httpClient.post(this.URL_SERVER + 'login', user.toPost)
      .toPromise()
      .then(res => {
        this.loggedUser = res;
        console.log("user logged", this.loggedUser);
        return true;
      })
      .catch(_ => false);
  }

  public async previouslyLogged(): Promise<boolean> {
    console.log("user logged", this.loggedUser);
    return this.httpClient.get(this.URL_SERVER + 'whoAmI')
      .toPromise()
      .then(res => {
        console.log("whoAmI ?", res);
        return this.loggedUser === res;
      })
      .catch(_ => false);
  }
}
