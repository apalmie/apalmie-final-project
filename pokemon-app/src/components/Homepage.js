import React from 'react';
import Button from 'react-bootstrap/Button';
import { useHistory } from 'react-router';

export default function HomePage() {

    const history = useHistory();

    const handleClick = (e) => {
        const path = `/${e.target.id}`;
        history.push(path);
    }

    return (
        <div>
            <h1 style={{
                textAlign: "center"
            }}>Welcome!</h1>
            <Button
                variant="dark"
                id="berries"
                onClick={handleClick}
            >
                Pokemon Berries
            </Button>{' '}

            <Button
                variant="dark"
                id="creatures"
                onClick={handleClick}
            >
                Pokemon Creatures
            </Button>{' '}

            <Button
                variant="dark"
                id="items"
                onClick={handleClick}
                disabled
            >
                Pokemon Items
            </Button>{' '}

            <Button
                variant="dark"
                id="evolutions"
                onClick={handleClick}
                disabled
            >Pokemon Evolution
            </Button>{' '}

            <Button
                variant="dark"
                id="moves"
                onClick={handleClick}
                disabled
            >Pokemon Moves
            </Button>{' '}
        </div>
    )
}