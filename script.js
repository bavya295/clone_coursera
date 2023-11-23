function slide(){
 console.log("called");
    var filterSlider = document.getElementById('filterSlider');
    if (filterSlider.style.right === '-300px' || filterSlider.style.right === '') {
        filterSlider.style.right = '0';
        filterSlider.style.display= "block";
    } else {
        filterSlider.style.right = '-300px';
    }
}




function toggleArrow(element) {
    element.classList.toggle('upside-down');
  }

  // Function to toggle the checked state of the radio buttons
  

  let clickCountLevel = 0;
let clickCountDuration = 0;

function toggleCheckedState(radioButton, type) {
    if (type === 'level') {
        clickCountLevel++;
        radioButton.checked = clickCountLevel % 2 !== 0;
    } else if (type === 'duration') {
        clickCountDuration++;
        radioButton.checked = clickCountDuration % 2 === 1;
    }
    filterF();
}
  


function filterF() {
    const levelRadios = document.getElementsByName('level');
    const durationRadios = document.getElementsByName('duration');

    let selectedLevel = '';
    let selectedDuration = '';

    // Get the selected level
    for (const radio of levelRadios) {
        if (radio.checked) {
            selectedLevel = radio.id; // Use ID as the selected value
            break;
        }
    }

    // Get the selected duration
    for (const radio of durationRadios) {
        if (radio.checked) {
            selectedDuration = radio.id; // Use ID as the selected value
            break;
        }
    }

    const cards = document.querySelectorAll('.card');

    cards.forEach(card => {
        const cardLevel = card.getAttribute('data-level');
        const cardDuration = card.getAttribute('data-duration');

        // Check if the card matches the selected filters or if no filters are selected
        if ((cardLevel==selectedLevel)||(cardDuration==selectedDuration)||((cardDuration==selectedDuration))&&(cardLevel==selectedLevel)) {
            card.style.display = 'block'; // Show the card
        } else {
            card.style.display = 'none'; // Hide the card
        }
    });
}

  
  function clearAll(){
    const cards = document.querySelectorAll('.card');
    cards.forEach(s=>{
      s.style.display='block';
    })
  }
  //here
  function toggleSidebar() {
    let sb = document.getElementById("sidebar");
  let cb=document.getElementById("closebutton");
    // Toggle the sidebar's visibility by changing its class
    sb.classList.toggle("show-sidebar");
    if (sb.classList.contains("show-sidebar")) {
      cb.style.left="-80px";
      cb.innerHTML = '&#10005'; // Change to close (cross) icon
     
    } 
    else {
      cb.innerHTML = '&#9776'; // Change back to hamburger icon
      cb.style.left="-240px";
    }
  }
  function displayFilter(){
    console.log("called");
    let content=document.getElementById("filterdiv");
    content.classList.toggle("sidebar");

  }
  function closeFilter(){
    let closingcontent=document.getElementById("filterdiv");
    closingcontent.classList.toggle("sidebar");
   
  }
  //here
  
