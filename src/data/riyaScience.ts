import type { FillBlankItem, MatchPair, QuizQuestion, TrueFalseItem } from './types';

export type RiyaScienceGroup = 'diversity' | 'eating' | 'magnets' | 'measurement' | 'materials' | 'combined';

export interface RiyaScienceGameMeta {
  id: string;
  title: string;
  description: string;
  emoji: string;
  img: string;
  chapterGroup: RiyaScienceGroup;
  gradient: string;
}

export const riyaScienceChapterMeta = {
  diversity: {
    title: 'Chapter 2',
    subtitle: 'Diversity in the Living World',
    emoji: '🌿',
    img: 'science-diversity-cover',
    gradient: 'from-emerald-500 via-green-500 to-lime-500',
    blurb: 'Plants, roots, leaves, flowers, habitats and adaptations.',
  },
  eating: {
    title: 'Chapter 3',
    subtitle: 'Mindful Eating',
    emoji: '🥗',
    img: 'science-eating-cover',
    gradient: 'from-orange-500 via-amber-500 to-yellow-500',
    blurb: 'Food components, balanced diet, vitamins and deficiency diseases.',
  },
  magnets: {
    title: 'Chapter 4',
    subtitle: 'Exploring Magnets',
    emoji: '🧲',
    img: 'science-magnets-cover',
    gradient: 'from-red-500 via-rose-500 to-pink-500',
    blurb: 'Magnetic materials, poles, compass, uses and demagnetisation.',
  },
  measurement: {
    title: 'Chapter 5',
    subtitle: 'Measurement of Length and Motion',
    emoji: '📏',
    img: 'science-measurement-cover',
    gradient: 'from-sky-500 via-blue-500 to-indigo-500',
    blurb: 'Units, measuring methods, rest, motion and types of motion.',
  },
  materials: {
    title: 'Chapter 6',
    subtitle: 'Materials Around Us',
    emoji: '🧪',
    img: 'science-materials-cover',
    gradient: 'from-violet-500 via-purple-500 to-fuchsia-500',
    blurb: 'Lustre, hardness, states, solubility, transparency and conductors.',
  },
} as const;

export const riyaScienceCombinedMeta = {
  title: 'All Science Chapters',
  subtitle: 'Mega Revision',
  emoji: '🏆',
  img: 'science-combined-cover',
  gradient: 'from-teal-500 via-cyan-500 to-blue-500',
  blurb: 'Mixed games from Science Chapters 2, 3, 4, 5 and 6.',
};

