/**
 * Created by Canon on 2017/3/16.
 */
import {Component, OnInit} from '@angular/core';
import {NavController} from 'ionic-angular';
import {Book} from "../../model/book";
import {BookService} from "../../service/books.service";
import {Subject} from "rxjs";

@Component({
  selector: 'page-bookshelf',
  templateUrl: 'bookshelf.component.html'
})
export class BookshelfPage implements OnInit {
  ngOnInit(): void {
    this.route.params
      .switchMap((params: Params) => this.heroService.getHero(+params['id']))
      .subscribe( hero => this.hero = hero);


    this.bookService.getBook(id).then(
      book => this.book = book
    )
  }

  book: Book;

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
