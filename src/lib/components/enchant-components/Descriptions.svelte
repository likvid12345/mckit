<script>
	import EnchantCard from '$lib/components/element-components/EnchantCard.svelte';

	let enchants = $state([
		{
			name: 'Sharpness',
			maxLevel: 'V',
			description: 'Increases melee damage dealt with your weapon.'
		},
		{
			name: 'Smite',
			maxLevel: 'V',
			description: 'Deals extra damage to undead mobs like zombies and skeletons.'
		},
		{
			name: 'Bane of Arthropods',
			maxLevel: 'V',
			description: 'Deals extra damage to spiders, silverfish, and endermites.'
		},
		{
			name: 'Looting',
			maxLevel: 'III',
			description: 'Increases the amount of loot mobs drop when killed.'
		},
		{ name: 'Fire Aspect', maxLevel: 'II', description: 'Sets enemies on fire when you hit them.' },
		{ name: 'Knockback', maxLevel: 'II', description: 'Pushes enemies back further when hit.' },
		{
			name: 'Sweeping Edge',
			maxLevel: 'III',
			description: "Increases the damage of your sword's sweep attack."
		},
		{
			name: 'Density',
			maxLevel: 'V',
			description: 'Adds extra Mace smash damage for every block you fall before hitting.'
		},
		{
			name: 'Breach',
			maxLevel: 'IV',
			description: "Lets your Mace ignore a portion of the target's armor."
		},
		{
			name: 'Wind Burst',
			maxLevel: 'III',
			description: 'Launches you into the air after a Mace smash attack.'
		},
		{
			name: 'Lunge',
			maxLevel: 'III',
			description: 'Propels you forward when jabbing with a Spear.'
		},
		{ name: 'Efficiency', maxLevel: 'V', description: 'Increases how fast you can mine blocks.' },
		{
			name: 'Fortune',
			maxLevel: 'III',
			description: 'Increases the amount of resources dropped when mining.'
		},
		{
			name: 'Silk Touch',
			maxLevel: 'I',
			description: 'Mined blocks drop themselves instead of their usual item.'
		},
		{
			name: 'Unbreaking',
			maxLevel: 'III',
			description: 'Gives your item a chance to not lose durability when used.'
		},
		{
			name: 'Mending',
			maxLevel: 'I',
			description: "Repairs your item's durability using XP orbs you pick up."
		},
		{ name: 'Protection', maxLevel: 'IV', description: 'Reduces most types of incoming damage.' },
		{
			name: 'Fire Protection',
			maxLevel: 'IV',
			description: 'Reduces fire and lava damage, and burn time.'
		},
		{
			name: 'Blast Protection',
			maxLevel: 'IV',
			description: 'Reduces explosion damage and knockback.'
		},
		{
			name: 'Projectile Protection',
			maxLevel: 'IV',
			description: 'Reduces damage from arrows and other projectiles.'
		},
		{ name: 'Feather Falling', maxLevel: 'IV', description: 'Reduces fall damage taken.' },
		{ name: 'Thorns', maxLevel: 'III', description: 'Reflects some damage back at attackers.' },
		{
			name: 'Respiration',
			maxLevel: 'III',
			description: 'Extends how long you can breathe underwater.'
		},
		{
			name: 'Aqua Affinity',
			maxLevel: 'I',
			description: 'Lets you mine at normal speed while underwater.'
		},
		{
			name: 'Depth Strider',
			maxLevel: 'III',
			description: 'Increases your movement speed while underwater.'
		},
		{ name: 'Frost Walker', maxLevel: 'II', description: 'Turns the water you walk on into ice.' },
		{
			name: 'Soul Speed',
			maxLevel: 'III',
			description: 'Increases your movement speed while walking on soul sand or soul soil.'
		},
		{
			name: 'Swift Sneak',
			maxLevel: 'III',
			description: 'Increases your movement speed while sneaking.'
		},
		{ name: 'Power', maxLevel: 'V', description: 'Increases arrow damage from your bow.' },
		{
			name: 'Punch',
			maxLevel: 'II',
			description: 'Knocks targets back further when shot with a bow.'
		},
		{
			name: 'Flame',
			maxLevel: 'I',
			description: 'Sets your arrows on fire, igniting anything they hit.'
		},
		{
			name: 'Infinity',
			maxLevel: 'I',
			description: 'Lets you shoot arrows without using up your ammo.'
		},
		{
			name: 'Multishot',
			maxLevel: 'I',
			description: 'Fires 3 arrows at once from your crossbow, using only 1.'
		},
		{
			name: 'Piercing',
			maxLevel: 'IV',
			description: 'Arrows pass through multiple targets instead of stopping.'
		},
		{
			name: 'Quick Charge',
			maxLevel: 'III',
			description: 'Reduces the time it takes to reload your crossbow.'
		},
		{
			name: 'Loyalty',
			maxLevel: 'III',
			description: 'Makes your trident return to you after being thrown.'
		},
		{ name: 'Impaling', maxLevel: 'V', description: 'Deals extra damage to aquatic mobs.' },
		{
			name: 'Riptide',
			maxLevel: 'III',
			description: 'Launches you forward with the trident when thrown in water or rain.'
		},
		{
			name: 'Channeling',
			maxLevel: 'I',
			description: 'Summons a lightning bolt on a target during thunderstorms.'
		},
		{
			name: 'Luck of the Sea',
			maxLevel: 'III',
			description: 'Increases your chance of catching treasure while fishing.'
		},
		{ name: 'Lure', maxLevel: 'III', description: 'Decreases the time it takes for fish to bite.' },
		{
			name: 'Curse of Binding',
			maxLevel: 'I',
			description: 'Prevents you from removing the item once equipped.'
		},
		{
			name: 'Curse of Vanishing',
			maxLevel: 'I',
			description: 'Destroys the item when you die, instead of dropping it.'
		}
	]);
</script>

<div class="enchants-wrapper">
	<h1 class="page-title">Descriptions</h1>
	<p class="intro">A simple breakdown of what each enchantment does.</p>

	<div class="divider"></div>

	{#each enchants as enchant, i (i)}
		<EnchantCard
			name={enchant.name}
			maxLevel={enchant.maxLevel}
			description={enchant.description}
		/>
	{/each}
</div>

<style>
	.enchants-wrapper {
		display: flex;
		flex-direction: column;
		gap: 0.75rem;
		padding: 1rem;
	}

	.page-title {
		color: white;
		font-size: 2rem;
		line-height: 2.2rem;
		margin: 0;
	}

	.intro {
		color: lightgray;
		font-weight: bold;
		margin: 0 0 0.25rem;
	}

	.divider {
		height: 1px;
		background-color: #333336;
		margin: 0.5rem 0;
	}
</style>
