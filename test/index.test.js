
//expect gives us a natural way to write assertions
//import {expect} from "chai";
import GetPropertyValue from "../src/index.js";
//require ("../src/index")
import mocha from 'mocha'
import { assert, expect } from 'chai'

//describe gives us the possibility to group related tests together
//it allows us to specify individual tests

//second argument - sort of a callback that just is gonna contain all of the individual test cases
mocha.describe ('getPropertyWithDefault - basic functionality', () => {

    mocha.it ('it returns the correct value when the property exists', () => {
        //this brings us to a little piece of testing philosophy that he likes to pass off to people when the are taking
        //his courses
        //The tests should be as simple as possible
        //an dthey shouls always make sure that some expected value (the function returns)
        //matches the actual value

        const person = {name: 'John Doe', age: 30, hairColor: 'brown'}
        const actual = GetPropertyValue(
            'name',
            'N/A',
                person
        )
        const expected = 'nöö'
        //Mocha will mark this test as failed if it fails

        chai.expect(actual).to.equal(expected)
    })

    })

/*

 */