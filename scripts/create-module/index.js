const CvScript = require('cv-script').default;
const path = require('path');
const { moduleNameQuestion } = require('cv-script/dist/utils');

// 模板地址
const templatePath = path.join(__dirname, 'templates');
const distPath = path.join(__dirname, '..', '..', 'src', 'views');

const firstCharToUpperCase = str => str[0].toUpperCase() + str.slice(1);
const firstCharToLowerCase = str => str[0].toLowerCase() + str.slice(1);
const fileDataMap = (fileData, params, template) => {
  let { moduleName, fileName } = params;
  if (!moduleName) {
    moduleName = fileName
      .split(/[\/\-]/g)
      .map(firstCharToUpperCase)
      .join('');
    moduleName = firstCharToLowerCase(moduleName);
  }

  const lowerCaseModuleName = moduleName[0].toLowerCase() + moduleName.slice(1);
  const firstCharUpperCaseModuleName = moduleName[0].toUpperCase() + moduleName.slice(1);
  return fileData
    .replace(/ModuleName/g, firstCharUpperCaseModuleName)
    .replace(/modulename/g, lowerCaseModuleName);
};
const mapWriteFile = (files, params) => {
  return files.map(template => {
    if (template.templateName.indexOf('index') > -1) {
      template.isCvDir = true;
    }

    if (template.templateName.indexOf('store') > -1) {
      template.templateName = 'index.js';
      template.distPath = path.join(__dirname, '..', '..', 'src', 'store');
    }
    if (template.templateName.indexOf('service') > -1) {
      template.distPath = path.join(__dirname, '..', '..', 'src', 'store');
    }
    return template;
  });
};

const cvs = new CvScript({
  questions: [moduleNameQuestion],
  templateDirPath: templatePath,
  templateFilePath: templatePath,
  distPath: distPath,
  fileDataMaps: [fileDataMap],
  mapWriteFile
});

cvs.start();
