
> Open this page at [https://melvinpao.github.io/thermometer-with-oled/](https://melvinpao.github.io/thermometer-with-oled/)

This uses a micro:bit that is connected to a 128x64 OLED module throught the i2c bus.

Uses the oled12864_i2c 1.5.0 extension in Makecode.

The i2c bus is exposed by connecting the micro:bit board to an ElectFreaks breakout board, although I think other compatible micro:bit breakout boards would likely work as well as long as there are the appropriate pins.

Currently it just displays the current temperauture, max temperature detected and min temperature detected, and displays the values on the OLED screen.

Future plans include using a TMP36 temperature sensor as an external probe.

## Use as Extension

This repository can be added as an **extension** in MakeCode.

* open [https://makecode.microbit.org/](https://makecode.microbit.org/)
* click on **New Project**
* click on **Extensions** under the gearwheel menu
* search for **https://github.com/melvinpao/thermometer-with-oled** and import

## Edit this project ![Build status badge](https://github.com/melvinpao/thermometer-with-oled/workflows/MakeCode/badge.svg)

To edit this repository in MakeCode.

* open [https://makecode.microbit.org/](https://makecode.microbit.org/)
* click on **Import** then click on **Import URL**
* paste **https://github.com/melvinpao/thermometer-with-oled** and click import

## Blocks preview

This image shows the blocks code from the last commit in master.
This image may take a few minutes to refresh.

![A rendered view of the blocks](https://github.com/melvinpao/thermometer-with-oled/raw/master/.github/makecode/blocks.png)

#### Metadata (used for search, rendering)

* for PXT/microbit
<script src="https://makecode.com/gh-pages-embed.js"></script><script>makeCodeRender("{{ site.makecode.home_url }}", "{{ site.github.owner_name }}/{{ site.github.repository_name }}");</script>
