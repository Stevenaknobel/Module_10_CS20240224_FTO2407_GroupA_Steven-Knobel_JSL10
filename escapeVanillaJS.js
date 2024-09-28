document.addEventListener("DOMContentLoaded", () => {
    // 🪲 Bug: Incorrect ID used for attaching the event listener
    //changed ID to solveRoom1
    document.getElementById("solveRoom1").addEventListener("click", () => {
        fetch('books.json') 
            .then(response => response.json())
            .then(books => {
                const mostRecentBook = findMostRecentBook(books);
                // 🪲 Bug: Incorrect element ID
                //changed ID to room1Result
                document.getElementById("room1Result").textContent = `The key to the next room is: ${mostRecentBook.title}`;
            });
    });

    document.getElementById("solveRoom2").addEventListener("click", () => {
        const jsConcepts = new Set(['closure', 'scope', 'hoisting', 'promises','async']);
        // 🪲 Bug: What's mssing from JS concepts?
        //added promises to js Concepts
        //actually fixed the bug by adding async so that there is an overlap
        const reactConcepts = new Set(['components', 'jsx', 'hooks', 'async']);
        // 🪲 Bug: Incorrect function call
        //changed the duplicate jsConcepts to reactConcepts
        const commonConcepts = findIntersection(jsConcepts, reactConcepts);
        document.getElementById("room2Result").textContent = `The code to unlock the door is: ${Array.from(commonConcepts).join(', ')}`;
    });

    // 🪲 Bug: Asynchronous function ?
    document.getElementById("solveRoom3").addEventListener("click", () => {
        fetch('directions.json') 
            .then(response => response.json())
            //use async to await navitgateLabyrinth
            .then( async directions => {
                const message = await navigateLabyrinth(directions);
                        // 🪲 Bug: Incorrect method
                        //changed the stuff above so this is working now, i think? 0.0
                        document.getElementById("room3Result").innerHTML = message;
                    });
            });
    });

function findMostRecentBook(books) {
    // 🪲 Bug: Logic error
    //swapped < for >
    return books.reduce((mostRecent, book) => new Date(book.published) > new Date(mostRecent.published) ? book : mostRecent);
}

function findIntersection(setA, setB) {
    // 🪲 Bug: Incorrect logic
    //completed the function to include setB
    //.filter checks all data in the setA array against all data in setB and only returns true for the data from A that is in B
    const intersection = new Set([...setA].filter(item => setB.has(item)));
    return intersection;
}

async function navigateLabyrinth(directions) {
    for (let direction of directions) {
        // 🪲 Bug: No delay
        //added await keyword to correctly use async function
        await new Promise(resolve => setTimeout(resolve, 1000));
        console.log(`Navigating: ${direction.step}`);
    }
    return "Congratulations! You've mastered the essentials of Vanilla JavaScript. Welcome to the world of React, where you'll build powerful and dynamic web applications. Let's dive in!";
}

