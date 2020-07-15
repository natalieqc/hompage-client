import React from 'react';
import Toolbar from '@material-ui/core/Toolbar';
import Link from '@material-ui/core/Link';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  avatar: {
    display: 'flex',
  },
  toolbarLink: {
    padding: theme.spacing(2),
    flexShrink: 0,
  }
}));

function Header(props) {
  const classes = useStyles();
  const {sections} = props;

  return (
    <React.Fragment>
      <Toolbar component="nav" variant="dense">
        <Avatar alt="Natalie" src="avatar.jpg" />
        {sections.map((section) => (
          <Link
            key={section.title}
            variant="body2"
            href={section.url}
            className={classes.toolbarLink}
          >
            {section.title}
          </Link>
        ))}
      </Toolbar>
    </React.Fragment>
  );
}

export default Header;
