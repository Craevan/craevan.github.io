const linkedin = "https://www.linkedin.com/in/asiverskii/";
const github = "https://github.com/Craevan/";
const email = 'mailto:a.siverskii@gmail.com';
//projects
const jchat = "https://github.com/Craevan/JChat";
const tgbot = "https://github.com/Craevan/TelegramBot";
const library = "https://github.com/Craevan/LibraryManager";

whois = [
    "<br>",
    "Hi, my name is Alex.",
    "I have been fond of information technology since childhood.",
    "Now I am actively studying Java and Spring Framework. ",
    "My dream is to become a part of a team of programmers who create useful tools for people.",
    "<br>"
];

whoami = [
    "<br>",
    navigator.vendor,
    "<br>",
    navigator.userAgent,
    "<br>"
];

social = [
    "<br>",
    'linkedin       <a href="' + linkedin + '" target="_blank">linkedin/asiverskii' + "</a>",
    'github         <a href="' + github + '" target="_blank">github/Craevan' + "</a>",
    "<br>"
];

projects = [
    "<br>",
    'jchat       <a href="' + jchat + '" target="_blank">Client-Server chat' + "</a>",
    'tgbot       <a href="' + tgbot + '" target="_blank">Bot for Telegram messenger' + "</a>",
    'library     <a href="' + library + '" target="_blank">CRUD Spring MVC web-app' + "</a>",
    "<br>",
    "type the project name to go to the repository",
    "<br>"
];

help = [
    "<br>",
    '<span class="command">whois</span>          Who is Craevan?',
    '<span class="command">whoami</span>         Who are you?',
    '<span class="command">social</span>         Display social networks',
    '<span class="command">projects</span>       View coding projects',
    '<span class="command">history</span>        View command history',
    '<span class="command">help</span>           List of available commands',
    '<span class="command">email</span>          Do not email me. I\'m joking, of course you can write to me ;-)',
    '<span class="command">clear</span>          Clear terminal',
    '<span class="command">banner</span>         Display the header',
    "<br>",
];

banner = [
    "                                        _ __  __        __      _    ",
    "  __________ ____ _  _____  ___   ___ _(_) /_/ /  __ __/ /     (_)__ ",
    "/ __/ __/ _ `/ -_) |/ / _ `/ _ \\_/ _ `/ / __/ _ \\/ // / _ \\_  / / _ \\",
    "\\__/_/  \\_,_/\\__/|___/\\_,_/_//_(_)_, /_/\\__/_//_/\\_,_/_.__(_)/_/\\___/",
    "                                /___/                               \n",
    '<span class="color2">Welcome to my interactive web terminal.</span>',
    "<span class=\"color2\">For a list of available commands, type</span> " +
    "<span class=\"command\">'help'</span><span class=\"color2\">.</span>",
];
