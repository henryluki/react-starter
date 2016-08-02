import Common from '../common'
import connect from 'utils/connect'
import Content from 'components/Content'

@connect()
export default class About extends  Common {
    constructor(...args) {
        super(...args)
    }

    render(){
        return (
            <div>About</div>
        )
    }
 }