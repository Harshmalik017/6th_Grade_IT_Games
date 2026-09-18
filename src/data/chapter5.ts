import type { QuizQuestion, TrueFalseItem, FillBlankItem, ScrambleItem, SortGameData, SequenceGameData } from './types';

export const chapter5Quiz: QuizQuestion[] = [
  { id: 'c5q1', chapter: 5, question: 'Which is a slow-speed Internet connection using a regular telephone line?', options: ['Broadband', 'Dial-up', 'Wi-Fi', 'Hotspot'], answerIndex: 1, emoji: '☎️', img: 'modem' },
  { id: 'c5q2', chapter: 5, question: 'The word "Modem" is short for:', options: ['Modulate + Demodulate', 'Mode + Determine', 'Model + Demo', 'Modern + Device'], answerIndex: 0, emoji: '📠', img: 'modem' },
  { id: 'c5q3', chapter: 5, question: 'Which of these gives a high-speed Internet connection?', options: ['Dial-up', 'Broadband', 'Telegram', 'COD'], answerIndex: 1, emoji: '⚡', img: 'internet' },
  { id: 'c5q4', chapter: 5, question: 'Wi-Fi connects devices to the Internet using:', options: ['Radio waves', 'Telephone wires', 'Satellites only', 'Fibre paper'], answerIndex: 0, emoji: '📡', img: 'wifi' },
  { id: 'c5q5', chapter: 5, question: 'A wireless modem is also called a:', options: ['Dongle', 'Router only', 'Hotspot', 'Cable'], answerIndex: 0, emoji: '📶', img: 'wifi' },
  { id: 'c5q6', chapter: 5, question: 'A hotspot is a wireless network that provides:', options: ['Internet connection to mobile devices', 'Only phone calls', 'Only TV signal', 'Only radio'], answerIndex: 0, emoji: '🔥', img: 'hotspot' },
  { id: 'c5q7', chapter: 5, question: 'Turning a smartphone into a portable Internet-sharing device is called:', options: ['Tethering', 'Blogging', 'Streaming', 'E-banking'], answerIndex: 0, emoji: '🔗', img: 'tethering' },
  { id: 'c5q8', chapter: 5, question: 'Which is the most used search engine mentioned in the book?', options: ['Google', 'Bing', 'Yahoo', 'DuckDuckGo'], answerIndex: 0, emoji: '🔍', img: 'search-engine' },
  { id: 'c5q9', chapter: 5, question: 'Banking transactions performed electronically without visiting a bank is called:', options: ['E-banking', 'E-commerce', 'E-wallet', 'E-retailing'], answerIndex: 0, emoji: '🏦', img: 'net-banking' },
  { id: 'c5q10', chapter: 5, question: 'Which of these is an example of a remote access service?', options: ['TeamViewer', 'Alexa', 'Blogger', 'Wi-Fi'], answerIndex: 0, emoji: '🖥️', img: 'remote-services' },
  { id: 'c5q11', chapter: 5, question: "LinkedIn is described as the world's largest:", options: ['Professional network', 'Gaming network', 'Shopping network', 'Blogging network'], answerIndex: 0, emoji: '💼', img: 'linkedin' },
  { id: 'c5q12', chapter: 5, question: 'Video conferencing requires which of these?', options: ['Camera, microphone and speakers', 'Only a printer', 'Only a modem', 'Only a search engine'], answerIndex: 0, emoji: '📹', img: 'video-conferencing' },
  { id: 'c5q13', chapter: 5, question: 'Which app is known for focusing on security and speed for instant messaging?', options: ['Telegram', 'LinkedIn', 'Blogger', 'TeamViewer'], answerIndex: 0, emoji: '💬', img: 'chatting' },
  { id: 'c5q14', chapter: 5, question: 'E-commerce is best defined as:', options: ['Financial/business transactions on an electronic network', 'Only sending emails', 'Only chatting online', 'Only playing games'], answerIndex: 0, emoji: '🛒', img: 'e-commerce' },
  { id: 'c5q15', chapter: 5, question: 'E-commerce done through mobile devices is called:', options: ['M-commerce', 'E-banking', 'E-retailing', 'C2C'], answerIndex: 0, emoji: '📱', img: 'm-commerce' },
  { id: 'c5q16', chapter: 5, question: 'A business selling directly to consumers is an example of:', options: ['B2C', 'C2C', 'B2B', 'B2E'], answerIndex: 0, emoji: '🏢', img: 'e-commerce' },
  { id: 'c5q17', chapter: 5, question: 'OLX, where individuals sell to individuals, is an example of:', options: ['C2C', 'B2C', 'B2B', 'B2E'], answerIndex: 0, emoji: '🙋', img: 'e-commerce' },
  { id: 'c5q18', chapter: 5, question: 'A company buying supplies from a manufacturer online is an example of:', options: ['B2B', 'C2C', 'B2C', 'B2E'], answerIndex: 0, emoji: '🏭', img: 'e-commerce' },
  { id: 'c5q19', chapter: 5, question: 'B2E e-commerce mainly helps a business to:', options: ['Reduce internal expenses and improve profit', 'Sell directly to the public', 'Auction old items', 'Print 3D toys'], answerIndex: 0, emoji: '👩‍💼', img: 'e-commerce' },
  { id: 'c5q20', chapter: 5, question: 'An online business portal showing products is called an:', options: ['Electronic storefront', 'E-wallet', 'Search engine', 'Hotspot'], answerIndex: 0, emoji: '🏪', img: 'e-storefront' },
  { id: 'c5q21', chapter: 5, question: 'Selected products before checkout are collected in a:', options: ['Shopping cart', 'Blog', 'Ledger', 'Hotspot'], answerIndex: 0, emoji: '🛒', img: 'shopping-cart' },
  { id: 'c5q22', chapter: 5, question: 'Which of these is NOT a mode of electronic payment?', options: ['Credit Card', 'NetBanking', 'Cash on Delivery', 'Barter System'], answerIndex: 3, emoji: '💳', img: 'e-wallet' },
  { id: 'c5q23', chapter: 5, question: 'Paying for a product only after it is delivered is called:', options: ['Cash on Delivery (COD)', 'NetBanking', 'E-wallet', 'Credit Card'], answerIndex: 0, emoji: '💵', img: 'cash-on-delivery' },
  { id: 'c5q24', chapter: 5, question: 'A digital wallet that stores card/bank information for faster payments is called:', options: ['E-wallet', 'E-banking', 'E-retailing', 'E-mail'], answerIndex: 0, emoji: '👛', img: 'e-wallet' },
  { id: 'c5q25', chapter: 5, question: 'Amazon.com was founded by:', options: ['Jeff Bezos', 'Jack Ma', 'Sachin Bansal', 'Reid Hoffman'], answerIndex: 0, emoji: '📦', img: 'e-commerce' },
  { id: 'c5q26', chapter: 5, question: 'Flipkart was founded by Sachin Bansal and:', options: ['Binny Bansal', 'Jack Ma', 'Jeff Bezos', 'Vidit Aatrey'], answerIndex: 0, emoji: '🛍️', img: 'e-commerce' },
  { id: 'c5q27', chapter: 5, question: 'Alibaba Group was led by:', options: ['Jack Ma', 'Jeff Bezos', 'Sachin Bansal', 'Mark Zuckerberg'], answerIndex: 0, emoji: '🌏', img: 'e-commerce' },
  { id: 'c5q28', chapter: 5, question: 'A frequently updated website with entries called "posts" is a:', options: ['Blog', 'Modem', 'Hotspot', 'E-wallet'], answerIndex: 0, emoji: '📝', img: 'blog' },
  { id: 'c5q29', chapter: 5, question: 'A video-containing blog is called a:', options: ['Vlog', 'Microblog', 'Blogosphere', 'Podcast'], answerIndex: 0, emoji: '🎥', img: 'vlog' },
  { id: 'c5q30', chapter: 5, question: 'The worldwide collection of blogs is called the:', options: ['Blogosphere', 'Internet Cloud', 'Data Web', 'Search Net'], answerIndex: 0, emoji: '🌐', img: 'blog' },
];

