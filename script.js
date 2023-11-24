const html = document.querySelector("html");
const toggle = document.querySelector("#toggle");
const project = document.getElementById('project')

toggle.addEventListener("click", function () {
    toggle.checked
        ? html.classList.add("dark")
        : html.classList.remove("dark");
});

const component = [
    {
        link: 'https://vodapermadi.github.io/weather-app/',
        title: 'Weather App'
    },
    {
        link: 'https://gabut-nime.vercel.app/',
        title: 'Anime list'
    },
    {
        link: 'https://vodapermadi.github.io/fake-store-api/',
        title: 'Fake Store Api'
    }
]

component.map((row) => {
    let components = `<a href="${row.link}" class="sm:w-1/2 w-2/3 bg-purple-600 dark:bg-gray-600 text-slate-50 dark:text-white py-8 px-5 rounded transition hover:scale-110 ease-out duration-300">
    <span class="sm:text-xl md:text-2xl font-semibold hover:underline-offset-2 hover:underline">
      ${row.title}
    </span>
  </a>`

  project.innerHTML += components
})