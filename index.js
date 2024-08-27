#!/usr/bin/env node

// required modules

import boxen from 'boxen';
import chalk from 'chalk';

// import terminalImage from 'terminal-image';

// async operation to fetch the image
// const logo = await terminalImage.file('myPhoto.jpeg',{width: 50});

// all your data
const content = `
${chalk.bold('Name:')} Bandhan Majumder
${chalk.yellow('About:')} Young and noob..
${chalk.whiteBright('GitHub:')} https://github.com/bandhan-majumder
${chalk.cyan('Twitter:')} https://x.com/MEbandhan
${chalk.red('Email:')} bandhan.majumder4@gmail.com
${chalk.magenta('LinkedIn:')} https://www.linkedin.com/in/bandhan-majumder-5a10a1248/

${chalk.bold('Languages:')}
${chalk.yellow('JavaScript')} ${chalk.blue('Python')} ${chalk.red('Java')} ${chalk.cyanBright('Others')}

${chalk.bold('Frameworks:')}
${chalk.blue('React')} ${chalk.green('Express')}

${chalk.bold('Others:')}
${chalk.blue('Docker')} ${chalk.black('Git')} ${chalk.yellow('Linux')} ${chalk.whiteBright('AWS')} ${chalk.white('Jenkins')}
`;

// outside box styling
const box = boxen(content, {
  padding: 1,
  margin: 1,
  borderStyle: "double",
  borderColor: 'green',
  float: 'center',
  width: 80 // Adjust this value to fit your content
});

console.log(box);