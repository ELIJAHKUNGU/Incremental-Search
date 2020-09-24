const search = document.getElementById('search')
const matchlist = document.getElementById('match-list')


const Carsdata  = async searchText => {
    const res = await fetch('../data/search.json');
    const car  = await res.json();

   //Get matches to current text input
   console.log(car)
  
}


search.addEventListener('input', () => Carsdata(search.value))