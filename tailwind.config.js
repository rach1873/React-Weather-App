/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    extend: {
      fontFamily: {
        'mon': ['Montserrat', 'sans-serif'],
        'raleway': ['Raleway', 'sans-serif']
      },
      backgroundImage: {
        'clearskyday': "url(./images/clearskyday.jpg)",
        'clearskynight': "url(./images/clearskynight.jpg)",
        'cloudsday': "url(./images/cloudsday.jpg)",
        'cloudsnight': "url(./images/cloudsnight.jpg)",
        'mistday': "url(./images/mistday.jpg)",
        'mistnight': "url(./images/mistnight.jpg)",
        'rainday': "url(./images/rainday.jpg)",
        'rainnight': "url(./images/rainnight.jpg)",
        'snowday': "url(./images/snowday.jpg)",
        'snownight': "url(./images/snownight.jpg)",
        'thunderstormday': "url(./images/thunderstormday.jpg)",
        'thunderstormnight': "url(./images/thunderstormnight.jpg)",
      }
    },
  },
  plugins: [],
}
