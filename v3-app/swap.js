const fs = require('fs');
const path = require('path');

const indexPath = '/Users/soulhammer/projects/selalink-website/v3-app/src/pages/[lang]/index.astro';
let content = fs.readFileSync(indexPath, 'utf-8');

// Extract the bento grid section content
const sectionRegex = /(<section class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-\[230px\] md:auto-rows-\[350px\]">)([\s\S]*?)(<\/section>)/;
const match = content.match(sectionRegex);
if (!match) {
  console.error('Could not find bento grid section');
  process.exit(1);
}

const header = match[1];
const body = match[2];
const footer = match[3];

// Let's parse the cards in the body.
// The cards are <a> tags with class "bento-card".
// Since we want to swap BuildSelf and FreshSnap, let's extract each card block.
// A card block starts with <a ... class="bento-card ..."> and ends with </a>.
// Since there are exactly 5 cards, we can split them or match them.
const cardRegex = /<a\s+href=\{`\/\${lang}\/apps\/([^/]+)\/`\}[\s\S]*?<\/a>/g;
const cards = {};
let cardMatch;
while ((cardMatch = cardRegex.exec(body)) !== null) {
  const appName = cardMatch[1];
  cards[appName] = cardMatch[0];
}

console.log('Found apps:', Object.keys(cards));

// Let's modify the cards' classes and mockups to fit their new sizes.
// 1. BuildSelf was col-span-2, now it becomes col-span-1.
// Change class from "col-span-1 md:col-span-2 row-span-2" to "col-span-1 row-span-2"
// Also make the 3D mockup slightly smaller.
let buildSelfCard = cards['buildself']
  .replace('class="bento-card col-span-1 md:col-span-2 row-span-2', 'class="bento-card col-span-1 row-span-2')
  .replace('w-[55%] sm:w-[45%] md:w-[70%] lg:w-[65%] h-[45%] sm:h-[55%] md:h-[80%] lg:h-[85%]', 'w-[75%] sm:w-[65%] md:w-[85%] lg:w-[80%] h-[45%] sm:h-[50%] md:h-[70%] lg:h-[75%]');

// 2. FreshSnap was col-span-1, now it becomes col-span-2.
// Change class from "col-span-1 row-span-2" to "col-span-1 md:col-span-2 row-span-2"
// Also make the 3D mockup slightly wider.
let freshSnapCard = cards['freshsnap']
  .replace('class="bento-card col-span-1 row-span-2', 'class="bento-card col-span-1 md:col-span-2 row-span-2')
  .replace('w-[80%] sm:w-[55%] md:w-[75%] lg:w-[70%] h-[62%] sm:h-[60%] md:h-[80%] lg:h-[85%]', 'w-[65%] sm:w-[50%] md:w-[70%] lg:w-[65%] h-[62%] sm:h-[60%] md:h-[80%] lg:h-[85%]');

// Reconstruct the body with the new order:
// 1. freshself
// 2. logself
// 3. buildself
// 4. freshsnap
// 5. moodself
const newBody = `
\t\t\t${cards['freshself']}

\t\t\t${cards['logself']}

\t\t\t${buildSelfCard}

\t\t\t${freshSnapCard}

\t\t\t${cards['moodself']}
\t\t`;

const newContent = content.replace(sectionRegex, `${header}${newBody}${footer}`);
fs.writeFileSync(indexPath, newContent, 'utf-8');
console.log('Homepage app order successfully rearranged!');
