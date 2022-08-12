import React, { useEffect, useState } from 'react';
import Card from 'react-bootstrap/Card';
import './CardComponent.css';

interface IListItemProps {
    title: string;
    description: string;
  }

export default function CardRes(props: IListItemProps) {
  return (
    <Card className="Cards">
      <Card.Body>
        <Card.Title><h1>{props.title}</h1></Card.Title>
        <Card.Text>{props.description}</Card.Text>
      </Card.Body>
    </Card>
  );
}