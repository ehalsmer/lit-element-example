import {html, render} from 'lit-html'; 

const onTargetDateChange = (e) => {
    rerender(e.target.value)
}

const targetDate = '2020-01-01';

function rerender(targetDate) {
    const days = Math.round((new Date(targetDate) - new Date()) / (1000 * 60 * 60 * 24)) // compare target with today, and convert from milliseconds to days
    
    const template = html`
        <p>
            <span class=${days < 30 ? 'soon' : ''}>${days}</span>
             days left until holidays
        </p>
        <button>Click</button>
    
        <p>
            My holidays start at
            <input type="date" value=${targetDate} @change=${onTargetDateChange} />
        </p>
        `
    
    render(template, document.getElementById('my-app'));
}

rerender('2019-12-22')