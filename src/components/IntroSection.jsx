import { Box, Typography, Link as MuiLink } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';

const IntroSection = () => {
    return (
        <div className="bg-gray-50">
            <div className="max-w-3xl mx-auto px-4 sm:px-6 py-16 text-center">
                <Typography variant="body1" className="text-gray-700 leading-relaxed mb-6">
                    Me apasiona diseñar y desarrollar experiencias de aprendizaje centradas en el usuario, tan agradables como efectivas.
                    A continuación podrás explorar algunos de mis trabajos recientes y, si deseas conocer más sobre mí, te invito a visitar la sección
                    {' '}
                    <MuiLink
                        component={RouterLink}
                        to="/about"
                        className="text-[#3F51FF] underline font-medium"
                    >
                        Sobre mí
                    </MuiLink>.
                </Typography>
            </div>
        </div>
    );
}
export default IntroSection;
