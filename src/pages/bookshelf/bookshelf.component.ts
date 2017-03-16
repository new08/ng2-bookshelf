/**
 * Created by Canon on 2017/3/15.
 */
import {Component, OnInit} from '@angular/core';
import {NavController} from 'ionic-angular';
import {Book} from "../../model/book";
import {BookService} from "../../service/books.service";
import {Subject} from "rxjs";
import {Observable} from "rxjs";

@Component({
  selector: 'page-bookshelf',
  templateUrl: 'bookshelf.component.html'
})
export class BookshelfPage implements OnInit {
  ngOnInit(): void {
    this.bookService.getBooks().then(
      books => this.books = books.slice(0,5)
    )
  }

  books: Book[] = [];
  private searchTerms = new Subject<string>();

  constructor(private bookService: BookService, public navCtrl: NavController) {

  }

  getBooks(term: string): void{
    this.bookService.getBooks().then(
      books => this.books = books.slice(0,5).filter((book) => {
        return (book.title.toLowerCase().indexOf(term.toLowerCase()) > -1);
      })
    )
  }

}
