import Header from '../components/Header';
import { useParams } from 'react-router-dom';
import { Box, Typography } from '@mui/material';

export default function ProjectDetail() {
    const { id } = useParams();

    return (
        <>
            <Header />
            <Box component="main" className="min-h-screen sm:px-20 py-16">
                <Typography variant="h2" className="!font-bold mb-4">
                    Detalles del Proyecto
                </Typography>
                <Typography variant="body1">
                     Aquí puedes hacer fetch por ID ({id}) y renderizar detalles reales
                    Mostrando detalles para el proyecto con ID: <strong>{id}</strong>
                </Typography>
            </Box>
        </>
    );
}
