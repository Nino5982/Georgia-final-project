const input = document.getElementById("filter");
const ulResult = document.getElementById("result");
const listItems = [];

axios.get('https://reqres.in/api/users?page=2')
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
   console.log(error);
  })
    let asyncFunction = async () => {
  let response = await fetch("https://reqres.in/api/users?page=2");
  if (!response.ok) {
    throw new Error("cannot fetch data");
  }

  let data = await response.json();
  return data;
    };

    asyncFunction()
    .then((mosulidata) => {
        mosulidata.data.forEach((item) => {
        let li = document.createElement("li");
        li.classList.add('search-result', 'hide');
        li.innerText = `${item.first_name} ${item.last_name}`;

        listItems.push(li);

        ulResult.appendChild(li);
        });
    })
    .catch((error) => console.log(error));


    function filterData(searchItem) {
        listItems.forEach(item => {
        if (item.innerText.toLowerCase().includes(searchItem.toLowerCase())) {
            item.classList.remove('hide')
        } else {
            item.classList.add('hide')
        }
        })
    }
    input.addEventListener('keyup', function(event) {
        filterData(event.target.value);
  })
  
  