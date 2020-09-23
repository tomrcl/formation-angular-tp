import { ITicket } from './ticket.interface';

export const MOCK_TICKETS: ITicket[] = [
    {
        name: "Moi moche et méchant",
        description: "Une place de cinéma gratuite",
        expiration: 1566040301000,
        nbLefts: 1,
        urlImage: "https://s1.qwant.com/thumbr/0x380/8/f/95fa1bc527dc927495aa08621bb7b36a6055b7bc51d4436057b485e3a3f21c/9fde31d863c1a8dfee1977604ebdb9b4.jpg?u=https%3A%2F%2Fi.pinimg.com%2Foriginals%2F9f%2Fde%2F31%2F9fde31d863c1a8dfee1977604ebdb9b4.jpg&q=0&b=1&p=0&a=1"
    },
    {
        name: "Spécialité fruits de mer *****",
        description: "Découvrir une nouvelle adresse qui fait le pari de vous faire apprécier les crabe. Ici les recettes sont une belle fusion entre la mer et la France.",
        expiration: 1566040301000,
        nbLefts: 10,
        urlImage: "https://t0.rbxcdn.com/b243f5326b9a791070b29957f052da91"
    },
    {
        name: "Mc Grégor VS Mayweather",
        description: "Ticket pour assister au plus grand combat du siècle ! Mc Grégor vs Mayweather !",
        expiration: 1566040301000,
        nbLefts: 4,
        urlImage: "https://s1.qwant.com/thumbr/0x380/2/9/df12a8b7f7b18ca1b65ee682d0f59a50c98ad2f530065f7d5fad9e8e45d480/1431455.jpg?u=https%3A%2F%2Fmedia.buzz.ie%2Fuploads%2F2019%2F08%2F25155447%2F1431455.jpg&q=0&b=1&p=0&a=1"
    }
];
