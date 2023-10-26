const topicElement = document.querySelector(".topic");
const countElement = document.querySelector(".count");

const learning = {
    topic: "JS",
    learningGoals: ["Build JS Programs", "Create Website Designs", "Build JS confidence", "Refresh HTML knowledge"],
    category: "Front End Development",
    topicImportance: "High",
};
//console.log(learning);
// Change and remove values
learning.topic = "JavaScript";
learning.learningGoals.splice (1, 1);

//console.log(learning);

// Display Text and Remove a class
topicElement.innerText = `I'm learning ${learning.topic}`;
topicElement.classList.remove("hide");

countElement.innerText = `I have ${learning.learningGoals.length} learning goals.`;
countElement.classList.remove("hide");