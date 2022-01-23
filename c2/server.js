const babaSlavka = require ("./promises");
const heroes = require("./heroes")


//CALL BACK FUNKCIJA
babaSlavka.callbackOne((calbackResult)=>{
    console.log(calbackResult);
});




//PROMISE FUNKCIJA 
babaSlavka.promiseOne
.then((succesResponse) =>{
     console.log(succesResponse)
})
.catch((err)=>{
    console.log(err);
});


const promiseHandler = async () =>{
    try{
        const promiseResult = await babaSlavka.promiseTwo;
        console.log(promiseResult);
    }catch (error){
        console.log(error);
    }
};
promiseHandler ();





heroes
  .getAllHeroes()
  .then((heroite) => {
    console.log(heroite);
  })
  .catch((greshka) => {
    console.log(greshka);
  });

heroes
  .addNewHero({ name: 'Shadowfiend', homeworld: 'Ancients' })
  .then(() => {
    return heroes.getAllHeroes();
  })
  .then((heroi) => {
    console.log(heroi);
  })
  .catch((err) => {
    console.log(err);
  });

const heroAdder = async () => {
  const newHero = {
    name: 'Sniper',
    homeworld: 'Ancients',
  };

  try {
    await heroes.addNewHero(newHero);
    const allHeroes = await heroes.getAllHeroes();
    console.log(allHeroes);
  } catch (error) {
    console.log(error);
  }
};

heroAdder();

heroes
  .updateHero(2, { name: 'Krale Marko', homeworld: 'P R I L E P' })
  .then(() => {
    return heroes.getAllHeroes();
  })
  .then((heroi) => {
    console.log(heroi);
  })
  .catch((err) => {
    console.log(err);
  });

const heroDeleter = async () => {
    try {
      await heroes.deleteHero(4);
      const updatedHeroes = await heroes.getAllHeroes();
      console.log(updatedHeroes);
    } catch (error) {
      console.log(error);
    }
  };
  
  heroDeleter();