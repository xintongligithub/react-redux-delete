const getRandomNames = () => {
    const names = [
      'Lesli Mikelson',
      'Josie Tomer',
      'Sharron Frandsen',
      'Sophia Bayley',
      'Jerold Ogles',
      'Cortney Ponce',
      'Mickey Ostrowski',
      'Chery Monette',
      'Anthony Cusack',
      'Palmer Calvery',
      'Cassi Berumen',
      'Erica Gandee',
      'Berniece Gonsales',
      'Giovanni Ruelas',
      'Su Staton',
      'Renee Soileau',
      'Dora Massaro',
      'Carolina Bunker',
      'Callie Pinto',
      'Gearldine Weaver',
      'Rosamond Tinch',
      'Vivien Theurer',
      'Amelia Flanders',
      'Ula Riel',
      'Pat Horne',
      'Lucinda Patchen',
      'Kareem Surace',
      'Ciara Willems',
      'Yon Monfort',
      'Marline Scheffel',
      'Tianna Munday',
      'Florida Carrick',
      'Anastasia Stepney',
      'Guillermo Lapointe',
      'Carmelita Feiler',
      'Paul Tarvin',
      'Isaura Benway'];
      return names[Math.floor(Math.random()*37)];
  }

const initialState = {
    persons: [
        {name: getRandomNames(), age:Math.floor(Math.random()*100)},
        {name: getRandomNames(), age:Math.floor(Math.random()*100)},
        {name: getRandomNames(), age:Math.floor(Math.random()*100)},
        {name: getRandomNames(), age:Math.floor(Math.random()*100)},
      ],
      showPersons: true,
}

const reducer = (state = initialState, action) => {
    if(action.type === 'TOGGLEPERSONS') {
        let copy = JSON.parse(JSON.stringify(state));
        copy.showPersons = !(state.showPersons);
        return copy;
    }else if (action.type === 'DELETEPERSON') {
        let copy = JSON.parse(JSON.stringify(state));
        copy.persons.splice(action.index,1);
        return copy;
    } else {
        return state;
    }
    
    
}

export default reducer;
