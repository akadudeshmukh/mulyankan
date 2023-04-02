type ContactInfoFooter = {
	description: string;
	address: string;
	mail: string;
	phone: string;
}
type NavAttribute = {
	sectiontitle: string,
	id: number,
	link: string,
	linktitle: string
}
type NewsLetterFooter = {
	sectiontitle: string;
	nameplaceholder: string;
	emailplaceholder: string;
	buttontitle: string;
}
type LegalLinkFooter = {
	sitename: string;
	text: LegalText;
	site: string;
	image: string;
}
type LegalText = {
	text1: string;
	text2: string;
	designedby: string;
	legalcontent: string;
}
export type FooterData = {
	ContactInfoFooter: ContactInfoFooter
	PrimaryFooterNav: Array<NavAttribute>
	SecondaryFooterNav: Array<NavAttribute>
	NewsLetterFooter: NewsLetterFooter
	LegalLinkFooter: LegalLinkFooter
}

const data: FooterData = {
	"ContactInfoFooter":
	{
		"description": "Dolore erat dolor sit lorem vero amet. Sed sit lorem magna, ipsum no sit erat lorem et magna ipsum dolore amet erat.",
		"address": "123 Street, New York, USA",
		"mail": "test@test.com",
		"phone": "+012 345 67890"
	},
	"PrimaryFooterNav": [

		{
			"sectiontitle": "Quick Link",
			"id": 1,
			"link": "http://localhost:3000/",
			"linktitle": "Home"
		},
		{
			"sectiontitle": "",
			"id": 2,
			"link": "http://localhost:3000/",
			"linktitle": "Our Shops"
		},
		{
			"sectiontitle": "",
			"id": 3,
			"link": "http://localhost:3000/",
			"linktitle": "shop Detail"
		},
		{
			"sectiontitle": "",
			"id": 4,
			"link": "http://localhost:3000/",
			"linktitle": "Shopping Cart"
		},
		{
			"sectiontitle": "",
			"id": 5,
			"link": "http://localhost:3000/",
			"linktitle": "Checkout"
		}

	],
	"SecondaryFooterNav": [
		{
			"sectiontitle": "",
			"id": 1,
			"link": "http://localhost:3000/",
			"linktitle": "Home"
		},
		{
			"sectiontitle": "",
			"id": 2,
			"link": "http://localhost:3000/",
			"linktitle": "Our Shops"
		},
		{
			"sectiontitle": "",
			"id": 3,
			"link": "http://localhost:3000/",
			"linktitle": "shop Detail"
		},
		{
			"sectiontitle": "",
			"id": 4,
			"link": "http://localhost:3000/",
			"linktitle": "Shopping Cart"
		},
		{
			"sectiontitle": "",
			"id": 5,
			"link": "http://localhost:3000/",
			"linktitle": "Checkout"
		}
	]
	,
	"NewsLetterFooter":
	{
		"sectiontitle": "Newsletter",
		"nameplaceholder": "Your Name",
		"emailplaceholder": "Your Email",
		"buttontitle": "Subscribe Now"
	}
	,
	"LegalLinkFooter":
	{
		"sitename": "Shopper",
		"text": {
			"text1": "Distributed By",
			"text2": "ThemeWagon",
			"designedby": "Barbarik",
			"legalcontent": ". All Rights Reserved. Designed by"
		},
		"site": "http://localhost:3000/",
		"image": "/img/payments.png"
	}

}
export default data;