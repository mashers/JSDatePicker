# JSDatePicker
A simple date picker written in JavaScript and CSS. Does not require any external libraries and does not need JQuery. Produces W3C validated HTML. Works in any standards compliant browser which supports CSS and JavaScript.

# Installation
Just include the stylesheet and script in the head of your HTML document:
```HTML
<link rel='stylesheet' href='datepicker.css' type='text/css'>
<script src="datepicker.js"></script>
```

# Usage
1. Create a div to contain the date picker. Any content placed inside this div will be replaced by the date picker.
```HTML
<div id='datepicker'></div>
```

2. Call the `prepDatePicker()` function to set up the initial state of the picker.
```HTML
<script>
prepDatePicker('datepicker', 2017, 04, 05, 2017, 04, 05, function(year, month, day){
  alert('You picked ' + year + '-' + month + '-' + day);
});
</script>
```

The parameters of this function, in order, are as follows:
- `containerID`: the name of the div which should contain the date picker.
- `year`, `month`, `day`: the date which should be shown on the picker when it is initially displayed.
- `selectedyear`, `selectedmonth`, `selectedday`: the date on the picker which should be shown as currently selected. This will usually be the same as `year`, `month` and `day` initially so that the currently selected date will be visible in the picker when it is opened.
- `callback`: a JavaScript function which is called when a date is selected in the picker. In the example above, the result of this will be an alert which shows the date in YYYY-MM-DD format.

`prepDatePicker()` can be called repeatedly, for example if you need to change the displayed or selected date after the picker has already been created. Since `prepDatePicker()` completely replaces the content of the date picker div, calling this function again will just replace the date picker with a new one showing the specified date.

# Displaying the picker
The div containing the picker will have its display mode set to `inline-block` when `prepDatePicker()` is called on it. This means that by default the date picker will be visible inline with the rest of the page content as soon as you call `prepDatePicker()`. If you need a different display method, you can wrap the div in another div with a different display method to get the desired effect. In so doing, you could embed the picker in a modal, a popup, or just display it inline on the page.

# To do
This date picker currently does what I need it to do for a particular project, but should work out of the box for others. Currently the only way of customising the picker is by editing the .js and .css file to make changes. In the future I could add customisation options. I'll accept pull requests if anybody else feels like adding this. However, the idea of this project is to keep it simple and not over-complicate things.

# License
Feel free to use this project for anything you want. If you have a credits or a copyright page it would be nice if you put a link to this repo.
