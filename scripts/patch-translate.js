const replace = require('replace-in-file')

var buildPath = './build/'
if (process.argv.length > 2) {
  buildPath = process.argv[2];
}

const replacements = [
  {
    from: /Zoom In/g,
    to: 'Vergrössern'
  },
  {
    from: /Published/g,
    to: 'Publiziert im'
  },
  {
    from: /Follow us/g,
    to: 'Folge uns'
  },
  {
    from: /How to use the/g,
    to: ''
  },
  {
    from: /How to use"," ",We,"\?/g,
    to: 'Unser "," ",We,"'
  },
  {
    from: /Technologies Overview/g,
    to: 'Technologie Übersicht'
  },
  {
    from: /Quadrant Overview/g,
    to: 'Quadrant-Übersicht'
  },
  {
    from: /"Search"/g,
    to: '"Suche"'
  },
  {
    from: /New in this version/g,
    to: 'Neu'
  },
  {
    from: /Recently changed/g,
    to: 'Verändert'
  },
  {
    from: /Unchanged/g,
    to: 'Unverändert'
  },
  {
    from: /The quadrants are/g,
    to: 'Folgende Quadrante haben wir im Tech-Radar von Inventage definiert'
  },
  {
    from: /Each of the items is classified in one of these rings/g,
    to: 'Jede Technologie wird in einen der folgenden Ringe eingeteilt'
  }
]

for (const index in replacements) {
  console.log('Replace:', replacements[index])
  
  const options = {
    files: buildPath + 'static/js/*.js',
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
