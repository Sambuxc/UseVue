export const appName = 'Vitesse for Nuxt 3'
export const appDescription = 'Vitesse for Nuxt 3'
export const routes = {
  home: '/',
  game: 'game',
  players: 'players',
}
export const difficulties = ['easy', 'medium', 'hard']

/**
 * @property {number} id - The unique identifier for the trick.
 * @property {string} name - The name of the trick.
 * @property {string} difficulty - The level of difficulty to perform the trick.
 * @property {string | string[]} location - The location where the trick is typically performed.
 */
export const tricks = [
  { id: 1, name: 'Ollie', difficulty: 'easy', location: 'Street' },
  { id: 1, name: 'Nollie', difficulty: 'easy', location: 'Street' },
  { id: 2, name: 'Kickflip', difficulty: 'medium', location: 'Park' },
  { id: 3, name: 'Heelflip', difficulty: 'medium', location: 'Street' },
  { id: 4, name: '360 Flip', difficulty: 'hard', location: 'Park' },
  { id: 5, name: '180 Frontside', difficulty: 'medium', location: ['park', 'flat ground', 'stairset'] },
  { id: 6, name: '180 Backside', difficulty: 'medoium', location: ['park', 'flat ground', 'stairset'] },
  { id: 7, name: 'Impossible flip', difficulty: 'hard', location: 'anywhere' },
  { id: 8, name: 'Misty flip', difficulty: 'extreme', location: 'vert' },
]
