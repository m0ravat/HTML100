# Documentation on web development based tools/languages

# Semantic HTML
A way to make code more readable instead of layering everything under a div, alot also come with custom basic functionality/styling.  

Main skeleton structure:   
Navigation bar --> Header --> Main (--> Section --> Article) --> Footer (Address)

Meta head content: 
viewport - Automatically intiailised via html:5  
description - Brief description of site  
keywords - Buzzwords related to site's content  
author - Name/alias  

# Webpack 
A way of bundling CSS and JS into an optimized format for faster loading times. Also makes it unreadable so can't be stolen and
modified by someone else. Built into frameworks like React but holds use for basic plain HTML/CSS/JS websites.  

# ES6 
Special semantics for JS - Very useful to learn before moving onto frameworks as Express utilises () => {} as a way of 
running functions, confusing for people who don't know how it works. 

# CSS 

## CSS based Libraries

Bulma and Materialise are 2 CSS libraries with predefined classes for quick web design which I grouped together to compare. 

Bulma unique features: Skeleton lines, built in toolpanel, built in hero template, floating built in, overlay and colour themes.

Materialise unique features: tooltips

### Merge comparison  

Materialise has built in colours, bulma utilises a theme based colouring system.  
Bulma has good basic classes for paragraphs/titles.   
Bulma containers are centered horizontally + more support on responsiveness.  
Bulma has nice colour schemes with invert + other modifiers for dark/light modes, good tags/control. Materialise has nice buttons + icons.  
Bulma has nice card designs for social media, materialise has nice cards for basic designs.   
Materialise has easy to use tabs and collapsibles, bulma has easy dropdowns.  
Materialise has the better footer, Bulma has better forms but materialise has datepicker/timepicker which is nice.   
Grids are more or less identical but I prefer materialise since more adjustable with 12.  
Modals are identical, I prefer bulma.  
Pagination better on bulma when ..., if defined number pages materialise better.  
Prefer bulma based tables as well. 

Conclusion - Use materialise for tabs/collapsibles, date/timepicker, grids, short pagination, basic cards and for colours. Personally prefer bulma for the rest. 

## Bootstrap

Similar to bulma and materialise, except it requires vite/webpack for setup. Has more features so it's built to be used solely on frameworks, overkill on native HTML/CSS which is more suitable with bulma/materialise.




