import React from 'react';
import { AppBar, Toolbar, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import Avatar from '@material-ui/core/Avatar';

const useStyles = makeStyles((theme) => ({
    typographyStyles: {
        flexGrow: 1
    },
    largeImg: {
        height: '50%',
        width: 'auto'
    }
}));

const Header = () => {
    const classes = useStyles();

    return (
        <AppBar position="static" width="full">
            <Toolbar>
                <Typography
                    className={classes.typographyStyles}
                    variant="h5"
                >
                        Astolfo Bean Bot
                </Typography>
                <Avatar alt="Bean Bot Icon (Christmas ver.)" src="/static/images/avatar/jollibean_icon.png" className={classes.large} />
            </Toolbar>
        </AppBar>
    );
};
export default Header;