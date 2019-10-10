const BookRepository = require('./book.repository');



describe('Book repository Save', function () {

const dbMock = {
            get : jest.fn().mockReturnThis(),
            push : jest.fn().mockReturnThis(),
            write : jest.fn().mockReturnThis()
        };

    test('Save a book', () => {
        const repository = new BookRepository(dbMock);
        repository.save({id: 1, name: "Unit test"});
        expect(dbMock.write.mock.calls.length).toBe(1);
    });
});

describe('Total count', function () {

    const dbMock = {
            get : jest.fn().mockReturnThis(),
            size : jest.fn().mockReturnThis(),
            value : jest.fn().mockReturnValue(2)
        };


    test('Count Total => 3', () => {
        const repository = new BookRepository(dbMock);
        expect(repository.getTotalCount()).toBe(2);
    });

});

describe('Total price', function () {
    const dbMock = {
            get : jest.fn().mockReturnThis(),
            map : jest.fn().mockReturnThis(),
            size : jest.fn().mockReturnThis(),
            value : jest.fn().mockReturnValueOnce([15.0, 5.0, 10.0])
        };

    test('Count Total Price => 30', () => {

        const repository = new BookRepository(dbMock);
        expect(repository.getTotalPrice()).toBe(30.0);
    });

});

describe('find by name', function () {

    var livre_test = {"id": 2, "name": "Livre1", "price": 4.5, "added_at": "2019-09-24"};
    
    const dbMock = {
            get : jest.fn().mockReturnThis(),
            find : jest.fn().mockReturnThis(),
            value : jest.fn().mockReturnValue(livre_test)
        };

    test('get book by Name ', () => {

        const repository = new BookRepository(dbMock);
        expect(repository.getBookByName("Livre1")).toEqual(livre_test);
    });

});