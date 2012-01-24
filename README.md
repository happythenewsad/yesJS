Summary:
===
I am implementing the New York Times' "slider" panel to practice my JavaScript.


Todo
=====

 - Make CSS prettier
 - change sample content


Doing
===


Done
===

- Panel should fade in when a scroll event occurs
- Panel should only fade in when a scroll event occurs AND the end of a content div appears in the viewport
- panel should fade out when content div disappears down
- panel should only fade in when the *top* of the fade-in element appears in the viewport
- Abstract class names away from selectors
- Make the scroll loop more efficient.



Implementation options:


- remember the previous state, and fadeout accordingly
- check inView for every scroll event (expensive)
- check opacity for every scroll event (brittle, assumes an opacity)