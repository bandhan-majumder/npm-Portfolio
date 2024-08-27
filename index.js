#!/usr/bin/env node

// Required modules
import boxen from 'boxen';
import chalk from 'chalk';
import terminalImage from 'terminal-image';
import got from 'got';

// Async function to fetch the image (from my twitter prof photo @MEbandhan) and display the content
(async () => {
    const response = await got('https://pbs.twimg.com/profile_images/1789944853435985920/xoSDo7So_400x400.jpg');
    const logoImage = await terminalImage.buffer(response.rawBody);

    // All my data
    const content = `
${logoImage}
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

    // Outside box styling
    const box = boxen(content, {
        padding: 1,
        margin: 1,
        borderStyle: "double",
        borderColor: 'green',
        float: 'center',
        width: 80 // Adjust this value to fit your content
    });

    console.log(box);
})();