export const riyaScienceGamesList: RiyaScienceGameMeta[] = [
  { id: 'riya-science-diversity-quiz', title: 'Plant & Habitat Quiz', description: 'MCQs on roots, leaves, habitats and adaptations.', emoji: '🌿', img: 'game-quiz', chapterGroup: 'diversity', gradient: 'from-emerald-500 to-lime-600' },
  { id: 'riya-science-diversity-true-false', title: 'True or False: Diversity', description: 'Check quick facts from living world.', emoji: '✅', img: 'game-truefalse', chapterGroup: 'diversity', gradient: 'from-green-500 to-teal-600' },
  { id: 'riya-science-diversity-match', title: 'Diversity Word Match', description: 'Match plant and habitat words to meanings.', emoji: '🔗', img: 'game-matching', chapterGroup: 'diversity', gradient: 'from-lime-500 to-emerald-600' },
  { id: 'riya-science-diversity-fill', title: 'Diversity Fill Gaps', description: 'Choose the missing science word.', emoji: '✏️', img: 'game-fillblank', chapterGroup: 'diversity', gradient: 'from-teal-500 to-green-600' },

  { id: 'riya-science-eating-quiz', title: 'Healthy Food Quiz', description: 'MCQs on nutrients, diet and deficiency diseases.', emoji: '🥗', img: 'game-quiz', chapterGroup: 'eating', gradient: 'from-orange-500 to-amber-600' },
  { id: 'riya-science-eating-true-false', title: 'True or False: Food', description: 'Quick facts about mindful eating.', emoji: '✅', img: 'game-truefalse', chapterGroup: 'eating', gradient: 'from-yellow-500 to-orange-600' },
  { id: 'riya-science-eating-match', title: 'Nutrition Word Match', description: 'Match nutrients, diseases and functions.', emoji: '🔗', img: 'game-matching', chapterGroup: 'eating', gradient: 'from-amber-500 to-red-600' },
  { id: 'riya-science-eating-fill', title: 'Food Fill Gaps', description: 'Complete sentences about food components.', emoji: '✏️', img: 'game-fillblank', chapterGroup: 'eating', gradient: 'from-lime-500 to-yellow-600' },

  { id: 'riya-science-magnets-quiz', title: 'Magnet Quiz', description: 'MCQs on magnets, poles and compass.', emoji: '🧲', img: 'game-quiz', chapterGroup: 'magnets', gradient: 'from-red-500 to-pink-600' },
  { id: 'riya-science-magnets-true-false', title: 'True or False: Magnets', description: 'Test magnet facts in one tap.', emoji: '✅', img: 'game-truefalse', chapterGroup: 'magnets', gradient: 'from-rose-500 to-red-600' },
  { id: 'riya-science-magnets-match', title: 'Magnet Word Match', description: 'Match magnet terms to meanings.', emoji: '🔗', img: 'game-matching', chapterGroup: 'magnets', gradient: 'from-pink-500 to-rose-600' },
  { id: 'riya-science-magnets-fill', title: 'Magnet Fill Gaps', description: 'Pick the correct magnet word.', emoji: '✏️', img: 'game-fillblank', chapterGroup: 'magnets', gradient: 'from-orange-500 to-red-600' },

  { id: 'riya-science-measurement-quiz', title: 'Length & Motion Quiz', description: 'MCQs on units, measuring and motion.', emoji: '📏', img: 'game-quiz', chapterGroup: 'measurement', gradient: 'from-sky-500 to-blue-600' },
  { id: 'riya-science-measurement-true-false', title: 'True or False: Motion', description: 'Fast revision of measurement and motion.', emoji: '✅', img: 'game-truefalse', chapterGroup: 'measurement', gradient: 'from-blue-500 to-indigo-600' },
  { id: 'riya-science-measurement-match', title: 'Motion Word Match', description: 'Match units and motion terms.', emoji: '🔗', img: 'game-matching', chapterGroup: 'measurement', gradient: 'from-cyan-500 to-sky-600' },
  { id: 'riya-science-measurement-fill', title: 'Measurement Fill Gaps', description: 'Complete measurement and motion sentences.', emoji: '✏️', img: 'game-fillblank', chapterGroup: 'measurement', gradient: 'from-indigo-500 to-blue-600' },

  { id: 'riya-science-materials-quiz', title: 'Materials Quiz', description: 'MCQs on material properties and states.', emoji: '🧪', img: 'game-quiz', chapterGroup: 'materials', gradient: 'from-violet-500 to-purple-600' },
  { id: 'riya-science-materials-true-false', title: 'True or False: Materials', description: 'Quick facts about materials around us.', emoji: '✅', img: 'game-truefalse', chapterGroup: 'materials', gradient: 'from-purple-500 to-fuchsia-600' },
  { id: 'riya-science-materials-match', title: 'Material Word Match', description: 'Match properties to simple meanings.', emoji: '🔗', img: 'game-matching', chapterGroup: 'materials', gradient: 'from-fuchsia-500 to-violet-600' },
  { id: 'riya-science-materials-fill', title: 'Materials Fill Gaps', description: 'Choose the missing material property.', emoji: '✏️', img: 'game-fillblank', chapterGroup: 'materials', gradient: 'from-pink-500 to-purple-600' },

  { id: 'riya-science-combined-quiz', title: 'Science Mega Quiz', description: 'Mixed MCQs from all Science chapters.', emoji: '🎯', img: 'game-quiz', chapterGroup: 'combined', gradient: 'from-teal-500 to-blue-600' },
  { id: 'riya-science-combined-true-false', title: 'Science True or False', description: 'Mixed facts from Chapters 2 to 6.', emoji: '🌟', img: 'game-truefalse', chapterGroup: 'combined', gradient: 'from-emerald-500 to-cyan-600' },
  { id: 'riya-science-combined-match', title: 'Science Vocabulary Master', description: 'Match important Science terms.', emoji: '🏆', img: 'game-matching', chapterGroup: 'combined', gradient: 'from-indigo-500 to-purple-600' },
  { id: 'riya-science-combined-fill', title: 'Science Fill Challenge', description: 'Fill blanks from all Science chapters.', emoji: '📚', img: 'game-fillblank', chapterGroup: 'combined', gradient: 'from-lime-500 to-teal-600' },
  { id: 'riya-science-speed-round', title: 'Science Speed Round', description: 'Beat the timer with rapid Science questions.', emoji: '⏱️', img: 'game-speedround', chapterGroup: 'combined', gradient: 'from-red-500 to-pink-600' },
];

export function riyaScienceGamesForGroup(group: RiyaScienceGroup): RiyaScienceGameMeta[] {
  return riyaScienceGamesList.filter((game) => game.chapterGroup === group);
}

