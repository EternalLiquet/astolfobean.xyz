import { Card, CardContent, Typography, CardActions, Button, Link, ButtonGroup } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles'
import React from 'react';

const useStyles = makeStyles((theme) => ({
    root: {
        minWidth: 275,
        margin: theme.spacing(8),
        minHeight: 275
    },
    pos: {
        marginBottom: 12,
    },
}));


const Content = () => {
    const classes = useStyles();

    return (
        <Card className={classes.root} align="center">
            <CardContent>
                <Typography variant="h1" color="textPrimary" gutterBottom >
                Website is under  construction
                </Typography>
                <Typography variant="h4">
                    My developer <Link href="http://liquet.xyz" color="textSecondary">Liquet</Link> is working hard to get this website made, please check back later!
                </Typography>
                <Typography className={classes.pos} variant="h5"color="textPrimary">
                    If you would like to support the development for Bean Bot, please consider donating to his <Link href="https://ko-fi.com/liquet" color="textSecondary">
                        Ko-fi
                    </Link>
                </Typography>
                <Typography variant="body2" component="p">
                    "There's only one you, so be unapologetically you"
                     <Typography variant="body2" component="p" align="center" width="50%">
                        - Liquet
                    </Typography>
                </Typography>
            </CardContent>
            <CardActions>
                <ButtonGroup>
                    <Button size="small" href="http://liquet.xyz">Liquet's Website</Button>
                    <Button size="small" href="https://ko-fi.com/liquet">Liquet's Ko-fi</Button>
                    <Button size="small" href="https://github.com/eternalliquet">Liquet's Github</Button>
                </ButtonGroup>
            </CardActions>
        </Card>
    );
};

export default Content;