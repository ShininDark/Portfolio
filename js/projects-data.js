const PROJECTS = [
  {
    id: "tiny-town",
    title: "Tiny Town",
    thumbnail: "assets/projects/game.jpg",
    shortDescription:
      "A short and fast game of gather resources and build a town.",
    featured: true,
    heroDescription:
      "Tiny Town is a top-down survival game where the player must gather members, pile up resource points, and build all buildings.",
    gameplayFeatures:
      "A custom drift-and-boost driving model, procedural track lighting that reacts to speed, and a combo system that rewards clean lines over raw speed.",
    challenges:
      "Getting drift physics to feel good on keyboard and controller at the same time took a lot of tuning — ended up separating input smoothing from the physics step.",
    gallery: [
      "assets/projects/game2.jpg",
      "assets/projects/game7.jpg",
      "assets/projects/game6.jpg",
    ],
  },
  {
    id: "hollow-keep",
    title: "Hollow Keep",
    thumbnail: "assets/projects/game3.jpg",
    shortDescription: "A dungeon-crawling roguelite with procedural rooms.",
    featured: true,
    heroDescription:
      "Hollow Keep is a room-by-room roguelite where the dungeon is stitched together from hand-authored room chunks at run start.",
    gameplayFeatures:
      "A modular room-assembly system, a light relic/upgrade economy between rooms, and enemies that scale to the player's current build.",
    challenges:
      "Making sure procedurally assembled rooms always connect and stay solvable — built a validation pass that rejects any layout that traps the player.",
    gallery: [
      "assets/projects/game3.jpg",
      "assets/projects/game4.jpg",
      "assets/projects/gamer.jpg",
    ],
  },
];
