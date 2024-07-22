// Defender Strategies
const defenderStrategies = [
    "<strong>Blue Meta:</strong> Only play operators with blue operator icons.",
    "<strong>Press C:</strong> All players must crouch for the entire round; no proning or standing.",
    "<strong>10 Reinforcements:</strong> No reinforcements can be placed.",
    "<strong>Camera in Position:</strong> Only play intel operators with cameras (Maestro, Mozzie, Valkyrie, Echo, Bulletproof, etc.).",
    "<strong>Clown Car:</strong> All defenders will place themselves in a single room, all exiting at the same time when an attacker enters the site.",
    "<strong>Testudo:</strong> All players must choose a defender capable of creating cover (Azami walls, deployable shield, etc.) and hide in a small spot surrounded by said cover.",
    "<strong>In Headlights:</strong> When you spot an enemy attacker, you cannot move.",
    "<strong>A Quiet Place:</strong> No words can be spoken during the round.",
    "<strong>Delulu:</strong> Reinforce the incorrect bomb site as if it were the real site.",
    "<strong>Mannequins:</strong> Once the prep phase ends, select a spot to stay for the entirety of the round, only moving after you’ve killed an opponent.",
    "<strong>Counter-Strike:</strong> All players are unable to aim down sights.",
    "<strong>The Floor is Lava:</strong> You can only shoot or kill from atop a surface off the floor like a table or countertop.",
    "<strong>Death From Afar:</strong> Open up as many lines of sight into the site as possible, all attackers moving to a place outside the site and shooting from a distance.",
    "<strong>The Worm:</strong> Once the prep phase ends, all defenders must remain prone for the entirety of the round.",
    "<strong>Pricey T-Shirts:</strong> One defender selects Rook with the defending team only allowed armor until after they’ve gotten a kill.",
    "<strong>Karaoke:</strong> The player with the least amount of points chooses a song, and the rest of the team sings along until the round ends.",
    "<strong>Like a Record:</strong> Before you shoot or kill an opponent, you must first spin 360 degrees.",
    "<strong>Calm Down:</strong> No cursing, taunting, or yelling for the duration of the round.",
    "<strong>The Evilest Eye:</strong> Place Maestro cameras on wooden floors with nitro cells underneath the floor of each camera; a player watching said cameras will notify which nitro cell must go off to kill an enemy attacker.",
    "<strong>Birds of a Feather:</strong> All defenders must stay near each other no matter what.",
    "<strong>Watch Your Step:</strong> All players must pick trap operators.",
    "<strong>Trusty Sidearm:</strong> All players must play pistols only."
];

// Attacker Strategies
const attackerStrategies = [
    "<strong>Yellow Meta:</strong> Only play operators with yellow operator icons.",
    "<strong>The Wall:</strong> Only play operators with shields (Fuze, Montagne, Blitz, etc.).",
    "<strong>Attention:</strong> All attackers must walk in a straight line whenever possible; however, crouching and leaning are independent of the player.",
    "<strong>Longest Stick:</strong> All attackers must appoint the player with the highest RP as “King” and must obey their every command for the duration of the round after killing them at the beginning of the round.",
    "<strong>Phone Phase:</strong> Cannot use or move any drones.",
    "<strong>Pants Ablaze:</strong> Callouts given by teammates may be lies or truths.",
    "<strong>007:</strong> The enemy defender with the highest score will become the target, and all defenders will only be able to kill that defender until they have died; in which case, the next highest score will become the new target.",
    "<strong>Bombs Away:</strong> One player selects Fuze while the rest play operators with grenades, all throwing their grenades into the site when the first Fuze is ignited.",
    "<strong>Pay to Win:</strong> Players can only select operators with the “Black Ice” skin on their primary and secondary weapons.",
    "<strong>The Speed-Force:</strong> All attackers can only play 3-speed operators.",
    "<strong>Skeet Shooting:</strong> All players must play shotguns only.",
    "<strong>Stevie Wonder:</strong> When entering a room, you must close your eyes until you are through the doorway.",
    "<strong>Blinding Lights:</strong> One player selects Ying while the rest play operators with flash grenades, all throwing their flashes into the site when the first Ying is ignited.",
    "<strong>Home Depot Representative:</strong> A player must choose Sledge, smashing as many walls, doors, windows, and hatches as possible.",
    "<strong>Roulette:</strong> When the operator select menu appears, close your eyes and spam click until an operator is chosen at random.",
    "<strong>Throw It Back:</strong> When entering a room, you must enter backward until you are through the doorway.",
    "<strong>Patted Backs:</strong> When a player on the team gets a kill, the rest of the team must compliment them excessively.",
    "<strong>Picture Day:</strong> Take a screenshot of each kill you get and post it to the Discord channel for the duration of the round.",
    "<strong>Freeze Tag:</strong> Every player must stop moving for 3 seconds after a teammate gets a kill.",
    "<strong>Seal Team Six:</strong> Every player brings smokes and flashes to throw into and push the site.",
    "<strong>Knives Out:</strong> All kills must be exclusively done with melees or knives.",
    "<strong>Butler, PA:</strong> The lowest score on the team is appointed as “President” and must not die under any circumstances. If they do die, the rest of the team must surrender the round to the defenders."
];

// Function to get a random strategy from an array
function getRandomStrategy(strategyArray) {
    return strategyArray[Math.floor(Math.random() * strategyArray.length)];
}

// Button event listeners
document.getElementById('attack-btn').addEventListener('click', () => {
    document.getElementById('strategy-text').innerHTML = getRandomStrategy(attackerStrategies);
    document.getElementById('strategy-text').style.display = 'block';
});

document.getElementById('defend-btn').addEventListener('click', () => {
    document.getElementById('strategy-text').innerHTML = getRandomStrategy(defenderStrategies);
    document.getElementById('strategy-text').style.display = 'block';
});
