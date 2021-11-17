export default {
    state: {
        windowWidth: 0
    },
    getters: {
        headerOn(state){
            return state.windowWidth > 640
        }
    },
    mutations: {
        getWindowWidth(state, width){
            state.windowWidth = width
        },
    }
}
