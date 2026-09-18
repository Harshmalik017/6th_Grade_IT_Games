import type { QuizQuestion, TrueFalseItem, FillBlankItem, ScrambleItem, SortGameData, SequenceGameData } from './types';

export const chapter4Quiz: QuizQuestion[] = [
  { id: 'c4q1', chapter: 4, question: 'Which technology makes a computer/software/robot think intelligently like humans?', options: ['Artificial Intelligence', 'Augmented Reality', 'Virtual Reality', 'Blockchain'], answerIndex: 0, emoji: '🤖', img: 'ai' },
  { id: 'c4q2', chapter: 4, question: 'Who is credited with coining the term "Artificial Intelligence"?', options: ['Jack Ma', 'John McCarthy', 'Reid Hoffman', 'Mark Zuckerberg'], answerIndex: 1, emoji: '🧠', img: 'ai' },
  { id: 'c4q3', chapter: 4, question: 'Which device is used to experience Virtual Reality?', options: ['Headset', 'Keyboard', 'Mouse', 'Printer'], answerIndex: 0, emoji: '🥽', img: 'virtual-reality' },
  { id: 'c4q4', chapter: 4, question: 'Which of these is an example of a Virtual Assistant?', options: ['Metaverse', 'Google Assistant', 'Minecraft', '3D Printer'], answerIndex: 1, emoji: '🎙️', img: 'virtual-assistant' },
  { id: 'c4q5', chapter: 4, question: "Amazon's virtual assistant is called:", options: ['Siri', 'Cortana', 'Alexa', 'Bixby'], answerIndex: 2, emoji: '🔊', img: 'smart-speaker' },
  { id: 'c4q6', chapter: 4, question: "Apple's AI-powered virtual assistant is called:", options: ['Siri', 'Alexa', 'Google Assistant', 'Watson'], answerIndex: 0, emoji: '🍎', img: 'virtual-assistant' },
  { id: 'c4q7', chapter: 4, question: '"T" in IoT stands for:', options: ['Thanks', 'Things', 'Thinks', 'Trends'], answerIndex: 1, emoji: '🌐', img: 'iot' },
  { id: 'c4q8', chapter: 4, question: 'Internet of Things (IoT) is a network of:', options: ['Only computers', 'Things/devices connected via the Internet', 'Only smartphones', 'Only servers'], answerIndex: 1, emoji: '📡', img: 'iot' },
  { id: 'c4q9', chapter: 4, question: 'Quantum computers use which unit to store information?', options: ['Bits', 'Bytes', 'Qubits', 'Pixels'], answerIndex: 2, emoji: '⚛️', img: 'quantum-computing' },
  { id: 'c4q10', chapter: 4, question: 'A regular bit can only have which values?', options: ['0 or 1', '0, 1 or 2', 'Any number', 'A or B'], answerIndex: 0, emoji: '💻', img: 'quantum-computing' },
  { id: 'c4q11', chapter: 4, question: 'A drone is also known as:', options: ['Unmanned Aerial Vehicle (UAV)', 'Underwater Auto Vehicle', 'Universal AI Vehicle', 'Ultra Amplified Vehicle'], answerIndex: 0, emoji: '🚁', img: 'drone' },
  { id: 'c4q12', chapter: 4, question: 'Which of these is NOT a common use of drones mentioned in the book?', options: ['Filming', 'Military surveillance', 'Cooking food', 'Delivery of goods'], answerIndex: 2, emoji: '🚁', img: 'drone' },
  { id: 'c4q13', chapter: 4, question: 'Virtual Reality (VR) is experienced using a:', options: ['Headset', '3DBear app', 'Search engine', 'Modem'], answerIndex: 0, emoji: '🥽', img: 'virtual-reality' },
  { id: 'c4q14', chapter: 4, question: 'Augmented Reality (AR) adds digital images on top of:', options: ['The real world', 'A blank screen', 'A printed book', 'A blockchain ledger'], answerIndex: 0, emoji: '📲', img: 'augmented-reality' },
  { id: 'c4q15', chapter: 4, question: 'Which app is mentioned for experiencing Augmented Reality with 3D animals?', options: ['3DBear', 'TeamViewer', 'Blogger', 'LinkedIn'], answerIndex: 0, emoji: '🦁', img: 'augmented-reality' },
  { id: 'c4q16', chapter: 4, question: 'Blockchain is best described as a:', options: ['Secure ledger database', 'Search engine', 'Virtual assistant', 'Video game'], answerIndex: 0, emoji: '🔗', img: 'blockchain' },
  { id: 'c4q17', chapter: 4, question: 'Once a new block is added to the blockchain, it becomes:', options: ['Permanent and unalterable', 'Temporary', 'Editable by anyone', 'Deleted automatically'], answerIndex: 0, emoji: '🔗', img: 'blockchain' },
  { id: 'c4q18', chapter: 4, question: 'Metaverse is a combination of the words:', options: ['Meta + Universe', 'Meta + Inverse', 'Meta + Reverse', 'Mega + Universe'], answerIndex: 0, emoji: '🕹️', img: 'metaverse' },
  { id: 'c4q19', chapter: 4, question: 'In the Metaverse, people interact using:', options: ['Digital avatars', 'Paper letters', 'Landline phones', 'Physical robots only'], answerIndex: 0, emoji: '🕹️', img: 'metaverse' },
  { id: 'c4q20', chapter: 4, question: 'RPA stands for:', options: ['Robotic Process Automation', 'Remote Program Access', 'Rapid Personal Assistant', 'Robot Powered App'], answerIndex: 0, emoji: '🦾', img: 'rpa' },
  { id: 'c4q21', chapter: 4, question: 'RPA bots are mainly used for:', options: ['High-volume repetitive tasks', 'Cooking meals', 'Painting pictures', 'Growing plants'], answerIndex: 0, emoji: '🦾', img: 'rpa' },
  { id: 'c4q22', chapter: 4, question: '3D Printing creates objects by:', options: ['Placing thin layers of material one over another', 'Printing ink on paper', 'Cutting wood with a saw', 'Melting glass instantly'], answerIndex: 0, emoji: '🖨️', img: '3d-printing' },
  { id: 'c4q23', chapter: 4, question: 'Which material can a 3D printer use?', options: ['Plastic or metal', 'Only paper', 'Only water', 'Only sand'], answerIndex: 0, emoji: '🖨️', img: '3d-printing' },
  { id: 'c4q24', chapter: 4, question: 'Which of these is an example of the Metaverse mentioned in the book?', options: ['VRChat', 'Alexa', 'LinkedIn', 'Blogger'], answerIndex: 0, emoji: '🌌', img: 'metaverse' },
  { id: 'c4q25', chapter: 4, question: 'SEO stands for:', options: ['Search Engine Optimization', 'Secure Email Operation', 'System Efficiency Output', 'Search Every Option'], answerIndex: 0, emoji: '🔍', img: 'seo' },
  { id: 'c4q26', chapter: 4, question: 'Mark Zuckerberg launched Facebook in the year:', options: ['2004', '1999', '2010', '1994'], answerIndex: 0, emoji: '📘', img: 'social-networking' },
];

