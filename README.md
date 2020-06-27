# Jekyll Tailwind template

A minimal repo to create a static site using [Jekyll][jekyll] and [TailwindCSS][tailwind]. It uses the [jekyll-postcss](https://github.com/mhanberg/jekyll-postcss) plugin and a very basic `postcss.config.js` file which references the TailwindCSS plugin.

[jekyll]:https://jekyllrb.com/
[tailwind]:https://tailwindcss.com/


## Getting Started

Clone the repo and run the following:

`bundle install` -> This installs Ruby gems and jekyll plugins

`npm install` -> This installs postcss-cli and tailwindcss packages

`bundle exec jekyll serve` -> Generates the site with develop settings and listens on http://localhost:4000


## Deployment

This repo is configured to be deployed on [Netlify](https://www.netlify.com).

The included `netlify.toml` file will override the default build command to install Node packages (PostCSS and TailwindCSS) before the Jekyll build.


## Why another Jekyll + Tailwind starter/template?

This in an opinionated template where files are organized as I like. This is the setup I use on almost every static site project I work on.

All pages (except 404.html) are under a `pages` folder. I like to manually set the permalink for all content in my sites, and I don't like seeing actual content files at the root level.


## Next steps

- Integrate PurgeCSS to reduce the final css file size
