/* eslint-disable no-dupe-keys */
import { v4 as uuidv4 } from "uuid"

import Grissini from "./components/projects/Grissini"
import grissiniCover from "./assets/img/works/cool.jpg"
import grissiniVisual1 from "./assets/img/works/grissini/veesual.jpg"

import PXP from "./components/projects/PXP"
import pxpCover from "./assets/img/works/pxp.png"
import pxpVisual1 from "./assets/img/works/pxp/wawa.png"

import Arcane from "./components/projects/Arcane"
import arcaneCover from "./assets/img/works/blinu.png"
import arcaneVisual1 from "./assets/img/works/arcane/blinu.png"

import Hologramme from "./components/projects/Hologramme"
import hologrammeCover from "./assets/img/works/metasino.png"
import hologrammeVisual1 from "./assets/img/works/hologramme/Screenshot 2022-04-05 030408.png"

import Elijah from "./components/projects/Elijah"
import elijahCover from "./assets/img/works/elijah.jpg"
import elijahVisual1 from "./assets/img/works/elijah/visual1.jpg"

import Circl from "./components/projects/Circl"
import circlCover from "./assets/img/works/circl.jpg"
import circlVisual1 from "./assets/img/works/circl/visual1.jpg"

import Shibuya from "./components/projects/Shibuya"
import shibuyaCover from "./assets/img/works/shibuya.jpg"
import shibuyaVisual1 from "./assets/img/works/shibuya/visual1.jpg"

import Bubble from "./components/projects/Bubble"
import bubbleCover from "./assets/img/works/bubble.jpg"
import bubbleVisual1 from "./assets/img/works/bubble/bubbleVisual1.png"

import Sangen from "./components/projects/Sangen"
import sangenCover from "./assets/img/works/sangen.jpeg"
import sangenVisual1 from "./assets/img/works/sangen/sangenVisual1.jpg"

import Desktop from "./components/projects/Desktop"
import desktopCover from "./assets/img/works/sasa.png"
import desktopVisual1 from "./assets/img/works/desktop/Screenshot 2022-04-05 025642.png"

import Feels from "./components/projects/Feels"
import feelsCover from "./assets/img/works/feels.jpg"
import feelsVisual1 from "./assets/img/works/feels/feelsVisual1.jpg"

import Branding from "./components/projects/Branding"
import brandingCover from "./assets/img/works/branding.jpg"
import brandingVisual1 from "./assets/img/works/branding/visual1.jpg"


import Paco from "./components/projects/Paco"
import pacoCover from "./assets/img/works/paco.jpg"
import pacoVisual1 from "./assets/img/works/paco/visual1.jpg"

let projectsData = [

  {
    name: "SafeConnectX",
    path: "project-x-paris",
    title: "Complete design of the SafeConnectX website",
    coverImg: pxpCover,
    visual1: pxpVisual1,
    component: PXP,
    date: "Dec. 2021",
    role: "Designer, Web3 integrator",
    techs: ["HTML, CSS, Reactjs, Web3js"],
    description:
      "A blockchain project aimed at enhancing security throughout the crypto and degen space, specializing in blockchain law and having the first on-blockchain social network still in development.",
    websiteLink: "https://safe-connect-x.vercel.app/",
  },
  {
    name: "blockchain game",
    path: "grissini",
    title: "Design and developtment of the 3D blokchain MMORPG",
    coverImg: grissiniCover,
    visual1: grissiniVisual1,
    component: Grissini,
    date: "Feb. 2022",
    role: "Designer, Developer",
    techs: [" Unity, Moralis"],
    description:
      "Wendani Chronicles is a blockchain game, made with Unity, and MoralisSDK for handling all web3 related stuff. Still in development, yet to be out on mobile app stores.  The first blockchain P2E 3D game by a Kenyan lol.",
    
  },
  {
    name: "$BLINU",
    path: "arcane",
    title: "Simple NFT minting dApp",
    coverImg: arcaneCover,
    visual1: arcaneVisual1,
    component: Arcane,
    date: "Nov. 2021",
    role: "Designer, Solidity dev",
    techs: ["HTML/CSS, Web3js, Solidity, React"],
    description:
      "A simple decentralized application that lets users mint an amount of NFTs. Deployed on the polygon mainnet, and pass the OpenSea metadata standards. Other features include its dynamic mint price and reveal function, for the hosted metadata on IPFS",
  },


  {
    name: "Meta Casino",
    path: "hologramme",
    title: "a three.js project",
    visual1: hologrammeVisual1,
    coverImg: hologrammeCover,
    component: Hologramme,
    date: "Dec. 2021",
    role: "Designer",
    techs: [" Three.js, Blender"],
    description:
      "A three.js project thats integrated to the blockchain. Basically a virtual casino that lets users gamble from the confines of their own homes.",
  },
  
  {
    name: "NFT MARKET",
    path: "desktop",
    title: "NFT Marketplace",
    coverImg: desktopCover,
    visual1: desktopVisual1,
    component: Desktop,
    date: "Apr. 2022",
    role: "Designer Solidity dev",
    techs: [" Three.js, Blender, Solidity"],
    description:
      "A cross-chain NFT Marketplace where users can display their previously owned NFTs, as long as they are on the EVM. Users can also set prices for their NFTs and list them for sale. Still in development though. To be used as part of the 3D Wendani Chronicles ecosystem in that gamers can purchase in-game items as NFTs from here. ",
  },


]

projectsData = projectsData.map((project, index) => ({
  ...project,
  id: uuidv4(),
  index,
}))

export default projectsData
