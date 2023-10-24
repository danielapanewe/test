import carpe from '../assets/carpe.jpeg';
import maquereau from '../assets/maquereau.jpeg';
import sole from '../assets/sole.jpeg';
import jusnaturel from '../assets/jus.jpeg';
import biere from '../assets/biere.jpeg';
import vin from '../assets/vin.jpeg';

export const productsitems = [
    {
        id: 'carpe',
        image: `${carpe}`,
        nom: 'Carpes',
        description: 'Carpes fraîches ',
        prix: '2000',
    },

    {
        id: 'Maquereau',
        image: `${maquereau}`,
        nom: 'Maquereau',
        description:
            'Maquereau frais',
        prix: '1500',
    },

    {
        id: 'Sole',
        image: `${sole}`,
        nom: 'Sole',
        description:
            'Sole doré',
        prix: '2000',
    },

    {
        id: 'Jusnaturel',
        image: `${jusnaturel}`,
        nom: "Jus Naturel",
        description:
            'A l\'ananas, au gingembre et plein d\'autres',
        prix: '1500',
    },
    {
        id: 'Biere',
        image: `${biere}`,
        nom: "Bière",
        description:
            'Bières de tous les goûts',
        prix: '700',
    },
    {
        id: 'Vin',
        image: `${vin}`,
        nom: "Vin",
        description:
            'Vins blanc, rouge et plein d\'autres ',
        prix: '5000',
    },
];
