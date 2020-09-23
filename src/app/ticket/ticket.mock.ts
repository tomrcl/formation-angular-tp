import { ITicket } from './ticket.interface';

export const MOCK_TICKETS: ITicket[] = [
    {
        name: "Moi moche et méchant",
        description: "Une place de cinéma gratuite",
        expiration: 1566040301000,
        nbLefts: 1,
        urlImage: "https://s1.qwant.com/thumbr/0x380/9/f/04983a6cb0ac2988b89f24492c423127eb6a900ff8e9f14de1508a1b101c26/maxresdefault.jpg?u=https%3A%2F%2Fi.ytimg.com%2Fvi%2F1WsWd-Zb2tw%2Fmaxresdefault.jpg&q=0&b=1&p=0&a=1"
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