export const diversityQuiz: QuizQuestion[] = [
  { id: 'rs2q1', chapter: 2, question: 'Which plant system is mostly underground?', options: ['Root system', 'Shoot system', 'Flower system', 'Fruit system'], answerIndex: 0, emoji: '🌱' },
  { id: 'rs2q2', chapter: 2, question: 'Which root system has one main primary root?', options: ['Tap root', 'Fibrous root', 'Breathing root', 'Leaf root'], answerIndex: 0, emoji: '🥕' },
  { id: 'rs2q3', chapter: 2, question: 'Which root system has many thin fibre-like roots?', options: ['Fibrous root', 'Tap root', 'Storage root', 'Pneumatophore'], answerIndex: 0, emoji: '🌾' },
  { id: 'rs2q4', chapter: 2, question: 'What do roots absorb from soil?', options: ['Water and minerals', 'Sunlight', 'Oxygen only', 'Flowers'], answerIndex: 0, emoji: '💧' },
  { id: 'rs2q5', chapter: 2, question: 'Which part of a plant performs photosynthesis?', options: ['Green leaves', 'Roots only', 'Seeds only', 'Soil'], answerIndex: 0, emoji: '🍃' },
  { id: 'rs2q6', chapter: 2, question: 'Loss of water vapour through stomata is called:', options: ['Transpiration', 'Pollination', 'Germination', 'Hibernation'], answerIndex: 0, emoji: '💦' },
  { id: 'rs2q7', chapter: 2, question: 'Pollen transfer from anther to stigma is called:', options: ['Pollination', 'Respiration', 'Adaptation', 'Acclimatisation'], answerIndex: 0, emoji: '🌸' },
  { id: 'rs2q8', chapter: 2, question: 'A natural living place of an organism is called:', options: ['Habitat', 'Stomata', 'Cotyledon', 'Node'], answerIndex: 0, emoji: '🏞️' },
  { id: 'rs2q9', chapter: 2, question: 'Which animal has a hump that stores fat?', options: ['Camel', 'Fish', 'Duck', 'Snow leopard'], answerIndex: 0, emoji: '🐪' },
  { id: 'rs2q10', chapter: 2, question: 'Fish breathe underwater using:', options: ['Gills', 'Lungs only', 'Blowholes', 'Stomata'], answerIndex: 0, emoji: '🐟' },
];

export const eatingQuiz: QuizQuestion[] = [
  { id: 'rs3q1', chapter: 3, question: 'Which nutrient is the main source of energy?', options: ['Carbohydrates', 'Proteins', 'Vitamins', 'Water'], answerIndex: 0, emoji: '🍚' },
  { id: 'rs3q2', chapter: 3, question: 'Proteins mainly help in:', options: ['Growth and repair', 'Only taste', 'Only colour', 'Only smell'], answerIndex: 0, emoji: '🫘' },
  { id: 'rs3q3', chapter: 3, question: 'Which deficiency disease is caused by lack of Vitamin C?', options: ['Scurvy', 'Rickets', 'Anaemia', 'Goitre'], answerIndex: 0, emoji: '🍊' },
  { id: 'rs3q4', chapter: 3, question: 'Which vitamin deficiency can cause night blindness?', options: ['Vitamin A', 'Vitamin B1', 'Vitamin C', 'Vitamin K'], answerIndex: 0, emoji: '👁️' },
  { id: 'rs3q5', chapter: 3, question: 'Iron deficiency can cause:', options: ['Anaemia', 'Scurvy', 'Goitre', 'Beriberi'], answerIndex: 0, emoji: '🩸' },
  { id: 'rs3q6', chapter: 3, question: 'ORS contains salt and sugar dissolved in:', options: ['Water', 'Oil', 'Milk only', 'Juice only'], answerIndex: 0, emoji: '💧' },
  { id: 'rs3q7', chapter: 3, question: 'A balanced diet contains:', options: ['All nutrients in right amounts', 'Only fats', 'Only sweets', 'Only water'], answerIndex: 0, emoji: '🥗' },
  { id: 'rs3q8', chapter: 3, question: 'Millets are also called:', options: ['Nutri-cereals', 'Junk food', 'Soft drinks', 'Food miles'], answerIndex: 0, emoji: '🌾' },
  { id: 'rs3q9', chapter: 3, question: 'Distance food travels from farm to consumer is called:', options: ['Food miles', 'Digestion', 'Balanced diet', 'Roughage'], answerIndex: 0, emoji: '🚚' },
  { id: 'rs3q10', chapter: 3, question: 'Lack of iodine can cause:', options: ['Goitre', 'Scurvy', 'Rickets', 'Marasmus'], answerIndex: 0, emoji: '🧂' },
];

