import React from 'react';
import {Link} from 'react-router-dom';
import {Book} from './book.js';

export class Main extends React.Component {


  render() {
    return(
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>

        <div className="list-books-content">
          <div>
            <div className="bookshelf">
              <h2 className="bookshelf-title">Currently Reading</h2>
              <div className="bookshelf-books">
                <ol className="books-grid">
                <li>
                  <Book />
                  <Book />
                </li>
                </ol>
              </div>
            </div>

            <div className="bookshelf">
              <h2 className="bookshelf-title">Want to Read</h2>
              <div className="bookshelf-books">
                <ol className="books-grid">
                <li>
                  <Book />
                </li>
                </ol>
              </div>
            </div>

            <div className="bookshelf">
              <h2 className="bookshelf-title">Read</h2>
              <div className="bookshelf-books">
                <ol className="books-grid">
                <li>
                  <Book />
                  <Book />
                  <Book />
                </li>
                </ol>
              </div>
            </div>

          </div>
        </div>
        <div className="open-search">
          <Link to="/add" className='/add-book' onClick={() => this.setState({ showSearchPage: false })}>Add a book</Link>
        </div>
      </div>
    );
  }
}

export default Main;
