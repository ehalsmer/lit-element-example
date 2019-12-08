import {html, render} from 'lit-html'; 

const targetDate = '2019-12-25';
const days = Math.round((new Date(targetDate) - new Date()) / (1000 * 60 * 60 * 24)) // compare target with today, and convert from milliseconds to days

const template = html`
    <p>
        <span class=${days < 30 ? 'soon' : ''}>${days}</span>
         days left until Christmas
    </p>
    `

render(template, document.getElementById('my-app'));