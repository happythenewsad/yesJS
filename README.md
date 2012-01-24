Summary:
===
I am implementing the New York Times' "slider" panel to practice my JavaScript.


Todo
=====

- panel should only fade in when the *top* of the fade-in element appears in the viewport


Doing
===



Done
===

- Panel should fade in when a scroll event occurs

- Panel should only fade in when a scroll event occurs AND the end of a content div appears in the viewport

- panel should fade out when content div disappears down


Notes:
Why does calling fadein twice only make the object actually fade in once?

Implementation options:


- remember the previous state, and fadeout accordingly
- check inView for every scroll event (expensive)
- check opacity for every scroll event (brittle, assumes an opacity)