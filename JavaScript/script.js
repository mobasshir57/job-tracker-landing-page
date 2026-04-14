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

    } else if (id == 'interview-btn') {
        allCardSection.classList.add('hidden')
        interviewSection.classList.remove('hidden')
        rejectSection.classList.add('hidden')

        if (interviewList.length === 0) {
            interviewSection.innerHTML = `
                <div class="inter-rej">
                    <img src="./jobs.png" alt="">
                    <h4>No jobs available</h4>
                    <p>Check back soon for new job opportunities</p>
                </div>
            `;
        } else {
            renderInterview();
        }

    } else if (id == 'rejected-btn') {
        allCardSection.classList.add('hidden')
        interviewSection.classList.add('hidden')
        rejectSection.classList.remove('hidden')

        if (rejectList.length === 0) {
            rejectSection.innerHTML = `
                <div class="inter-rej">
                    <img src="./jobs.png" alt="">
                    <h4>No jobs available</h4>
                    <p>Check back soon for new job opportunities</p>
                </div>
            `;
        } else {
            renderReject();
        }
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

// const title = document.getElementsByClassName('title');
// const position = document.getElementsByClassName('position');
// const statuss = document.getElementsByClassName('status');
// const details = document.getElementsByClassName('details');


function renderInterview() {
    interviewSection.innerHTML = '';

    for (let interview of interviewList) {
        console.log(interview);
        let div = document.createElement('div')
        div.innerHTML = `
     <div class="card">
                    <div class="first-sec">
                        <div><h3 class="title">${interview.title}</h3>
                    <p class="position">${interview.position}</p></div>
                    <div class="delete"><a href=""><i class="fa-regular fa-trash-can"></i></a></div>
                    </div>
                    <br>
                    <p class="status">${interview.status}</p>
                    <button class="application-btn">Interviewed</button>
                    <p class="details">${interview.details}</p>
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
                        <div><h3 class="title">${reject.title}</h3>
                    <p class="position">${reject.position}</p></div>
                    <div class="delete"><a href=""><i class="fa-regular fa-trash-can"></i></a></div>
                    </div>
                    <br>
                    <p class="status">${reject.status}</p>
                    <button class="application-btn">Interviewed</button>
                    <p class="details">${reject.details}</p>
                    <button class="interview-btn">Interview</button>
                    <button class="rejected-btn">Rejected</button>
                </div>
    `
        rejectSection.appendChild(div);
    }
}

const deleteButtons = document.querySelectorAll('.delete button');

deleteButtons.forEach(btn => {
    btn.addEventListener('click', function () {
        const card = this.closest('.card');
        card.remove();

        // 🔥 Update count after delete
        calculateCount();
    });
});