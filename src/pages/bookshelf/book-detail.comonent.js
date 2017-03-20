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
import { ActivatedRoute } from '@angular/router';
import { BookService } from "../../service/books.service";
export var BookshelfPage = (function () {
    function BookshelfPage(bookService, route, location, navCtrl) {
        this.bookService = bookService;
        this.route = route;
        this.location = location;
        this.navCtrl = navCtrl;
    }
    BookshelfPage.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params
            .switchMap(function (params) { return _this.bookService.getBook(+params['id']); })
            .subscribe(function (book) { return _this.book = book; });
    };
    BookshelfPage = __decorate([
        Component({
            selector: 'page-bookshelf',
            templateUrl: 'bookshelf.component.html'
        }), 
        __metadata('design:paramtypes', [BookService, ActivatedRoute, Location, NavController])
    ], BookshelfPage);
    return BookshelfPage;
}());
//# sourceMappingURL=book-detail.comonent.js.map