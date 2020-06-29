# Netlify Functions Workshop

This is a simple static website generated with Jekyll and deployed to Netlify, which uses a serverless function to fetch some dynamic content.

It's intended to show basic concepts around the JAMStack on Netlify, such as Static Site Generators, git-based deployment and Netlify functions as APIs.


## Development

Install dependencies

`bundle install && npm install`


Run Jekyll in development mode

`bundle exec jekyll serve`


## Deployment

This repo is configured to be deployed on [Netlify](https://www.netlify.com). The included `netlify.toml` file contains the build commands that are required to generate the site.
