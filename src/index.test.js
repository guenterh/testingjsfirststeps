//expect gives us a natural way to write assertions
import mocha from 'mocha'
import chai from "chai";

import getPropertyWithDefault from "./index"



//describe gives us the possibility to group related tests together
//it allows us to specify individual tests

//second argument - sort of a callback that just is gonna contain all of the individual test cases
mocha.describe ('getPropertyWithDefault - basic functionality', () => {

    mocha.it ('it returns the correct value when the property exists', () => {


        const person = {name: 'John Doe', age: 30, hairColor: 'brown'}
        const actual = getPropertyWithDefault(
            'name',
            'N/A',
            person
        )
        console.log(actual)
        const expected = 'John Doe'
        //Mocha will mark this test as failed if it fails

        chai.expect(actual).to.equal(expected)
    })

    })

//https://docs.next.tech/creator/how-tos/testing-techniques/testing-es6-code-with-mocha-and-babel

