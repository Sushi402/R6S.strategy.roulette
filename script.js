const attackerStrategies = [
    "Yellow Meta: only play operators with yellow operator icons",
    "The Wall: only play operators with shields (Fuze, Montagne, Blitz, etc)",
    "Attention: all attackers must walk in a straight line whenever possible; however, crouching and leaning are independent of the player",
    "Longest Stick: all attackers must appoint the player with the highest RP as “King” and must obey their every command for the duration of the round after killing them at the beginning of the round",
    "Phone Phase: cannot use or move any drones",
    "Pants Ablaze: callouts given by teammates are possible lies or possible truths",
    "007: the enemy defender with the highest score will become the target, and all defenders will only be able to kill that defender until they have died; in which case the next highest score will become the new target",
    "Bombs Away: one player selects Fuze while the rest play operators with grenades, all throwing their grenades into the site when the first Fuze is ignited",
    "Pay to Win: players can only select operators with the “Black Ice” skin on their primary and secondary",
    "The Speed-Force: all attackers can only play 3 speeds",
    "Skeet Shooting: all players must play shotguns only",
    "Stevie Wonder: when entering a room, you must close your eyes until you are through the doorway",
    "Blinding Lights: one player selects Ying while the rest play operators with flash grenades, all throwing their flashes into the site when the first Ying is ignited",
    "Home Depot Representative: a player must choose Sledge, smashing as many walls, doors, windows, and hatches as possible",
    "Roulette: when the operator select menu appears, close your eyes and spam click until an operator is chosen at random",
    "Throw It Back: when entering a room, you must enter backward until you are through the doorway",
    "Patted Backs: when a player on the team gets a kill, the rest of the team must compliment them excessively",
    "Picture Day: take a screenshot of each kill you get and post it to the Discord channel for the duration of the round",
    "Freeze Tag: every player must stop moving for 3 seconds after a teammate gets a kill",
    "Seal Team Six: every player brings smokes and flashes to throw into and push site",
    "Knives Out: all kills must be exclusively done by melees or knives",
    "Butler, PA: the lowest score on the team is appointed as “President” and must not die under any circumstances; if they do die, however, the rest of the team must surrender the round to the defenders"
];

const defenderStrategies = [
    "Blue Meta: only play operators with blue operator icons",
    "Press C: all players must crouch for the entire round; no proning or standing",
    "10 Reinforcements: no reinforcements can be placed",
    "Camera in Position: only play intel operators with cameras (Maestro, Mozzie, Valkyrie, Echo, Bulletproof, etc)",
    "Clown Car: all defenders will place themselves in a single room, all exiting at the same time when an attacker enters the site",
    "Testudo: all players must choose a defender capable of creating cover (Azami walls, deployable shield, etc) and hide in a small spot surrounded by said cover",
    "In Headlights: when you spot an enemy attacker, you cannot move",
    "A Quiet Place: no words can be spoken during the round",
    "Delulu: reinforce the incorrect bomb site as if it were the real site",
    "Mannequins: once the prep phase ends, select a spot to stay in for the entire round, only moving after you’ve killed an opponent",
    "Counter-Strike: all players are unable to aim down sights",
    "The Floor is Lava: you can only shoot or kill from atop a surface off the floor, like a table or countertop",
    "Death From Afar: open up as many lines of sight into the site as possible, all attackers moving to a place outside the site and shooting from a distance",
    "The Worm: once the prep phase ends, all defenders must remain prone for the entire round",
    "Pricey T-Shirts: one defender selects Rook, with the defending team only allowed armor until after they’ve gotten a kill",
    "Karaoke: the player with the least amount of points chooses a song, and the rest of the team sings along until the round ends",
    "Like a Record: before you shoot or kill an opponent, you must first spin 360 degrees",
    "Calm Down: no cursing, taunting, or yelling during the round",
    "The Evilest Eye: place Maestro cameras on wooden floors with nitro cells underneath each camera; a player watching said cameras will notify which nitro cell must go off to kill an enemy attacker",
    "Birds of a Feather: all defenders must stay near each other no matter what",
    "Watch Your Step: all players must pick trap operators",
    "Trusty Sidearm: all players must use pistols only"
];

document.getElementById('attacker-btn').addEventListener('click', function() {
    displayRandomStrategy(attackerStrategies);
});

document.getElementById('defender-btn').addEventListener('click', function() {
    displayRandomStrategy(defenderStrategies);
});

function displayRandomStrategy(strategies) {
    const randomIndex = Math.floor(Math.random() * strategies.length);
    const strategy = strategies[randomIndex];
    document.getElementById('strategy-text').innerHTML = `<strong>${strategy.split(':')[0]}</strong>: ${strategy.split(':')[1]}`;
}
