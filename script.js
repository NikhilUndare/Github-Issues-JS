let PageNo = 1;
let issueList = document.getElementById('list');
let PageTitle = document.getElementById('page-number');

// function to fetch issues from api
function GetIssues(pageNo) {
    let url = `https://api.github.com/repositories/1296269/issues?page=${pageNo}&per_page=5`;
    fetch(url)
        .then((response) => response.json())
        .then((data) => {
            console.log(data);
            issueList.innerHTML = "";
            data.forEach((issue) => {
                let listItem = document.createElement('li')
                listItem.textContent = issue.title;
                issueList.appendChild(listItem);
                PageTitle.innerHTML = `Page No ${pageNo}`
            });
        }).catch(e => {
            console.log(e)
        })
}
//calling the function
GetIssues(PageNo);

// function to load Previous Page
function loadPrev() {
    if (PageNo > 1) {
        PageNo--;
        GetIssues(PageNo);
    } else {
        PageTitle.innerHTML = "you cannot go to Page number 0";
    }
}

// function to load Previous Page
function loadNext() {
    PageNo++;
    GetIssues(PageNo);
}


