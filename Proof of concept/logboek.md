# Web Specialisatie
## Logboek

#### Periode 2
##### Week 1

- Op zoek naar een goede vergelijkende studie
- 2 ideeen

```
- #green -> stuurt een ledstrip aan in het groen.
- #cuckoo -> stuurt een koekoeksklok aan.
```

##### Week 2

- Keuze gemaakt: Twitter Klok
- Uitzoeken hoe tweets binnen krijgen in meteor
	- new3rs:twitter ( kreeg ik niet in werking )
	- mrt twit
- tweet stream maken

##### Week 3

- Meteor koppelen met cylonjs -> llwoll:arduino-cylon
	- error: error: No compatible binary build found for this package. Contact the package author and ask them to publish it for your platform.
- Oplossing zoeken
- Johnny five -> maar heeft geen meteor package
- Rotating to Linear motion
	- [google](https://www.google.be/search?q=rotating+to+linear+motion&espv=2&biw=1920&bih=911&source=lnms&tbm=isch&sa=X&ved=0ahUKEwi6-42v5LPKAhWFYA8KHb1oBy4Q_AUIBigB)
	- [youtube](https://www.youtube.com/watch?v=09jZsBDHalE)
		- lijkt ingewikkeld
			- oplossing
			- ronddraaiende koekoeksklok
- Johnny five koppelen met node
	- werkt
	- test programma's
		- [blink](https://www.youtube.com/watch?v=FYANhXymgpk)
		- [servo sweep](https://www.youtube.com/watch?v=9I3KalJqx94)
		- [servo keypress](https://www.youtube.com/watch?v=Epxwdv4O5L0)
		- servo 360deg
			- probleem -> werkt niet
			- servo kan maar 180° [docs](http://www.micropik.com/PDF/SG90Servo.pdf)
			- nu kan ik geen ronddraaiende koekoeksklok maken
				- oplossing
				- [youtube](https://www.youtube.com/watch?v=aphizmWOwIo)
				- [eigen lego versie](https://www.youtube.com/watch?v=vk-S1ZXvS0U)
- Twitter stream koppelen aan node ( express )
	- simpele oplossing [express starter](https://github.com/MarijnBrosens/web-specialisatie/tree/master/Proof%20of%20concept/express-starter)
	- get werkt
	- stream lukt niet -> crasht
- Terug naar meteor
	- oplossing johnny five koppelen met meteor
		- [meteorhacks:npm](https://github.com/meteorhacks/npm)
		- [meteor sweep](https://www.youtube.com/watch?v=r1ipvme_WbU)
- Tweets koppelen met johnny five
	- probleem werkt weer niet
	- oplossing Meteor.bindEnvironment
	- [volledige werking](https://www.youtube.com/watch?v=hoCNPvsJAhU)

##### Week 4

-  [Lego behuizing](https://www.youtube.com/watch?v=yp371KkjKEs) bouwen



##### Week 5

- Onsen ui getting started
- ( ingewikkeld )

##### Week 6

##### Week 7

- App in Onsen

##### Week 8

- App in Onsen
- Bevindingen