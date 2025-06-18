import React from "react"
import { AgentIcon, ArticleIcon, ContactIcon, IdeaIcon, OverviewIcon, SettingIcon, SubscriptionIcon, TicketIcon } from "../assets/Icons"
import { Agents, Articles, Contacts, Ideas, Overview, Settings, Subscription, Tickets } from "../pages"

export const paths = {
    overview: "/",
    tickets: "/tickets",
    ideas: "/ideas",
    contacts: "/contacts",
    agents: "/agents",
    articles: "/articles",
    settings: "/settings",
    subscription: "/subscription"
}

export const navList = [
    {
        id: 1,
        title: "Overview",
        path: paths.overview,
        icon: <OverviewIcon/>
    },
    {
        id: 2,
        title: "Tickets",
        path: paths.tickets,
        icon: <TicketIcon/>
    },
    {
        id: 3,
        title: "Ideas",
        path: paths.ideas,
        icon: <IdeaIcon/>
    },
    {
        id: 4,
        title: "Contacts",
        path: paths.contacts,
        icon: <ContactIcon/>
    },
    {
        id: 5,
        title: "Agents",
        path: paths.agents,
        icon: <AgentIcon/>
    },
    {
        id: 6,
        title: "Articles",
        path: paths.articles,
        icon: <ArticleIcon/>
    },
    {
        id: 7,
        title: "Settings",
        path: paths.settings,
        icon: <SettingIcon/>
    },
    {
        id: 8,
        title: "Subscription",
        path: paths.subscription,
        icon: <SubscriptionIcon/>
    },
]

export const pageRouteList = [
    {
        id: 1,
        path: paths.overview,
        element: <Overview/>
    },
    {
        id: 2,
        path: paths.tickets,
        element: <Tickets/>
    },
    {
        id: 3,
        path: paths.ideas,
        element: <Ideas/>

    },
    {
        id: 4,
        path: paths.contacts,
        element: <Contacts/>
    },
    {
        id: 5,
        path: paths.agents,
        element: <Agents/>
    },
    {
        id: 6,
        path: paths.articles,
        element: <Articles/>
    },
    {
        id: 7,
        path: paths.settings,
        element: <Settings/>
    },
    {
        id: 8,
        path: paths.subscription,
        element: <Subscription/>
    },
]

export const userList = [
    {
        id: 1,
        imgURL: "https://i.pinimg.com/736x/77/61/2f/77612fbea977eda7c95a7126ff04e2bf.jpg",
        message: "Contact Email not Linked",
        updatedAt: "Updated 1 day ago",
        name: "Tom Cruise",
        createdAt: "on 24.05.2019",
        flightDate: "May 26, 2019",
        flightTime: "6:30 PM",
        priorityId: 3
    },
    {
        id: 2,
        imgURL: "https://i.pinimg.com/736x/77/61/2f/77612fbea977eda7c95a7126ff04e2bf.jpg",
        message: "Adding Images to Featured Posts",
        updatedAt: "Updated 1 day ago",
        name: "Matt Damon",
        createdAt: "on 24.05.2019",
        flightDate: "May 26, 2019",
        flightTime: "8:00 AM",
        priorityId: 1
    },

]