import Arrow from './Arrow.png';
import default_avater from './default_avater.png';
import bgImage from './bgImage.svg';
//import code from './code.svg';
import favicon from './favicon.svg';
import Gallery from './Gallery.svg';
import help_icon from './help_icon.png';
import img1 from './img1.png';
import img2 from './img2.png';
import logo from './logo.png';
//import logo_big from './logo_big.svg';
//import logo_icon from './logo_icon.svg';
import Menu from './Menu.png';
import pic1 from './pic1.png';
import pic2 from './pic2.png';
import pic3 from './pic3.png';
import pic4 from './pic4.png';
import Profile1 from "./Profile1.png";
import Profile2 from "./Profile2.png";
import Profile3 from "./Profile3.png";
import Profile4 from "./Profile4.png";
import Profile5 from "./Profile5.png";
import Search from './Search.png';
import send from './send.svg';

const assets = {
    Arrow,
    default_avater,
    bgImage,
    //code,
    favicon,
    Gallery,
    help_icon,
    img1,
    img2,
    logo,
    //logo_big,
    //logo_icon,
    Menu,
    pic1,
    pic2,
    pic3,
    pic4,
    profile1,
    profile2,
    profile3,
    profile4,
    profile5,
    Search,
    send
};

export default assets;

export const imagesDummyData = [pic1, pic2, pic3, pic4, pic1, pic2]

export const userDummyData = [
    {
        "_id": "680f50aaf10f3cd28382ecf2",
        "email": "test1@greatstack.dev",
        "fullName": "Alison Martin",
        "profilePic": profile1,
        "bio": "Hi Everyone, I am Using QuickChat",
    },
    {
        "_id": "680f50e4f10f3cd28382ecf9",
        "email": "test2@greatstack.dev",
        "fullName": "Martin Johnson",
        "profilePic": profile2,
        "bio": "Hi Everyone, I am Using QuickChat",
    },
    {
        "_id": "680f510af10f3cd28382ed01",
        "email": "test3@greatstack.dev",
        "fullName": "Enrique Martinez",
        "profilePic": profile3,
        "bio": "Hi Everyone, I am Using QuickChat",
    },
    {
        "_id": "680f5137f10f3cd28382ed10",
        "email": "test4@greatstack.dev",
        "fullName": "Marco Jones",
        "profilePic": profile4,
        "bio": "Hi Everyone, I am Using QuickChat",
    },
    {
        "_id": "680f516cf10f3cd28382ed11",
        "email": "test5@greatstack.dev",
        "fullName": "Richard Smith",
        "profilePic": profile5,
        "bio": "Hi Everyone, I am Using QuickChat",
    }
]

export const messagesDummyData = [
    {
        "_id": "680f571ff10f3cd28382f094",
        "senderId": "680f5116f10f3cd28382ed02",
        "receiverId": "680f50e4f10f3cd28382ecf9",
        "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        "seen": true,
        "createdAt": "2025-04-28T10:23:27.844Z",
    },
    {
        "_id": "680f5726f10f3cd28382f0b1",
        "senderId": "680f50e4f10f3cd28382ecf9",
        "receiverId": "680f5116f10f3cd28382ed02",
        "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        "seen": true,
        "createdAt": "2025-04-28T10:23:34.520Z",
    },
    {
        "_id": "680f5729f10f3cd28382f0b6",
        "senderId": "680f5116f10f3cd28382ed02",
        "receiverId": "680f50e4f10f3cd28382ecf9",
        "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        "seen": true,
        "createdAt": "2025-04-28T10:23:37.301Z",
    },
    {
        "_id": "680f572cf10f3cd28382f0bb",
        "senderId": "680f50e4f10f3cd28382ecf9",
        "receiverId": "680f5116f10f3cd28382ed02",
        "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        "seen": true,
        "createdAt": "2025-04-28T10:23:40.334Z",
    },
    {
        "_id": "680f573cf10f3cd28382f0c0",
        "senderId": "680f50e4f10f3cd28382ecf9",
        "receiverId": "680f5116f10f3cd28382ed02",
        "image": img1,
        "seen": true,
        "createdAt": "2025-04-28T10:23:56.265Z",
    },
    {
        "_id": "680f5745f10f3cd28382f0c5",
        "senderId": "680f5116f10f3cd28382ed02",
        "receiverId": "680f50e4f10f3cd28382ecf9",
        "image": img2,
        "seen": true,
        "createdAt": "2025-04-28T10:24:05.164Z",
    },
    {
        "_id": "680f5748f10f3cd28382f0ca",
        "senderId": "680f5116f10f3cd28382ed02",
        "receiverId": "680f50e4f10f3cd28382ecf9",
        "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        "seen": true,
        "createdAt": "2025-04-28T10:24:08.523Z",
    }
]