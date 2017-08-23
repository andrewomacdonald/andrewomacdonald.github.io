A personal webpage utilizing CSS, Bootstrap and HTML with links to all my relevant information.

UPDATE:

-Finally got Angular directive that hides scrollbar when not scrolling and shows it when scrolling (kind of like how the iPhone does it) working. Small bug with it (listed in known issues section) that I haven't figured out yet.

 -Added a link to the source code on the top left of the page.

 -Have a controller working that appends placeholders inside the projects container so user can see the scroll directive I wrote in action, but haven't gotten around to formatting a nice enough looking button for it yet and it's almost midnight, so I'LL GET ON IT SOON.


KNOWN ISSUES:

-Scrolling through the projects container when in mobile landscape mode looks bad and doesn't work. Need to add some media queries for landscape mode.

-Scrollbar thumb flickers if moving too fast thanks to something strange going on in my directive I haven't figure out yet.

-Projects Header does not hide from page when container behind it is smaller than font size. Have a good idea how to fix it.

-Removed the link to my source code when in mobile view because everything I've tried for it looks terrible. Needs more work.

