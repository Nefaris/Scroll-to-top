# Scroll-to-top
Simple js script that allows you to add well known editable "scroll to top" button on your website

## Usage
Download and simply add ScrollToTop.js script to your `<head>` tag that is all.
```html
<head>
    <script src="scrollToTop.js"></script>
</head>
```

## Customization
### Basic settings 
You are able to set color, border radius, position, width, and height of button simply chaning values in quotes. These are CSS values.
```javascript
let stt_background_color = "#000";
let stt_border_radius = "50%";
let stt_right_pos = "2%";
let stt_bottom_pos = "1%";
let stt_width = "60px";
let stt_height = "60px";
```

### Font awesome
The library uses icons from [Font Awesome](https://fontawesome.com/ "Font Awesome"), which imports automaticly, but you are able to disable it by changing the import value to false, if you already use it in your project.
```javascript
let import_FA = true;
```
Icon is also customizable.
```javascript
let stt_icon = '<i class="fas fa-angle-up"></i>';
let stt_icon_size = '1em';
let stt_icon_color = "#fff";
```

### Animation settings
There are 3 types of animations you can choose from.
```javascript
let stt_enter_effect = 'fade';
```
```javascript
let stt_enter_effect = 'slide-right';
```
```javascript
let stt_enter_effect = 'slide-bottom';
```

### Mobile settings
You can disable button on mobile, and make it smaller.
```javascript
let stt_display_mobile = true;
let stt_smaller_on_mobile = true;
```




