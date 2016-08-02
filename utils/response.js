import objectAssign from 'object-assign'

export let regularResponse = (res, data)=> {
    let respnose = objectAssign({}, { data: data }, { status: 200 })
    res.json(respnose)
}
