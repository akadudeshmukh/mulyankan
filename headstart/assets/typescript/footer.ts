type ContactInfoFooter = {
	description: string;
	address: string;
	mail: string;
	phone: string;
}
type PrimaryFooterNav = {
	sectiontitle: string;
	Home: NavAttribute
	shops: NavAttribute
	shopdetail: NavAttribute
	shoppingcart: NavAttribute
	Checkout: NavAttribute
	Contactus: NavAttribute
}
type NavAttribute = {
	id: number,
	link: string,
	linktitle: string
}
type SecondaryFooterNav = PrimaryFooterNav & {
	sectiontitle: string;
	Home: NavAttribute
	shops: NavAttribute
	shopdetail: NavAttribute
	shoppingcart: NavAttribute
	Checkout: NavAttribute
	Contactus: NavAttribute
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
	PrimaryFooterNav: PrimaryFooterNav
	SecondaryFooterNav: SecondaryFooterNav
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
	}
	,
	"PrimaryFooterNav":
	{
		"sectiontitle": "Quick Links",
		"Home":
		{
			"id": 1,
			"link": "http://localhost:3000/",
			"linktitle": "Home"
		}
		,
		"shops":
		{
			"id": 2,
			"link": "http://localhost:3000/",
			"linktitle": "Our Shops"
		}
		,
		"shopdetail":
		{
			"id": 3,
			"link": "http://localhost:3000/",
			"linktitle": "shop Detail"
		}
		,
		"shoppingcart":
		{
			"id": 4,
			"link": "http://localhost:3000/",
			"linktitle": "Shopping Cart"
		}
		,
		"Checkout":
		{
			"id": 5,
			"link": "http://localhost:3000/",
			"linktitle": "Checkout"
		}
		,
		"Contactus":
		{
			"id": 6,
			"link": "http://localhost:3000/",
			"linktitle": "Contactus"
		}

	}
	,
	"SecondaryFooterNav":
	{
		"sectiontitle": "Trendy Link",
		"Home":
		{
			"id": 1,
			"link": "http://localhost:3000/",
			"linktitle": "Home"
		}
		,
		"shops":
		{
			"id": 2,
			"link": "http://localhost:3000/",
			"linktitle": "Our Shops"
		}
		,
		"shopdetail":
		{
			"id": 3,
			"link": "http://localhost:3000/",
			"linktitle": "shop Detail"
		}
		,
		"shoppingcart":
		{
			"id": 4,
			"link": "http://localhost:3000/",
			"linktitle": "Shopping Cart"
		}
		,
		"Checkout":
		{
			"id": 5,
			"link": "http://localhost:3000/",
			"linktitle": "Checkout"
		}
		,
		"Contactus":
		{
			"id": 6,
			"link": "http://localhost:3000/",
			"linktitle": "Contactus"
		}

	}
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