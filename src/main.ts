import { mount } from 'svelte'
import './app.css'
import App from './App.svelte'

import Counter from './lib/Counter.svelte'



// comment this to disable the svelte app and only leave web components
// the vite autoreload is useful for development though
const app = mount(App, {
  target: document.getElementById('app')!,
})

export default app
