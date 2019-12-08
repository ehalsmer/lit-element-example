import {html, render} from 'lit-html';

const state = {
    targetDate: '2019-06-01',
    event: 'holidays'
}

const onTargetDateChange = (e) => {
    state.targetDate = e.target.value
    rerender(state)
}

const onEventChange = (e) => {
    state.event = e.target.value
    rerender(state)
}

const targetDate = '2020-01-01';

function rerender({targetDate, event}) {
    const days = Math.round((new Date(targetDate) - new Date()) / (1000 * 60 * 60 * 24)) // compare target with today, and convert from milliseconds to days
    
    const template = html`
        <p>
            <span class=${days < 30 ? 'soon' : ''}>${days}</span>
             days left until ${event}
        </p>
    
        <p>
            <input type="text" value=${event} @keyup=${onEventChange}/> 
            start at
            <input type="date" value=${targetDate} @change=${onTargetDateChange} />
        </p>
        `
    
    render(template, document.getElementById('my-app'));
}

rerender(state)