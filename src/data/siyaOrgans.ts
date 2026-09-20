import type { QuizQuestion, TrueFalseItem, FillBlankItem, ScrambleItem, SortGameData, SequenceGameData } from './types';

// Class 3 EVS — Chapter 6: Organs Working Together
// Uses chapter: 6 as a distinct marker from Birds (chapter: 4) within Siya's own data set only.

export const organsQuiz: QuizQuestion[] = [
  { id: 'o1', chapter: 6, question: 'Which organ can we see and touch from outside?', options: ['Eye', 'Heart', 'Liver', 'Kidney'], answerIndex: 0, emoji: '👁️' },
  { id: 'o2', chapter: 6, question: 'Which of these is an internal organ?', options: ['Heart', 'Eye', 'Hand', 'Leg'], answerIndex: 0, emoji: '❤️' },
  { id: 'o3', chapter: 6, question: 'A group of organs working together to do a job is called a(n):', options: ['Organ system', 'Organ cell', 'Organ tissue', 'Organ unit'], answerIndex: 0, emoji: '🫀' },
  { id: 'o4', chapter: 6, question: 'Bones joined together form the:', options: ['Skeleton', 'Muscle', 'Skin', 'Blood'], answerIndex: 0, emoji: '🦴' },
  { id: 'o5', chapter: 6, question: 'Which of these is NOT a function of the skeletal system?', options: ['Digesting food', 'Giving the body shape', 'Protecting organs', 'Helping movement'], answerIndex: 0, emoji: '🦴' },
  { id: 'o6', chapter: 6, question: 'How many bones does an adult human body have?', options: ['206', '100', '50', '500'], answerIndex: 0, emoji: '🦴' },
  { id: 'o7', chapter: 6, question: 'Which system has more than 600 muscles?', options: ['Muscular system', 'Skeletal system', 'Digestive system', 'Excretory system'], answerIndex: 0, emoji: '💪' },
  { id: 'o8', chapter: 6, question: 'Muscles attached to bones mainly help the body to:', options: ['Move', 'Breathe', 'Digest food', 'Clean blood'], answerIndex: 0, emoji: '💪' },
  { id: 'o9', chapter: 6, question: 'Breaking down food into simpler forms is called:', options: ['Digestion', 'Respiration', 'Circulation', 'Excretion'], answerIndex: 0, emoji: '🍽️' },
  { id: 'o10', chapter: 6, question: 'Which organ is NOT part of the digestive system?', options: ['Lungs', 'Stomach', 'Small intestine', 'Large intestine'], answerIndex: 0, emoji: '🍽️' },
  { id: 'o11', chapter: 6, question: 'In which organ does food turn into a paste-like form?', options: ['Stomach', 'Mouth', 'Food pipe', 'Anus'], answerIndex: 0, emoji: '🍽️' },
  { id: 'o12', chapter: 6, question: 'Nutrients from food are absorbed into the blood in the:', options: ['Small intestine', 'Large intestine', 'Stomach', 'Mouth'], answerIndex: 0, emoji: '🍽️' },
  { id: 'o13', chapter: 6, question: 'Water from undigested food is absorbed in the:', options: ['Large intestine', 'Small intestine', 'Stomach', 'Food pipe'], answerIndex: 0, emoji: '🍽️' },
  { id: 'o14', chapter: 6, question: 'Waste leaves the body as faeces through the:', options: ['Anus', 'Mouth', 'Stomach', 'Rectum'], answerIndex: 0, emoji: '🍽️' },
  { id: 'o15', chapter: 6, question: 'Which organs are part of the respiratory system?', options: ['Nose, trachea and lungs', 'Heart and blood vessels', 'Stomach and intestines', 'Skin and kidneys'], answerIndex: 0, emoji: '🫁' },
  { id: 'o16', chapter: 6, question: 'When we breathe in (inhale), our lungs:', options: ['Expand', 'Contract', 'Stop working', 'Shrink'], answerIndex: 0, emoji: '🫁' },
  { id: 'o17', chapter: 6, question: 'When we breathe out (exhale), our lungs:', options: ['Contract', 'Expand', 'Grow bigger', 'Stop working'], answerIndex: 0, emoji: '🫁' },
  { id: 'o18', chapter: 6, question: 'About how many times do we breathe in a single day?', options: ['20,000', '200', '2,000', '200,000'], answerIndex: 0, emoji: '🫁' },
  { id: 'o19', chapter: 6, question: 'The circulatory system carries oxygen and nutrients using:', options: ['Blood', 'Air', 'Water', 'Food'], answerIndex: 0, emoji: '❤️' },
  { id: 'o20', chapter: 6, question: 'Which organ pumps blood through the body?', options: ['Heart', 'Lungs', 'Liver', 'Stomach'], answerIndex: 0, emoji: '❤️' },
  { id: 'o21', chapter: 6, question: 'Which system removes waste from the body?', options: ['Excretory system', 'Muscular system', 'Skeletal system', 'Respiratory system'], answerIndex: 0, emoji: '🚽' },
  { id: 'o22', chapter: 6, question: 'Kidneys clean the blood and make:', options: ['Urine', 'Blood', 'Food', 'Air'], answerIndex: 0, emoji: '🫘' },
  { id: 'o23', chapter: 6, question: 'Which food is good for building healthy bones?', options: ['Calcium-rich food like milk and cheese', 'Sugary snacks', 'Fried food', 'Cold drinks'], answerIndex: 0, emoji: '🥛' },
  { id: 'o24', chapter: 6, question: 'How many glasses of water should we drink every day?', options: ['6 to 8 glasses', '1 to 2 glasses', '15 to 20 glasses', '0 glasses'], answerIndex: 0, emoji: '💧' },
  { id: 'o25', chapter: 6, question: 'Which food keeps the digestive system healthy?', options: ['Fibre-rich food like fruits and vegetables', 'Only sweets', 'Only meat', 'Only bread'], answerIndex: 0, emoji: '🍎' },
];

