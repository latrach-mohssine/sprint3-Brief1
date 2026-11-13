export async function getPokimon(namePok) {
  const aray = [];
  const responses = await fetch(
    `https://pokeapi.co/api/v2/pokemon/${namePok}/`,
  );
  if (!responses.ok) {
    console.log(namePok);
    return [];
  }
  const datas = await responses.json();
  const hp = datas.stats[0].base_stat;
  const attack = datas.stats[1].base_stat;
  const defence = datas.stats[2].base_stat;
  const pokId = `#${datas.id}`;
  const image = datas.sprites.other["official-artwork"].front_default;
  const pokemonName = datas.name;

  let type = datas.types[0].type.name;
  if (type === "fire" || type === "dragon") {
    type = "Feu";
  } else if (type === "water") {
    type = "Eau";
  } else if (
    type === "ground" ||
    type === "rock" ||
    type === "grass" ||
    type === "bug"
  ) {
    type = "Plante";
  } else if (type === "electric" || type === "steel") {
    type = "Électrik";
  } else if (type === "ice") {
    type = "Glace";
  } else if (
    type === "dark" ||
    type === "ghost" ||
    type === "poison" ||
    type === "psychic"
  ) {
    type = "Ténèbres";
  } else {
    type = "Normal";
  }
  const dat = {
    id: pokId,
    image: image,
    name: pokemonName,
    stats: { hp: hp, attack: attack, defence: defence },
    type: type,
  };
  aray.push(dat);
  console.log(aray);
  return aray;
}

export async function getdata(startOfCard, numberOfcard) {
  try {
    let aray = [];
    for (let k = startOfCard; k < numberOfcard; k++) {
      const responses = await fetch(`https://pokeapi.co/api/v2/pokemon/${k}/`);
      if (!responses.ok) {
        console.log(k);
        break;
      }

      const datas = await responses.json();
      const hp = datas.stats[0].base_stat;
      const attack = datas.stats[1].base_stat;
      const defence = datas.stats[2].base_stat;
      const pokId = `#${datas.id}`;
      const image = datas.sprites.other["official-artwork"].front_default;
      const pokemonName = datas.name;

      let type = datas.types[0].type.name;
      if (type === "fire" || type === "dragon") {
        type = "Feu";
      } else if (type === "water") {
        type = "Eau";
      } else if (
        type === "ground" ||
        type === "rock" ||
        type === "grass" ||
        type === "bug"
      ) {
        type = "Plante";
      } else if (type === "electric" || type === "steel") {
        type = "Électrik";
      } else if (type === "ice") {
        type = "Glace";
      } else if (
        type === "dark" ||
        type === "ghost" ||
        type === "poison" ||
        type === "psychic"
      ) {
        type = "Ténèbres";
      } else {
        type = "Normal";
      }

      // {
      //     id: "#004",
      //  name: "Charmander",
      //  type: "Feu",
      //  level: "Base",
      //     stats: { hp: 39, attack: 52, defence: 43 },
      //     image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
      //     description: "Un petit lézard orange dont la queue porte une flamme."
      //   },
      const dat = {
        id: pokId,
        image: image,
        name: pokemonName,
        stats: { hp: hp, attack: attack, defence: defence },
        type: type,
      };
      aray.push(dat);
    }
    return aray;
  } catch (error) {
    console.log(error);
    return [];
  }
}
