import {Box, Grid, Typography} from "@mui/material";
import alvaroIcon from '../assets/alvaro-icon.svg';
const Hero = () => {
    return (
        <Grid
            container
            spacing={2}
            alignItems="center"
            className="min-h-screen items-center px-6 py-16 bg-white"
        >
            <Grid item xs={12} md={6} className="text-center md:text-left">
                <Box
                    className="flex flex-wrap items-start gap-x-2 gap-y-2 justify-center md:justify-start"
                >
                    <Typography
                        variant="h3"
                        className="font-bold text-black"
                    >
                        Soy
                    </Typography>
                    <Typography
                        variant="h3"
                        className="font-bold text-[#3F51FF]"
                    >
                        Alvaro Villafuerte
                    </Typography>
                    <Typography
                        variant="h3"
                        className="font-bold text-black"
                    >
                        , y creo
                    </Typography>
                    <Typography
                        variant="h3"
                        className="font-bold text-black w-full"
                    >
                        soluciones de eLearning divertidas e inmersivas!
                    </Typography>
                </Box>
            </Grid>
            <Grid
                item
                xs={12}
                md={6}
                className="flex justify-center md:justify-end mt-12 md:mt-0"
            >
                <img
                    src={alvaroIcon}
                    alt="Álvaro Villafuerte"
                    className="w-48 h-48 md:w-64 md:h-64"
                />
            </Grid>
        </Grid>
    );
}

export default Hero;