const csv = require('csv-parser')
const fs = require('fs')
const results = [];

const release = '2023-01-31'
const releaseInputFile = release + '.csv'
const radar = './radar'
const currentRadar = radar + '/' + release

recreateFolder(currentRadar)
createRadar(radar + '/' + releaseInputFile, currentRadar)

function createRadar(inputFile, currentRadar) {
  fs.createReadStream(inputFile)
    .pipe(csv())
    .on('data', (data) =>  {
      var filename = toFilename(data)
      console.log(filename)
      var content = toMarkdown(data)
      //console.log(content)
      if (filename !== undefined) {
        writeToFile(currentRadar + '/' + filename, content)
      }
    })
    .on('end', () => {
      console.log("Done!");
    }); 
}

function toMarkdown(data) {
  return '' +
    '---\n' +
    'title:    ' + data["Technologie"] + '\n' +
    'ring:     ' + mapRings(data["Ring"]) + '\n' +
    'quadrant: ' + mapQuadrants(data["Quadrant"]) + '\n' +
    '---\n\n' +
    data["Beschreibung"]
}

function toFilename(data) {
  let tech = data["Technologie"];
  console.log(tech)
  console.log(typeof tech)
  var filename = tech.replace(/ /g, '-').replace(/\(/g, '').replace(/\)/g, '').toLowerCase()
  if (filename) {
    return filename + '.md'
  }
}

function mapRings(ring) {
  switch (ring) {
    case 'Halten (Hold)': return 'hold'
    case 'Abschätzen (Assess)': return 'assess'
    case 'Testen (Trial)': return 'trial'
    case 'Verbreiten (Adopt)': return 'adopt'
  }
}

function mapQuadrants(quadrant) {
  switch (quadrant) {
    case 'Konzepte und Methoden': return 'concepts-and-methods'
    case 'Tools': return 'tools'
    case 'Libraries, Frameworks und Programmiersprachen': return 'libraries-frameworks-and-languages'
    case 'Plattformen': return 'platforms'
  }
}

function writeToFile(file, content) {
  fs.writeFile(file, content, (err) => {
    if (err)
      console.log(err)
    else {
      console.log('File written successfully: `' + file + '`.')
    }
  })
}

function recreateFolder(folder) {
  fs.rmSync(folder, { recursive: true, force: true }, (err) => {
    if (err)
      console.log(err)
    else {
      console.log('Removed folder: `' + folder + '`.')
    }
  })
  fs.mkdirSync(folder, {recursive: true}, (err) => {
    if (err)
      console.log(err)
    else {
      console.log('Recreated folder: `' + folder + '`.')
    }
  })
}
