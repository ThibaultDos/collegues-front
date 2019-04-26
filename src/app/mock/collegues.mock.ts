import { Collegue } from '../models/Collegue';

const collegueMock: Collegue = new Collegue(
    'A4903',
    'Fonfec',
    'Sophie',
    'email@valide.com',
    new Date(1996, 2, 30),
    'http://img.png'
);

export { collegueMock };