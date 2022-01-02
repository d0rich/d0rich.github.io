import colors from 'vuetify/lib/util/colors'

export default {
    theme: {
        dark: true,
        options: { customProperties: true },
        themes:{
            dark: {
                primary: colors.purple,
                accent: colors.lime,
            },
            light: {
                primary: colors.purple,
                accent: colors.blue,
            }
        }
    }
}
