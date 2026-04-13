let interviewList = [];
let rejectList = [];
let currentStatus = 'all';

// interviewList.push({ name:"h"}, { name:"h"}, { name:"h"})
// rejectList.push({ name:"h"}, { name:"h"}, { name:"h"})

let totalCount = document.getElementById('total-count')
let interviewCount = document.getElementById('interview-count')
let rejectCount = document.getElementById('reject-count')

let totalJobs = document.getElementById('total-jobs')

const allBtn = document.getElementById('all-btn')
const interviewBtn = document.getElementById('interview-btn')
const rejectBtn = document.getElementById('rejected-btn')

const mainContainer = document.querySelector('main')
const allCardSection = document.getElementById('all-cards')
const interviewSection = document.getElementById('interview-section');
const rejectSection = document.getElementById('reject-section');

// const interviewSection = document.querySelector('.interview-section')
// console.log(allCardSection.children.length);

function calculateCount() {
    totalCount.innerText = allCardSection.children.length
    totalJobs.innerText = allCardSection.children.length
    interviewCount.innerText = interviewList.length
    rejectCount.innerText = rejectList.length
}
calculateCount()

function toggleStyle(id) {
    allBtn.classList.add('btn')
    interviewBtn.classList.add('btn')
    rejectBtn.classList.add('btn')

    allBtn.classList.remove('active-btn')
    interviewBtn.classList.remove('active-btn')
    rejectBtn.classList.remove('active-btn')

    const selected = document.getElementById(id);
    currentStatus = id 

    selected.classList.remove('btn')
    selected.classList.add('active-btn')

    if (id == 'all-btn') {
        allCardSection.classList.remove('hidden')
        interviewSection.classList.add('hidden')
        rejectSection.classList.add('hidden')
    }else if(id == 'interview-btn'){
        allCardSection.classList.add('hidden')
        interviewSection.classList.remove('hidden')
        rejectSection.classList.add('hidden')
        renderInterview();
    }else if(id == 'rejected-btn'){
        allCardSection.classList.add('hidden')
        interviewSection.classList.add('hidden')
        rejectSection.classList.remove('hidden')
        renderReject();
    }
}

mainContainer.addEventListener('click', function (event) {

    if (event.target.classList.contains('interview-btn')) {
        const parentNode = event.target.parentNode;

        const title = parentNode.querySelector('.title').innerText;
        const position = parentNode.querySelector('.position').innerText;
        const status = parentNode.querySelector('.status').innerText;
        const applicationBtn = parentNode.querySelector('.application-btn').innerText;
        const details = parentNode.querySelector('.details').innerText;
        parentNode.querySelector('.application-btn')
            .innerText = 'Interviewed'

        const cardInfo = {
            title,
            position,
            status,
            applicationBtn: 'Inteview',
            details
        }
        const cardexist = interviewList.find(item => item.title == cardInfo.title);



        if (!cardexist) {
            interviewList.push(cardInfo)

            rejectList = rejectList.filter(item => item.title != cardInfo.title)
            if(currentStatus == 'rejected-btn'){
                renderReject()
            }
            calculateCount()
        }
        // console.log(title, position, status, applicationBtn, details)
    }else if(event.target.classList.contains('rejected-btn')){
         const parentNode = event.target.parentNode;
        //  console.log(parentNode);

        const title = parentNode.querySelector('.title').innerText;
        const position = parentNode.querySelector('.position').innerText;
        const status = parentNode.querySelector('.status').innerText;
        const applicationBtn = parentNode.querySelector('.application-btn').innerText;
        const details = parentNode.querySelector('.details').innerText;
        parentNode.querySelector('.application-btn')
            .innerText = 'Rejected'

        const cardInfo = {
            title,
            position,
            status,
            applicationBtn: 'Rejected',
            details
        }
        const cardexist = rejectList.find(item => item.title == cardInfo.title);



        if (!cardexist) {
            rejectList.push(cardInfo)

            interviewList = interviewList.filter(item => item.title != cardInfo.title);
            if(currentStatus == 'interview-btn'){
                renderInterview()
            }
            calculateCount()
        }
        
    }


})

function renderInterview() {
    interviewSection.innerHTML = '';

    for (let interview of interviewList) {
        console.log(interview);
        let div = document.createElement('div')
        div.innerHTML = `
     <div class="card">
                    <div class="first-sec">
                        <div><h3 class="title">Mobile First Corp</h3>
                    <p class="position">React Native Developer</p></div>
                    <div class="delete"><a href=""><i class="fa-regular fa-trash-can"></i></a></div>
                    </div>
                    <br>
                    <p class="status">Remote • Full-time • $130,000 - $175,000</p>
                    <button class="application-btn">Interviewed</button>
                    <p class="details">Build cross-platform mobile applications using React Native. Work on products
                        used by millions of
                        users worldwide.</p>
                    <button class="interview-btn">Interview</button>
                    <button class="rejected-btn">Rejected</button>
                </div>
    `
        interviewSection.appendChild(div);
    }
}

function renderReject() {
    rejectSection.innerHTML = '';

    for (let reject of rejectList) {
        console.log(reject);
        let div = document.createElement('div')
        div.innerHTML = `
     <div class="card">
                    <div class="first-sec">
                        <div><h3 class="title">Mobile First Corp</h3>
                    <p class="position">React Native Developer</p></div>
                    <div class="delete"><a href=""><i class="fa-regular fa-trash-can"></i></a></div>
                    </div>
                    <br>
                    <p class="status">Remote • Full-time • $130,000 - $175,000</p>
                    <button class="application-btn">Rejected</button>
                    <p class="details">Build cross-platform mobile applications using React Native. Work on products
                        used by millions of
                        users worldwide.</p>
                    <button class="interview-btn">Interview</button>
                    <button class="rejected-btn">Rejected</button>
                </div>
    `
        rejectSection.appendChild(div);
    }
}