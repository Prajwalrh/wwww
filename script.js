// Array of role texts
const roles = ['CSE Student', 'Passionate Learner', 'Tech Enthusiast', 'Proactive Attitude','Front-End Proficiency' , ' Back-End Understanding'];
let currentIndex = 0;

// Function to change the role text
function changeRole() {
    const roleElement = document.querySelector('.role');
    
    // Fade out the current text
    roleElement.classList.remove('visible');
    
    // Update the text content
    setTimeout(() => {
        currentIndex = (currentIndex + 1) % roles.length;
        roleElement.textContent = roles[currentIndex];
        
        // Fade in the new text
        roleElement.classList.add('visible');
    }, 500); // Matches the CSS transition duration
}

// Change the role text every 2 seconds
setInterval(changeRole, 2000);
