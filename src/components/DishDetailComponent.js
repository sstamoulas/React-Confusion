import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';

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
          <Breadcrumb>
            <BreadcrumbItem><Link to='/home'>Home></Link></BreadcrumbItem>
            <BreadcrumbItem><Link to='/menu'>Menu></Link></BreadcrumbItem>
            <BreadcrumbItem active>{ props.dish.name }</BreadcrumbItem>
          </Breadcrumb>
          <div className="col-12">
            <h3>{ props.dish.name }</h3>
            <hr />
          </div>
        </div>
        <div className="row">
          <div key={ props.dish.id } className="col-12 col-md-5 m-1">
            <RenderDish dish={ props.dish } />
          </div>
          <div className="col-12 col-md-5 m-1">
            <RenderComments comments={ props.comments } />
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
