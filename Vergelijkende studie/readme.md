# Web Specialisatie
## Ionic framework vs Onsen UI 2.0 Beta

### Installation

Both frameworks need node.js 4 to bee installed

[Installation node.js](https://nodejs.org/en/)


#### Ionic

[Installation](http://ionicframework.com/getting-started/)

Ionic has a special version of cordova.

```
    npm install -g cordova ionic
```

Thit makes it possible to use ionic as a command in console.


```
    ionic start newApp
```

- makes a new cordova app
- includes ionic framework
	- scss
	- angular
	- icons
	- gulp

#### Onsen UI 2.0 Beta

[Installation](https://onsen.io/2/index.html)

Onsen UI needs a normal cordova installation.


```
    npm install -g cordova
```

```
    git clone https://github.com/OnsenUI/onsen2-quickstart.git
	cd onsen2-quickstart/
	npm install
	gulp serve
```

- makes a new cordova app
- includes angular and react examples
	- stylus
	- angular
	- icons
	- gulp



##### Conclusion (Installation Process)

```
    Ionic is more user friendly to install.
	It packs everything you need.
	If you do a normal installation with Onsen UI you have to link all files.

	Ionic wins this one for me.
```





### Testing & Tools

#### Ionic

Ionic has a free platform where you can test your apps, called Ionic Platform.
And on mobile it's called Ionic View. 
They also have a full fledged drag and drop platform  called Ionic Creator.
Here you can easily make prototypes.

#### Onsen UI

Onsen UI suggests Monaca platform but its only free for 3 projects, byt it has more functionality.
I suggest you to use Phonegap's platform.

##### Conclusion (Testing & Tools)

```
    Ionic has it's own platform which is beautiful. 
    But i dont need all of that extra.
    Phonegap's platform is an equal solution.

	It's a tie.
```





#### Documentation

#### Ionic

Beautiful and clean docs.
Easy to find what you need. 
Includes a searchbar.
Improve this doc button.

#### Onsen UI

More extensive docs.
But a bit messy.
No searchbar (annoying).

##### Conclusion (Documentation)

```
	Tie.
```





#### Community

Ionic has a bigger community than OnsenUI they also have a big forum.
Onsen UI has more focus on Stackoverflow





#### Components

#### Ionic

Ionic has very beautiful components.
And they are easy to use. 
Ionics components feel more focused towards IOS and they have a specific style which is beautiful but not always wanted.

<img src="http://i.imgur.com/76qN2WF.png" alt="Ionic"  width="200px" height="200px" />
<img src="http://i.imgur.com/DCPieSD.png" alt="Ionic" style="width: 200px;">
<img src="http://i.imgur.com/hitzNWP.png" alt="Ionic" style="width: 200px;">




#### Onsen UI

Onson UI has more components and since their beta 2 version also material design support.
That makes it feel more native on android phones.
But the components are less polished and still some important ones are missing: like hidden buttons. 
Also they have sometimes little problems. (i tested beta version).

<img src="http://i.imgur.com/s7gq0X6.png" alt="Onsen" style="width: 200px;"/>
<img src="http://i.imgur.com/dqdZqa0.png" alt="Onsen" style="width: 200px;">
<img src="http://i.imgur.com/nm5FRLd.png" alt="Onsen" style="width: 200px;">





##### Conclusion (Components)

```
	I like the beauty of Ionics components. 
	But they feel less customizable than those of Onson UI.

	Onson UI wins this one but it's very close.
```





#### Javascript

##### Ionic

Is fully based on angular.

##### Onson UI

Is fully based on angular but since the beta they have made it easyer to include other frameworks like react.

##### Conclusion (Javascript)

```
	I like angular but it's nice that Onson gives you the choice.

	Onson UI wins.
```






#### CSS

##### Ionic

Is fully based on scss.

##### Onson UI

Makes use of stylus.
Which makes it more flexible.

##### Conclusion (CSS)

```
	I dont like stylus but that makes it possible to write in your own style.

	It depends on your choice but Ionic wins this one for me.
```






#### Grid System

Both can do the same and are based on flexbox.





#### Animations

##### Ionic

Beautiful annimations included but by testing on my phone i noticed some performance struggles.
Note: I think this will be [fixed](http://blog.ionic.io/crosswalk-comes-to-ionic/) in the future.


##### Onson UI

There are more animations and they performe better than those of Ionic.

##### Conclusion (Animations)

```
	Onson UI wins this.
```




#### Speed & performance

```
	By testing on a few phones i noticed that Onsen UI has a bit better performance.
	But they are both hybrid apps, so dont expect miracles.
	On the phones i tested was Onsen UI the winner.

	For better performance i suggest something like react native or native script
```





#### Ease of use

If you know angular they are both easy to use.





#### Customizability

Both very customizable but Ionic's instinctive look stays permanent.
My performance goes to OnsenUI.
But it's your choice.





#### Examples

They both have a lot of examples. But OnsenUI has more usefull ones on their website.
Considering Ionic's community they have more are more examples.





#### Filesize

Cant be realy compared. Ionic includes cordova. with Onson UI you need to add that by yourselve.
But when you compare a clean install with a quickstart you get:


```
	Ionic :13,4 MB

	Onsen UI: 15,6 MB
```





#### Github repo

##### Ionic

- 21k + stars
- 3.8k + forks

##### Onsen UI

- 2k + stars
- 300 + forks




#### Conclusion

If you want to have more speed, and native feeling, then i suggest you to use Onsen UI.
If you want to have beautiful docs, and no problems, then i suggest you to use Ionic Framework.
There is no true winner. It depends on your own needs.





###### Sources

[ionic framework](http://ionicframework.com/)
[onsen ui 2-beta](https://onsen.io/2)


[ionic-vs-onsenui](http://www.gajotres.net/ionic-vs-onsenui)
[comparing top hybrid frameworks](http://tutorialzine.com/2015/10/comparing-the-top-frameworks-for-building-hybrid-mobile-apps/)
[ionic crosswalk](http://blog.ionic.io/crosswalk-comes-to-ionic/)
[hybrid apps](https://www.airpair.com/ionic-framework/posts/hybrid-apps-ionic-famous-f7-onsen)
[Ionic Pros/Cons vs Onsen UI](https://forum.ionicframework.com/t/pros-cons-vs-onsen-ui/8177)
[What's the best UI framework of Onsen UI or Ionic?](https://www.quora.com/Whats-the-best-UI-framework-of-Onsen-UI-or-Ionic)
[Best HTML5 Mobile App Frameworks: Ionic](http://www.gajotres.net/best-html5-mobile-app-frameworks-ionic-review)
[Best HTML5 Mobile App Frameworks: Onsen UI](http://www.gajotres.net/best-html5-mobile-app-frameworks-onsen-ui)

[Phonegap](http://phonegap.com)
[lynda.com](http://www.lynda.com)