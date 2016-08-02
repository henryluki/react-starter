export default (props) => {
    let { entries } = props
    return (
        <ul>
         {
            entries.map((data, index) => (
                <li key={`person:${index}`} >{`name: ${data.name}, age: ${data.age}`}</li>
            ))
         }
        </ul>
    )
}
