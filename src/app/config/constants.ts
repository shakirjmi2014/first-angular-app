// Angular Modules
import { Injectable } from '@angular/core';
@Injectable()
export class Constants {
  public static USERS_API_ENDPOINT: string =
    'https://jsonplaceholder.typicode.com/users';
  public static COUNTRIES_API_ENDPOINT: string =
    'https://restcountries.com/v3.1/all';
  public static API_MOCK_ENDPOINT: string = 'https://www.userdomainmock.com/';
  public static TitleOfSite: string = 'angular-app';
}
