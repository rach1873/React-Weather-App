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
        // 'clearskyday': "url(./images/clearskyday.jpg)",
        // 'clearskynight': "url(./images/clearskynight.jpg)",
        // 'cloudsday': "url(./images/cloudsday.jpg)",
        // 'cloudsnight': "url(./images/cloudsnight.jpg)",
        // 'mistday': "url(./images/mistday.jpg)",
        // 'mistnight': "url(./images/mistnight.jpg)",
        // 'rainday': "url(./images/rainday.jpg)",
        // 'rainnight': "url(./images/rainnight.jpg)",
        // 'snowday': "url(./images/snowday.jpg)",
        // 'snownight': "url(./images/snownight.jpg)",
        // 'thunderstormday': "url(./images/thunderstormday.jpg)",
        // 'thunderstormnight': "url(./images/thunderstormnight.jpg)",
        'clearskyday': "url(./weatherimages/clearskyday.png)",
        'clearskynight': "url(./weatherimages/clearskynight.png)",
        'cloudsday': "url(./weatherimages/cloudsday.png)",
        'cloudsnight': "url(./weatherimages/cloudsnight.png)",
        'mistday': "url(./weatherimages/rainday.png)",
        'mistnight': "url(./weatherimages/rainnight.jpg)",
        'rainday': "url(./weatherimages/rainday.png)",
        'rainnight': "url(./weatherimages/rainnight.jpg)",
        'snowday': "url(./weatherimages/snowday.png)",
        'snownight': "url(./weatherimages/snownight.png)",
        'thunderstormday': "url(./weatherimages/thunderstormday.png)",
        'thunderstormnight': "url(./weatherimages/thunderstormnight.jpg)",
      },
      colors: {
        weatherblue: '#3b7dd8'
      }
    },
  },
  plugins: [],
}
