const headingGenerator = (title, typeOfHeading) => {
    return `
        <h${typeOfHeading}>${title}</h${typeOfHeading}>
    `
}

console.log(headingGenerator('Greetings', 2));