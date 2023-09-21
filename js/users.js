let currentPage = 1;
let totalPages;

function getUsers(page) {
  fetch("https://reqres.in/api/users?page=" + page, {
    method: "GET",
  })
    .then(function (response) {
      if (!response.ok) {
        throw response.status;
      }
      // console.log(response);
      return response.json();
    })
    .then(function (responseData) {
      // console.log(responseData);
      const fragment = document.createDocumentFragment();
    
      responseData.data.forEach((item) => {
        let li = document.createElement("li");
        li.classList.add('users-list');


        let pNames = document.createElement('p');
        pNames.innerText = `${item.first_name} ${item.last_name}`;
        pNames.classList.add('user-title');


        let imgUser = document.createElement('img');
        // imgUser.setAttribute('src', item.avatar);
        imgUser.src = item.avatar;
        imgUser.classList.add('image-user');

        li.appendChild(pNames);
        li.appendChild(imgUser);

        fragment.appendChild(li);
      });

      document.getElementById("list-items").innerHTML = " ";
      document.getElementById("list-items").appendChild(fragment);

      totalPages = responseData.total_pages;
      
    })
    .catch(function (error) {
      if (error == 404) {
        const pError = document.createElement("p");
        pError.textContent = "Page Not Found";

        document.getElementById("api-wraper").appendChild(pError);
      }
    });
}

document.getElementById("loadnext").addEventListener("click", function () {
  if (currentPage == totalPages){
    return;
  }
  currentPage += 1;
  getUsers(currentPage);
});

document.getElementById("loadprev").addEventListener("click", function () {
  if (currentPage == 1) {
    return;
  }
  currentPage -= 1;
  getUsers(currentPage);
});

getUsers(currentPage);