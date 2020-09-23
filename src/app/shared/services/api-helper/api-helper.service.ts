import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable()
export class APIHelper {
    private _url: string;

    constructor(private http: HttpClient) {
        this._url = 'https://serveur-demo.macademia.fr';
    }

    requestApi({action, method = 'GET', datas = {}}: { action: string, method?: string, datas?: any }): Promise<any> {
        const methodWanted = method.toLowerCase();
        const urlToUse = this.url + action;

        // On indique le type des datas qu'on envoie
        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json'
            })
        };

        let req = null;

        if (methodWanted === 'post') {
            req = this.http.post(urlToUse, datas, httpOptions);
        } else if (methodWanted === 'put') {
            req = this.http.put(urlToUse, datas, httpOptions);
        } else if (methodWanted === 'delete') {
            req = this.http.delete(urlToUse, httpOptions);
        } else { // GET
            req = this.http.get(urlToUse, httpOptions);
        }

        return req // Il renvoie un observable
            .toPromise() // Que l'on convertit en promesse
            .then((data) => {
              return data;
            });
    }

    get url(): string {
        return this._url;
    }
}
