async function getESModule(moduleName){
    const {default:module} = await import(moduleName)
    return module
}

module.exports = {getESModule}