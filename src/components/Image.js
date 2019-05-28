import React from 'react';
import {
  Avatar, Button, Card, CardHeader, CardContent, Typography,
} from '@material-ui/core';
import { Link } from 'react-router-dom';
import Media from './Media';
import nasa from '../assets/nasa.png';


const Image = ({ info }) => (
  <Card className="card">
    <CardHeader
      title={`Image Credit: ${info.copyright}`}
      subheader={info.date}
      avatar={(
        <Avatar
          aria-label="nasa iod"
          src={nasa}
          alt="nasa icon"
        />
      )}
    />
    <Media
      type={info.media_type}
      url={info.url}
      title={info.title}
    />
    <CardContent>
      <Button
        fullWidth
        variant="contained"
        color="secondary"
      >
        <Link to={`/image/${info.id}`}>View Image</Link>
      </Button>
      <Typography
        className="card-text"
        variant="body2"
        color="textSecondary"
        component="p"
      >
        {info.explanation}
      </Typography>
    </CardContent>
  </Card>
);

export default Image;
