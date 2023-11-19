'use client'
import React, {useState, ChangeEvent} from 'react'
import {Label, FileInput, Button} from 'flowbite-react'
import s from './styles.module.scss'
import cn from 'classnames'

interface ImageLoadProps {
  handleLoadImage: () => void
}

export const ImageLoad: React.FC<ImageLoadProps> = ({handleLoadImage}) => {
  const [file, setFile] = useState<string | ArrayBuffer | null>('')

  const loadFile = (file: File) => {
    if (
      file &&
      file.type !== 'image/png' &&
      file.type !== 'image/jpeg' &&
      file.type !== 'image/svg+xml'
    ) {
      alert('Incorrect file format!')
      return
    }

    let reader = new FileReader()
    reader.onload = (e: ProgressEvent<FileReader>) => {
      setFile(e.target?.result as string)
      handleLoadImage()
    }
    reader.readAsDataURL(file)
  }

  const handleFileLoad = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) return loadFile(file)
    console.log('Failed to load the file!')
  }

  const handleDelete = () => {
    setFile('')
  }

  return (
    <div className={cn(s.imageLoad, file === '' ? s.noload : s.load)}>
      <div className={cn(s.content, 'mb-4')}>
        <div className={s.image}>
          <img src={file as string} alt="Uploaded" />
        </div>
      </div>
      <div className={cn(s.inputGroup)}>
        <div>
          <div className="mb-2">
            <Label htmlFor="file" value="Загрузить файл:" />
          </div>

          <FileInput onChange={handleFileLoad} id="file" />
        </div>
        <div>
          <div className="mb-2">
            <Label value="&nbsp;" />
          </div>
          <Button color="red" onClick={handleDelete} className={s.delete}>
            Удалить
          </Button>
        </div>
      </div>
    </div>
  )
}