export const chapter5TrueFalse: TrueFalseItem[] = [
  { id: 'c5tf1', chapter: 5, statement: 'Customers can easily compare item prices while online shopping.', answer: true },
  { id: 'c5tf2', chapter: 5, statement: 'It is a good idea to research a product before making an online purchase.', answer: true },
  { id: 'c5tf3', chapter: 5, statement: 'A hotspot is a wireless network that provides Internet to mobile devices.', answer: true },
  { id: 'c5tf4', chapter: 5, statement: 'Zoom is an example of a blogging website.', answer: false },
  { id: 'c5tf5', chapter: 5, statement: 'A video-containing blog can be called a vlog.', answer: true },
  { id: 'c5tf6', chapter: 5, statement: 'Dial-up connections are generally faster than broadband.', answer: false },
  { id: 'c5tf7', chapter: 5, statement: 'Wi-Fi uses radio waves to connect devices to the Internet.', answer: true },
  { id: 'c5tf8', chapter: 5, statement: 'LinkedIn is mainly used for professional networking.', answer: true },
  { id: 'c5tf9', chapter: 5, statement: 'In Cash on Delivery, payment is made before the product is shipped.', answer: false },
  { id: 'c5tf10', chapter: 5, statement: 'An e-wallet can store credit card and bank account information securely.', answer: true },
  { id: 'c5tf11', chapter: 5, statement: 'Flipkart is a Bengaluru-based Indian e-commerce company.', answer: true },
  { id: 'c5tf12', chapter: 5, statement: 'A secure website should show "https" and a lock icon.', answer: true },
  { id: 'c5tf13', chapter: 5, statement: "Tethering means sharing your phone's Internet with other devices.", answer: true },
  { id: 'c5tf14', chapter: 5, statement: 'M-commerce refers to e-commerce done using mobile devices.', answer: true },
];

