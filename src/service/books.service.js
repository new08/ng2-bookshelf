var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable } from '@angular/core';
import { Http, Headers } from "@angular/http";
import 'rxjs/add/operator/toPromise';
export var BookService = (function () {
    function BookService(http) {
        this.http = http;
        this.booksUrl = 'api/books';
        this.headers = new Headers({ 'content-Type': 'application/json' });
    }
    BookService.prototype.getBooks = function () {
        return this.http.get(this.booksUrl).toPromise().then(function (response) { return response.json().data; }).catch(this.handleError);
        // Promise.resolve(HEROES);
    }; // stub
    BookService.prototype.getBooksSlowly = function () {
        var _this = this;
        return new Promise(function (resolve) {
            setTimeout(function () { return resolve(_this.getBooks()); }, 2000);
        });
    };
    BookService.prototype.getBook = function (id) {
        var url = this.booksUrl + "/" + id;
        return this.http.get(url).toPromise().then(function (response) { return response.json().data; }).catch(this.handleError);
    };
    BookService.prototype.handleError = function (error) {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    };
    BookService.prototype.update = function (book) {
        var url = this.booksUrl + "/" + book.id;
        return this.http.put(url, JSON.stringify(book), { headers: this.headers })
            .toPromise().then(function () { return book; }).catch(this.handleError);
    };
    BookService.prototype.create = function (title) {
        return this.http.post(this.booksUrl, JSON.stringify({ title: title }), { headers: this.headers }).toPromise().then(function (res) { return res.json().data; }).catch(this.handleError);
    };
    BookService.prototype.delete = function (id) {
        var url = this.booksUrl + "/" + id;
        return this.http.delete(url, { headers: this.headers })
            .toPromise().then(function () { return null; }).catch(this.handleError);
    };
    BookService = __decorate([
        Injectable(), 
        __metadata('design:paramtypes', [Http])
    ], BookService);
    return BookService;
}());
//# sourceMappingURL=books.service.js.map