export type InfoLink = {
    id: number;
    name: string;
}
export type SocialLink = InfoLink & {
    className: string;
}

export type TopBar = {
    infoLinks: Array<InfoLink>;
    socialLinks: Array<SocialLink>;
}


export const topBarData: TopBar = {
    "infoLinks": [
        {
            "id": 1,
            "name": "FAQs"
        },
        {
            "id": 2,
            "name": "Help"
        },
        {
            "id": 3,
            "name": "Support"
        }
    ],
    "socialLinks": [
        {
            "id": 1,
            "name": "Facebook",
            "className": "fab fa-facebook-f"
        },
        {
            "id": 2,
            "name": "Twitter",
            "className": "fab fa-twitter"
        },
        {
            "id": 3,
            "name": "Linkedin",
            "className": "fab fa-linkedin-in"
        },
        {
            "id":4,
            "name": "Instagram",
            "className": "fab fa-instagram"
        },
        {
            "id":5,
            "name": "Youtube",
            "className": "fab fa-youtube"
        }
    ]
}

export const navBarData = {
    "navLinks": [
        {
            "id": 1,
            "name": "Home",
            "url": ""
        },
        {
            "id": 2,
            "name": "Shop",
            "url": ""
        },
        {
            "id": 3,
            "name": "Shop Detail",
            "url": ""
        },
        {
            "id": 4,
            "name": "Contact",
            "url": ""
        }
    ]
}