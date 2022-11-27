function printKeys(obj: {}){
    for(const key of Object.keys(obj)){
        console.log(key)
    }
}

function printAllKeys(obj: {}){
    for(const key in obj){
        console.log(key)
    }
}

const capital = {
    Afghanistan: "Kabul",
    Angola: "Luanda",
    Brazil: "Brasília",
    Canada: "Ottawa",
    China: "Beijing",
    Cuba: "Havana",
    Denmark: "Copenhagen",
    Iceland: "Reykjavík",
    Japan: "Tokyo",
    Kazakhstan: "Astana",
    Mexico: "Mexico City",
    Nigeria: "Abuja",
    Philippines: "Manila",
    Ukraine: "Kiev",
  };




printAllKeys(capital)