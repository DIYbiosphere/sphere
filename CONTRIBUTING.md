# Quick Start Guide 

1. Clone the repo from [Github](https://github.com/)
```
git clone https://github.com/DIYbiosphere/diybiosphere.io.git
```

2. Install dependencies using [Bundler](http://bundler.io/)
  
  2.1 Install Bundler
  ```
  gem install bundler
  ```
  
  2.2 Install dependencies
  ```
  bundler install
  ```

3. Start [Jekyll](https://jekyllrb.com/)
```
jekyll serve
```

# Additional Information

## Frontend
The views logic is done using [JQuery](https://jquery.com/). 

All the initiatives are stored in a single json file:
[initiatives.json](https://github.com/DIYbiosphere/diybiosphere.io/blob/gh-pages/js/data/initiatives.json)

The main SCSS content is in the /css folder. and as you can see there are @import
statements that reference other files located in the /_sass folder. This allows
to have a modular and cleaner design.

> You don't need to do anything to compile sass, Jekyll take's care of that.

## Continuous Integration
The project is integrated with [Travis-CI](https://travis-ci.org/), so every
time someone pushes to the master branch of the
[repository](https://github.com/DIYbiosphere/diybiosphere.io),
[Travis](https://travis-ci.org/) builds the site using Jekyll and push it to the
[gh-pages](https://github.com/DIYbiosphere/diybiosphere.io/tree/gh-pages) branch.

--------------------

Thank you and have fun!