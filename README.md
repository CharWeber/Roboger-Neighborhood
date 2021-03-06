
# _Mr. Roboger's Neighborhood_

#### _A website to interact with Mr. Roboger_

#### By _**Charles T Weber**_

## Technologies Used

* _CSS_
* _HTML_
* _Javascript_
* _jQuery Libraries_
* _Bootstrap Libraries_
* _Fonts linked from google fonts_

## Description

_This Website is designed to take a number input from the user and pass that information through some JS functions to have our Mr. Roboger respond with some greetings and other robot jumbo. The user will be able to see Mr. Roboger's response in the window next to his house. the program can be used repeatedly with new results replacing the old_

## Setup/Installation Requirements

* _clone this github repo to desired directory https://github.com/CharWeber/Roboger-Neighborhood_
* _open index.html in any web browser_
* _input number into field provided_
* _enjoy the neighborhood_


## Known Bugs

* _negative numbers are not displaying the results. I think my regex replace function is operating in a weird way but it hasn't been nailed down yet._

## License

__MIT 2021 Charlie Weber__

## Contact Information

_charlestweber@gmail.com_

## _Tests_

    behaviors:
    1. recieve input from user
    2. transform inout into workable str or array
    3. Numbers that contain a 3: all digits are replaced (all digits) with "Won't you be my neighbor?"
    4. Numbers that contain a 2: all digits are replaced (all digits) with "Boop!"
    5. Numbers that contain a 1: all digits are replaced (all digits) with "Beep!"
    6. User input name should be added to end of string (if added)
    7. display new robo response on HTML


  expected inputs: A positive number
  expected output: an array with the numbers displayed from zero to userinput number w/exceptions for 1,2,3,



  __describe workNum()__

    test: takes user input and turns into array of numbs
    code: const userInput = "KBHSDjkh123"
    workNum(userInput)
    expected outcome: NumAr = [1, 2, 3]

    test: it should return an array with 0 if the number 0 is inputted
    code: workNum(0).toequal([0])

    test: it should return array conataing numbers up to the user inputted number
    code workNum(32).toEqual([0,1,2,3,4,5,6,7...until 32])

    test: it should return objects in array as individual strings
    code: workNum(32).toequal(["0", "1", "2", "3", ....etc])

    test: It should return array regardless of special chracters and symbols in input
    code: workNum("skjfbhs4!@!#-^@&*)
    expected outcome: ["0", "1", "2", "3", "4",]



  __describe roboger()__

    test: exception 3; it should replace the number "3" with "Won't you be my Neighbor?"
    
    code: roboger(3).toEqual([0, 1, 2, "won't you be my neighbor?"])

    test:exception 2; It should replace the number "2" with "Boop!" (except for when a 3 is present)
    
    code: roboger(3).toEqual(["0", "1", "Boop!", "Won't you be my neighbor?"])

    test: exception 1; it should return the number 1 as the word "Beep!"
    code: roboger(3).toEqual(["0", "Beep!", "Boop!", "Won't you be my neighbor?"])

  __Describe: User Interface__

    test: returns each item in array in UL
    code: input submitted "5"
    expected output:
      <ul>
        <li> 0 </li>
        <li> Beep! </li>
        <li> Boop! </li>
        <li> "Won't you be my neighbor?" </li>
        <li> "4" </li>
        <li> "5" </li>
      </ul>

    test: returns new list, and clears old list on repeated use
    code: input submitted "3" and then "5"
    expected output:
      <ul>
        <li> 0 </li>
        <li> Beep! </li>
        <li> Boop! </li>
        <li> "Won't you be my neighbor?" </li>
        <li> "4" </li>
        <li> "5" </li>
      </ul>



