let interviewList = [];
let rejectList =[];

// interviewList.push({ name:"h"}, { name:"h"}, { name:"h"})
// rejectList.push({ name:"h"}, { name:"h"}, { name:"h"})

let totalCount = document.getElementById('total-count')
let interviewCount = document.getElementById('interview-count')
let rejectCount = document.getElementById('reject-count')

const allCardSection = document.getElementById('all-cards')
console.log(allCardSection.children.length);

function calculateCount(){
    totalCount.innerText = allCardSection.children.length
    interviewCount.innerText = interviewList.length
    rejectCount.innerText = rejectList.length
}
calculateCount()