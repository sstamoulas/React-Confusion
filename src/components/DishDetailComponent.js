import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap';

class DishDetail extends Component {
  constructor(props) {
    super(props);
  }

  renderComments(comments) {
    const monthNames = [
      "Jan", 
      "Feb", 
      "Mar", 
      "Apr", 
      "May", 
      "Jun", 
      "Jul", 
      "Aug", 
      "Sep", 
      "Oct", 
      "Nov", 
      "Dec"];

    const menu = comments.map((comment) => {
      let date = new Date(comment.date); 
      let day = date.getDate() < 10 ? '0' + date.getDate() : date.getDate();
      let year = date.getFullYear();
      let month = monthNames[date.getMonth()];
      let dateStr = month + ' ' + day + ', ' + year;

      return (
        <CardBody key={ comment.id } >
          <CardText>{ comment.comment }</CardText>
          <CardText>-- { comment.author }, { dateStr }</CardText>
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
    if(this.props.selectedDish != null) {
      return (
        <div className="row">
          <div key={ this.props.selectedDish.id } className="col-12 col-md-5 m-1">
            { this.renderDish(this.props.selectedDish) }
          </div>
          <div className="col-12 col-md-5 m-1">
            { this.renderComments(this.props.selectedDish.comments) }
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
