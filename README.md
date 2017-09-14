# Slipway

[![N|Solid](https://image.ibb.co/cj8yw5/powered_by_bootstrap.png)](https://nodesource.com/products/nsolid)

Slipway is an open-source landing page template built upon [Bootstrap] designed for Open-Source Projects

  - Responsive
  - Easy to edit
  - Static so you can host on [GitHub Pages] for free

# New Features!

  - Choose different color styles (normal, blue, red, organge) 
  - Number Counters


Because this is an open-source proejct, please contribute ideas or even develop your own and make a push request. 

### Libraries, Frameworks and Plugins  Used

Slipway uses a number of open source projects to work properly:

* [Animate on Scroll] - A Javascript library that adds animations on scroll
* [Bootstrap] - great UI boilerplate for modern web apps
* [CounterUp] - lightweight jQuery plugin that counts up to a targeted number when the number becomes visible
* [jQuery] - duh
* [Popper] - A kickass library used to manage poppers in web applications
* [Smooth Scroll] - A lightweight script to animate scrolling to anchor link

And of course Slipway itself is open source with a [public repository][dill]
 on GitHub.

### Installation




### Development

Want to contribute? Great!

Dillinger uses Gulp + Webpack for fast developing.
Make a change in your file and instantanously see your updates!

Open your favorite Terminal and run these commands.

First Tab:
```sh
$ node app
```

Second Tab:
```sh
$ gulp watch
```

(optional) Third:
```sh
$ karma test
```
#### Building for source
For production release:
```sh
$ gulp build --prod
```
Generating pre-built zip archives for distribution:
```sh
$ gulp build dist --prod
```
### Docker
Dillinger is very easy to install and deploy in a Docker container.

By default, the Docker will expose port 8080, so change this within the Dockerfile if necessary. When ready, simply use the Dockerfile to build the image.

```sh
cd dillinger
docker build -t joemccann/dillinger:${package.json.version}
```
This will create the dillinger image and pull in the necessary dependencies. Be sure to swap out `${package.json.version}` with the actual version of Dillinger.

Once done, run the Docker image and map the port to whatever you wish on your host. In this example, we simply map port 8000 of the host to port 8080 of the Docker (or whatever port was exposed in the Dockerfile):

```sh
docker run -d -p 8000:8080 --restart="always" <youruser>/dillinger:${package.json.version}
```

Verify the deployment by navigating to your server address in your preferred browser.

```sh
127.0.0.1:8000
```

#### Kubernetes + Google Cloud

See [KUBERNETES.md](https://github.com/joemccann/dillinger/blob/master/KUBERNETES.md)


### Todos

 - Add more color options
 - 

License
----

MIT


**Free Software, Hell Yeah!**


   [dill]: <https://github.com/joemccann/dillinger>
   [Bootstrap]: <https://getbootstrap.com/>
   [GitHub Pages]: <https://pages.github.com/>
   [CounterUp]: <https://github.com/bfintal/Counter-Up>
   [jQuery]: <https://jquery.com/>
   [Animate on Scroll]: <https://michalsnik.github.io/aos/>
   [Smooth Scroll]: <https://github.com/cferdinandi/smooth-scroll>
   [Popper]: <https://popper.js.org/>

