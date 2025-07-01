// src/components/ProjectsSection.jsx
import React from 'react';
import { Box, Typography, Grid } from '@mui/material';
import ProjectCard from './ProjectCard';

const mockProjects = [
    {
        id: '1',
        title: 'Programa académico en Gestión de Proyectos',
        description:
            'Cursos virtuales desarrollados con avatares de IA y expertos en la materia. Diseñados para reforzar las competencias de los estudiantes en gestión de proyectos.',
        image: '/assets/project1.jpg',
        to: '/projects/1',
        buttonLabel: 'Explora el programa',
    },
    {
        id: '2',
        title: 'Formación para Personal Administrativo',
        description:
            'Capacitación virtual con enfoque metodológico y recursos interactivos para fortalecer competencias clave como la prevención del acoso laboral.',
        image: '/assets/project2.jpg',
        to: '/projects/2',
        buttonLabel: 'Ver detalles del curso',
    },
    {
        id: '3',
        title: 'Bootcamp de Inteligencia Artificial Educativa',
        description:
            'Programa sobre tendencias tecnológicas en educación. Integra el uso de herramientas de IA en experiencias de enseñanza-aprendizaje.',
        image: '/assets/project3.jpg',
        to: '/projects/3',
        buttonLabel: 'Descubre el bootcamp',
    },
    {
        id: '4',
        title: 'Programa internacional para jóvenes y adultos',
        description:
            'Cursos de inglés (básico, intermedio, avanzado) desarrollados con docentes internacionales y actividades interactivas.',
        image: '/assets/project4.jpg',
        to: '/projects/4',
        buttonLabel: 'Conoce el curso',
    },
];

export default function ProjectsSection() {
    return (
        <Box
            component="section"
            className="bg-white"
            sx={{
                maxWidth: 1200,
                mx: 'auto',
                px: { xs: 2, md: 4 },
                py: 12,
            }}
        >
            <Typography
                variant="h3"
                component="h2"
                sx={{ fontWeight: 700, textAlign: 'center', mb: 6 }}
            >
                Proyectos
            </Typography>

            <Grid container spacing={4}>
                {mockProjects.map((project) => (
                    <Grid item xs={12} md={6} key={project.id}>
                        <ProjectCard {...project} />
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
}