export const organsTrueFalse: TrueFalseItem[] = [
  { id: 'otf1', chapter: 6, statement: 'The eye is an external organ.', answer: true },
  { id: 'otf2', chapter: 6, statement: 'The heart is an external organ.', answer: false },
  { id: 'otf3', chapter: 6, statement: 'An organ system is a group of organs working together.', answer: true },
  { id: 'otf4', chapter: 6, statement: 'The adult human skeleton has 206 bones.', answer: true },
  { id: 'otf5', chapter: 6, statement: 'Muscles help the body to move.', answer: true },
  { id: 'otf6', chapter: 6, statement: 'The human body has fewer than 100 muscles.', answer: false },
  { id: 'otf7', chapter: 6, statement: 'Digestion means breaking down food into simpler forms.', answer: true },
  { id: 'otf8', chapter: 6, statement: 'Food is digested inside our ears.', answer: false },
  { id: 'otf9', chapter: 6, statement: 'Nutrients from food are absorbed in the small intestine.', answer: true },
  { id: 'otf10', chapter: 6, statement: 'Lungs expand when we exhale.', answer: false },
  { id: 'otf11', chapter: 6, statement: 'The heart pumps blood through the body.', answer: true },
  { id: 'otf12', chapter: 6, statement: 'Kidneys are part of the excretory system.', answer: true },
  { id: 'otf13', chapter: 6, statement: 'Drinking 6 to 8 glasses of water daily is good for the body.', answer: true },
  { id: 'otf14', chapter: 6, statement: 'Calcium-rich food helps keep bones healthy.', answer: true },
];

export const organsFillBlanks: FillBlankItem[] = [
  { id: 'ofb1', chapter: 6, sentence: 'Organs we can see and touch are called ___ organs.', options: ['external', 'internal', 'hidden', 'secret'], answer: 'external' },
  { id: 'ofb2', chapter: 6, sentence: 'A group of organs working together is called an organ ___.', options: ['system', 'cell', 'tissue', 'unit'], answer: 'system' },
  { id: 'ofb3', chapter: 6, sentence: 'The skeletal system is made of ___ joined together.', options: ['bones', 'muscles', 'skin', 'blood'], answer: 'bones' },
  { id: 'ofb4', chapter: 6, sentence: 'An adult human body has ___ bones.', options: ['206', '100', '50', '500'], answer: '206' },
  { id: 'ofb5', chapter: 6, sentence: 'The ___ system has more than 600 muscles.', options: ['muscular', 'digestive', 'excretory', 'skeletal'], answer: 'muscular' },
  { id: 'ofb6', chapter: 6, sentence: 'Breaking down food into simpler forms is called ___.', options: ['digestion', 'respiration', 'circulation', 'excretion'], answer: 'digestion' },
  { id: 'ofb7', chapter: 6, sentence: 'We breathe in ___ and breathe out carbon dioxide.', options: ['oxygen', 'nitrogen', 'water', 'smoke'], answer: 'oxygen' },
  { id: 'ofb8', chapter: 6, sentence: 'The ___ pumps blood through the body.', options: ['heart', 'lungs', 'stomach', 'liver'], answer: 'heart' },
  { id: 'ofb9', chapter: 6, sentence: '___ clean the blood and make urine.', options: ['Kidneys', 'Lungs', 'Muscles', 'Bones'], answer: 'Kidneys' },
  { id: 'ofb10', chapter: 6, sentence: 'We should drink 6 to 8 ___ of water every day.', options: ['glasses', 'buckets', 'drops', 'spoons'], answer: 'glasses' },
];

