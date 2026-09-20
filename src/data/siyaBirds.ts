import type { QuizQuestion, TrueFalseItem, FillBlankItem, ScrambleItem, SortGameData, SequenceGameData } from './types';

// Class 3 EVS — Chapter 4: Birds
// Note: chapter/id numbers reuse 4/5-style QuizQuestion["chapter"] field from Riya's types,
// but Siya's content lives in entirely separate arrays/routes so there is no data overlap.

export const birdsQuiz: QuizQuestion[] = [
  { id: 'b1', chapter: 4, question: 'What helps a bird fly by covering its wings?', options: ['Feathers', 'Scales', 'Fur', 'Skin'], answerIndex: 0, emoji: '🪶' },
  { id: 'b2', chapter: 4, question: 'Which body part helps a bird change direction while flying?', options: ['Tail', 'Beak', 'Claw', 'Eye'], answerIndex: 0, emoji: '🐦' },
  { id: 'b3', chapter: 4, question: "When a bird's wings move up and backward, it is called the:", options: ['Downstroke', 'Upstroke', 'Sidestroke', 'Backstroke'], answerIndex: 1, emoji: '🐦' },
  { id: 'b4', chapter: 4, question: "When a bird's wings move down and forward, it is called the:", options: ['Upstroke', 'Downstroke', 'Midstroke', 'Backstroke'], answerIndex: 1, emoji: '🐦' },
  { id: 'b5', chapter: 4, question: 'Which of these birds cannot fly?', options: ['Ostrich', 'Eagle', 'Sparrow', 'Pigeon'], answerIndex: 0, emoji: '🦤' },
  { id: 'b6', chapter: 4, question: 'Which feathers keep a bird warm?', options: ['Flight feathers', 'Down feathers', 'Body feathers', 'Tail feathers'], answerIndex: 1, emoji: '🪶' },
  { id: 'b7', chapter: 4, question: "Which feathers give a bird's body its shape?", options: ['Down feathers', 'Flight feathers', 'Body feathers', 'Wing feathers'], answerIndex: 2, emoji: '🪶' },
  { id: 'b8', chapter: 4, question: 'Which feathers are long and strong, found on the wings and tail?', options: ['Flight feathers', 'Down feathers', 'Body feathers', 'Soft feathers'], answerIndex: 0, emoji: '🪶' },
  { id: 'b9', chapter: 4, question: 'Sparrows and crows are examples of which type of bird?', options: ['Perching birds', 'Swimming birds', 'Wading birds', 'Climbing birds'], answerIndex: 0, emoji: '🐦' },
  { id: 'b10', chapter: 4, question: 'Which bird scratches the ground to catch worms and insects?', options: ['Hen', 'Duck', 'Crane', 'Eagle'], answerIndex: 0, emoji: '🐔' },
  { id: 'b11', chapter: 4, question: "Ducks have webbed feet which help them to:", options: ['Swim', 'Climb', 'Scratch', 'Perch'], answerIndex: 0, emoji: '🦆' },
  { id: 'b12', chapter: 4, question: 'Cranes and flamingos have long thin legs and are called:', options: ['Wading birds', 'Perching birds', 'Climbing birds', 'Scratching birds'], answerIndex: 0, emoji: '🦩' },
  { id: 'b13', chapter: 4, question: "A woodpecker's toes (2 front, 2 back) help it to:", options: ['Climb trees', 'Swim in water', 'Wade in mud', 'Scratch the ground'], answerIndex: 0, emoji: '🐦' },
  { id: 'b14', chapter: 4, question: 'Eagles, falcons and vultures have sharp curved claws called:', options: ['Talons', 'Beaks', 'Wings', 'Feathers'], answerIndex: 0, emoji: '🦅' },
  { id: 'b15', chapter: 4, question: 'Which beak type is used to tear flesh?', options: ['Strong, sharp and hooked beak', 'Long and slender beak', 'Straw-like beak', 'Flat beak'], answerIndex: 0, emoji: '🦅' },
  { id: 'b16', chapter: 4, question: 'Which bird has a chisel-shaped beak for drilling into trees?', options: ['Woodpecker', 'Parrot', 'Duck', 'Eagle'], answerIndex: 0, emoji: '🐦' },
  { id: 'b17', chapter: 4, question: 'Sparrows and pigeons use their strong, hard beaks to crack:', options: ['Seeds and grains', 'Fish', 'Nectar', 'Leaves'], answerIndex: 0, emoji: '🐦' },
  { id: 'b18', chapter: 4, question: 'Which birds use a long, slender beak to catch food from water?', options: ['Cranes and pelicans', 'Parrots and owls', 'Hens and ducks', 'Eagles and falcons'], answerIndex: 0, emoji: '🦩' },
  { id: 'b19', chapter: 4, question: 'Hummingbirds use their long, straw-like beak to drink:', options: ['Nectar', 'Water', 'Seeds', 'Fish'], answerIndex: 0, emoji: '🐦' },
  { id: 'b20', chapter: 4, question: "A parrot's hooked, curved beak is used to crack:", options: ['Nuts and hard fruits', 'Fish', 'Nectar', 'Grass'], answerIndex: 0, emoji: '🦜' },
  { id: 'b21', chapter: 4, question: 'Ducks use their broad, flat beak with strainers to find food in:', options: ['Muddy water', 'Trees', 'Rocks', 'Sand'], answerIndex: 0, emoji: '🦆' },
  { id: 'b22', chapter: 4, question: "A bird's home is called a:", options: ['Nest', 'Den', 'Burrow', 'Hive'], answerIndex: 0, emoji: '🪺' },
  { id: 'b23', chapter: 4, question: 'Woodpeckers build their nest in a:', options: ['Hole in a tree trunk', 'Rock', 'Hanging branch', 'Pile of pebbles'], answerIndex: 0, emoji: '🐦' },
  { id: 'b24', chapter: 4, question: 'Weaver birds build a hanging nest by:', options: ['Weaving grass, leaves and twigs', 'Digging a hole', 'Stacking pebbles', 'Stitching leaves'], answerIndex: 0, emoji: '🐦' },
  { id: 'b25', chapter: 4, question: 'Tailor birds stitch leaves together using their beak like a:', options: ['Needle', 'Hammer', 'Scissors', 'Spoon'], answerIndex: 0, emoji: '🐦' },
  { id: 'b26', chapter: 4, question: 'Penguins build their nest on open ground using:', options: ['Pebbles and stones', 'Leaves', 'Grass', 'Mud'], answerIndex: 0, emoji: '🐧' },
  { id: 'b27', chapter: 4, question: "Which bird lays its eggs in another bird's nest?", options: ['Cuckoo', 'Crow', 'Sparrow', 'Hen'], answerIndex: 0, emoji: '🐦' },
];

