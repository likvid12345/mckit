<script>
	import Footer from '$lib/components/element-components/Footer.svelte';
	const sections = $state([
		{
			title: 'Weapons',
			items: [
				{
					title: 'Sword',
					enchants: [
						'Sharpness V',
						'Looting III',
						'Unbreaking III',
						'Mending',
						'Sweeping Edge III',
						'Fire Aspect II',
						'Knockback II'
					],
					note: 'Sharpness is the best general-purpose damage enchant. Smite V and Bane of Arthropods V are alternatives for undead and arthropods, but only one of the three can be used at once.'
				},
				{
					title: 'Axe',
					enchants: ['Sharpness V', 'Unbreaking III', 'Mending', 'Efficiency V', 'Fortune III'],
					note: "Sharpness gives the best all-around combat damage. Fortune III is the best general-purpose block-breaking choice; Silk Touch is the alternative when you want blocks themselves instead of their normal drops. The two can't be combined."
				},
				{
					title: 'Mace',
					enchants: ['Density V', 'Unbreaking III', 'Mending', 'Wind Burst III', 'Fire Aspect II'],
					note: 'Density V is the best general-purpose PvE choice because it increases smash damage. Breach IV is the alternative for heavily armored targets and PvP. Density, Breach, Smite, and Bane of Arthropods are mutually exclusive.'
				},
				{
					title: 'Spear',
					enchants: [
						'Lunge III',
						'Sharpness V',
						'Looting III',
						'Unbreaking III',
						'Mending',
						'Fire Aspect II',
						'Knockback II'
					],
					note: 'Spear can use the same enchantments as a Sword except Sweeping Edge, plus the exclusive Lunge enchantment. Sharpness is the best general-purpose damage choice; Smite V or Bane of Arthropods V are alternatives for specific mob types.'
				},
				{
					title: 'Trident',
					enchants: ['Impaling V', 'Loyalty III', 'Channeling', 'Unbreaking III', 'Mending'],
					note: 'Loyalty and Channeling are the best general-purpose combination. Riptide III is the alternative for mobility in water or rain, but it cannot be combined with Loyalty or Channeling.'
				},
				{
					title: 'Bow',
					enchants: ['Power V', 'Flame', 'Punch II', 'Unbreaking III', 'Infinity'],
					note: 'Infinity is the best general-purpose choice for a Bow if you want unlimited normal arrows. Mending is the alternative, since Infinity and Mending cannot be combined.'
				},
				{
					title: 'Crossbow',
					enchants: ['Quick Charge III', 'Multishot', 'Unbreaking III', 'Mending'],
					note: 'Multishot is the best general-purpose choice for firing three projectiles at once. Piercing IV is the alternative for shots that pass through multiple entities, and the two cannot be combined.'
				}
			]
		},
		{
			title: 'Tools',
			items: [
				{
					title: 'Pickaxe',
					enchants: ['Efficiency V', 'Fortune III', 'Unbreaking III', 'Mending'],
					note: 'Fortune III is the best general-purpose choice for maximizing resource drops. Silk Touch is the alternative when you want blocks themselves instead of their normal drops.'
				},
				{
					title: 'Shovel',
					enchants: ['Efficiency V', 'Unbreaking III', 'Mending', 'Silk Touch'],
					note: 'Silk Touch is the best general-purpose choice for collecting blocks intact, including Grass Blocks, Mycelium, and other blocks that would otherwise drop something else.'
				},
				{
					title: 'Hoe',
					enchants: ['Efficiency V', 'Fortune III', 'Unbreaking III', 'Mending'],
					note: 'Fortune III is the best general-purpose choice because it increases useful crop and plant drops. Silk Touch is the alternative when you specifically want intact blocks such as Sculk.'
				},
				{
					title: 'Shears',
					enchants: ['Efficiency V', 'Unbreaking III', 'Mending'],
					note: 'Efficiency V makes shearing and breaking compatible blocks much faster, while Unbreaking III and Mending maximize durability. Silk Touch can technically be applied, but provides no meaningful benefit in normal vanilla gameplay.'
				}
			]
		},
		{
			title: 'Armor',
			items: [
				{
					title: 'Helmet',
					enchants: [
						'Protection IV',
						'Respiration III',
						'Aqua Affinity',
						'Unbreaking III',
						'Mending',
						'Thorns III'
					],
					note: 'Protection IV is the best all-around defensive choice. Fire Protection IV, Blast Protection IV, and Projectile Protection IV are specialized alternatives and cannot be combined with Protection IV. Thorns III is included because it adds reflected damage, though it causes additional durability loss.'
				},
				{
					title: 'Chestplate',
					enchants: ['Protection IV', 'Unbreaking III', 'Mending', 'Thorns III'],
					note: 'Protection IV provides the best general-purpose defense. Thorns III adds reflected damage but causes additional durability loss, so it is the optional part of the setup.'
				},
				{
					title: 'Leggings',
					enchants: ['Protection IV', 'Swift Sneak III', 'Unbreaking III', 'Mending', 'Thorns III'],
					note: 'Swift Sneak III increases movement speed while sneaking and is exclusive to Leggings. Thorns III adds reflected damage at the cost of extra durability.'
				},
				{
					title: 'Boots',
					enchants: [
						'Protection IV',
						'Feather Falling IV',
						'Depth Strider III',
						'Soul Speed III',
						'Unbreaking III',
						'Mending',
						'Thorns III'
					],
					note: 'Depth Strider III is the best general-purpose underwater movement enchant. Frost Walker II is the alternative and cannot be combined with Depth Strider. Soul Speed III is included for faster movement on Soul Sand and Soul Soil, while Thorns III adds reflected damage at the cost of extra durability.'
				},
				{
					title: 'Elytra',
					enchants: ['Unbreaking III', 'Mending'],
					note: 'Unbreaking III and Mending are the only useful Elytra enchantments in vanilla. There is no enchantment that directly increases flight speed.'
				}
			]
		},
		{
			title: 'Utility',
			items: [
				{
					title: 'Fishing Rod',
					enchants: ['Luck of the Sea III', 'Lure III', 'Unbreaking III', 'Mending']
				},
				{
					title: 'Shield',
					enchants: ['Unbreaking III', 'Mending'],
					note: 'Shields have no dedicated offensive or defensive enchantments in vanilla. Unbreaking III and Mending simply maximize their durability.'
				},
				{
					title: 'Flint and Steel',
					enchants: ['Unbreaking III', 'Mending'],
					note: 'Unbreaking III and Mending maximize durability, although enchanting Flint and Steel is usually unnecessary because it is inexpensive to replace.'
				},
				{
					title: 'Brush',
					enchants: ['Unbreaking III', 'Mending'],
					note: 'These are the useful Brush enchantments for archaeology. Unbreaking III greatly extends its lifespan, while Mending repairs it with XP.'
				},
				{
					title: 'Carrot on a Stick',
					enchants: ['Unbreaking III', 'Mending'],
					note: 'Unbreaking III and Mending maximize durability, although enchanting it is usually unnecessary because it is cheap to replace.'
				},
				{
					title: 'Warped Fungus on a Stick',
					enchants: ['Unbreaking III', 'Mending'],
					note: 'Unbreaking III and Mending maximize durability, although enchanting it is usually unnecessary because it is cheap to replace.'
				}
			]
		}
	]);
