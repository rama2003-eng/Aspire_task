// import { Injectable } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
// import { Observable, throwError } from 'rxjs';
// import { catchError } from 'rxjs/operators';
// import { map } from 'rxjs/operators';

// @Injectable({
//   providedIn: 'root'
// })
// export class AuthService {
//   private apiUrl = 'http://localhost:3000/users';
//   private currentUser: any = null;

//   constructor(private http: HttpClient) {}

//   signUp(email: string, password: string, name: string): Observable<any> {
//     const newUser = { email, password, name };
//     return this.http.post(this.apiUrl, newUser);
  
//   }

//   signIn(email: string, password: string): Observable<any> {
//     return this.http.get<any[]>(`${this.apiUrl}/users?email=${email}&password=${password}`)
//       .pipe(
//         map(users => {
//           if (users.length > 0) {
//             localStorage.setItem('currentUser', JSON.stringify(users[0]));
//             return users[0];
//           } else {
//             throw new Error('Invalid username or password');
//           }
//         }),
//         catchError(error => {
//           console.error('Sign in failed', error);
//           return throwError(error);
//         })
//       );
//   }
//   signOut(): void {
//     this.currentUser = null;
//     localStorage.removeItem('currentUser');
//   }

//   isLoggedIn(): boolean {
//     return localStorage.getItem('currentUser') !== null;
//   }

//   getUser(): any {
//     if (this.currentUser) {
//       return this.currentUser;
//     }
//     const user = localStorage.getItem('currentUser');
//     return user ? JSON.parse(user) : null;
//   }
// }
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://localhost:3000/users';
  private currentUser: any = null;

  constructor(private http: HttpClient) {}

  checkUserExists(email: string): Observable<boolean> {
    return this.http.get<any[]>(`${this.apiUrl}?email=${email}`).pipe(
      map(users => users.length > 0),
      catchError(() => of(false))
    );
  }

  registerUser(name: string, email: string, password: string): Observable<boolean> {
    const newUser = { name, email, password };
    return this.http.post(this.apiUrl, newUser).pipe(
      map(() => true),
      catchError(() => of(false))
    );
  }

  login(email: string, password: string): Observable<boolean> {
    return this.http.get<any[]>(`${this.apiUrl}`).pipe(
      map(users => {
        const user = users.find(u => u.email === email && u.password === password);
        if (user) {
          localStorage.setItem('currentUser', JSON.stringify(user));
          this.currentUser = user;
          return true;
        } else {
          return false;
        }
      }),
      catchError(error => {
        console.error('Login failed', error);
        return throwError(error);
      })
    );
  }

  signOut(): void {
    this.currentUser = null;
    localStorage.removeItem('currentUser');
  }

  isLoggedIn(): boolean {
    return !!localStorage.getItem('currentUser');
  }

  getUser(): any {
    if (this.currentUser) {
      return this.currentUser;
    }
    const user = localStorage.getItem('currentUser');
    return user ? JSON.parse(user) : null;
  }

  private handleError(error: any): Observable<never> {
    console.error('An error occurred', error);
    return throwError(error.message || 'Something went wrong, please try again');
  }
}

