import Header from '../components/Header';
import { Box, Typography } from '@mui/material';

export default function About() {
    return (
        <>
            <Header />
            <Box component="main" className="min-h-screen sm:px-20 py-16">
                <Typography variant="h2" className="!font-bold mb-4">
                    Sobre mí
                </Typography>
                <Typography variant="body1" className="text-gray-700">
                     Aquí va tu biografía, experiencia, herramientas, etc.
                </Typography>
            </Box>
        </>
    );
}
