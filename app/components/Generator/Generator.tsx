'use client'
import React, {useState, ChangeEvent} from 'react'
import {DraggableEvent} from 'react-draggable'
import cn from 'classnames'
import {Button, Textarea, Label, RangeSlider} from 'flowbite-react'
import {elementToImage} from '@/utils/elementToImage'
import {DEFAULT_TEXT, DEFAULT_TEXT_DATA} from '@/constants'
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

interface GeneratorProps {
  sigItem?: TextData
}

export const Generator: React.FC<GeneratorProps> = ({sigItem}) => {
  let textData = sigItem || DEFAULT_TEXT_DATA
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
    <div className={cn(s.Generator, 'grid grid-cols-1 lg:grid-cols-2 gap-4')}>
      <div className={s.content}>
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
      <div className={s.form}>
        <h1 className="mb-2 text-3xl font-extrabold text-gray-900 dark:text-white ">
          Создайте свой мем
        </h1>
        <div className="mb-4">
          <Button color="light" onClick={handleAppendText}>
            Добавить строку
          </Button>
        </div>
        <div className="max-w-md mb-4">
          <div className="mb-2 block">
            <Label htmlFor={name} value="Текст: " />
          </div>
          <Textarea
            onChange={handleText}
            id={name}
            value={name}
            name={name}
            rows={2}
          />
        </div>
        <div className="max-w-md mb-4">
          <div className="mb-1 block">
            <Label htmlFor="rotate" value="Поворот текста:" /> {rotate}
          </div>
          <RangeSlider
            id="rotate"
            min="-180"
            max="180"
            onChange={handleRotate}
            value={rotate}
          />
        </div>

        <div className="max-w-md mb-4">
          <div className="mb-1 block">
            <Label htmlFor="fontsize" value="Размер шрифта:" /> {fontSize}
          </div>
          <RangeSlider
            id="fontsize"
            name="fontsize"
            min="10"
            max="60"
            onChange={handleFontSize}
            value={fontSize}
          />
        </div>
        <div className="max-w-md mb-4">
          <div className="mb-1 block">
            <Label htmlFor="colorText" value="Цвет текста:"></Label>
          </div>
          <input
            id="colorText"
            name="colorText"
            type="color"
            onChange={handleColor}
            value={color}
          />
        </div>
        <div className="max-w-md mb-4">
          <div className="mb-1 block">
            <Label htmlFor="colorShadow" value="Цвет обводки:"></Label>
          </div>
          <input
            id="colorShadow"
            name="colorShadow"
            type="color"
            onChange={handleStrokeColor}
            value={strokeColor}
          />
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
          <Button onClick={() => handleGenerate()}>Скачать</Button>
          <Button color="light" onClick={() => handleGenerate('tg')}>
            Поделиться
          </Button>
        </div>
      </div>
    </div>
  )
}

export default Generator