export const magnetsQuiz: QuizQuestion[] = [
  { id: 'rs4q1', chapter: 4, question: 'A naturally occurring magnet is called:', options: ['Lodestone', 'Limestone', 'Sandstone', 'Gemstone'], answerIndex: 0, emoji: '🪨' },
  { id: 'rs4q2', chapter: 4, question: 'Which material is magnetic?', options: ['Iron', 'Paper', 'Plastic', 'Wood'], answerIndex: 0, emoji: '🔩' },
  { id: 'rs4q3', chapter: 4, question: 'Every magnet has:', options: ['North and South poles', 'East and West poles', 'Only one pole', 'No poles'], answerIndex: 0, emoji: '🧲' },
  { id: 'rs4q4', chapter: 4, question: 'Magnetic force is strongest at the:', options: ['Poles', 'Middle only', 'String', 'Label'], answerIndex: 0, emoji: '🧲' },
  { id: 'rs4q5', chapter: 4, question: 'Like poles of magnets:', options: ['Repel', 'Attract', 'Disappear', 'Melt'], answerIndex: 0, emoji: '↔️' },
  { id: 'rs4q6', chapter: 4, question: 'Unlike poles of magnets:', options: ['Attract', 'Repel', 'Break', 'Heat'], answerIndex: 0, emoji: '↕️' },
  { id: 'rs4q7', chapter: 4, question: 'A freely suspended magnet aligns roughly in which direction?', options: ['North-South', 'East-West', 'Up-Down', 'Round-round'], answerIndex: 0, emoji: '🧭' },
  { id: 'rs4q8', chapter: 4, question: 'A compass contains a magnetised:', options: ['Needle', 'Spoon', 'Leaf', 'Thread'], answerIndex: 0, emoji: '🧭' },
  { id: 'rs4q9', chapter: 4, question: 'To magnetise a needle, rub it with a magnet:', options: ['In one direction', 'Back and forth', 'In water', 'With paper'], answerIndex: 0, emoji: '🪡' },
  { id: 'rs4q10', chapter: 4, question: 'A magnet can lose magnetism by:', options: ['Heating or hammering', 'Keeping safely', 'Using compass', 'Attracting iron'], answerIndex: 0, emoji: '🔥' },
];

export const measurementQuiz: QuizQuestion[] = [
  { id: 'rs5q1', chapter: 5, question: 'Length is the distance between:', options: ['Two points', 'Two colours', 'Two tastes', 'Two sounds'], answerIndex: 0, emoji: '📏' },
  { id: 'rs5q2', chapter: 5, question: 'The SI/base unit of length is:', options: ['Metre', 'Litre', 'Second', 'Kilogram'], answerIndex: 0, emoji: 'm' },
  { id: 'rs5q3', chapter: 5, question: '1 kilometre equals:', options: ['1000 metres', '100 metres', '10 metres', '1 metre'], answerIndex: 0, emoji: '🛣️' },
  { id: 'rs5q4', chapter: 5, question: '1 metre equals:', options: ['100 centimetres', '10 centimetres', '1000 centimetres', '1 centimetre'], answerIndex: 0, emoji: '📐' },
  { id: 'rs5q5', chapter: 5, question: 'A curved line can be measured using:', options: ['Thread', 'Only straight ruler directly', 'Magnet', 'Compass only'], answerIndex: 0, emoji: '🧵' },
  { id: 'rs5q6', chapter: 5, question: 'An object is in motion if its position changes with respect to a:', options: ['Reference point', 'Colour', 'Smell', 'Shape'], answerIndex: 0, emoji: '🚗' },
  { id: 'rs5q7', chapter: 5, question: 'Motion along a straight line is:', options: ['Rectilinear motion', 'Circular motion', 'Periodic motion', 'Rotational motion'], answerIndex: 0, emoji: '➡️' },
  { id: 'rs5q8', chapter: 5, question: 'Hands of a clock show:', options: ['Circular motion', 'Rectilinear motion', 'No motion', 'Only curvilinear motion'], answerIndex: 0, emoji: '🕒' },
  { id: 'rs5q9', chapter: 5, question: 'Motion that repeats after equal intervals is:', options: ['Periodic motion', 'Non-periodic motion', 'Rest', 'Parallax'], answerIndex: 0, emoji: '🔁' },
  { id: 'rs5q10', chapter: 5, question: 'A wheel rotating around an axis shows:', options: ['Rotational motion', 'Only rest', 'Only straight motion', 'No motion'], answerIndex: 0, emoji: '🛞' },
];