export const birdsTrueFalse: TrueFalseItem[] = [
  { id: 'btf1', chapter: 4, statement: 'Feathers help birds fly.', answer: true },
  { id: 'btf2', chapter: 4, statement: 'All birds can fly.', answer: false },
  { id: 'btf3', chapter: 4, statement: 'The ostrich and the penguin are flightless birds.', answer: true },
  { id: 'btf4', chapter: 4, statement: 'Down feathers are long and strong and are found on the wings.', answer: false },
  { id: 'btf5', chapter: 4, statement: 'Perching birds have 3 toes in the front and 1 toe at the back.', answer: true },
  { id: 'btf6', chapter: 4, statement: 'Hens are swimming birds.', answer: false },
  { id: 'btf7', chapter: 4, statement: 'Ducks have webbed feet.', answer: true },
  { id: 'btf8', chapter: 4, statement: 'Wading birds have short, thick legs.', answer: false },
  { id: 'btf9', chapter: 4, statement: 'Woodpeckers have 2 toes pointing forward and 2 pointing backward.', answer: true },
  { id: 'btf10', chapter: 4, statement: 'Talons are sharp, curved claws used by flesh-eating birds.', answer: true },
  { id: 'btf11', chapter: 4, statement: "A parrot's beak is long and straw-like.", answer: false },
  { id: 'btf12', chapter: 4, statement: 'A pelican has a pouch in its beak.', answer: true },
  { id: 'btf13', chapter: 4, statement: 'A tailor bird stitches leaves together to make its nest.', answer: true },
  { id: 'btf14', chapter: 4, statement: 'A cuckoo builds its own nest.', answer: false },
];

export const birdsFillBlanks: FillBlankItem[] = [
  { id: 'bfb1', chapter: 4, sentence: '___ help birds fly.', options: ['Feathers', 'Scales', 'Fur', 'Skin'], answer: 'Feathers' },
  { id: 'bfb2', chapter: 4, sentence: 'The tail helps a bird change ___ while flying.', options: ['direction', 'colour', 'weight', 'size'], answer: 'direction' },
  { id: 'bfb3', chapter: 4, sentence: 'Birds that cannot fly are called ___ birds.', options: ['flightless', 'perching', 'wading', 'climbing'], answer: 'flightless' },
  { id: 'bfb4', chapter: 4, sentence: 'Sparrows and crows are ___ birds.', options: ['perching', 'swimming', 'wading', 'flightless'], answer: 'perching' },
  { id: 'bfb5', chapter: 4, sentence: 'Ducks have ___ feet that help them swim.', options: ['webbed', 'sharp', 'long', 'tiny'], answer: 'webbed' },
  { id: 'bfb6', chapter: 4, sentence: 'Eagles and vultures have sharp claws called ___.', options: ['talons', 'beaks', 'wings', 'feathers'], answer: 'talons' },
  { id: 'bfb7', chapter: 4, sentence: "A woodpecker's beak is shaped like a ___.", options: ['chisel', 'spoon', 'straw', 'hook'], answer: 'chisel' },
  { id: 'bfb8', chapter: 4, sentence: 'Hummingbirds use their beak to drink ___ from flowers.', options: ['nectar', 'water', 'milk', 'juice'], answer: 'nectar' },
  { id: 'bfb9', chapter: 4, sentence: "A bird's home is called a ___.", options: ['nest', 'den', 'burrow', 'hive'], answer: 'nest' },
  { id: 'bfb10', chapter: 4, sentence: 'The ___ bird stitches leaves together to build its nest.', options: ['tailor', 'weaver', 'wading', 'perching'], answer: 'tailor' },
];

