import Typography from 'typography';

const typography = new Typography({
    // Base
    baseFontSize: '16px',
    baseLineHeight: '1.3',
    // Header
    headerWeight: '600',
    headerFontFamily: ['Source Sans Pro', 'sans-serif'],
    // Body
    bodyWeight: '300',
    bodyFontFamily: ['Source Sans Pro', 'sans-serif'],
    // Google Fonts
    googleFonts: [
        { name: 'Source Sans Pro', styles: ['300', '600'] },
    ],
});

export default typography;
