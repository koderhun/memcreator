//@ts-nocheck
import domtoimage from 'dom-to-image-more'

const getName = (): string => {
  const d = new Date()
  return `mem_${d.getFullYear()}-${d.getMonth()}-${d.getDate()}-${
    d.getTime() % (24 * 1000)
  }.jpg`
}

export const elementToImage = (
  node: HTMLElement | null,
  typeHref: string = '',
): void => {
  domtoimage
    .toJpeg(node, {
      quality: 0.95,
      bgcolor: '#FF',
    })
    .then((dataUrl) => {
      const link = document.createElement('a')
      link.setAttribute('target', '_blank')

      link.download = getName()
      if (typeHref === 'tg') {
        link.href = `tg://msg_url?url=http://${dataUrl.split(';')[1]}`
      } else {
        link.href = dataUrl
      }
      link.click()
    })
    .catch((error) => {
      console.error('oops, something went wrong!', error)
    })
}