</script>

<div class="best-wrapper">
	<h1 class="page-title">Best Enchants</h1>
	<p class="intro">The strongest enchantment combo for every piece of gear you can enchant.</p>

	{#each sections as section, s (s)}
		<div class="section-divider">
			<span class="section-label">{section.title}</span>
		</div>

		{#each section.items as cat, i (i)}
			<h2 class="item-title">{cat.title}</h2>

			<div class="gray-container">
				<div class="tag-row">
					{#each cat.enchants as enchant, j (j)}
						<span class="tag">{enchant}</span>
					{/each}
				</div>

				{#if cat.note}
					<p class="cat-note">{cat.note}</p>
				{/if}
			</div>
		{/each}
	{/each}

	<div class="divider"></div>

	<div class="info-note">
		<p>
			Mending and Unbreaking work together on almost every piece of gear. Unbreaking reduces
			durability consumption, while Mending repairs the item using XP. Protection-type enchantments
			are mutually exclusive, as are other specialized alternatives such as Fortune/Silk Touch,
			Depth Strider/Frost Walker, Infinity/Mending, Multishot/Piercing, and
			Density/Breach/Smite/Bane.
		</p>
	</div>
</div>
<Footer />

<style>
	.best-wrapper {
		display: flex;
		flex-direction: column;
		gap: 0.5rem;
		padding: 1rem;

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

		.section-divider {
			display: flex;
			align-items: center;
			gap: 0.6rem;
			margin: 0.75rem 0 0.25rem;
		}

		.section-divider::before,
		.section-divider::after {
			content: '';
			flex: 1;
			height: 1px;
			background-color: #333336;
		}

		.section-label {
			color: var(--secondary);
			font-size: 0.75rem;
			font-weight: bold;
			text-transform: uppercase;
			letter-spacing: 0.08em;
			white-space: nowrap;
		}

		.divider {
			height: 1px;
			background-color: #333336;
			margin: 0.5rem 0;
		}

		.item-title {
			color: white;
			font-size: 1.05rem;
			margin: 0.4rem 0 0.25rem;
		}

		.gray-container {
			background-color: #242427;
			border-radius: 0.75rem;
			padding: 1rem 1.1rem;
			display: flex;
			flex-direction: column;
			gap: 0.6rem;
			margin-bottom: 0.25rem;
		}

		.tag-row {
			display: flex;
			flex-wrap: wrap;
			gap: 0.4rem;
		}

		.tag {
			background-color: rgba(127, 0, 255, 0.15);
			color: var(--secondary);
			font-size: 0.8rem;
			font-weight: bold;
			padding: 0.3rem 0.7rem;
			border-radius: 999px;
		}

		.cat-note {
			color: #a8a8a8;
			font-weight: 600;
			font-size: 0.82rem;
			margin: 0;
			line-height: 1.5;
		}

		.info-note {
			background-color: rgba(127, 0, 255, 0.12);
			border-left: 3px solid var(--secondary);
			border-radius: 0.5rem;
			padding: 0.85rem 1rem;
			margin: 0;

			p {
				color: whitesmoke;
				font-size: 0.85rem;
				font-weight: bold;
				margin: 0;
				line-height: 1.4;
			}
		}
	}
</style>
