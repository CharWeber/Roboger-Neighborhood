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



  describe workNum()

  test: takes user input and turns into array of numbs
  code: const userInput = "KBHSDjkh123"
  workNum(userInput)
  expected outcome: NumAr = [1, 2, 3]

  test: it should return an array with 0 if the number 0 is inputted
  code: roboger(0).toequal([0])

  test: it should return array conataing numbers up to the user inputted number
  code roboger(32).toEqual([0,1,2,3,4,5,6,7...until 32])

  test: it should return objects in array as individual strings
  code: roboger(32).toequal(["0", "1", "2", "3", ....etc])

  describe roboger()

  test: exception 3; it should replace the number "3" with "Won't you be my Neighbor?"
  code: roboger(3).toEqual([0, 1, 2, "won't you be my neighbor?"])

  test:exception 2; It should replace the number "2" with "Boop!" (except for when a 3 is present)
  code: roboger(3).toEqual(["0", "1", "Boop!", "Won't you be my neighbor?"])

  test: exception 1; it should return the number 1 as the word "Beep!"
  code: roboger(3).toEqual(["0", "Beep!", "Boop!", "Won't you be my neighbor?"])

  Describe: User Interface

  test: returns each item in array in UL
  code: input submitted "5"
  expected Output:
    <ul>
      <li> 0 </li>
      <li> Beep! </li>
      <li> Boop! </li>
      <li> "Won't you be my neighbor?" </li>
      <li> "4" </li>
      <li> "5" </li>
    </ul>



# _{Application Name}_

#### _{Brief description of application}_

#### By _**{List of contributors}**_

## Technologies Used

* _List all_
* _the major technologies_
* _you used in your project_
* _here_

## Description

_{This is a detailed description of your application. Give as much detail as needed to explain what the application does as well as any other information you want users or other developers to have.}_

## Setup/Installation Requirements

* _This is a great place_
* _to list setup instructions_
* _in a simple_
* _easy-to-understand_
* _format_

_{Leave nothing to chance! You want it to be easy for potential users, employers and collaborators to run your app. Do I need to run a server? How should I set up my databases? Is there other code this application depends on? We recommend deleting the project from your desktop, re-cloning the project from GitHub, and writing down all the steps necessary to get the project working again.}_

## Known Bugs

* _Any known issues_
* _should go here_

## License

_{Let people know what to do if they run into any issues or have questions, ideas or concerns.  Encourage them to contact you or make a contribution to the code.}_

## Contact Information

_{Add your contact information here.}_