export const chapter5FillBlanks: FillBlankItem[] = [
  { id: 'c5fb1', chapter: 5, sentence: 'E-commerce done through mobile devices is called ___.', options: ['m-commerce', 'e-banking', 'blogging', 'tethering'], answer: 'm-commerce' },
  { id: 'c5fb2', chapter: 5, sentence: '___ uses radio signals for a high-speed wireless Internet connection.', options: ['Wi-Fi', 'Dial-up', 'COD', 'SEO'], answer: 'Wi-Fi' },
  { id: 'c5fb3', chapter: 5, sentence: 'Flipkart is an example of an ___ website.', options: ['e-commerce', 'e-banking', 'gaming', 'blogging'], answer: 'e-commerce' },
  { id: 'c5fb4', chapter: 5, sentence: 'On a web browser, look for the ___ icon to check if a site is secure.', options: ['lock', 'battery', 'wifi', 'clock'], answer: 'lock' },
  { id: 'c5fb5', chapter: 5, sentence: 'The term ___ refers to the worldwide collection of blogs.', options: ['blogosphere', 'cyberspace', 'data cloud', 'webnet'], answer: 'blogosphere' },
  { id: 'c5fb6', chapter: 5, sentence: 'A ___ is a communication device that connects a computer to a telephone line.', options: ['modem', 'router', 'keyboard', 'monitor'], answer: 'modem' },
  { id: 'c5fb7', chapter: 5, sentence: 'Selected items before checkout are stored in a shopping ___.', options: ['cart', 'basket', 'ledger', 'wallet'], answer: 'cart' },
  { id: 'c5fb8', chapter: 5, sentence: 'Paying only when the product is delivered is called Cash on ___.', options: ['Delivery', 'Arrival', 'Order', 'Request'], answer: 'Delivery' },
  { id: 'c5fb9', chapter: 5, sentence: 'A person who owns and maintains many blogs is called a ___.', options: ['blogger', 'browser', 'developer', 'moderator'], answer: 'blogger' },
  { id: 'c5fb10', chapter: 5, sentence: 'A ___ allows you to share your smartphone Internet with other devices.', options: ['tether', 'ledger', 'avatar', 'qubit'], answer: 'tether' },
];

