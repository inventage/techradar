const replace = require('replace-in-file')

var buildPath = './build/'
if (process.argv.length > 2) {
  buildPath = process.argv[2];
}

const replacements = [
  {
    from: 'name=\"description\" content=\"Tech-Radar\"',
    to: 'name=\"description\" content=\"Welche neuen Trends gibt es in der Software Entwicklung? Welche Innovationen sind vielversprechend und welche werden bald wieder vergessen sein? Im Inventage Tech-Radar publizieren wir unsere Sicht auf Innovationen und Trends in den Bereichen Technologien, Tools, Methoden und Programmiersprachen.\"'
  }
]

for (const index in replacements) {
  console.log('Replace:', replacements[index])
  
  const options = {
    files: buildPath + 'index.html',
    from: replacements[index].from,
    to: replacements[index].to,
  };

  try {
    const results = replace.sync(options);
    console.log('Replacement results:', results, '\n');
  } catch (error) {
    console.error('Error occurred:', error);
  }
}
