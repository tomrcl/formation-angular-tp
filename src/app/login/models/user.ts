export class User {
    private _login: string;
    private _password: string;

    constructor(login: string, password: string) {
        this._login = login;
        this._password = password;
    };
   
    public get login() : string {
        return this._login;
    }

    public get password() : string {
        return this._password;
    }

    public get toPost(): {pseudo: string, password: string} {
        return {
            pseudo: this._login,
            password: this._password
        };
    }
    
}
