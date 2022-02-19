const fs = require('fs/promises');
const path = require('path');

const template = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Main project website</title>
</head>
<body>
    <h1>This was deployed using the deploy preview feature</h1>
</body>
</html>
`

async function wait(ms) {
    let timeoutId;
    return new Promise((resolve, _) => {
        timeoutId = setTimeout(resolve, ms);
    }).finally(() => clearTimeout(timeoutId));
}


async function build() {
    try {
    console.log('Building project...');
    await wait(3000);
    await fs.mkdir(path.join(__dirname, 'public'), { recursive: true });
    console.log(path.join(__dirname, 'public', 'index.html'))
    await fs.writeFile(path.join(__dirname, 'public', 'index.html'), template);
    console.log('Project created successfully');
    } catch(err) {
        console.log('Unable to create project');
        console.error(err);
    }
}






build();
