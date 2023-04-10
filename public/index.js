const fruits = [
    { name: 'lychee',
      heatLevel: '2'},
    { name: 'banana',
      heatLevel: '-2'},
    { name: 'durian',
      heatLevel: '1'},
    { name: 'apple',
      heatLevel: '0'},
    { name: 'mango',
      heatLevel: '2'},
    { name: 'watermelon',
      heatLevel: '-1'},
    { name: 'pear',
      heatlevel: '0'}
]

const searchInput = document.querySelector('.input')

searchInput.addEventListener("input", (e) => {
    // inside, we will need to achieve a few things:
    // 1. declare and assign the value of the event's target to a variable AKA whatever is typed in the search bar
    let value = e.target.value

    // 2. check: if input exists and if input is larger than 0
    if (value && value.trim().length > 0){
        // 3. redefine 'value' to exclude white space and change input to all lowercase
         value = value.trim().toLowerCase()
        // 4. return the results only if the value of the search is included in the person's name
        setList(fruits.filter(fruit => {
            return fruit.name.includes(value)
        }))
    } else {
        clearList()
    }

})

// creating and declaring a function called "setList"
// setList takes in a param of "results"
function setList(results){

    clearList()

    for (const fruit of results){
        // creating a li element for each result item
        const resultItem = document.createElement('li')

        // adding a class to each item of the results
        resultItem.classList.add('result-item')

        // grabbing the name of the current point of the loop and adding the name as the list item's text
        const text = document.createTextNode(fruit.name)

        // appending the text to the result item
        resultItem.appendChild(text)

        // appending the result item to the list
        list.appendChild(resultItem)
    }

    if (results.length === 0 ){
        noResults()
    }
}

function clearList(){
    // looping through each child of the search results list and remove each child
    while (list.firstChild){
        list.removeChild(list.firstChild)
    }
}

function noResults(){
    // create an element for the error; a list item ("li")
    const error = document.createElement('li')
    // adding a class name of "error-message" to our error element
    error.classList.add('error-message')

    // creating text for our element
    const text = document.createTextNode('No results found. Sorry!')
    // appending the text to our element
    error.appendChild(text)
    // appending the error to our list element
    list.appendChild(error)
}