import React from 'react'
import {Card} from 'react-bootstrap';

const Photo = ({id}) => {
    return (
        <Card className = "photo">
            <Card.img 
             variant = "top"
             src = {`http://localhost:3300/photos/${id}`} 
             alt = "photo"
            />
        </Card>
    );
};

export default Photo;