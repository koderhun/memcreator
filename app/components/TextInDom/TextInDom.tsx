import React from 'react'
import Draggable, {DraggableEventHandler, DraggableEvent} from 'react-draggable'

interface TextInDomProps {
  settings: {
    fontSize: number
    color: string
    strokeColor: string
    rotate: number
    pos: {
      x: number
      y: number
    }
    name: string
  }
  index: number
  handleDragStop: (
    e: DraggableEvent,
    pos: {x: number; y: number},
    index: number,
  ) => void
  handleSelectText: (index: number) => void
  selectKey: number
}

export const TextInDom: React.FC<TextInDomProps> = ({
  settings,
  index,
  handleDragStop,
  handleSelectText,
  selectKey,
}) => {
  const style: React.CSSProperties = {
    fontSize: `${settings.fontSize}px`,
    color: `${settings.color}`,
    textShadow: `${settings.strokeColor} 1px 1px 0,
                ${settings.strokeColor} -1px -1px 0,
                ${settings.strokeColor} -1px 1px 0,
                ${settings.strokeColor} 1px -1px 0`,
    transform: `rotate(${settings.rotate}deg)`,
  }

  let activeClass = ''

  if (selectKey === index) {
    activeClass = 'active'
  }

  const onStop: DraggableEventHandler = (e, {x, y}) => {
    handleDragStop(e, {x, y}, index)
  }

  return (
    <Draggable
      onStop={onStop}
      position={{x: settings.pos.x, y: settings.pos.y}}
      defaultClassNameDragging="drag">
      <div
        id={`text${index}`}
        onClick={() => handleSelectText(index)}
        className={`SingaCreator__textContent SingaCreator__textContent--v${index} ${activeClass}`}>
        <div className="SingaCreator__row" style={style}>
          <div className="SingaCreator__text">{settings.name}</div>
        </div>
      </div>
    </Draggable>
  )
}
