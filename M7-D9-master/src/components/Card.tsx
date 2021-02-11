import React from "react";
import { withRouter, RouteComponentProps } from "react-router-dom";
import { Card } from "react-bootstrap";
import { infoCardProps } from "../types/interfaces";

type infoProps = RouteComponentProps & infoCardProps;

function InfoCard(props: infoProps) {
  return (
    <Card
      className="result"
      onClick={() => props.history.push("/song/" + props.info.id)}
    >
      <div className="resultCard">
<figure className="image is-48x48">
  <img
  className="card-img-top"
    src={props.info.album.cover_xl}
    alt = {props.info.title}
    
  />
</figure>
<h4 className="bolder">{props.info.title}</h4>
<span><b>By:</b>{props.info.artist.name}</span>
</div>
    </Card>
  );
}

export default withRouter(InfoCard);
