import {domtoimage} from 'dom-to-image'

const getName = (type) => {
  let d = new Date()
  return (
    'singa_' +
    d.getFullYear() +
    d.getMonth() +
    d.getDate() +
    '_' +
    (d.getTime() % (24 * 1000)) +
    '.' +
    type.toString()
  )
}

export const elementToImage = (node, typeImg, typeHref = '') => {
  let typeImgStr = ''

  if (typeImg === 'jpg') {
    typeImgStr = 'toJpeg'
  } else {
    typeImgStr = 'toPng'
  }

  domtoimage[typeImgStr](node, {
    quality: 1,
    width: node.offsetWidth,
    height: node.offsetHeight,
    bgcolor: '#FF',
  })
    .then(function (dataUrl) {
      let link = document.createElement('a')
      link.setAttribute('target', '_blank')

      link.download = getName(typeImg)
      if (typeHref == 'tg') {
        link.href = `tg://msg_url?url=http://${dataUrl.split(';')[1]}`
      } else {
        link.href = dataUrl
      }
      link.click()
    })
    .catch(function (error) {
      console.error('oops, something went wrong!', error)
    })
}
