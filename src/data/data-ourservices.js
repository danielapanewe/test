import icondeliver from '../assets/livraison-rapide.png';
import iconalcohol from '../assets/service-de-bar.png';
import iconfish from '../assets/poisson.png';
import iconlocation from '../assets/maps-and-location.png';

export const servicesitems = [
    {
        id: 'poisson braisé',
        icon:`${iconfish}`,
        title: 'Vente poisson braisé',
        subtitle: 'Nous braisons des carpes, maqueraux que vous pouvez manger sur place ou emporté',
        link: '#'

    },

    {
        id: 'bar',
        icon:`${iconalcohol}`,
        title: 'Vente boisson',
        subtitle: 'Nous braisons des carpes, maqueraux que vous pouvez manger sur place ou emporté',
        link: '#'

    },

    {
        id:'livraison',
        icon:`${icondeliver}`,
        title: 'Livraison des repas à domicile',
        subtitle: 'Nous braisons des carpes, maqueraux que vous pouvez manger sur place ou emporté',
        link: '#'

    },

    {
        id:'location espace',
        icon:`${iconlocation}`,
        title: 'Location d\'espace',
        subtitle: 'Nous braisons des carpes, maqueraux que vous pouvez manger sur place ou emporté',
        link: '#'

    }
]