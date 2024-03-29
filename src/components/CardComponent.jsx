import React from "react";
import { Card, Row } from "react-bootstrap";

const CardComponent = (props) => {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Body className="gameCard">
        <Card.Title>
          {props.Title}<> - </> 
          {props.Subtitle}
        </Card.Title>
        <Card.Subtitle className="mb-2 text-muted">
          {props.Position}
        </Card.Subtitle>
        <Card.Text>{props.Summary}</Card.Text>
        <Card.Text>{props.Description}</Card.Text>
        <div className="platformRow">
          {props.Platform1 && <Card.Link href="#">{props.Platform1}</Card.Link>}
          {props.Platform2 && <Card.Link href="#">{props.Platform2}</Card.Link>}
          {props.Platform3 && <Card.Link href="#">{props.Platform3}</Card.Link>}
          {props.Platform4 && <Card.Link href="#">{props.Platform4}</Card.Link>}
        </div>
      </Card.Body>
    </Card>
  );
};

export default CardComponent;
