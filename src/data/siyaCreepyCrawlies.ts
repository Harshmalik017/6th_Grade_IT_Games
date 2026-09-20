import type { QuizQuestion, TrueFalseItem, FillBlankItem, ScrambleItem, SortGameData, SequenceGameData, MatchPair } from './types';

// Class 3 Science — Chapter 5: Creepy Crawlies

export const creepyQuiz: QuizQuestion[] = [
  { id: 'c1', chapter: 5, question: 'How many legs do all insects have?', options: ['Six', 'Eight', 'Four', 'Ten'], answerIndex: 0, emoji: '🐜' },
  { id: 'c2', chapter: 5, question: 'Most insects have feelers on their head called:', options: ['Antennae', 'Gills', 'Roots', 'Fins'], answerIndex: 0, emoji: '🦋' },
  { id: 'c3', chapter: 5, question: 'Which animal is NOT an insect because it has eight legs?', options: ['Spider', 'Ant', 'Butterfly', 'Honeybee'], answerIndex: 0, emoji: '🕷️' },
  { id: 'c4', chapter: 5, question: 'Honeybees live together in a group called a:', options: ['Colony', 'Forest', 'School', 'Herd'], answerIndex: 0, emoji: '🐝' },
  { id: 'c5', chapter: 5, question: 'Ants usually live in:', options: ['Anthills', 'Beehives', 'Water only', 'Clouds'], answerIndex: 0, emoji: '🐜' },
  { id: 'c6', chapter: 5, question: 'Bees live in:', options: ['Beehives', 'Anthills', 'Termite mounds only', 'Grass fields'], answerIndex: 0, emoji: '🐝' },
  { id: 'c7', chapter: 5, question: 'Butterflies suck which food from flowers?', options: ['Nectar', 'Blood', 'Garbage', 'Soil'], answerIndex: 0, emoji: '🦋' },
  { id: 'c8', chapter: 5, question: 'Which insect can spread malaria and dengue?', options: ['Mosquito', 'Butterfly', 'Ladybird', 'Grasshopper'], answerIndex: 0, emoji: '🦟' },
  { id: 'c9', chapter: 5, question: 'Bees are helpful because they give us:', options: ['Honey and wax', 'Plastic', 'Milk', 'Wool'], answerIndex: 0, emoji: '🍯' },
  { id: 'c10', chapter: 5, question: 'Worms move by:', options: ['Crawling', 'Flying', 'Swimming with fins', 'Hopping with legs'], answerIndex: 0, emoji: '🪱' },
  { id: 'c11', chapter: 5, question: 'Earthworms live in soil that is:', options: ['Cool, dark and wet', 'Hot, dry and bright', 'Only sandy and dry', 'Only rocky'], answerIndex: 0, emoji: '🪱' },
  { id: 'c12', chapter: 5, question: 'Earthworms help soil become:', options: ['Soft and fertile', 'Plastic-like', 'Harder only', 'Dry forever'], answerIndex: 0, emoji: '🌱' },
  { id: 'c13', chapter: 5, question: 'Insects and worms are collectively called:', options: ['Creepy crawlies', 'Only insects', 'Only mammals', 'Birds'], answerIndex: 0, emoji: '🐛' },
  { id: 'c14', chapter: 5, question: 'Worms mainly eat:', options: ['Dead plants and food scraps', 'Nectar only', 'Blood only', 'Honey only'], answerIndex: 0, emoji: '🍂' },
];

export const creepyTrueFalse: TrueFalseItem[] = [
  { id: 'ctf1', chapter: 5, statement: 'All insects have six legs.', answer: true },
  { id: 'ctf2', chapter: 5, statement: 'All insects can fly.', answer: false },
  { id: 'ctf3', chapter: 5, statement: 'Most insects have antennae.', answer: true },
  { id: 'ctf4', chapter: 5, statement: 'Spiders are insects.', answer: false },
  { id: 'ctf5', chapter: 5, statement: 'Grasshoppers eat grass and leaves.', answer: true },
  { id: 'ctf6', chapter: 5, statement: 'Mosquitoes and lice can suck blood.', answer: true },
  { id: 'ctf7', chapter: 5, statement: 'Houseflies and cockroaches can spread germs.', answer: true },
  { id: 'ctf8', chapter: 5, statement: 'Worms have bones, eyes and ears.', answer: false },
  { id: 'ctf9', chapter: 5, statement: 'Earthworms need moist skin.', answer: true },
  { id: 'ctf10', chapter: 5, statement: 'Earthworms make soil less fertile.', answer: false },
];

export const creepyFillBlanks: FillBlankItem[] = [
  { id: 'cfb1', chapter: 5, sentence: 'All insects have ___ legs.', options: ['six', 'eight', 'four', 'two'], answer: 'six' },
  { id: 'cfb2', chapter: 5, sentence: 'Most insects have ___ on their head.', options: ['antennae', 'gills', 'scales', 'feathers'], answer: 'antennae' },
  { id: 'cfb3', chapter: 5, sentence: 'Honeybees live together in a ___.', options: ['colony', 'pond', 'school', 'nest of stones'], answer: 'colony' },
  { id: 'cfb4', chapter: 5, sentence: 'Butterflies suck ___ from flowers.', options: ['nectar', 'blood', 'soil', 'wax'], answer: 'nectar' },
  { id: 'cfb5', chapter: 5, sentence: 'Bees give us honey and ___.', options: ['wax', 'milk', 'wool', 'paper'], answer: 'wax' },
  { id: 'cfb6', chapter: 5, sentence: 'Mosquitoes can spread malaria and ___.', options: ['dengue', 'rickets', 'goitre', 'scurvy'], answer: 'dengue' },
  { id: 'cfb7', chapter: 5, sentence: 'Worms have long, soft and ___ bodies.', options: ['segmented', 'feathery', 'woody', 'metal'], answer: 'segmented' },
  { id: 'cfb8', chapter: 5, sentence: 'Earthworms live in cool, dark and ___ soil.', options: ['wet', 'dry', 'hot', 'bright'], answer: 'wet' },
  { id: 'cfb9', chapter: 5, sentence: 'Earthworms eat dead plants and food ___.', options: ['scraps', 'nectar', 'blood', 'wax'], answer: 'scraps' },
  { id: 'cfb10', chapter: 5, sentence: 'Insects and worms are called creepy ___.', options: ['crawlies', 'birds', 'flowers', 'roots'], answer: 'crawlies' },
];

