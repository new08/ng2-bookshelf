var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { BookService } from "../../service/books.service";
import { Subject } from "rxjs";
export var BookshelfPage = (function () {
    function BookshelfPage(bookService, navCtrl) {
        this.bookService = bookService;
        this.navCtrl = navCtrl;
        this.books = [];
        this.searchTerms = new Subject();
    }
    BookshelfPage.prototype.ngOnInit = function () {
        var _this = this;
        this.bookService.getBooks().then(function (books) { return _this.books = books.slice(0, 5); });
    };
    BookshelfPage.prototype.getBooks = function (term) {
        var _this = this;
        this.bookService.getBooks().then(function (books) { return _this.books = books.slice(0, 5).filter(function (book) {
            return (book.title.toLowerCase().indexOf(term.toLowerCase()) > -1);
        }); });
    };
    BookshelfPage = __decorate([
        Component({
            selector: 'page-bookshelf',
            templateUrl: 'bookshelf.component.html'
        }), 
        __metadata('design:paramtypes', [BookService, NavController])
    ], BookshelfPage);
    return BookshelfPage;
}());
//# sourceMappingURL=bookshelf.component.js.map