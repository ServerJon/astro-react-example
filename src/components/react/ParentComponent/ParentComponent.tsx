import { ChildComponent } from '../ChildComponent'
import { Counter } from '../Counter'

import './ParentComponent.css'

export const ParentComponent = () => {
    return (
        <div className="reactDivContainer">
            <h3>Component with logic</h3>
            <Counter />
            <h3>Component without logic</h3>
            <ChildComponent />
        </div>
    )
}
