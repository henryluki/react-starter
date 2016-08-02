export default class Common extends React.Component {
    constructor(...args) {
        console.log('constructor: ', new Date().getTime())
        super(...args);
    }

    componentWillMount(){
        console.log('componentWillMount: ', new Date().getTime())
    }
}