export const chapter4TrueFalse: TrueFalseItem[] = [
  { id: 'c4tf1', chapter: 4, statement: 'Alexa is a virtual assistant.', answer: true },
  { id: 'c4tf2', chapter: 4, statement: 'Blockchain is a secure ledger database shared by participating computers.', answer: true },
  { id: 'c4tf3', chapter: 4, statement: '3D Printing can be done using a traditional printer on paper.', answer: false },
  { id: 'c4tf4', chapter: 4, statement: 'IoT connects electronic devices such as a refrigerator to the Internet using sensors and software.', answer: true },
  { id: 'c4tf5', chapter: 4, statement: 'Quantum computing encodes information only in regular bits (0 or 1).', answer: false },
  { id: 'c4tf6', chapter: 4, statement: 'Virtual Reality uses a headset to show a virtual environment.', answer: true },
  { id: 'c4tf7', chapter: 4, statement: 'Augmented Reality adds digital layers on top of the real world.', answer: true },
  { id: 'c4tf8', chapter: 4, statement: 'A drone always needs an onboard human pilot sitting inside it.', answer: false },
  { id: 'c4tf9', chapter: 4, statement: 'Metaverse is an elaborated version of VR and AR platforms.', answer: true },
  { id: 'c4tf10', chapter: 4, statement: 'RPA bots can operate round-the-clock with high precision.', answer: true },
  { id: 'c4tf11', chapter: 4, statement: 'John McCarthy is credited with coining the term Artificial Intelligence.', answer: true },
  { id: 'c4tf12', chapter: 4, statement: 'Siri is developed by Amazon.', answer: false },
  { id: 'c4tf13', chapter: 4, statement: 'A new block added to a blockchain can be freely edited later.', answer: false },
  { id: 'c4tf14', chapter: 4, statement: 'Quantum computers can be much faster than regular computers for certain problems.', answer: true },
];

