/******************************************
Treehouse Techdegree:
FSJS project 2 - List Filter and Pagination
******************************************/
   
// Study guide for this project - https://drive.google.com/file/d/1OD1diUsTMdpfMDv677TfL1xO2CEkykSz/view?usp=sharing


/*** 
   Add your global variables that store the DOM elements you will 
   need to reference and/or manipulate. 
   
   But be mindful of which variables should be global and which 
   should be locally scoped to one of the two main functions you're 
   going to create. A good general rule of thumb is if the variable 
   will only be used inside of a function, then it can be locally 
   scoped to that function.
***/
//Create global variables that reference the student list and will be used for functions//
//Targets the UL class element Student list
const ulStudentList = document.getElementsByClassName ('student-list');
//Now I want to create a variable that target for all children of the class 'student-list' 
const liStudentItem = ulStudentList.Chilldren;
//create a variable that designates 10 students per page
const tenStudents = 10;
//Dev Tools don't seem to pinpoint any issues with code above. Moving to creating a function.



/*** 
   Create the `showPage` function to hide all of the items in the 
   list except for the ten you want to show.

   Pro Tips: 
     - Keep in mind that with a list of 54 students, the last page 
       will only display four.
     - Remember that the first student has an index of 0.
     - Remember that a function `parameter` goes in the parens when 
       you initially define the function, and it acts as a variable 
       or a placeholder to represent the actual function `argument` 
       that will be passed into the parens later when you call or 
       "invoke" the function 
***/
//Function that shows 10 students a page with 2 parameters passed in.
function showTenPage (list, page) {
    startIndex = (page * tenStudents) - tenStudents; //Display a "page" gives math//
    endIndex = page * tenStudents;
    //Now create a for loop as project notes suggests to loop over list parameters
    for (let i = 0; i < list.length; i++) { //pulled a error = missing
        //&& is a boolean operator it mean both statements must be true
        if( i >= startIndex && i <= endIndex) //this make the program stop at 10
    } 
/***Because we need to hide the info not being displayed we need to continue 
 * into a else statement--meaning that student lying outside the if coding
 * need to be cotrolled with the else staement: if not display, else hide.
 * style display--we can't use jQuery but MDN element target style.display 
 * is functionally the same***/
    else  {
        list.style.display = 'none'; 
        //wasn't getting errors but reallized test file wasn't attached to HTML--testing now
    }
}

//Function for navigation buttons

/*** 
   Create the `appendPageLinks function` to generate, append, and add 
   functionality to the pagination buttons.
***/





// Remember to delete the comments that came with this file, and replace them with your own code comments.