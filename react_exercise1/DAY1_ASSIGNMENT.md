## React Day 1

Build an application with a DataEntry component that consists of two text input fields, First Name and Last Name
and a button labeled 'Add'

The Add button should append the name to a list in App.js's state. You'll want to call this.setState giving the list its old value with the new value added. Something like:

const personList = this.state.personList
personList.push(firstName + " " + lastName)
this.setState({personList: personList})

Build a Name component with a name prop. It should display the person's name in a div or li

Build a NameList component. It should have a prop set from App's personList state value. It should render the names as a list of Name components.

So you will have a form that takes a first name and a last name and the list of all entered names is displayed below and updated when the user clicks 'Add'

And pretty it up a bit with css.
