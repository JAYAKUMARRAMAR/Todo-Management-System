import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class WelcomeData {
  executeHelloWorldBeanService() {
    console.log('execute Hello World Bean Service');
  }
}
