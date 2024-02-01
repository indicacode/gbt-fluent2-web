import plugin from 'tailwindcss/plugin'

export const shadGbtPlugin = plugin(
    function ({addBase}) {
        addBase({
            'body': {

            },
            function({addUtilities}) {
                addUtilities({
                    '.brandColor' : {
                        textColor: "#B721AE",
                        backgroundColor: "#B721AE",
                        color: "#B721AE"
                    },
                        '.brandColorSecondary' : {
                            textColor: "#9E1F97",
                            backgroundColor: "#9E1F97",
                            color: "#9E1F97"
                        },
                            '.brandColorBright' : {
                                textColor: "#D629CB",
                                backgroundColor: "#D629CB",
                                color: "#D629CB"
                    },
                })
            }
        })
    },
)


