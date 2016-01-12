# johnny five blink with arduino
```Johnny five installatie
1. node installeren
2. visual studio installeren met c++ dependencies ( veel problemen mee gehad wegens versies... )
3. Python 2.7.3 installeren
4. in cmd set PATH=%PATH%;C:\Python27
5. npm install -g node-gyp
```

## blink led

### arduino

arduino ide
```
file>examples>firmata>StandardFirmata
```

### pc

in cmd
```
npm install johnny-five;
```

maak file strobe.js 
```
var five = require("johnny-five"),
    board = new five.Board();

board.on("ready", function() {
  // Create an Led on pin 13
  var led = new five.Led(13);

  // Strobe the pin on/off, defaults to 100ms phases
  led.strobe();
});
```

in cmd
```
node strobe.js
```