
export const updateObjectInArray = (items, itemId, objPropName, newObjProps) => {
    /* LESSON 90 25:45*/
    return items.map(u => {
        if (u[objPropName] === itemId) {
            return {...u, ...newObjProps}
        }
        return u;
    })
}