export const creepyScramble: ScrambleItem[] = [
  { id: 'csc1', chapter: 5, word: 'INSECT', hint: 'A tiny animal with six legs', emoji: '🐜' },
  { id: 'csc2', chapter: 5, word: 'ANTENNA', hint: 'A feeler on an insect head', emoji: '🦋' },
  { id: 'csc3', chapter: 5, word: 'NECTAR', hint: 'Sweet liquid butterflies suck from flowers', emoji: '🌸' },
  { id: 'csc4', chapter: 5, word: 'COLONY', hint: 'A group in which honeybees live', emoji: '🐝' },
  { id: 'csc5', chapter: 5, word: 'WORM', hint: 'A long soft animal that crawls', emoji: '🪱' },
  { id: 'csc6', chapter: 5, word: 'HONEY', hint: 'A useful product given by bees', emoji: '🍯' },
  { id: 'csc7', chapter: 5, word: 'DENGUE', hint: 'A disease spread by mosquitoes', emoji: '🦟' },
  { id: 'csc8', chapter: 5, word: 'SOIL', hint: 'Earthworms help make this fertile', emoji: '🌱' },
];

export const creepyMatchPairs: MatchPair[] = [
  { id: 'cm1', chapter: 5, term: 'Insect', definition: 'A tiny animal with six legs', emoji: '🐜' },
  { id: 'cm2', chapter: 5, term: 'Antennae', definition: 'Feelers used for smell, touch and finding way', emoji: '🦋' },
  { id: 'cm3', chapter: 5, term: 'Spider', definition: 'Not an insect because it has eight legs', emoji: '🕷️' },
  { id: 'cm4', chapter: 5, term: 'Colony', definition: 'A group in which honeybees live', emoji: '🐝' },
  { id: 'cm5', chapter: 5, term: 'Anthill', definition: 'A place where ants live', emoji: '🐜' },
  { id: 'cm6', chapter: 5, term: 'Nectar', definition: 'Food butterflies suck from flowers', emoji: '🌸' },
  { id: 'cm7', chapter: 5, term: 'Mosquito', definition: 'Can spread malaria and dengue', emoji: '🦟' },
  { id: 'cm8', chapter: 5, term: 'Earthworm', definition: 'A worm that helps make soil fertile', emoji: '🪱' },
  { id: 'cm9', chapter: 5, term: 'Creepy crawlies', definition: 'Collective name for insects and worms', emoji: '🐛' },
  { id: 'cm10', chapter: 5, term: 'Decomposer', definition: 'Helps break down dead material', emoji: '🍂' },
];

export const sortCreepyHelpfulHarmful: SortGameData = {
  id: 'creepy-helpful-harmful-sort',
  title: 'Helpful or Harmful?',
  categories: ['Helpful', 'Harmful'],
  items: [
    { name: 'Bee gives honey', category: 'Helpful', emoji: '🐝' },
    { name: 'Bee gives wax', category: 'Helpful', emoji: '🍯' },
    { name: 'Beetle eats plant-destroying insects', category: 'Helpful', emoji: '🪲' },
    { name: 'Insects decompose dead material', category: 'Helpful', emoji: '🍂' },
    { name: 'Mosquito spreads malaria', category: 'Harmful', emoji: '🦟' },
    { name: 'Mosquito spreads dengue', category: 'Harmful', emoji: '🦟' },
    { name: 'Housefly spreads germs', category: 'Harmful', emoji: '🪰' },
    { name: 'Cockroach spreads germs', category: 'Harmful', emoji: '🪳' },
  ],
};

export const sortCreepyFood: SortGameData = {
  id: 'creepy-food-sort',
  title: 'Sort by Food',
  categories: ['Leaves/grass', 'Decaying material', 'Blood', 'Nectar', 'Plant products/dead insects'],
  items: [
    { name: 'Grasshopper', category: 'Leaves/grass', emoji: '🦗' },
    { name: 'Cockroach', category: 'Decaying material', emoji: '🪳' },
    { name: 'Lice', category: 'Blood', emoji: '🪳' },
    { name: 'Mosquito', category: 'Blood', emoji: '🦟' },
    { name: 'Butterfly', category: 'Nectar', emoji: '🦋' },
    { name: 'Ant', category: 'Plant products/dead insects', emoji: '🐜' },
  ],
};

export const sequenceEarthwormSoil: SequenceGameData = {
  id: 'earthworm-soil-steps',
  title: 'How Earthworms Help Soil',
  emoji: '🪱',
  steps: [
    'Earthworms live in cool, dark and wet soil',
    'They eat dead plants and food scraps',
    'They help clean the soil',
    'They make the soil soft and nutrient-rich',
    'The soil becomes more fertile for plants',
  ],
};

export const sequenceInsectIdentify: SequenceGameData = {
  id: 'identify-insect-steps',
  title: 'How to Identify an Insect',
  emoji: '🐜',
  steps: [
    'Look carefully at the tiny animal',
    'Count its legs',
    'Check if it has six legs',
    'Look for antennae on the head',
    'If it has insect features, call it an insect',
  ],
};
