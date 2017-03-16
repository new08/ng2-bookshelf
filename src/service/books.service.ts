/**
 * Created by Canon on 2017/3/15.
 */
import {Injectable} from '@angular/core';
import {Http, Headers} from "@angular/http";

import 'rxjs/add/operator/toPromise';

import {Book} from '../model/book';

@Injectable()
export class BookService {
  private booksUrl = 'api/books';
  constructor(private http: Http){}
  private headers = new Headers({'content-Type': 'application/json'});

  getBooks(): Promise<Book[]> {
    return this.http.get(this.booksUrl).toPromise().then(
      response => response.json().data as Book[]
    ).catch(this.handleError);

    // Promise.resolve(HEROES);
  } // stub
  getBooksSlowly(): Promise<Book[]> {
    return new Promise(resolve => {
      setTimeout(() => resolve(this.getBooks()), 2000);
    });
  }
  getBook(id: number): Promise<Book> {
    const url = `${this.booksUrl}/${id}`;
    return this.http.get(url).toPromise().then(
      response => response.json().data as Book
    ).catch(this.handleError);
  }
  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }

  update(book: Book): Promise<Book> {
    const url = `${this.booksUrl}/${book.id}`;
    return this.http.put(url, JSON.stringify(book),{headers: this.headers})
      .toPromise().then(() => book).catch(this.handleError);

  }

  create(title: string) {
    return this.http.post(
      this.booksUrl,
      JSON.stringify({title: title}), {headers: this.headers}
    ).toPromise().then(
      res => res.json().data
    ).catch(this.handleError);
  }

  delete(id: number) {
    const url = `${this.booksUrl}/${id}`;
    return this.http.delete(url, {headers: this.headers})
      .toPromise().then(() => null).catch(this.handleError);
  }
}
