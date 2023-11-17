import React from 'react'

interface ImageShowProps {
  filepath: string
}

export const ImageShow: React.FC<ImageShowProps> = ({filepath}) => {
  return (
    <form className={`imageLoad load`}>
      <div className="imageLoad__content">
        <div className="imageLoad__image">
          <span>Загрузить изображение</span>
          <img src={filepath} alt="Loaded Image" />
        </div>
        <div className="imageLoad__inputGroup">
          <div className="imageLoad__label"></div>
        </div>
      </div>
    </form>
  )
}
