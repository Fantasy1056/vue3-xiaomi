const topBtn: HTMLElement = document.querySelector('.side-bar >.top') as HTMLElement

window.addEventListener('scroll', () => {
  console.log(document.documentElement.scrollTop)
  console.log(topBtn)
})
