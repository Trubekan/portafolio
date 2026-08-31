import type { Project } from '../types/project';

export const projects: Project[] = [
  {
    number: '01',

    title: 'Sistema de gestión de inventario',

    description:
      'Proyecto personal actualmente en desarrollo, orientado a la gestión de productos, categorías, inventario y movimientos de stock.',

    technologies: [
      'React',
      'TypeScript',
      'Node.js',
      'Express',
      'MySQL',
    ],

    status: 'En desarrollo',

    isPrivate: false,
  },

  {
    number: '02',

    title: 'Sistemas empresariales',

    description:
      'Durante mi experiencia profesional he participado en el desarrollo, mantenimiento y evolución de diferentes sistemas internos utilizados por empresas.',

    technologies: [
      'React',
      'Angular',
      'Node.js',
      'JavaScript',
      'MySQL',
      'AWS',
    ],

    status: 'Privado',

    isPrivate: true,
  },
];
