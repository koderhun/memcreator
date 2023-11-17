import {FC} from 'react'
import {GeneratorProps} from './Generator.props'
import s from './styles.module.scss'

export const Generator: FC<GeneratorProps> = (props) => {
  return (
    <div className={s.Generator} {...props}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-white p-6 shadow">
          <h2 className="text-2xl font-bold mb-4">Column 1</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam quis
            quam sit amet libero hendrerit vulputate.
          </p>
        </div>

        <div className="bg-white p-6 shadow">
          <h2 className="text-2xl font-bold mb-4">Column 2</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam quis
            quam sit amet libero hendrerit vulputate.
          </p>
        </div>
      </div>
    </div>
  )
}
