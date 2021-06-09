import React, { useState, useEffect } from 'react';
import { Accordion, Card, Button } from 'react-bootstrap';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';

export default function BerryDetails() {

    const { id } = useParams();
    const [berryDetails, setBerryDetails] = useState({});
    const [berryFirmness, setBerryFirmness] = useState({});

    useEffect(() => {
        fetch(`https://pokeapi.co/api/v2/berry/${id}/`)
            .then(resp => resp.json())
            .then(details => {
                console.log(details);
                setBerryDetails(details);
                setBerryFirmness(details.firmness)
            })
    }, [id]);

    return (
        <div>
            <div>
                <Link to={`/`}>
                    <Button variant="outline-dark" size="sm">
                        Return Home
                    </Button>
                </Link>
                <br />
            </div>
            <h3>{berryDetails.name}</h3>
            <Accordion>
                <div>
                    <Card>
                        <Card.Header>
                            <Accordion.Toggle
                                as={Button}
                                eventKey="1"
                                variant="link"
                            > Berry Firmness
                            </Accordion.Toggle>
                        </Card.Header>
                        <Accordion.Collapse eventKey="1">
                            <Card.Body>
                                <Card.Text>
                                    Firmess: <span>{berryFirmness.name}</span>
                                </Card.Text>
                            </Card.Body>
                        </Accordion.Collapse>
                    </Card>
                </div>
            </Accordion>
        </div>
    )



}