const fs = require('fs');

// Array of coding quotes for daily rotation
const codingQuotes = [
  "The best error message is the one that never shows up.",
  "Code is like humor. When you have to explain it, it's bad.",
  "Programming isn't about what you know; it's about what you can figure out.",
  "The most important property of a program is whether it accomplishes the intention of its user.",
  "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
  "First, solve the problem. Then, write the code.",
  "Experience is the name everyone gives to their mistakes.",
  "In order to understand recursion, one must first understand recursion.",
  "The best way to get a project done faster is to start sooner.",
  "Code never lies, comments sometimes do."
];

// Array of fun developer facts
const devFacts = [
  "The first computer virus was called 'Creeper' and was created in 1971.",
  "The term 'bug' in programming was coined by Grace Hopper in 1947.",
  "The first 1GB hard drive was released in 1980 and cost $40,000.",
  "JavaScript was created in just 10 days by Brendan Eich in 1995.",
  "The @ symbol was used in email for the first time in 1971.",
  "Python was named after the British comedy group Monty Python.",
  "The first computer programmer was Ada Lovelace in 1843.",
  "There are over 700 programming languages in existence.",
  "The first webcam was created to monitor a coffee pot at Cambridge University.",
  "WiFi stands for nothing - it's just a made-up term!"
];

async function updateReadme() {
  try {
    // Read the current README
    let readmeContent = fs.readFileSync('README.md', 'utf8');
    
    // Get current date info
    const now = new Date();
    const options = { 
      timeZone: 'Asia/Kolkata',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      weekday: 'long'
    };
    const currentDate = now.toLocaleDateString('en-US', options);
    const dayOfYear = Math.floor((now - new Date(now.getFullYear(), 0, 0)) / 1000 / 60 / 60 / 24);
    
    // Get a random quote and fact based on the day
    const quoteIndex = dayOfYear % codingQuotes.length;
    const factIndex = dayOfYear % devFacts.length;
    const dailyQuote = codingQuotes[quoteIndex];
    const dailyFact = devFacts[factIndex];
    
    // Create motivational messages based on day of week
    const dayOfWeek = now.getDay();
    const motivationalMessages = [
      'Sunday Vibes: Time to plan and dream in code!',
      'Monday Motivation: Let\'s crush some bugs today!',
      'Tuesday Energy: Building something awesome!',
      'Wednesday Power: Halfway through, keep coding!',
      'Thursday Thrust: Almost there, push harder!',
      'Friday Feeling: Code hard, weekend harder!',
      'Saturday Spirit: Weekend coding sessions!'
    ];
    
    const motivationIcons = [
      'https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Travel%20and%20places/Sunrise.png',
      'https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/People%20with%20professions/Man%20Flexing%20Medium%20Skin%20Tone.png',
      'https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Symbols/Fire.png',
      'https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Travel%20and%20places/High%20Voltage.png',
      'https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Travel%20and%20places/Rocket.png',
      'https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Activities/Party%20Popper.png',
      'https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/People/Man%20in%20Tuxedo%20Medium%20Skin%20Tone.png'
    ];
    
    // Generate star rating
    const starCount = Math.floor(Math.random() * 5) + 1;
    const stars = '<img src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Travel%20and%20places/Star.png" alt="⭐" width="15" height="15" />'.repeat(starCount);
    
    // Update the daily mission status
    const dailyUpdate = `**Today's Date:** ${currentDate}

**Current Mood:** <img src="${motivationIcons[dayOfWeek]}" alt="" width="20" height="20" /> ${motivationalMessages[dayOfWeek]}

**Days Coded This Year:** ${dayOfYear}

**Today's Motivation Level:** ${stars}`;
    
    // Update the random fact section
    const randomSection = `### <img src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Activities/Direct%20Hit.png" alt="🎯" width="20" height="20" /> Daily Developer Insight
> <img src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Objects/Light%20Bulb.png" alt="💡" width="15" height="15" /> **Did you know?** ${dailyFact}

### <img src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Travel%20and%20places/Sparkles.png" alt="✨" width="20" height="20" /> Today's Coding Wisdom
> <img src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/People/Brain.png" alt="🧠" width="15" height="15" /> *"${dailyQuote}"*`;
    
    // Replace the daily update section
    readmeContent = readmeContent.replace(
      /<!-- DAILY_UPDATE_START -->[\s\S]*?<!-- DAILY_UPDATE_END -->/,
      `<!-- DAILY_UPDATE_START -->\n${dailyUpdate}\n<!-- DAILY_UPDATE_END -->`
    );
    
    // Replace the random fact section
    readmeContent = readmeContent.replace(
      /<!-- RANDOM_FACT_START -->[\s\S]*?<!-- RANDOM_FACT_END -->/,
      `<!-- RANDOM_FACT_START -->\n${randomSection}\n<!-- RANDOM_FACT_END -->`
    );
    
    // Write the updated content back to README
    fs.writeFileSync('README.md', readmeContent);
    
    console.log('✅ README updated successfully!');
    console.log(`📅 Date: ${currentDate}`);
    console.log(`💭 Quote: ${dailyQuote}`);
    console.log(`🎯 Fact: ${dailyFact}`);
    
  } catch (error) {
    console.error('❌ Error updating README:', error);
    process.exit(1);
  }
}

// Run the update
updateReadme();
