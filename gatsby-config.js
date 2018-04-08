module.exports = {
    siteMetadata: {
        title: `Diogo Silva`,
        siteUrl: `https://fsdiogo.github.io`,
        description: `My collection of thoughts`,
    },
    plugins: [
        `gatsby-plugin-react-helmet`,
        {
            resolve: `gatsby-plugin-google-analytics`,
            options: {
                trackingId: "UA-117119639-1",
                head: true,
            },
        },
        {
            resolve: `gatsby-plugin-typography`,
            options: {
                pathToConfigModule: `src/utils/typography.js`,
            },
        },
    ],
};
