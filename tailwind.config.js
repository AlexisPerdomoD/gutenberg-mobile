/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
    './app/**/*.{js,jsx,ts,tsx}', // Incluir todos los archivos dentro de app y sus subdirectorios
    './src/**/*.{js,jsx,ts,tsx}', // Incluir todos los archivos dentro de src y sus subdirectorios
  ],
    theme: {
        extend: {
            colors: {
                primary: '#E6801A', // Naranja
                secondary: '#f97652', // Marfil
                background: '#FCE6DD', // Blanco cremoso
                surface: '#FDFBF9', // Blanco cremoso claro
                onSurface: '#FBF7F5', // Blanco cremoso pálido
                error: '#FF5733', // Rojo (color de error, agregado para consistencia) onError: '#FFFFFF', // Blanco (texto sobre error)
                // Additional colors with descriptive comments
                lightBackground: '#EEE6DD', // Beige claro
                darkText: '#261515',
                lightText: '#FFFDFA', // Blanco almendra
                alternateBackground: '#FEFCFA', // Blanco hueso
                highlight: '#F0E8DF', // Blanco nieve
                alternateText: '#FDFBF9' // Blanco marfil,
            },
            fontFamily: {
                text: ['NotoSerif Regular', 'serif'],
                textItalic: ['NotoSerif Italic', 'serif'],
                textBold: ['NotoSerif Bold', 'serif'],
                textBoldItalic: ['NotoSerif Bold Italic', 'serif']
            }
        }
    },
    plugins: []
}