export const birdsScramble: ScrambleItem[] = [
  { id: 'bsc1', chapter: 4, word: 'FEATHER', hint: "Covers a bird's body and helps it fly", emoji: '🪶' },
  { id: 'bsc2', chapter: 4, word: 'BEAK', hint: 'The hard part birds use to eat food', emoji: '🐦' },
  { id: 'bsc3', chapter: 4, word: 'TALON', hint: 'A sharp, curved claw used to catch prey', emoji: '🦅' },
  { id: 'bsc4', chapter: 4, word: 'NEST', hint: "A bird's home where it lays eggs", emoji: '🪺' },
  { id: 'bsc5', chapter: 4, word: 'WING', hint: 'A body part birds flap to fly', emoji: '🐦' },
  { id: 'bsc6', chapter: 4, word: 'CLAW', hint: 'Used by birds to grab food or perch', emoji: '🦅' },
  { id: 'bsc7', chapter: 4, word: 'PERCH', hint: 'To sit on a branch or wire', emoji: '🐦' },
  { id: 'bsc8', chapter: 4, word: 'EAGLE', hint: 'A flesh-eating bird with sharp talons', emoji: '🦅' },
];

export const sortBirdsByFeet: SortGameData = {
  id: 'birds-feet-sort',
  title: 'Sort Birds by Their Feet',
  categories: ['Perching', 'Scratching', 'Swimming', 'Wading', 'Climbing', 'Flesh-eating'],
  items: [
    { name: 'Sparrow', category: 'Perching', emoji: '🐦' },
    { name: 'Crow', category: 'Perching', emoji: '🐦‍⬛' },
    { name: 'Hen', category: 'Scratching', emoji: '🐔' },
    { name: 'Duck', category: 'Swimming', emoji: '🦆' },
    { name: 'Crane', category: 'Wading', emoji: '🦩' },
    { name: 'Flamingo', category: 'Wading', emoji: '🦩' },
    { name: 'Woodpecker', category: 'Climbing', emoji: '🐦' },
    { name: 'Eagle', category: 'Flesh-eating', emoji: '🦅' },
    { name: 'Vulture', category: 'Flesh-eating', emoji: '🦅' },
  ],
};

export const sortBirdsByNest: SortGameData = {
  id: 'birds-nest-sort',
  title: 'Sort Birds by Their Nests',
  categories: ['Trees', 'Holes', 'Rocks', 'Woven', 'Stitched', 'Open Ground'],
  items: [
    { name: 'Sparrow (branch nest)', category: 'Trees', emoji: '🐦' },
    { name: 'Woodpecker (tree-trunk nest)', category: 'Holes', emoji: '🐦' },
    { name: 'Eagle (rock nest)', category: 'Rocks', emoji: '🦅' },
    { name: 'Weaver bird (hanging nest)', category: 'Woven', emoji: '🐦' },
    { name: 'Tailor bird (stitched leaves)', category: 'Stitched', emoji: '🐦' },
    { name: 'Penguin (pebbles on ground)', category: 'Open Ground', emoji: '🐧' },
  ],
};

export const sequenceBirdFlight: SequenceGameData = {
  id: 'bird-flight-steps',
  title: 'How a Bird Flies',
  emoji: '🐦',
  steps: [
    'Wings move up and backward (the upstroke)',
    'Wings spread out during this movement',
    'Wings move down and forward (the downstroke)',
    'This movement pushes the bird upward and forward',
  ],
};

export const sequenceWoodpecker: SequenceGameData = {
  id: 'woodpecker-steps',
  title: 'How a Woodpecker Finds Food',
  emoji: '🐦',
  steps: [
    'The woodpecker drills a hole in a tree trunk with its chisel-shaped beak',
    'It finds insects hiding inside the hole',
    'It eats the insects using its strong, sharp beak',
  ],
};
