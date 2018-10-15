import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';

function RenderComments({ comments }) {
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

function RenderDish({ dish }) {
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

const DishDetail = (props) => {
  if(props.dish != null) {
    return (
      <div className="container">
        <div className="row">
          <div key={ props.dish.id } className="col-12 col-md-5 m-1">
            <RenderDish dish={ props.dish } />
          </div>
          <div className="col-12 col-md-5 m-1">
            <RenderComments comments={ props.dish.comments } />
          </div>
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

export default DishDetail;
