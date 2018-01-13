/**
 * @param  {initState}
 * @param  {Object} handlers
 * @return {Reducer}
 */
export function createReducer(initState, handlers) {
    return function reducer(state = initState, action) {
        const handler = handlers[action.type]
        return handler ? handler(state, action) : state
    }
}