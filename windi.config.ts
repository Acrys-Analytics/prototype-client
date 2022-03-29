import { defineConfig } from 'windicss/helpers';

export default defineConfig({
	theme: {
		colors: {
			blue: '#2AC9FB',
			green: '#49F350',
			yellow: '#F8C74A',
			red: '#FB2841',
			white: '#FFFFFF',
			content: '#A1A0B2',
			transparent: 'transparent',
			base: {
				100: '#0F0F10',
				200: '#1A1A1D',
				300: '#1B1B20',
				400: '#85829D',
				500: '#C8C8CA'
			},
			unranked: {
				primary: '#A6A6A6',
				secondary: '#414141'
			},
			iron: {
				primary: '#615958',
				secondary: '#433431'
			},
			bronze: {
				primary: '#965A4E',
				secondary: '#594945'
			},
			silver: {
				primary: '#BECEFF',
				secondary: '#62666A'
			},
			gold: {
				primary: '#C28F40',
				secondary: '#7A5A29'
			},
			platin: {
				primary: '#19C0AB',
				secondary: '#2C6B67'
			},
			diamond: {
				primary: '#2090F8',
				secondary: '#394375'
			},
			master: {
				primary: '#CB49E7',
				secondary: '#533F62'
			},
			grandmaster: {
				primary: '#F3472F',
				secondary: '#564543'
			},
			challenger: {
				primary: '#CEB172',
				secondary: '#4ED8EC'
			}
		},
		extend: {
			screens: {
				xl: '1920px'
			},
			fontFamily: {
				main: ['Airborne', 'ui-sans-serif', 'system-ui']
			},
			borderWidth: {
				1: '1px'
			},
			rounded: {
				5: '5px'
			}
		}
	},
	safelist: [
		'fill-unranked-primary',
		'fill-unranked-secondary',
		'fill-iron-primary',
		'fill-iron-secondary',
		'fill-bronze-primary',
		'fill-bronze-secondary',
		'fill-silver-primary',
		'fill-silver-secondary',
		'fill-gold-primary',
		'fill-gold-secondary',
		'fill-platin-primary',
		'fill-platin-secondary',
		'fill-diamond-primary',
		'fill-diamond-secondary',
		'fill-master-primary',
		'fill-master-secondary',
		'fill-grandmaster-primary',
		'fill-grandmaster-secondary',
		'fill-challenger-primary',
		'fill-challenger-secondary',
		'badge-blue',
		'badge-unranked',
		'badge-iron',
		'badge-bronze',
		'badge-silver',
		'badge-gold',
		'badge-platin',
		'badge-diamond',
		'badge-master',
		'badge-grandmaster',
		'badge-challenger'
	],
	shortcuts: {
		badge: 'border-1 bg-gradient-to-r from-base-200 to-base-100 rounded-[5px] text-sm px-2 py-1',
		'badge-blue': 'border-blue text-blue',
		'badge-red': 'border-red text-red',
		'badge-yellow': 'border-yellow text-yellow',
		'badge-green': 'border-green text-green',
		'badge-unranked': 'border-unranked-primary text-unranked-primary',
		'badge-iron': 'border-iron-primary text-iron-primary',
		'badge-bronze': 'border-bronze-primary text-bronze-primary',
		'badge-silver': 'border-silver-primary text-silver-primary',
		'badge-gold': 'border-gold-primary text-gold-primary',
		'badge-platin': 'border-platin-primary text-platin-primary',
		'badge-diamond': 'border-diamond-primary text-diamond-primary',
		'badge-master': 'border-master-primary text-master-primary',
		'badge-grandmaster': 'border-grandmaster-primary text-grandmaster-primary',
		'badge-challenger': 'border-challenger-primary text-challenger-primary',
		card: '',
		select: 'badge badge-blue flex hover:(bg-none bg-blue bg-opacity-10)'
	},
	variants: {},
	plugins: []
});
