import Common from '../common'
import connect from 'utils/connect'
import HomeSelector from 'app/selectors/home'
import Content from 'components/Content'
import Navbar from 'components/Navbar'
import Footer from 'components/Footer'

@connect(HomeSelector)
export default class Home extends Common {
    constructor(props) {
        super(props);
        this.state = {
            ready: false
        }
    }

    componentWillMount(){
        this.props.actions.fetchHomeData()
    }

    render() {
        let { loaded, data }  = this.props
        return (
            <div>
                <Navbar />
                 { loaded && <Content entries={data.entries} /> }
                <Footer />
            </div>
        );
    }
}


