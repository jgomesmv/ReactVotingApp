import React, { Component } from 'react';
import Product from './Product';
import { products } from '../seeds';

export default class ProductList extends Component {
  state = {
    products: []
  };

  handleProductVote = productId => {
    const nextProducts = this.state.products.map(product => {
      if (product.id === productId) {
        return Object.assign({}, product, { votes: product.votes + 1 });
      }

      return product;
    });

    this.setState({ products: nextProducts });
  };

  componentDidMount() {
    this.setState({ products });
  }

  render() {
    // const product = products[1];
    const sortedProducts = this.state.products.sort(
      (a, b) => b.votes - a.votes
    );
    const productComponents = sortedProducts.map(product => (
      <Product
        key={'key' + product.id}
        id={product.id}
        title={product.title}
        description={product.description}
        url={product.url}
        votes={product.votes}
        submitterAvatarUrl={product.submitterAvatarUrl}
        productImageUrl={product.productImageUrl}
        onVote={this.handleProductVote}
      />
    ));

    return <div className="ui unstackable items">{productComponents}</div>;
  }
}
