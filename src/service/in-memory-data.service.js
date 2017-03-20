/**
 * Created by Canon on 2017/3/15.
 */
export var InMemoryDataService = (function () {
    function InMemoryDataService() {
    }
    InMemoryDataService.prototype.createDb = function () {
        var books = [
            {
                id: 1,
                title: '番茄工作法图解',
                isbn: '',
                author: '/瑞典/Staffan Noteberg',
                translator: '',
                publisher: '',
                price: 40.0,
                caseId: '',
                tags: ['效率'],
                summary: '',
            }, {
                id: 2,
                title: 'LaTeX入门',
                isbn: '',
                author: '刘海洋',
                translator: '',
                publisher: '',
                price: 40.0,
                caseId: '',
                tags: [],
                summary: '',
            }, {
                id: 3,
                title: '',
                isbn: '',
                author: '',
                translator: '',
                publisher: '',
                price: 40.0,
                caseId: '',
                tags: [],
                summary: '',
            }
        ];
        return { books: books };
    };
    return InMemoryDataService;
}());
//# sourceMappingURL=in-memory-data.service.js.map