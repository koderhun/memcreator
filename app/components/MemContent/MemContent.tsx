'use client'
import React from 'react'
import {TextInDom, ImageShow, ImageLoad} from '@/components'
import {DraggableEvent} from 'react-draggable'

interface MemContentProps {
  filepath: string
  textList: {
    fontSize: number
    color: string
    strokeColor: string
    rotate: number
    pos: {
      x: number
      y: number
    }
    name: string
  }[]
  selectKey: number
  handleDragStop: (
    e: DraggableEvent,
    pos: {x: number; y: number},
    index: number,
  ) => void
  handleSelectText: (index: number) => void
  handleLoadImage: () => void
}

export const MemContent: React.FC<MemContentProps> = ({
  filepath,
  textList,
  selectKey,
  handleDragStop,
  handleSelectText,
  handleLoadImage,
}) => {
  return (
    <div className={'SingaCreator SingaCreator--ogo'}>
      <div className="SingaCreator__content" id="content">
        {filepath ? (
          <ImageShow filepath={filepath} />
        ) : (
          <ImageLoad handleLoadImage={handleLoadImage} />
        )}
        {textList.map((settings, key) => (
          <TextInDom
            key={key}
            settings={settings}
            index={key}
            handleDragStop={handleDragStop}
            handleSelectText={handleSelectText}
            selectKey={selectKey}
          />
        ))}
      </div>
    </div>
  )
}
