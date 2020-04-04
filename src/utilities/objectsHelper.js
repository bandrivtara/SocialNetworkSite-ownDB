export const updateObjectInArray = (items, itemId, objPropName, newObjProps) => {
    items.map(e => {
        if(e[objPropName] === itemId) {
            return (
                {...e, ...newObjProps}
            )
        }
        return e;
    })
}