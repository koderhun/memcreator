import React, {useState, ChangeEvent} from 'react'
import {elementToImage} from '@/utils/elementToImage'
import {DEFAULT_TEXT, DEFAULT_TEXT_DATA} from '@/constants'
import {DraggableEvent} from 'react-draggable'
import {MemContent} from '@/components'
import s from './styles.module.scss'

interface TextData {
  name: string
  pos: {
    x: number
    y: number
  }
  fontSize: number
  color: string
  strokeColor: string
  rotate: number
  filename?: string
}

interface MemCreatorProps {
  sigItem: TextData
}

export const MemCreator: React.FC<MemCreatorProps> = ({sigItem}) => {
  let textData: TextData
  let filepath = ''

  if (sigItem) {
    textData = sigItem
    filepath = `./images/${sigItem.filename}.png`
  } else {
    textData = {...DEFAULT_TEXT_DATA}
  }

  const [selectKey, setSelectKey] = useState<number>(0)
  const [textList, setTextList] = useState<TextData[]>([textData])
  const [typeImage, setTypeImage] = useState<string>('jpg')
  const [loadedImage, setLoadedImage] = useState<boolean>(false)
  const [download, setDownload] = useState<boolean>(false)

  const handleText = (e: ChangeEvent<HTMLTextAreaElement>) => {
    const thisTextList = [...textList]
    thisTextList[selectKey].name = e.target.value

    setTextList(thisTextList)
  }

  const selectFormat = (e: ChangeEvent<HTMLSelectElement>) => {
    setTypeImage(e.target.value)
  }

  const handleDragStop = (
    e: DraggableEvent,
    pos: {x: number; y: number},
    k: number,
  ) => {
    const x = pos.x
    const y = pos.y
    let thisTextList = [...textList]

    let prevPos = thisTextList[k].pos
    prevPos = {...prevPos}

    prevPos.x = x
    prevPos.y = y

    thisTextList[k].pos = prevPos
    setTextList(thisTextList)
  }

  const handleFontSize = (e: ChangeEvent<HTMLInputElement>) => {
    const thisTextList = [...textList]
    thisTextList[selectKey].fontSize = Number(e.target.value)
    setTextList(thisTextList)
  }

  const handleColor = (e: ChangeEvent<HTMLInputElement>) => {
    const thisTextList = [...textList]
    thisTextList[selectKey].color = e.target.value
    setTextList(thisTextList)
  }

  const handleStrokeColor = (e: ChangeEvent<HTMLInputElement>) => {
    const thisTextList = [...textList]
    thisTextList[selectKey].strokeColor = e.target.value
    setTextList(thisTextList)
  }

  const handleRotate = (e: ChangeEvent<HTMLInputElement>) => {
    const thisTextList = [...textList]
    thisTextList[selectKey].rotate = Number(e.target.value)
    setTextList(thisTextList)
  }

  const handleGenerate = (hrefType: string = '') => {
    const node = document.getElementById('content')
    setDownload(true)
    if (hrefType === 'tg') {
      elementToImage(node, typeImage, 'tg')
    } else {
      elementToImage(node, typeImage)
    }
    setTimeout(() => {
      setDownload(false)
    }, 1000)
  }

  const handleLoadImage = () => setLoadedImage(true)

  const handleAppendText = () => {
    let thisDefaultTextData: TextData = {...DEFAULT_TEXT_DATA}
    let thisTextList = [...textList]

    let len = thisTextList.length
    thisDefaultTextData.name = DEFAULT_TEXT + (len + 1)

    // Новая позиция элемента
    thisTextList.push(thisDefaultTextData)
    setTextList(thisTextList)
  }

  const handleSelectText = (key: number) => setSelectKey(key)

  let {rotate, fontSize, name, color, strokeColor} = textList[selectKey]

  return (
    <div
      className={
        'container MemCreator ' +
        (loadedImage || filepath !== '' ? 'show' : 'hidden') +
        (download ? ' MemCreator-download' : '')
      }>
      <div className="MemCreator__content">
        <MemContent
          filepath={filepath}
          textList={textList}
          type={typeImage}
          selectKey={selectKey}
          handleText={handleText}
          handleSelectText={handleSelectText}
          handleLoadImage={handleLoadImage}
          handleDragStop={handleDragStop}
        />
      </div>
      <div className="MemCreator__form">
        <p>Создайте свою картинку, скачайте и го работать!</p>
        <button className="btn btn-primary" onClick={handleAppendText}>
          Добавить строку
        </button>
        <hr />
        <div className="form-line form-line-between ">
          <label className="form-line form-line-full">
            <span>Tекст: </span>
            <textarea
              className="form-control MemCreator__input"
              onChange={handleText}
              value={name}></textarea>
          </label>
        </div>
        <hr />

        <div className="MemCreator__picture-control">
          <div className="form-line form-line-between ">
            <label className="form-line">
              <span>Поворот текста: </span>
              <input
                type="range"
                className="form-control"
                min="-180"
                max="180"
                onChange={handleRotate}
                value={rotate}
              />
              <span>{rotate}</span>
            </label>
          </div>

          <hr />
          <div className="form-line form-line-between ">
            <label className="form-line">
              <span>Размер шрифта: </span>
              <input
                type="range"
                className="form-control"
                min="10"
                max="60"
                onChange={handleFontSize}
                value={fontSize}
              />
              <span>{fontSize}</span>
            </label>
          </div>
          <hr />

          <div className="form-line form-line-between">
            <label className="form-line">
              <span>Цвет текста: </span>
              <input type="color" onChange={handleColor} value={color} />
            </label>
          </div>

          <hr />

          <div className="form-line form-line-between">
            <label className="form-line">
              <span>Цвет обводки: </span>
              <input
                type="color"
                onChange={handleStrokeColor}
                value={strokeColor}
              />
            </label>
          </div>

          <hr />
        </div>

        <div className="form-line form-line-between">
          <label className="form-line">
            <span>Тип файла: </span>
            <select
              value={typeImage}
              onChange={selectFormat}
              className="form-control">
              <option value="jpg">jpg</option>
              <option value="png">png</option>
            </select>
          </label>
        </div>
        <hr />
        <div className="form-line  form-line-between">
          <span />
          <button className="btn btn-success" onClick={() => handleGenerate()}>
            Скачать
          </button>
          <button
            className="btn btn-danger"
            onClick={() => handleGenerate('tg')}>
            Поделиться
          </button>
        </div>
      </div>
    </div>
  )
}

export default MemCreator
