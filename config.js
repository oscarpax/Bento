// ╔╗ ╔═╗╔╗╔╔╦╗╔═╗
// ╠╩╗║╣ ║║║ ║ ║ ║
// ╚═╝╚═╝╝╚╝ ╩ ╚═╝
// ┌─┐┌─┐┌┐┌┌─┐┬┌─┐┬ ┬┬─┐┌─┐┌┬┐┬┌─┐┌┐┌
// │  │ ││││├┤ ││ ┬│ │├┬┘├─┤ │ ││ ││││
// └─┘└─┘┘└┘└  ┴└─┘└─┘┴└─┴ ┴ ┴ ┴└─┘┘└┘

const CONFIG = {
  // ┌┐ ┌─┐┌─┐┬┌─┐┌─┐
  // ├┴┐├─┤└─┐││  └─┐
  // └─┘┴ ┴└─┘┴└─┘└─┘

  // General
  name: 'Mika',
  imageBackground: true,
  openInNewTab: true,
  twelveHourFormat: false,

  // Greetings
  greetingMorning: 'Good morning!',
  greetingAfternoon: 'Good afternoon,',
  greetingEvening: 'Good evening,',
  greetingNight: 'Go to Sleep!',

  // Layout
  bentoLayout: 'lists', // 'bento', 'lists', 'buttons'

  // Weather
  weatherKey: '9021a883a49491c21adef99c2f18147f', // Write here your API Key
  weatherIcons: 'OneDark', // 'Onedark', 'Nord', 'Dark', 'White'
  weatherUnit: 'F', // 'F', 'C'
  language: 'en', // More languages in https://openweathermap.org/current#multi

  trackLocation: true, // If false or an error occurs, the app will use the lat/lon below
  defaultLatitude: '33.659',
  defaultLongitude: '-117.998',

  // Autochange
  autoChangeTheme: true,

  // Autochange by OS
  changeThemeByOS: false,

  // Autochange by hour options (24hrs format, string must be in: hh:mm)
  changeThemeByHour: true,
  hourDarkThemeActive: '18:30',
  hourDarkThemeInactive: '06:15',

  // ┌┐ ┬ ┬┌┬┐┌┬┐┌─┐┌┐┌┌─┐
  // ├┴┐│ │ │  │ │ ││││└─┐
  // └─┘└─┘ ┴  ┴ └─┘┘└┘└─┘

  firstButtonsContainer: [
    {
      id: '1',
      name: 'Contacts',
      icon: 'user-round',
      link: 'https://contacts.google.com',
    },
    {
      id: '2',
      name: 'Mail',
      icon: 'mail',
      link: 'https://mail.google.com/mail/u/0/#inbox',
    },
    {
      id: '3',
      name: 'Maps',
      icon: 'map-pin',
      link: 'https://www.google.com/maps/@33.6847834,-118.0068974,15z?hl=en',
    },
    {
      id: '4',
      name: 'Calendar',
      icon: 'calendar',
      link: 'https://calendar.google.com/calendar/r',
    },
    {
      id: '5',
      name: 'Messages',
      icon: 'message-square',
      link: 'https://messages.google.com/web/conversations?redirected=true',
    },
    {
      id: '6',
      name: 'WhatsApp',
      icon: 'message-circle',
      link: 'https://web.whatsapp.com/',
    },
  ],

  secondButtonsContainer: [
    {
      id: '1',
      name: 'Music',
      icon: 'headphones',
      link: 'https://open.spotify.com',
    },
    {
      id: '2',
      name: 'Twitter',
      icon: 'twitter',
      link: 'https://twitter.com/',
    },
  ],

  // ┬  ┬┌─┐┌┬┐┌─┐
  // │  │└─┐ │ └─┐
  // ┴─┘┴└─┘ ┴ └─┘

  // First Links Container
	firstlistsContainer: [
		{
			icon: 'music',
			id: '1',
			links: [
				{
                    name: 'Home',
                    link: 'https://news.google.com/',
                },
                {
                    name: 'Weather',
                    link: 'https://www.wunderground.com/',
                },
                {
                    name: 'Tasks',
                    link: 'https://tasks.google.com/tasks/',
                },
                {
                    name: 'Docs',
                    link: 'https://docs.google.com/document/u/0/',
                },
			],
		},
		{
			icon: 'coffee',
			id: '2',
			links: [
				{
					name: 'CNN',
                    link: 'https://www.cnn.com/',
				},
				{
					name: 'NYT',
					link: 'https://www.nytimes.com/',
				},
				{
					name: 'BBC',
					link: 'https://www.bbc.com/',
				},
				{
					name: 'My Yahoo',
					link: 'https://my.yahoo.com/',
				},
			],
		},
	],

	// Second Links Container
	secondListsContainer: [
		{
			icon: 'binary',
			id: '1',
			links: [
				{
					name: 'Calendar',
					link: 'https://calendar.google.com/calendar/r',
				},
				{
					name: 'Market',
					link: 'https://www.google.com/finance/beta',
				},
				{
					name: 'WhatsApp',
					link: 'https://web.whatsapp.com/',
				},
				{
					name: 'Scores',
					link: 'https://www.sofascore.com/',
				},
			],
		},
		{
			icon: 'map-pin',
			id: '2',
			links: [
				{
					name: 'Maps',
					link: 'https://www.google.com/maps/@33.6847834,-118.0068974,15z?hl=en',
				},
				{
					name: 'Contacts',
					link: 'https://contacts.google.com',
				},
				{
					name: 'TV',
					link: 'https://tv.youtube.com/',
				},
				{
					name: 'Tricycle',
					link: 'https://tricycle.org/',
				},
			],
		},
	],
};
