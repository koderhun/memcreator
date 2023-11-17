import React, {useState, ChangeEvent} from 'react'
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
    <form className={cn(s.imageLoad, file === '' ? 'noload' : 'load')}>
      <div className={s.content}>
        <div className={s.image}>
          <span>Upload Image</span>
          <img src={file as string} alt="Uploaded" />
        </div>
        <div className={s.inputGroup}>
          <div className={s.label}>
            <label htmlFor="file" className={s.add}>
              +
            </label>
            <input type="file" id="file" onChange={handleFileLoad} />
          </div>
          <button onClick={handleDelete} className={s.delete}></button>
        </div>
      </div>
    </form>
  )
}
