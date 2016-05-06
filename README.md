The Suicide of Lucretia
=======================
This is a webpage created as a final project for HIS353G: Italian 
Renaissance at UT Austin. It features a critique of Luca Cambiaso's The 
Suicide of Lucretia based on principles described in Leon Battista 
Alberti's On Painting.  

Technical Summary
-----------------
This webpage is hosted using Github Pages, which allows for any Github 
project to have a static website hosted on Github's servers. Since my 
webpage did not require a database of any sort, using Github Pages was 
the easiest and fastest option.  

The page was created using HTML, CSS, Javascript, jQuery. HTML and CSS 
are the primary markup and styling languages for web development. 
Javascript is a scripting language that allows the page to have "special 
effects"; jQuery is a library of functions that simplifies the way HTML 
elements are referreed to in the Javascript script.  

The page features Cambiaso's painting next to a textbox. This was 
actually surprisingly challenging since HTML is finnicky when it comes to 
arranging elements side by side, but I eventually found an internet post 
about how to arrange a textbox next to an image. The painting is divided 
into sections so that the textbox displays relevant critique when a user 
hovers their cursor over each section. Each section is an invisible 
rectangle tagged with an id so that when a cursor hovers into the 
section, the script changes the content of the textbox to the matching 
critique segment. When a cursor hovers out of the section, the textbox 
content is restored to the default text. Below is an image of the 
different sections made visible.