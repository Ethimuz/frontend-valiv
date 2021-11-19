import { Injectable } from '@angular/core';
import * as CryptoJS from 'crypto-js';
import { environment } from '../../../../environments/environment';
import { JwtHelperService } from "@auth0/angular-jwt";

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  private privateKey: string = environment.privateKey;
  private tokenDecoder = new JwtHelperService();

  constructor() { }

  saveToken(token: string){    
    sessionStorage.setItem('token', this.encrypt(token));
  }
  
  getToken(): string | null{
    let token = sessionStorage.getItem('token');
    if (token) {
      return this.decrypt(token);
    } else {
      return null;
    }   
  }
  
  removeToken(){
    sessionStorage.removeItem('token');
  }

  entity(): string | null{
    const token = this.getToken();
    if (token) {
      const decoded = this.tokenDecoder.decodeToken(token);
      return decoded.entity;
    } else {
      return null;
    }
  }

  getId(): string | null {
    const token = this.getToken();
    if (token) {
      const decoded = this.tokenDecoder.decodeToken(token);
      return decoded.authenticated;
    } else {
      return null;
    }
  }

  isLogged(): boolean{
    const token = this.getToken();
    return (token !== null)? true : false;
  }

  private encrypt(token: string): string{
    
    const key = CryptoJS.enc.Utf8.parse(this.privateKey);
    const iv = CryptoJS.enc.Utf8.parse(this.privateKey);
    const encrypted = CryptoJS.AES.encrypt(CryptoJS.enc.Utf8.parse(token.toString()), key,
    {
        keySize: 128 / 8,
        iv,
        mode: CryptoJS.mode.CBC,
        padding: CryptoJS.pad.Pkcs7
    });

    return encrypted.toString();
  }

  private decrypt(token: string): string {

    const key = CryptoJS.enc.Utf8.parse(this.privateKey);
    const iv = CryptoJS.enc.Utf8.parse(this.privateKey);
    const decrypted = CryptoJS.AES.decrypt(token, key, {
        keySize: 128 / 8,
        iv,
        mode: CryptoJS.mode.CBC,
        padding: CryptoJS.pad.Pkcs7
    });

    return decrypted.toString(CryptoJS.enc.Utf8);
  }

}