export const materialsQuiz: QuizQuestion[] = [
  { id: 'rs6q1', chapter: 6, question: 'The property by which a material shines is:', options: ['Lustre', 'Solubility', 'Hardness', 'Transparency'], answerIndex: 0, emoji: '✨' },
  { id: 'rs6q2', chapter: 6, question: 'Which material is non-lustrous?', options: ['Wood', 'Gold', 'Silver', 'Copper'], answerIndex: 0, emoji: '🪵' },
  { id: 'rs6q3', chapter: 6, question: 'Which state has fixed shape and fixed volume?', options: ['Solid', 'Liquid', 'Gas', 'Vapour'], answerIndex: 0, emoji: '🧊' },
  { id: 'rs6q4', chapter: 6, question: 'Water is called a universal solvent because:', options: ['Many substances dissolve in it', 'It is always solid', 'It never flows', 'It is magnetic'], answerIndex: 0, emoji: '💧' },
  { id: 'rs6q5', chapter: 6, question: 'Salt and sugar are examples of:', options: ['Soluble substances', 'Insoluble substances', 'Gases', 'Metals'], answerIndex: 0, emoji: '🧂' },
  { id: 'rs6q6', chapter: 6, question: 'Clear glass is:', options: ['Transparent', 'Opaque', 'Magnetic', 'Rough'], answerIndex: 0, emoji: '🪟' },
  { id: 'rs6q7', chapter: 6, question: 'Wood does not allow light to pass through, so it is:', options: ['Opaque', 'Transparent', 'Translucent', 'Soluble'], answerIndex: 0, emoji: '🪵' },
  { id: 'rs6q8', chapter: 6, question: 'Which material is attracted by a magnet?', options: ['Iron', 'Plastic', 'Rubber', 'Paper'], answerIndex: 0, emoji: '🔩' },
  { id: 'rs6q9', chapter: 6, question: 'Most metals are good conductors of:', options: ['Heat and electricity', 'Only smell', 'Only taste', 'Darkness'], answerIndex: 0, emoji: '⚡' },
  { id: 'rs6q10', chapter: 6, question: 'Plastic and rubber are usually:', options: ['Insulators', 'Strong magnets', 'Transparent metals', 'Soluble gases'], answerIndex: 0, emoji: '🧤' },
];

export const diversityTrueFalse: TrueFalseItem[] = [
  { id: 'rs2tf1', chapter: 2, statement: 'The shoot system is above the ground.', answer: true },
  { id: 'rs2tf2', chapter: 2, statement: 'Fibrous root has one single main root.', answer: false },
  { id: 'rs2tf3', chapter: 2, statement: 'Stomata help in exchange of gases.', answer: true },
  { id: 'rs2tf4', chapter: 2, statement: 'Ovary develops into fruit after pollination.', answer: true },
  { id: 'rs2tf5', chapter: 2, statement: 'Cactus leaves are modified into spines.', answer: true },
  { id: 'rs2tf6', chapter: 2, statement: 'Whales breathe with gills.', answer: false },
];

export const eatingTrueFalse: TrueFalseItem[] = [
  { id: 'rs3tf1', chapter: 3, statement: 'Carbohydrates give energy.', answer: true },
  { id: 'rs3tf2', chapter: 3, statement: 'Proteins are body-building nutrients.', answer: true },
  { id: 'rs3tf3', chapter: 3, statement: 'Deficiency diseases spread from person to person.', answer: false },
  { id: 'rs3tf4', chapter: 3, statement: 'Vitamin D helps in strong bones and teeth.', answer: true },
  { id: 'rs3tf5', chapter: 3, statement: 'ORS contains salt and sugar in water.', answer: true },
  { id: 'rs3tf6', chapter: 3, statement: 'Millets are called junk food.', answer: false },
];

export const magnetsTrueFalse: TrueFalseItem[] = [
  { id: 'rs4tf1', chapter: 4, statement: 'Iron, nickel and cobalt are magnetic materials.', answer: true },
  { id: 'rs4tf2', chapter: 4, statement: 'A magnet has only one pole.', answer: false },
  { id: 'rs4tf3', chapter: 4, statement: 'Like poles repel each other.', answer: true },
  { id: 'rs4tf4', chapter: 4, statement: 'Earth behaves like a giant magnet.', answer: true },
  { id: 'rs4tf5', chapter: 4, statement: 'A compass helps identify directions.', answer: true },
  { id: 'rs4tf6', chapter: 4, statement: 'Dropping a magnet always makes it stronger.', answer: false },
];

