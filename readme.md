## What?_Fumes is an online photography magazine broadcasting human interest stories mainly from South East Asia._ _Fumes project was started by two photographers. A metaphor to play with, delivering ideas via images._
♡ Fumes website is now refactored.  ☯ Articles are structured as `photographer`|`curator` symbiotic work.  ✿ This will bloom greener fumes soon...## StructureLooks like this is the only option, for now:
- Compiled jekyll **_site** (yup, we still need plugins here..) in [Master branch](https://github.com/fumes/fumes.github.io/tree/master) - Real **jekyll master** lives in the [Source branch](https://github.com/fumes/fumes.github.io/tree/source)- More **working branches** maybe present at times...## To do##### Urgent:

- authors pages tests  - open graph more tests- check domain pointer (cname stuff)- improve [liquid design](https://github.com/Shopify/liquid/wiki/Liquid-for-Designers) and [liquid programming](https://github.com/Shopify/liquid/wiki/Liquid-for-Programmers) skills
- figure out [github](https://help.github.com/) ##### Sometime soon:- improve gulp tasks with postCSS
 ##### One day:
- https and install service workers
- disqus
- print.css
- mailchimp
- merchandise
- PDF | ebook## Fumes website features   ✓ serious [responsive](https://github.com/wildlyinaccurate/jekyll-responsive-image) [image](https://github.com/BBC-News/Imager.js/).  ✓ ultra simple [codepen-nerd](http://codepen.io/rokma/full/pJBXbg/) responsive logo.  ✓ smart [inline svg icons](https://github.com/eduardoboucas/eduardoboucas.github.io/tree/master/_includes/svg).  ✓ auto [tag](http://geoexamples.com/other/2015/06/04/Jekyll-tags-plugin-gh-pages.html) navigation.  ✓ auto [category](http://geoexamples.com/other/2015/06/04/Jekyll-tags-plugin-gh-pages.html) navigation.  ✓ post thumbs. Front-matter declared.  ✓ chrome standalone web app functionality (android only :().  ✓ photographer indexes and navigation.   ✓ open graph.  ✓ twitter [cards](https://github.com/merlos/jekyll-auto-image#example-using-twitter-cards) ([tested here..](https://cards-dev.twitter.com/validator))  ✓ handy prev-next articles navigation.
✘ print.css  ✘ disqus comments (importing old ones from wp...)  ✘ [google authors](http://milanaryal.com/2015/integrating-social-meta-tags-into-jekyll/#integrating-google-authorship-into-jekyll)  ✘ [Google Author Rich Snippets](http://davidensinger.com/2013/05/setting-up-google-author-rich-snippets/)  ✘ service workers.  ✘ No plugins dependencies.

## Fumes development technologies
Stuff for development in [Source branch](https://github.com/fumes/fumes.github.io/tree/source):

- [rake publish](http://ixti.net/software/2013/01/28/using-jekyll-plugins-on-github-pages.html) script to automate publishing to Master branch. Enter ``` rake publish ``` in terminal and it will get the _site dir and it will 
`git push origin master --force` 
- gem 'jekyll', '~> 3.0.0.pre.beta8' to speed-up Jekyll Regeneration
- Nmp
- Gulp
- Bundler
- plus various code clips & techniques taken here and there...  

## Prerequisites, getting started:

#### - 4. Get started with bundler. Install it globally! 
```sh
gem install bundler```

#### - 3. Install gems in project local dir
```sh
bundle install
```

#### - 2. Install gulp globally
```sh
npm install --global gulp
```

#### - 1. Install gulp in project local dir
```sh
npm install --save-dev gulp
```

## Dev time:

#### 0. cd in local project dir 
```sh
cdf

```

#### 1. Run Jekyll
```sh
jekyll s
```

#### 2. Run gulp
Open new terminal window and

```sh
gulp
```
Dude, now feel Awesome + ♡ the new partial regeneration with jekyll 3.0.0.beta...

## Gems dependencies:
- gem 'rake'
- gem 'rmagick'
- gem 'jekyll', '~> 3.0.0.pre.beta8'
- gem 'jekyll-sitemap'
- gem ['jekyll-video-tag'](https://github.com/danbee/jekyll-video-tag ) , '~> 0.1.0'
- gem ['jekyll-responsive_image'](https://github.com/wildlyinaccurate/jekyll-responsive-image)## Plugins dependencies:
- [categories_generator.rb](http://geoexamples.com/other/2015/06/04/Jekyll-tags-plugin-gh-pages.html)
- [tags_generator.rb](http://geoexamples.com/other/2015/06/04/Jekyll-tags-plugin-gh-pages.html)
- [responsive_image.rb](https://github.com/wildlyinaccurate/jekyll-responsive-image)
- [imager.js](https://github.com/BBC-News/Imager.js/)## More credits- [github setup tips](http://ixti.net/software/2013/01/28/using-jekyll-plugins-on-github-pages.html)## Photo rightsAll photos © the authors. All photos rights reserved. Except as indicated on a per article basis.  

In some fumes articles, photos are released under CC-BY Creative Commons license. 
Some other fumes photos are CC0.

Everything else is GPL.