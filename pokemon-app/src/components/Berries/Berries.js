import React, { useState, useEffect } from 'react';
import { isEmpty } from 'lodash';
import { Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';


export default function Berries() {

    const [berryResults, setBerryResults] = useState([]);
    
    useEffect(() => {
        
        fetch(`https://pokeapi.co/api/v2/berry/?limit=64`)
            .then(resp => {
                let jsonResp = resp.json();
                return jsonResp;
            })
            .then((resultData) => {
                setBerryResults(resultData.results)
            })
            .catch(() => {
                console.log('Error')
            });
    }, []);

    const setBerryArray = () => {
        const berries = [];

        if(!isEmpty(berryResults)) {
            berryResults.forEach((berry,idx) => {
                berries.push(
                    <div className="col mb-4" key={idx}>
                        <Card>
                            <Card.Header>
                                {berry.name}
                            </Card.Header>
                            <Card.Footer>
                                <Button
                                    variant="light"
                                    id={idx+1}
                                    style={{ float:"right"}}
                                >
                                    <Link to={`/berry/${idx+1}`}>
                                        Go To Berry Details
                                    </Link>
                                </Button>
                            </Card.Footer>
                        </Card>
                    </div>
                )
            })
        }

        return berries;
    }

    return(
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-5">
            {setBerryArray()}
        </div>

    )
}