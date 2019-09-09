const els = document.getElementsByClassName('filmo-row')
Array.from(els).forEach(el => {
  // Only blur the year for TV series
  if (el.innerHTML.indexOf('Series)') > -1) {
    el.className += ' tv'
  }
})
