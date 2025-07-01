import {Box, Grid, Typography} from "@mui/material";
import alvaroIcon from '../assets/alvaro-icon.svg';
const Hero = () => {
    return (
        <Grid
            container
            spacing={2}
            alignItems="center"
            className="px-6 py-16 bg-gradient-to-r from-white to-yellow-50"
        >
            <Grid item xs={12} sm={6} className="text-center md:text-left">
                <Box className="w-full max-w-[624px]">
                    <Typography
                        variant="h3"
                        className="!font-bold text-black"
                        sx={{
                            fontSize: { xs: '1.5rem', sm: '3rem' },
                            lineHeight: { xs: 1.2, sm: '48px' },
                        }}
                    >
                        Soy <Box component="span" className="text-[#3F51FF]">Alvaro Villafuerte</Box>, y creo soluciones de eLearning divertidas e inmersivas!
                    </Typography>
                </Box>
            </Grid>
            <Grid
                item
                xs={12}
                sm={6}
                className="flex justify-center sm:justify-end"
            >
                <img
                    src={alvaroIcon}
                    alt="Álvaro Villafuerte"
                    className="flex justify-center sm:justify-end mt-12 sm:mt-0"
                />
            </Grid>
        </Grid>
    );
}

export default Hero;