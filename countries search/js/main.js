const search = document.getElementById('search')

const matchlist = document.getElementById('match-list') 


//A function states.json and filter

const searchStates = async searchText => {
    const res = await fetch('../data/search.json')
    const states = await res.json();

  //Filter part
  




  let matches = states.filter(state => {
      const regex = new RegExp(`^${searchText}`, 'gi');
      return state.country.match(regex);
  });

  if (searchText.length === 0){
      matches = [];
      matchlist.innerHTML = '';
  }

  outupHtml(matches);
 
}
//show resullts in html

const outupHtml = matches => {
    if(matches.length > 0){
        const html = matches.map(match => `
        <div class= "card card-body mb-1">
        <h4 onclick = "name()">${match.country}(${match.city})
        <span class="text-primary">${match.city}</span>
        </h4>
        </div>

        `)
        .join('');
       matchlist.innerHTML = html;
    }
}

search.addEventListener('input',() => searchStates(search.value))


function name(){
    var text1 = "Hello ";
     document.getElementById('demo').innerHTML = text1;

     
}
