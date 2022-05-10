export type Character = {
    id: number,
    name: string,
    imageUrl: string,
    url?: string,
    films?: string[],
    shortFilms?: string[],
    tvShows?: string[],
    videoGames?: string[],
    parkAttractions?: string[],
    allies?: string[],
    enemies?: string[]
};