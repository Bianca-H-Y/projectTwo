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
const studentList = document.querySelectorAll('.student-item');
//correctly targeting the student-items
//Now I want to create a variable that target for all children of the class 'student-list' 
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
function showTenPage(list, page) {
    let startIndex = (page * tenStudents) - tenStudents; //Display a "page" gives math//
    let endIndex = page * tenStudents;
    //Now create a for loop as project notes suggests to loop over list parameters
    for (let i = 0; i < list.length; i++) { //pulled a error = missing
        //&& is a boolean operator it mean both statements must be true
        if( i >= startIndex && i <= endIndex){ //this make the program stop at 10
            list[i].style.display = 'block'; //error needed to add block
        } else { //corected tabs and missing let
/***Because we need to hide the info not being displayed we need to continue 
 * into a else statement--meaning that student lying outside the if coding
 * need to be cotrolled with the else staement: if not display, else hide.
 * style display--we can't use jQuery but MDN element target style.display 
 * is functionally the same***/
        list.style.display = 'none'; 
        //wasn't getting errors but reallized test file wasn't attached to HTML--testing now
    }
}
}//error where coming from missing closing curly brace.


//Function for navigation buttons

/*** 
   Create the `appendPageLinks function` to generate, append, and add 
   functionality to the pagination buttons.
***/
//use the appendPageLinks FUnction in the study guide--it builds the code
//divide total # list items by max number of items per page
    //.length is going to be used and ceiling to round up from the max
    //let totalpage.length /
function appendPageLinks(list) {
    const totalPages = Math.ceil(list.length / tenStudents); //total pages
    //create div; exmaples in video "filter invite who have not responded"; personal notes #7
    const div = document.createElement('div');
    div.className = 'pagination'; //<div class="pagination"> HTML line 119
    const classDivPage = document.querySelector('.page'); //.page denotes a class element is being referenced/appended 
    classDivPage.appendChild(div);

    //add a ul to the pagination div created to store the pagonation links
    const ulPaginated = document.createElement('ul');
    div.appendChild(ulPaginated);
    
    //create a for loop to add li and a tags to each page
    //is abouve on line 77--const totalPages = math/ceil (list.length / tenStudents);
    for (let i = 1; i <= totalPages; i++) {
        //add li to the ul--pay attention to nesting
        const li = document.createElement('li');
        ulPaginated.appendChild(li);
        //add a tag to the li-pay attention to nesting
        const a = document.createElement('a');
        li.appendChild(a);

        //Each LI element should contain an A element with an href attribute of #, and text set to the page number each link will show. First link is 1. Second link is 2. And so on.
        const aFirst = document.querySelector('a');
        a.href = "#";
        a.textContent = i; //i=1 //use node.tetcontent
        aFirst.clalssName - 'active';

        const aFollowing =  document.querySelectorAll('a');
         //Add an event listener to each a tag.
        for (let j = 1; j <= aFollowing.length; j++) {
        a.addEventListener('click', (event) =>{
            showTenPage(list, j);
                for (let K = 0; k < aFollowing.length; K++) {
                    aFollowing[k].className = '';
                }
                event.target.className = 'active'; 
    });
}
    }
}
//call the functions
showTenPage(studentList, 1);
appendPageLinks(studentList);




// Remember to delete the comments that came with this file, and replace them with your own code comments.