import React, { useState, useEffect } from 'react';
import { isEmpty } from 'lodash';
import { Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';


export default function Creatures() {

    const [creatureResults, setCreatureResults] = useState([]);
    
    useEffect(() => {
        
        fetch(`https://pokeapi.co/api/v2/pokemon/?limit=1118`)
            .then(resp => {
                let jsonResp = resp.json();
                return jsonResp;
            })
            .then((resultData) => {
                setCreatureResults(resultData.results)
            })
            .catch(() => {
                console.log('Error')
            });
    }, []);

    const setCreatureArray = () => {
        const creatures = [];

        if(!isEmpty(creatureResults)) {
            creatureResults.forEach((creature,idx) => {
                creatures.push(
                    <div className="col mb-4" key={idx}>
                        <Card>
                            <Card.Header>
                                {creature.name}
                            </Card.Header>
                            <Card.Footer>
                                <Button
                                    variant="light"
                                    id={idx+1}
                                    style={{ float:"right"}}
                                >
                                    <Link to={`/creature/${idx+1}`}>
                                        Go To Creature Details
                                    </Link>
                                </Button>
                            </Card.Footer>
                        </Card>
                    </div>
                )
            })
        }

        return creatures;
    }

    return(
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-5">
            {setCreatureArray()}
        </div>

    )
}