export const measurementTrueFalse: TrueFalseItem[] = [
  { id: 'rs5tf1', chapter: 5, statement: '1 m = 100 cm.', answer: true },
  { id: 'rs5tf2', chapter: 5, statement: 'Handspan is a standard SI unit.', answer: false },
  { id: 'rs5tf3', chapter: 5, statement: 'A ruler should be kept along the object while measuring.', answer: true },
  { id: 'rs5tf4', chapter: 5, statement: 'Motion and rest depend on reference point.', answer: true },
  { id: 'rs5tf5', chapter: 5, statement: 'A pendulum shows periodic motion.', answer: true },
  { id: 'rs5tf6', chapter: 5, statement: 'A spinning top has no rotational motion.', answer: false },
];

export const materialsTrueFalse: TrueFalseItem[] = [
  { id: 'rs6tf1', chapter: 6, statement: 'Gold and silver are lustrous materials.', answer: true },
  { id: 'rs6tf2', chapter: 6, statement: 'Gas has fixed shape and fixed volume.', answer: false },
  { id: 'rs6tf3', chapter: 6, statement: 'Sand is insoluble in water.', answer: true },
  { id: 'rs6tf4', chapter: 6, statement: 'Kerosene and petrol are immiscible with water.', answer: true },
  { id: 'rs6tf5', chapter: 6, statement: 'Frosted glass is translucent.', answer: true },
  { id: 'rs6tf6', chapter: 6, statement: 'Rubber is usually a good electrical conductor.', answer: false },
];

export const diversityFillBlanks: FillBlankItem[] = [
  { id: 'rs2fb1', chapter: 2, sentence: 'The ___ system is underground.', options: ['root', 'shoot', 'flower', 'fruit'], answer: 'root' },
  { id: 'rs2fb2', chapter: 2, sentence: 'A leaf has a flat green part called ___.', options: ['lamina', 'pollen', 'ovule', 'radicle'], answer: 'lamina' },
  { id: 'rs2fb3', chapter: 2, sentence: 'Green leaves prepare food by ___.', options: ['photosynthesis', 'pollination', 'hibernation', 'floating'], answer: 'photosynthesis' },
  { id: 'rs2fb4', chapter: 2, sentence: 'An organism’s natural living place is its ___.', options: ['habitat', 'node', 'stigma', 'seed coat'], answer: 'habitat' },
  { id: 'rs2fb5', chapter: 2, sentence: 'Fish use ___ to breathe underwater.', options: ['gills', 'stomata', 'roots', 'humps'], answer: 'gills' },
  { id: 'rs2fb6', chapter: 2, sentence: 'Short-term adjustment to environment is called ___.', options: ['acclimatisation', 'pollination', 'transpiration', 'germination'], answer: 'acclimatisation' },
];

export const eatingFillBlanks: FillBlankItem[] = [
  { id: 'rs3fb1', chapter: 3, sentence: '___ are the primary source of energy.', options: ['Carbohydrates', 'Vitamins', 'Minerals', 'Water'], answer: 'Carbohydrates' },
  { id: 'rs3fb2', chapter: 3, sentence: 'Proteins help in growth and ___.', options: ['repair', 'night blindness', 'rusting', 'motion'], answer: 'repair' },
  { id: 'rs3fb3', chapter: 3, sentence: 'Vitamin C deficiency causes ___.', options: ['scurvy', 'rickets', 'goitre', 'anaemia'], answer: 'scurvy' },
  { id: 'rs3fb4', chapter: 3, sentence: 'Iron deficiency can cause ___.', options: ['anaemia', 'beriberi', 'scurvy', 'goitre'], answer: 'anaemia' },
  { id: 'rs3fb5', chapter: 3, sentence: 'ORS stands for Oral ___ Solution.', options: ['Rehydration', 'Root', 'Roughage', 'Repair'], answer: 'Rehydration' },
  { id: 'rs3fb6', chapter: 3, sentence: 'Jowar, bajra and ragi are examples of ___.', options: ['millets', 'vitamins', 'minerals', 'junk food'], answer: 'millets' },
];

