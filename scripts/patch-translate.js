const replace = require('replace-in-file')

var buildPath = './build/'
if (process.argv.length > 2) {
  buildPath = process.argv[2];
}

const replacements = [
  {
    from: /January_February_March_April_May_June_July_August_September_October_November_December/g,
    to: 'Januar_Februar_März_April_Mai_Juni_Juli_August_September_Oktober_November_Dezember'
  },
  {
    from: /Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec/g,
    to: 'Jan_Feb_März_Apr_Mai_Juni_Juli_Aug_Sept_Okt_Nov_Dez'
  },
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