export const chapter4FillBlanks: FillBlankItem[] = [
  { id: 'c4fb1', chapter: 4, sentence: '___ is the network of things connected together, passing useful information with the help of the Internet.', options: ['IoT', 'AI', 'VR', 'SEO'], answer: 'IoT' },
  { id: 'c4fb2', chapter: 4, sentence: 'Siri is developed by ___.', options: ['Apple', 'Google', 'Amazon', 'Microsoft'], answer: 'Apple' },
  { id: 'c4fb3', chapter: 4, sentence: 'Metaverse is a virtual world where people interact via their digital ___.', options: ['avatars', 'passwords', 'emails', 'robots'], answer: 'avatars' },
  { id: 'c4fb4', chapter: 4, sentence: '___ is the simulation of human intelligence by machines.', options: ['Artificial Intelligence', 'Blockchain', '3D Printing', 'IoT'], answer: 'Artificial Intelligence' },
  { id: 'c4fb5', chapter: 4, sentence: 'A ___ is an application program that uses AI to understand natural language.', options: ['virtual assistant', 'search engine', 'modem', 'blog'], answer: 'virtual assistant' },
  { id: 'c4fb6', chapter: 4, sentence: 'Quantum computers use ___ instead of regular bits.', options: ['qubits', 'pixels', 'kilobytes', 'nodes'], answer: 'qubits' },
  { id: 'c4fb7', chapter: 4, sentence: 'A drone is also called an Unmanned Aerial ___.', options: ['Vehicle', 'Robot', 'Machine', 'Device'], answer: 'Vehicle' },
  { id: 'c4fb8', chapter: 4, sentence: 'Blockchain creates a ___ and unalterable record of transactions.', options: ['permanent', 'temporary', 'hidden', 'weekly'], answer: 'permanent' },
  { id: 'c4fb9', chapter: 4, sentence: 'RPA uses software ___ to perform repetitive tasks.', options: ['robots', 'printers', 'headsets', 'cables'], answer: 'robots' },
  { id: 'c4fb10', chapter: 4, sentence: '3D printers build objects using very thin ___ placed one over another.', options: ['layers', 'wires', 'pixels', 'nodes'], answer: 'layers' },
];

export const chapter4Scramble: ScrambleItem[] = [
  { id: 'c4sc1', chapter: 4, word: 'ROBOT', hint: 'A machine that can do jobs on its own', emoji: '🤖', img: 'ai' },
  { id: 'c4sc2', chapter: 4, word: 'QUANTUM', hint: 'Type of computing that uses qubits', emoji: '⚛️', img: 'quantum-computing' },
  { id: 'c4sc3', chapter: 4, word: 'DRONE', hint: 'A flying machine with no pilot inside', emoji: '🚁', img: 'drone' },
  { id: 'c4sc4', chapter: 4, word: 'HEADSET', hint: 'Worn on the head to see a VR world', emoji: '🥽', img: 'virtual-reality' },
  { id: 'c4sc5', chapter: 4, word: 'AVATAR', hint: 'Your digital character in the Metaverse', emoji: '🕹️', img: 'metaverse' },
  { id: 'c4sc6', chapter: 4, word: 'LEDGER', hint: 'Blockchain is a secure ___ database', emoji: '🔗', img: 'blockchain' },
  { id: 'c4sc7', chapter: 4, word: 'PRINTER', hint: 'A 3D ___ builds objects layer by layer', emoji: '🖨️', img: '3d-printing' },
  { id: 'c4sc8', chapter: 4, word: 'ALEXA', hint: "Amazon's talking helper app", emoji: '🔊', img: 'smart-speaker' },
];

export const sortGame4Assistants: SortGameData = {
  id: 'assistants-sort',
  title: 'Sort the Virtual Assistants by Company',
  categories: ['Apple', 'Google', 'Amazon'],
  items: [
    { name: 'Siri', category: 'Apple', emoji: '🍎', img: 'virtual-assistant' },
    { name: 'Google Assistant', category: 'Google', emoji: '🔵', img: 'virtual-assistant' },
    { name: 'Alexa', category: 'Amazon', emoji: '📦', img: 'smart-speaker' },
  ],
};

export const sortGame4VrAr: SortGameData = {
  id: 'vr-ar-sort',
  title: 'Is it Virtual Reality or Augmented Reality?',
  categories: ['Virtual Reality', 'Augmented Reality'],
  items: [
    { name: 'Wearing a headset to enter a fully make-believe world', category: 'Virtual Reality', emoji: '🥽', img: 'virtual-reality' },
    { name: 'Seeing a 3D animal appear in your room through a phone camera', category: 'Augmented Reality', emoji: '📲', img: 'augmented-reality' },
    { name: 'Using a Snapchat lens filter on your face', category: 'Augmented Reality', emoji: '👻', img: 'augmented-reality' },
    { name: 'Training pilots inside a flight simulator headset', category: 'Virtual Reality', emoji: '✈️', img: 'virtual-reality' },
    { name: 'Playing a fully immersive VR video game', category: 'Virtual Reality', emoji: '🎮', img: 'virtual-reality' },
    { name: 'Watching a digital fish swim across your real room', category: 'Augmented Reality', emoji: '🐟', img: 'augmented-reality' },
  ],
};

export const sequence4Blockchain: SequenceGameData = {
  id: 'blockchain-steps',
  title: 'How Blockchain Works',
  emoji: '🔗',
  img: 'blockchain',
  steps: [
    'Someone requests a transaction',
    'The transaction is broadcast to a network of nodes',
    'Nodes validate the transaction using known algorithms',
    'The verified transaction is combined with others into a new block',
    'The new block is added to the existing blockchain',
    'The transaction is complete',
  ],
};

export const sequence4Printing: SequenceGameData = {
  id: '3d-printing-steps',
  title: 'How 3D Printing Works',
  emoji: '🖨️',
  img: '3d-printing',
  steps: [
    'Create a computer file of the object',
    'Send the file to the 3D printer',
    'The printer picks a material like plastic or metal',
    'The material is placed in very thin layers',
    'Layers are added one over another',
    'The final object is complete',
  ],
};
