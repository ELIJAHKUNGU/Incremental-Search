const countries = [
    {name: 'USA'},
    {name: 'India'},
    {name: 'Argentina'},
    {name: 'Armenia'}
  ];
  
  const searchInput = document.querySelector('.search-input');
  const suggestionsPanel = document.querySelector('.suggestions');
  
  searchInput.addEventListener('keyup', function() {
    const input = searchInput.value;
    suggestionsPanel.innerHTML = '';
    const suggestions = searchStates.filter(function(country) {
      return country.value.toLowerCase().startsWith(input);
    });
    suggestions.forEach(function(suggested) {
      const div = document.createElement('div');
      div.innerHTML = suggested.value;
      suggestionsPanel.appendChild(div);
    });
    if (input === '') {
      suggestionsPanel.innerHTML = '';  
    }
  })
  
  
  
  