export const magnetsFillBlanks: FillBlankItem[] = [
  { id: 'rs4fb1', chapter: 4, sentence: 'A natural magnet is called ___.', options: ['lodestone', 'limestone', 'chalk', 'rubber'], answer: 'lodestone' },
  { id: 'rs4fb2', chapter: 4, sentence: 'A magnet has a north pole and a ___ pole.', options: ['south', 'east', 'middle', 'plastic'], answer: 'south' },
  { id: 'rs4fb3', chapter: 4, sentence: 'Like poles ___ each other.', options: ['repel', 'attract', 'melt', 'dissolve'], answer: 'repel' },
  { id: 'rs4fb4', chapter: 4, sentence: 'Unlike poles ___ each other.', options: ['attract', 'repel', 'break', 'burn'], answer: 'attract' },
  { id: 'rs4fb5', chapter: 4, sentence: 'A compass has a magnetised ___.', options: ['needle', 'leaf', 'coin', 'rubber'], answer: 'needle' },
  { id: 'rs4fb6', chapter: 4, sentence: 'Loss of magnetism is called ___.', options: ['demagnetisation', 'transpiration', 'solubility', 'pollination'], answer: 'demagnetisation' },
];

export const measurementFillBlanks: FillBlankItem[] = [
  { id: 'rs5fb1', chapter: 5, sentence: 'The SI unit of length is ___.', options: ['metre', 'litre', 'gram', 'second'], answer: 'metre' },
  { id: 'rs5fb2', chapter: 5, sentence: '1 km = ___ m.', options: ['1000', '100', '10', '1'], answer: '1000' },
  { id: 'rs5fb3', chapter: 5, sentence: 'To avoid parallax error, keep the eye directly ___ the mark.', options: ['above', 'below', 'behind', 'away from'], answer: 'above' },
  { id: 'rs5fb4', chapter: 5, sentence: 'A curved line can be measured using a ___.', options: ['thread', 'magnet', 'leaf', 'food'], answer: 'thread' },
  { id: 'rs5fb5', chapter: 5, sentence: 'Motion depends on a reference ___.', options: ['point', 'vitamin', 'root', 'pole'], answer: 'point' },
  { id: 'rs5fb6', chapter: 5, sentence: 'Motion that repeats after equal intervals is ___ motion.', options: ['periodic', 'non-periodic', 'rest', 'straight'], answer: 'periodic' },
];

export const materialsFillBlanks: FillBlankItem[] = [
  { id: 'rs6fb1', chapter: 6, sentence: 'The shine of a material is called ___.', options: ['lustre', 'roughage', 'motion', 'habitat'], answer: 'lustre' },
  { id: 'rs6fb2', chapter: 6, sentence: 'Water is called a universal ___.', options: ['solvent', 'magnet', 'insulator', 'vitamin'], answer: 'solvent' },
  { id: 'rs6fb3', chapter: 6, sentence: 'Liquids that mix with water are called ___.', options: ['miscible', 'opaque', 'magnetic', 'hard'], answer: 'miscible' },
  { id: 'rs6fb4', chapter: 6, sentence: 'Materials that allow most light to pass are ___.', options: ['transparent', 'opaque', 'magnetic', 'insoluble'], answer: 'transparent' },
  { id: 'rs6fb5', chapter: 6, sentence: 'Iron and steel are ___ materials.', options: ['magnetic', 'transparent', 'immiscible', 'soft'], answer: 'magnetic' },
  { id: 'rs6fb6', chapter: 6, sentence: 'Plastic and wood are heat ___.', options: ['insulators', 'conductors', 'magnets', 'solvents'], answer: 'insulators' },
];

export const diversityMatchPairs: MatchPair[] = [
  { id: 'rs2m1', chapter: 2, term: 'Tap root', definition: 'One main primary root with branches', emoji: '🥕' },
  { id: 'rs2m2', chapter: 2, term: 'Fibrous root', definition: 'Many thin roots from the stem base', emoji: '🌾' },
  { id: 'rs2m3', chapter: 2, term: 'Photosynthesis', definition: 'Green leaves make food using sunlight', emoji: '🍃' },
  { id: 'rs2m4', chapter: 2, term: 'Transpiration', definition: 'Loss of water vapour from leaves', emoji: '💦' },
  { id: 'rs2m5', chapter: 2, term: 'Pollination', definition: 'Pollen moves from anther to stigma', emoji: '🌸' },
  { id: 'rs2m6', chapter: 2, term: 'Habitat', definition: 'Natural living place of an organism', emoji: '🏞️' },
  { id: 'rs2m7', chapter: 2, term: 'Adaptation', definition: 'Change that helps survival in a habitat', emoji: '🐪' },
  { id: 'rs2m8', chapter: 2, term: 'Acclimatisation', definition: 'Short-term adjustment to environment', emoji: '⛰️' },
];

