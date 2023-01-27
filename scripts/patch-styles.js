const replace = require('replace-in-file')

var buildPath = './build/'
if (process.argv.length > 2) {
  buildPath = process.argv[2];
}

const replacements = [
  {
    from: /<\/head>/g,
    to: '<link rel="stylesheet" href="/styles.css"></head>'
  }
]

for (const index in replacements) {
  console.log(replacements[index])

  const options = {
    files: buildPath + '**/*.html',
    from: replacements[index].from,
    to: replacements[index].to,
  };

  try {
    const results = replace.sync(options);
    console.log('Replacement results:', results);
  } catch (error) {
    console.error('Error occurred:', error);
  }
}
