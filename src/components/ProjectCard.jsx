// src/components/ProjectCard.jsx
import React from 'react';
import {
    Card,
    CardActionArea,
    CardMedia,
    CardContent,
    CardActions,
    Typography,
    Button
} from '@mui/material';
import { Link } from 'react-router-dom';

export default function ProjectCard({ title, description, image, to, buttonLabel }) {
    return (
        <Card
            sx={{
                borderRadius: 2,
                boxShadow: 3,
                backgroundColor: 'background.paper',  // always white
                display: 'flex',
                flexDirection: 'column',
                height: '100%',
            }}
        >
            <CardActionArea component={Link} to={to} sx={{ flexGrow: 1 }}>
                <CardMedia
                    component="img"
                    height="180"
                    image={image}
                    alt={title}
                    sx={{ objectFit: 'cover' }}
                />
                <CardContent>
                    <Typography variant="h6" sx={{ fontWeight: 700, mb: 1 }}>
                        {title}
                    </Typography>
                    <Typography variant="body2">
                        {description}
                    </Typography>
                </CardContent>
            </CardActionArea>

            <CardActions sx={{ px: 2, pb: 2 }}>
                <Button
                    component={Link}
                    to={to}
                    variant="contained"
                    fullWidth
                    sx={{
                        backgroundColor: '#3F51FF',
                        color: 'common.white',
                        '&:hover': { backgroundColor: '#304FFE' },
                    }}
                >
                    {buttonLabel}
                </Button>
            </CardActions>
        </Card>
    );
}
