const timeline = document.querySelector(".timeline-linebox");

function updateTimeline() {
    let i = 0;
    while (true) {
        let flag = JSON.stringify(i);
        let info = localStorage.getItem(i)
        if (info == null) {
            break;
        }
        let timelineBox = document.createElement("div");
        timelineBox.classList.add("timeline-text");
        let timelineText = document.createElement("p");
        let timelineTime = document. createElement("p");
        let timelineSpace = document. createElement("p");
        

        timelineText.innerText = JSON.parse(info).text;
        timelineSpace.innerText = `\xa0 \xa0 \xa0`;
        timelineTime.innerText = JSON.parse(info).timeline;

        timeline.appendChild(timelineBox);
        timelineBox.appendChild(timelineText);
        timelineBox.appendChild(timelineSpace);
        timelineBox.appendChild(timelineTime);

        i = i+1;
    }
}
updateTimeline()

const timelineBtn = document.querySelector(".timeline-btn");
function toggleHiddenTimeline() {
    if (timeline.classList.contains("timeline-hidden")) {
        timeline.classList.toggle("timeline-show");
        timeline.classList.toggle("timeline-hidden");
    }
    else {
        timeline.classList.toggle("timeline-hide");
        timeline.classList.toggle("timeline-show");
    }
    timelineBtn.classList.toggle("timeline-btn-active");
}
timelineBtn.addEventListener("click", toggleHiddenTimeline)