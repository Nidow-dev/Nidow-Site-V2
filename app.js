import { TxtAnime } from "txtanime.js";
const txtAnim = document.querySelector(h1);

new Typewriter(txtAnim, {
    // deleteSpeed: 20
})
.start()
.changeDelay(20)
.typeString('Moi c\'est Elodie GROSS')
.pauseFor(300)
.typeString('<strong>, Dev Full-Stack</strong>')
.pause(1000)
.deleteChars(13)
.typeString('<span style="color: #27ae60"> CSS</span>!')
.pauseFor(1000)
.deleteChars(5)
.typeString('<span style="color: midnight"> React</span>!')
.pauseFor(1000)
.deleteChars(7)
.typeString('<span style="color: #ea39ff"> PHP</span>!')
.pauseFor(1000)
.deleteChars(5)
.typeString('<span style="color: #ff6910"> Javascript</span>!')
.pauseFor(1000)
.start()
