export function calcActive(posts: number, peoples: number): number {

    const seed = (posts + 1) * Math.sqrt(peoples) / 50;

    return Math.floor(seed * 10) / 10;
}