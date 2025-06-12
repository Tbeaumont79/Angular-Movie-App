const fs = require('fs');
const targetPath = './src/environments/environment.prod.ts';

const envConfigFile = `
export const environment = {
  production: true,
  apiKey: '${process.env.apiKey}',
  imageKitId: '${process.env.imageKitId}'
};
`;

fs.writeFile(targetPath, envConfigFile, (err) => {
  if (err) {
    console.error('❌ Erreur lors de la génération du fichier environment.prod.ts', err);
  } else {
    console.log('✅ Fichier environment.prod.ts généré avec succès');
  }
});
