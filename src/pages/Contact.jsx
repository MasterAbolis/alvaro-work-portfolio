// src/pages/Contact.jsx
import Header from '../components/Header';
import { Box, Typography, TextField, Button } from '@mui/material';

export default function Contact() {
    return (
        <>
            <Header />
            <Box component="main" className="min-h-screen sm:px-20 py-16 flex flex-col items-center">
                <Typography variant="h2" className="!font-bold mb-8">
                    Contacto
                </Typography>
                <Box component="form" className="w-full max-w-md flex flex-col space-y-4">
                    <TextField label="Nombre"   variant="outlined" fullWidth />
                    <TextField label="Email"    type="email" variant="outlined" fullWidth />
                    <TextField
                        label="Mensaje"
                        multiline
                        rows={4}
                        variant="outlined"
                        fullWidth
                    />
                    <Button variant="contained" className="!bg-[#3F51FF] !text-white">
                        Enviar
                    </Button>
                </Box>
            </Box>
        </>
    );
}
