import React, { Component } from 'react';

export default class Product extends Component {
  handleUpVote = () => {
    const { id, onVote } = this.props;
    onVote(id);
  }

  render() {
    const {
      id,
      title,
      description,
      url,
      votes,
      submitterAvatarUrl,
      productImageUrl
    } = this.props;

    return (
      <div className="item">
        <div className="image">
          <img src={productImageUrl} />
        </div>
        <div className="middle aligned content">
          <div className="header">
            <a onClick={this.handleUpVote}>
              <i className="large caret up icon"></i>
            </a>
            {votes}
          </div>
          <div className="description">
            <a href={url}>{title}</a>
            <p>{description}</p>
          </div>
          <div className="extra">
            <span>Submitted by: </span>
            <img className="ui avatar image" src={submitterAvatarUrl} />
          </div>
        </div>
      </div>
    );
  }
}
