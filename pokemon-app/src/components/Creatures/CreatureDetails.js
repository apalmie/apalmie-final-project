import React, { useState, useEffect } from 'react';
import { Accordion, Card, Button } from 'react-bootstrap';
import { useParams } from 'react-router';
import { isEmpty } from 'lodash';

export default function CreatureDetails() {

    const { id } = useParams();
    const [creatureDetails, setCreatureDetails] = useState({});
    const [creatureAbilities, setCreatureAbilities] = useState([]);

    useEffect(() => {
        fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`)
            .then(resp => resp.json())
            .then(details => {
                console.log(details);
                setCreatureDetails(details);
                setCreatureAbilities(details.abilities)
            })
    }, [id]);

    const getAbilities = () => {
        let abilities = [];

        if(!isEmpty(creatureAbilities)) {
            creatureAbilities.forEach((ability, idx) => {
                abilities.push(
                    <div className="col mb-4" key={idx}>
                        <Card.Text>
                            Ability #{idx+1}: <span>{ability.ability.name}</span>
                        </Card.Text>
                    </div>
                )
            })
        }
    }
    return (
        <div>
            <h3>{creatureDetails.name}</h3>
            <Accordion>
                <div>
                    <Card>
                        <Card.Header>
                            <Accordion.Toggle
                                as={Button}
                                eventKey="1"
                                variant="link"
                            > Abilities
                            </Accordion.Toggle>
                        </Card.Header>
                        <Accordion.Collapse eventKey="1">
                            <Card.Body>
                                {getAbilities()}
                            </Card.Body>
                        </Accordion.Collapse>
                    </Card>
                </div>
            </Accordion>
        </div>
    )



}