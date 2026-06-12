import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class WelcomeData {

  constructor(private http: HttpClient) {}
  
  executeHelloWorldBeanService() {
     return this.http.get<HelloWorldBean>(`http://localhost:8080/helloworldbean`);
  }

  executeHelloWorldServiceWithPathVariable(name: string) {
     return this.http.get<HelloWorldBean>(`http://localhost:8080/helloworld/path-variable/${name}`);
  }
}

export class HelloWorldBean {
  constructor(public message: string) {}
}