export const chapter5Scramble: ScrambleItem[] = [
  { id: 'c5sc1', chapter: 5, word: 'MODEM', hint: 'Modulate + Demodulate device', emoji: '📠', img: 'modem' },
  { id: 'c5sc2', chapter: 5, word: 'HOTSPOT', hint: 'A wireless Internet access point', emoji: '🔥', img: 'hotspot' },
  { id: 'c5sc3', chapter: 5, word: 'WALLET', hint: 'Digital e-___ stores payment info', emoji: '👛', img: 'e-wallet' },
  { id: 'c5sc4', chapter: 5, word: 'BLOG', hint: 'A frequently updated website of posts', emoji: '📝', img: 'blog' },
  { id: 'c5sc5', chapter: 5, word: 'CART', hint: 'Where you collect items before checkout', emoji: '🛒', img: 'shopping-cart' },
  { id: 'c5sc6', chapter: 5, word: 'MODEM', hint: 'Short for Modulate + Demodulate', emoji: '📠', img: 'modem' },
  { id: 'c5sc7', chapter: 5, word: 'TETHER', hint: "Sharing your phone's Internet with other devices", emoji: '🔗', img: 'tethering' },
  { id: 'c5sc8', chapter: 5, word: 'VLOG', hint: 'A video blog', emoji: '🎥', img: 'vlog' },
];

export const sortGame5Ecommerce: SortGameData = {
  id: 'ecommerce-sort',
  title: 'Sort the E-Commerce Models',
  categories: ['B2C', 'C2C', 'B2B'],
  items: [
    { name: 'Online store selling shoes to customers', category: 'B2C', emoji: '👟', img: 'e-commerce' },
    { name: 'OLX-style auction between two people', category: 'C2C', emoji: '🙋', img: 'e-commerce' },
    { name: 'Company buying raw material from a supplier', category: 'B2B', emoji: '🏭', img: 'e-commerce' },
    { name: 'A bookstore selling novels to readers online', category: 'B2C', emoji: '📚', img: 'e-commerce' },
    { name: 'Selling your old cycle to a neighbour online', category: 'C2C', emoji: '🚲', img: 'e-commerce' },
    { name: 'Factory ordering machine parts from another factory', category: 'B2B', emoji: '⚙️', img: 'e-commerce' },
  ],
};

export const sortGame5Payments: SortGameData = {
  id: 'payments-sort',
  title: 'Sort the Modes of Payment',
  categories: ['Pay Online', 'Pay on Delivery'],
  items: [
    { name: 'Credit Card', category: 'Pay Online', emoji: '💳', img: 'e-wallet' },
    { name: 'Debit Card', category: 'Pay Online', emoji: '💳', img: 'e-wallet' },
    { name: 'NetBanking', category: 'Pay Online', emoji: '🏦', img: 'net-banking' },
    { name: 'E-Wallet', category: 'Pay Online', emoji: '👛', img: 'e-wallet' },
    { name: 'Cash on Delivery', category: 'Pay on Delivery', emoji: '💵', img: 'cash-on-delivery' },
  ],
};

export const sequence5Purchase: SequenceGameData = {
  id: 'purchase-steps',
  title: 'Path of an Online Purchase',
  emoji: '🛍️',
  img: 'e-commerce',
  steps: [
    "Customer views the e-retailer's electronic storefront",
    'Items are collected in the electronic shopping cart',
    'Customer enters personal and financial info on a secure site',
    'Bank performs security checks and sends authorization',
    'E-retailer confirms the order and sends it to the fulfillment center',
    'Fulfillment center packages and ships the order',
    'Package is delivered to the customer',
  ],
};

export const sequence5Blog: SequenceGameData = {
  id: 'blog-steps',
  title: 'Creating a Blog',
  emoji: '📝',
  img: 'blog',
  steps: [
    'Open the Blogger website in a web browser',
    'Click SIGN IN and enter login ID and password',
    'Click Create Blog',
    'Type a name for the blog',
    'Choose a blog address (URL)',
    'Click SAVE to create the blog',
  ],
};
