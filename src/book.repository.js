class BookRepository {

    /**
     * @param db
     */
    constructor(db) {
        this.db = db;
    }

    save (book) {
        this.db.get('books').push(book).write();
    }

    /**
     * Nombre total de livre
     */
    getTotalCount() {
        var total = this.db.get('books').size().value();
        return total
    }

    /**
     * Somme du prix de tous les livre
     */
    getTotalPrice() {
        var prices = this.db.get('books').map('price').value()
        var total = 0
        for (var i=0; i<prices.length; i++) {
            total+=prices[i];
        }
        return total;
    }


    /**
     * Retourne un livre
     */
    getBookByName(bookName) {
        var book = this.db.get('books')
        .find({ name: bookName })
        .value();
        return book;
    }

    /**
     * Nombre de livre ajouté par mois
     *
     *  [
     *      {
     *          year: 2017,
     *          month, 2,
     *          count, 129,
     *          count_cumulative: 129
     *      },
     *      {
     *          year: 2017,
     *          month, 3,
     *          count, 200,
     *          count_cumulative: 329
     *      },
     *      ....
     *  ]
     */
    getCountBookAddedByMont(bookName) {

    }

}


module.exports = BookRepository;