import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})

export class AuthService {
  private _allowAccess = false

  get allowAccess(): boolean {
    return this._allowAccess;
  }

  set allowAccess(value: boolean) {
    this._allowAccess = value;
  }

  constructor() { }
}
