# Ondervindingen

## Filesize
- full: 52kb

## Docs
- De docs zijn niet zo overzichtelijk, niet goed ingedeeld, bijvoorbeeld list staat bij typography, ik heb daar verschillende keren lang naar moeten zoeken.
- Ook als je in het zoekvak bovenaan iets zoekt krijg je enkel sass resultaten ( dit is nuttig als je met sass werkt, anders niet ).


### basic styles
- ze hebben niet overdreven met de basic styling, ik vind dit goed, zo moet je minder overschrijven.
- bijvoorbeeld bij inputs is dit handig

### Grid
- Geen container nodig
```bash
    row bevat container styling
```
- medium-collapse - verwijder gutter tussen columns
```bash
    Zorgt er voor dat er geen gutter is op alle devices die groter dan medium viewport size hebben
```
- large-centered - center columns
```bash
    Center columns die large zijn
```
- laatste columns wordt automatisch rechts uitgelijnd
- ordening van column
```bash
    <div class="row">
        <div class="large-9 large-push-3 columns">9</div>
        <div class="large-3 large-pull-9 columns">3, last</div>
    </div>
```
- row large-up-4
```bash
    Alle 'childs' krijgen de class large-4
```

### flex video
```bash
    Zorgt er voor dat de video schaalt
```

### img
```bash
    Een img wordt automatisch gescaled tot de column
```