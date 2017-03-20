/**
 * Created by Canon on 2017/3/16.
 */
import {Component, OnInit} from '@angular/core';
import {NavController} from 'ionic-angular';
import {ActivatedRoute, Params} from '@angular/router';
import {Book} from "../../model/book";
import {BookService} from "../../service/books.service";

@Component({
  selector: 'page-bookshelf',
  templateUrl: 'bookshelf.component.html'
})
export class BookshelfPage implements OnInit {
  ngOnInit(): void {
    this.route.params
      .switchMap((params: Params) => this.bookService.getBook(+params['id']))
      .subscribe(book => this.book = book);
  }

  book: Book;

  constructor(private bookService: BookService, private route: ActivatedRoute,
              private location: Location, public navCtrl: NavController) {

  }

}
