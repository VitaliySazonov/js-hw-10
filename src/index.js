import './styles.css';
import $ from 'jquery';
import menu from '../menu'
import list from './list.hbs'

const
  toggle = $('#theme-switch-toggle'),
  body = $('body'),
  ul = $('ul.js-menu'),
  theme = { LIGHT: 'light-theme', DARK: 'dark-theme' };

// Generate menu
ul.append(list(menu))

// Check theme in localStorage
let checkLocalStorage = () => localStorage.getItem('theme') === theme.DARK ? theme.DARK : theme.LIGHT

// Change theme style
let toggleChange = () => checkLocalStorage() === theme.LIGHT ? theme.DARK : theme.LIGHT
// Theme update
function update() {
  let tmp = checkLocalStorage()
  body.removeClass().addClass(tmp)
  localStorage.setItem('theme', tmp)
  toggle.attr('checked', tmp === theme.DARK)
}

toggle.on('change', evt => {
  localStorage.setItem('theme', toggleChange())
  update()
})

update()