export const organsScramble: ScrambleItem[] = [
  { id: 'osc1', chapter: 6, word: 'BONE', hint: 'A hard part of the body that forms the skeleton', emoji: '🦴' },
  { id: 'osc2', chapter: 6, word: 'MUSCLE', hint: 'Helps the body move', emoji: '💪' },
  { id: 'osc3', chapter: 6, word: 'LUNG', hint: 'Helps us breathe', emoji: '🫁' },
  { id: 'osc4', chapter: 6, word: 'HEART', hint: 'Pumps blood through the body', emoji: '❤️' },
  { id: 'osc5', chapter: 6, word: 'KIDNEY', hint: 'Cleans the blood and makes urine', emoji: '🫘' },
  { id: 'osc6', chapter: 6, word: 'SKIN', hint: 'The outer covering of our body', emoji: '🧴' },
  { id: 'osc7', chapter: 6, word: 'BRAIN', hint: 'An internal organ inside the head', emoji: '🧠' },
  { id: 'osc8', chapter: 6, word: 'LIVER', hint: 'An internal organ that helps digestion', emoji: '🍽️' },
];

export const sortOrgansExternalInternal: SortGameData = {
  id: 'organs-external-internal-sort',
  title: 'Sort Organs: External or Internal',
  categories: ['External', 'Internal'],
  items: [
    { name: 'Eye', category: 'External', emoji: '👁️' },
    { name: 'Ear', category: 'External', emoji: '👂' },
    { name: 'Nose', category: 'External', emoji: '👃' },
    { name: 'Hand', category: 'External', emoji: '✋' },
    { name: 'Heart', category: 'Internal', emoji: '❤️' },
    { name: 'Brain', category: 'Internal', emoji: '🧠' },
    { name: 'Liver', category: 'Internal', emoji: '🍽️' },
    { name: 'Lungs', category: 'Internal', emoji: '🫁' },
    { name: 'Stomach', category: 'Internal', emoji: '🍽️' },
  ],
};

export const sortOrgansBySystem: SortGameData = {
  id: 'organs-system-sort',
  title: 'Sort Organs by Their System',
  categories: ['Skeletal', 'Muscular', 'Digestive', 'Respiratory', 'Circulatory', 'Excretory'],
  items: [
    { name: 'Bones', category: 'Skeletal', emoji: '🦴' },
    { name: 'Muscles', category: 'Muscular', emoji: '💪' },
    { name: 'Stomach', category: 'Digestive', emoji: '🍽️' },
    { name: 'Small intestine', category: 'Digestive', emoji: '🍽️' },
    { name: 'Trachea', category: 'Respiratory', emoji: '🫁' },
    { name: 'Lungs', category: 'Respiratory', emoji: '🫁' },
    { name: 'Heart', category: 'Circulatory', emoji: '❤️' },
    { name: 'Blood vessels', category: 'Circulatory', emoji: '❤️' },
    { name: 'Skin', category: 'Excretory', emoji: '🧴' },
    { name: 'Kidneys', category: 'Excretory', emoji: '🫘' },
  ],
};

export const sequenceDigestion: SequenceGameData = {
  id: 'digestion-steps',
  title: 'How Digestion Works',
  emoji: '🍽️',
  steps: [
    'Teeth break down food in the mouth and saliva softens it',
    'Food travels down the food pipe to the stomach',
    'The stomach releases digestive juices and turns food into a paste',
    'Food moves to the small intestine, where nutrients are absorbed into the blood',
    'Undigested food moves to the large intestine, which absorbs water',
    'Waste is stored temporarily in the rectum',
    'Waste leaves the body as faeces through the anus',
  ],
};

export const sequenceBreathing: SequenceGameData = {
  id: 'breathing-steps',
  title: 'The Breathing Process',
  emoji: '🫁',
  steps: [
    'Air enters the body through the nose',
    'Air passes through the trachea (windpipe)',
    'Air reaches the lungs',
    'The lungs expand and take in oxygen',
    'The lungs contract and push out carbon dioxide',
  ],
};
