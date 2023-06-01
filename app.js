const btn = document.querySelector('#btn');
btn.addEventListener('click', getJoke);

async function getJoke() {
  try {
    const url = 'https://dad-jokes.p.rapidapi.com/random/joke';
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': 'd52e95138dmsh5e5ed2feb435a1fp16fdc5jsnd3ed75e5b003',
        'X-RapidAPI-Host': 'dad-jokes.p.rapidapi.com',
        'Accept': 'application/json'
      }
    };

    const response = await fetch(url, options);
    const result = await response.json();
    console.log(result);

    displayJoke(result);
  } catch (error) {
    console.log(error);
  }
}

function displayJoke(joke) {
  const setup = document.querySelector('#setup');
  setup.innerText = joke.body[0].setup;
  
  const punchLine = document.querySelector('#punchLine');
  punchLine.innerText = "";
  setTimeout(function () {
    punchLine.innerText = joke.body[0].punchline;
  }, 2000);
  
}

