const darkModeToggle = document.getElementById('dark-mode-toggle');
const defaultStylesheet = document.getElementById('default-stylesheet');
const darkModeStylesheet = document.getElementById('dark-mode-stylesheet');
const darkModeFeedbackSheet = document.getElementById('dark-mode-feedback');
const darkModeMeSheet = document.getElementById('dark-mode-me');
const darkModeNutritionSheet = document.getElementById('dark-mode-nutrition');
const foodPieChartImg = document.getElementById('food-pie-chart');

// Function to check if it's daytime or nighttime
function isDaytime() {
  const currentHour = new Date().getHours();
  return currentHour >= 6 && currentHour < 18; // Assume 6 AM to 6 PM as daytime
}

// Function to toggle dark mode
function toggleDarkMode() {
  // Toggle the disabled property of the stylesheets
  defaultStylesheet.disabled = !defaultStylesheet.disabled;
  darkModeStylesheet.disabled = !darkModeStylesheet.disabled;
  
  // Toggle the dark mode feedback sheet if available
  if (darkModeFeedbackSheet) {
    darkModeFeedbackSheet.disabled = !darkModeFeedbackSheet.disabled;
  }
  
  // Toggle the dark mode me sheet if available
  if (darkModeMeSheet) {
    darkModeMeSheet.disabled = !darkModeMeSheet.disabled;
  }
  
  // Toggle the dark mode nutrition sheet and update the image source accordingly
  if (darkModeNutritionSheet) {
    darkModeNutritionSheet.disabled = !darkModeNutritionSheet.disabled;
    if (darkModeNutritionSheet.disabled) {
      // Default CSS mode
      foodPieChartImg.src = 'assets/images/mainpage/food-pie-chart.png';
    } else {
      // Dark mode CSS
      foodPieChartImg.src = 'assets/images/mainpage/food-pie-chart-darkmode.png';
    }
  }
}

// Set the default CSS file based on the time of day
if (isDaytime()) {
  defaultStylesheet.disabled = false;
  darkModeStylesheet.disabled = true;
  if (darkModeFeedbackSheet) {
    darkModeFeedbackSheet.disabled = true;
  }
  if (darkModeMeSheet) {
    darkModeMeSheet.disabled = true;
  }
  if (darkModeNutritionSheet) {
    darkModeNutritionSheet.disabled = true;
    // Default CSS mode
    foodPieChartImg.src = 'assets/images/mainpage/food-pie-chart.png';
  }
} else {
  defaultStylesheet.disabled = true;
  darkModeStylesheet.disabled = false;
  if (darkModeFeedbackSheet) {
    darkModeFeedbackSheet.disabled = false;
  }
  if (darkModeMeSheet) {
    darkModeMeSheet.disabled = false;
  }
  if (darkModeNutritionSheet) {
    // Dark mode CSS
    darkModeNutritionSheet.disabled = false;
    foodPieChartImg.src = 'assets/images/mainpage/food-pie-chart-darkmode.png';
  }
}

// Toggle dark mode when the button is clicked
darkModeToggle.addEventListener('click', toggleDarkMode);
