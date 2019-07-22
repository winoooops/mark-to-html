const markdownArea = document.querySelector('#markdown')
const htmlArea = document.querySelector('.html')
const btn = document.querySelector('button')


const markdownToHtml = (markdown) => {
  htmlArea.innerHTML = marked(markdown)
}

markdownArea.addEventListener('keyup', (e) => {
  const content = e.target.value
  markdownToHtml(content)
})

btn.addEventListener('click', () => {
  markdownToHtml(markdownArea.innerHTML)
})
