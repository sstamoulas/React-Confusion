import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap';

class DishDetail extends Component {
  constructor(props) {
    super(props);
  }

  renderComments(comments) {
    const menu = comments.map((comment) => {
      return (
        <CardBody key={ comment.id } >
          <CardText>{ comment.comment }</CardText>
          <CardText>-- { comment.author }, { new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit' }).format(new Date(Date.parse(comment.date))) }</CardText>
        </CardBody>
      );
    });

    return (
      <div>
        <h4>Comments</h4>
        { menu }
      </div>
    );
  }

  renderDish(dish) {
    return (
      <Card>
        <CardImg width="100%" src={ dish.image } alt={ dish.name } />
        <CardBody>
          <CardTitle>{ dish.name }</CardTitle>
          <CardText>{ dish.description }</CardText>
        </CardBody>
      </Card>
    );
  }

  render() {
    if(this.props.dish != null) {
      return (
        <div className="row">
          <div key={ this.props.dish.id } className="col-12 col-md-5 m-1">
            { this.renderDish(this.props.dish) }
          </div>
          <div className="col-12 col-md-5 m-1">
            { this.renderComments(this.props.dish.comments) }
          </div>
        </div>
      );
    }
    else {
      return (
        <div></div>
      );
    }
  }
}

export default DishDetail;
