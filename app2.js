// import {html} from 'lit-html';
import {LitElement, html} from 'https://unpkg.com/lit-element/lit-element.js?module'

// Translating app.js into a litElement component

class MyApp extends LitElement {
    constructor(targetDate, event) {
        super()
        this.targetDate = targetDate || '2019-12-31'
        this.event = event || 'holidays'
    }

    static get properties() {
        return {
            targetDate: {type: String},
            event: {type: String}
        }
    }
    onTargetDateChange = (e) => {
        this.targetDate = e.target.value
    }
    
    onEventChange = (e) => {
        this.event = e.target.value
    }
    render() {
        // compare target with today, and convert from milliseconds to days
        const days = Math.round((new Date(this.targetDate) - new Date()) / (1000 * 60 * 60 * 24)) 
        return html`
        <link rel="stylesheet" type="text/css" href="app.css"/>
        <p>
            <span class=${days < 30 ? 'soon' : ''}>${days}</span>
             days left until ${this.event}
        </p>
    
        <p>
            <input type="text" value=${this.event} @keyup=${this.onEventChange}/> 
            start at
            <input type="date" value=${this.targetDate} @change=${this.onTargetDateChange} />
        </p>
        `
    }
}

customElements.define('my-app', MyApp) // by convention we make custom elements with a dash in the name