export const eatingMatchPairs: MatchPair[] = [
  { id: 'rs3m1', chapter: 3, term: 'Carbohydrates', definition: 'Primary source of energy', emoji: '🍚' },
  { id: 'rs3m2', chapter: 3, term: 'Proteins', definition: 'Body-building nutrients', emoji: '🫘' },
  { id: 'rs3m3', chapter: 3, term: 'Fats', definition: 'Concentrated energy and insulation', emoji: '🧈' },
  { id: 'rs3m4', chapter: 3, term: 'Scurvy', definition: 'Disease caused by Vitamin C deficiency', emoji: '🍊' },
  { id: 'rs3m5', chapter: 3, term: 'Anaemia', definition: 'Disease caused by iron deficiency', emoji: '🩸' },
  { id: 'rs3m6', chapter: 3, term: 'Goitre', definition: 'Disease caused by iodine deficiency', emoji: '🧂' },
  { id: 'rs3m7', chapter: 3, term: 'Balanced diet', definition: 'All nutrients in right quantities', emoji: '🥗' },
  { id: 'rs3m8', chapter: 3, term: 'Food miles', definition: 'Distance food travels to reach us', emoji: '🚚' },
];

export const magnetsMatchPairs: MatchPair[] = [
  { id: 'rs4m1', chapter: 4, term: 'Lodestone', definition: 'A naturally occurring magnet', emoji: '🪨' },
  { id: 'rs4m2', chapter: 4, term: 'Magnetic material', definition: 'Material attracted by a magnet', emoji: '🔩' },
  { id: 'rs4m3', chapter: 4, term: 'Poles', definition: 'Ends where magnetic force is strongest', emoji: '🧲' },
  { id: 'rs4m4', chapter: 4, term: 'Like poles', definition: 'Poles that repel each other', emoji: '↔️' },
  { id: 'rs4m5', chapter: 4, term: 'Unlike poles', definition: 'Poles that attract each other', emoji: '↕️' },
  { id: 'rs4m6', chapter: 4, term: 'Compass', definition: 'Device that helps find directions', emoji: '🧭' },
  { id: 'rs4m7', chapter: 4, term: 'Temporary magnet', definition: 'Keeps magnetism for a short time', emoji: '🧲' },
  { id: 'rs4m8', chapter: 4, term: 'Demagnetisation', definition: 'Loss of magnetism', emoji: '🔥' },
];

export const measurementMatchPairs: MatchPair[] = [
  { id: 'rs5m1', chapter: 5, term: 'Length', definition: 'Distance between two points', emoji: '📏' },
  { id: 'rs5m2', chapter: 5, term: 'Metre', definition: 'SI/base unit of length', emoji: 'm' },
  { id: 'rs5m3', chapter: 5, term: 'Handspan', definition: 'Non-standard body-based measure', emoji: '✋' },
  { id: 'rs5m4', chapter: 5, term: 'Reference point', definition: 'Point used to decide rest or motion', emoji: '📍' },
  { id: 'rs5m5', chapter: 5, term: 'Rectilinear motion', definition: 'Motion along a straight line', emoji: '➡️' },
  { id: 'rs5m6', chapter: 5, term: 'Circular motion', definition: 'Motion around a fixed point', emoji: '🕒' },
  { id: 'rs5m7', chapter: 5, term: 'Periodic motion', definition: 'Motion repeating at equal intervals', emoji: '🔁' },
  { id: 'rs5m8', chapter: 5, term: 'Rotational motion', definition: 'Motion around a fixed axis', emoji: '🛞' },
];

export const materialsMatchPairs: MatchPair[] = [
  { id: 'rs6m1', chapter: 6, term: 'Lustre', definition: 'Shiny property of a material', emoji: '✨' },
  { id: 'rs6m2', chapter: 6, term: 'Solubility', definition: 'Ability to dissolve in water', emoji: '💧' },
  { id: 'rs6m3', chapter: 6, term: 'Miscible', definition: 'Liquid that mixes with water', emoji: '🥛' },
  { id: 'rs6m4', chapter: 6, term: 'Immiscible', definition: 'Liquid that does not mix with water', emoji: '🛢️' },
  { id: 'rs6m5', chapter: 6, term: 'Transparent', definition: 'Allows most light to pass', emoji: '🪟' },
  { id: 'rs6m6', chapter: 6, term: 'Opaque', definition: 'Does not allow light to pass', emoji: '🪵' },
  { id: 'rs6m7', chapter: 6, term: 'Conductor', definition: 'Allows heat or electricity to pass', emoji: '⚡' },
  { id: 'rs6m8', chapter: 6, term: 'Insulator', definition: 'Does not allow heat/electricity easily', emoji: '🧤' },
];
