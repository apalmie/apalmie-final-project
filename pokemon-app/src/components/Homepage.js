import React from 'react';
import Button from 'react-bootstrap/Button';
import Tooltip from 'react-bootstrap/Tooltip';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import { useHistory } from 'react-router';

export default function HomePage() {

    const history = useHistory();

    const handleClick = (e) => {
        const path = `/${e.target.id}`;
        history.push(path);
    }

    const renderTooltip = (props) => (
        <Tooltip id="button-tooltip" {...props}>
            Disabled.  Will implement at a later date.
        </Tooltip>
    );

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

            {/* These are disabled until functions can be implemented*/}
            <OverlayTrigger
                placement="right"
                delay={{ show: 250, hide: 250 }}
                overlay={renderTooltip}
            >
                <Button
                    variant="dark"
                    id="items"
                    onClick={handleClick}
                    disabled
                >
                    Pokemon Items
            </Button>{' '}
            </OverlayTrigger>
            <OverlayTrigger
                placement="right"
                delay={{ show: 250, hide: 250 }}
                overlay={renderTooltip}
            >
                <Button
                    variant="dark"
                    id="evolutions"
                    onClick={handleClick}
                    disabled
                >Pokemon Evolution
            </Button>{' '}
            </OverlayTrigger>
            <OverlayTrigger
                placement="right"
                delay={{ show: 250, hide: 250 }}
                overlay={renderTooltip}
            >
                <Button
                    variant="dark"
                    id="moves"
                    onClick={handleClick}
                    disabled
                >Pokemon Moves
            </Button>{' '}
            </OverlayTrigger>
        </div>
    )
}