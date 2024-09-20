import { heroes } from '../data/heroes';
export const getHeroesByPublisher = (publisher) => {
  switch (publisher) {
    case 'DC Comics':
      return heroes.filter((hero) => hero.publisher === 'DC Comics');
    case 'Marvel Comics':
      return heroes.filter((hero) => hero.publisher === 'Marvel Comics');
    default:
      return [];
  }
}