async function shortenUrl(longUrl) {
  try {
    const response = await fetch(`https://api.shrtco.de/v2/shorten?url=${encodeURIComponent(longUrl)}`);
    const data = await response.json();
    
    if (data.ok) {
      return data.result.short_link;
    } else {
      throw new Error(data.error);
    }
  } catch (error) {
    console.error('Error shortening URL:', error);
    return null;
  }
}

displayStoredUrls();

const form = document.querySelector('#url-shorten-form');
  form.addEventListener('submit', async (event) => {
    event.preventDefault();
    const input = document.querySelector('#url-input').value;
    const errorMsg = document.querySelector('#error-msg');
    
    if (input) {
      const shortUrl = await shortenUrl(input);
      if (shortUrl) {
        
        storeUrls(input, shortUrl);
        
        displayStoredUrls();
        
        errorMsg.classList.remove('hidden');
      }
    } else {
      errorMsg.classList.add('hidden');
    }
  });




function storeUrls(inputUrl, shortUrl) {
  const urls = JSON.parse(localStorage.getItem('urls')) || [];
  urls.push({ inputUrl, shortUrl });
  localStorage.setItem('urls', JSON.stringify(urls));
}

function displayStoredUrls() {
  const urlsContainer = document.querySelector('.url-shorten-results');
  urlsContainer.innerHTML = '';
  const urls = JSON.parse(localStorage.getItem('urls')) || [];
  urls.forEach((urlPair, index) => {
    const urlElement = document.createElement('div');
    urlElement.innerHTML = `
    <div class="flex flex-row justify-normal">
      <p class="text-wrap">Input URL: ${urlPair.inputUrl}</p>
      <p>Short URL: ${urlPair.shortUrl}</p>
      <button class="copy-btn bg-blue-400 text-black p-4 rounded-lg" data-index="${index}">Copy</button>
      <hr>
      </div>
    `;
    urlsContainer.appendChild(urlElement);
  });
  
  const copyButtons = document.querySelectorAll('.copy-btn');
  copyButtons.forEach(button => {
    button.addEventListener('click', copyShortUrl);
  });
}

function copyShortUrl(event) {
  const index = event.target.getAttribute('data-index');
  const urls = JSON.parse(localStorage.getItem('urls')) || [];
  
  if (index !== null && urls[index]) {
    const shortUrl = urls[index].shortUrl;
    
    const tempInput = document.createElement('input');
    tempInput.value = shortUrl;
    document.body.appendChild(tempInput);
    tempInput.select();
    document.execCommand('copy');
    document.body.removeChild(tempInput);
    
    alert('Short URL copied to clipboard!');
  }
}


