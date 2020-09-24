const search = document.getElementById('search')

const matchlist = document.getElementById('match-list') 

const user = document.getElementById('demo') 

//A function states.json and filter

const searchStates = async searchText => {
    const res = await fetch('../data/search.json')
    const states = await res.json();

  //Filter part
  let matches = states.filter(state => {
      const regex = new RegExp(`^${searchText}`, 'gi');
      return state.name.match(regex) || state.abbr.match(regex);
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
        <h4 onclick = "name()">${match.name}(${match.abbr})
        <span class="text-primary">${match.capital}</span>
        </h4>
        <small>lat:${match.lat} / long:${match.long}</small>
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