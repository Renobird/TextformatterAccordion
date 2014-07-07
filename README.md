# Textformatter Accordion 1.1.1

This Textformatter module for ProcessWire allows you to designate areas in a single textarea to be converted to an collapsed accordion list.
Put 5+ hyphens '-----Your Title Here' on a single line (within paragraph tags) to create specify title the paragraphs below will be collapsed. To end a group of accordion items and return to regular textarea content put exactly 5 slashes on a single line '/////' (within paragraph tags). You can designate as many accordions as you like.

This markup pattern for this module is based on the **[TextformatterPagination](https://github.com/ryancramerdesign/TextformatterPagination)** plugin with the idea that they could be interchangeable.

## How to install 

In ProcessWire 2.4+ go to your Modules menu in the admin, click the "New" tab and 
type or paste in "TextformatterAccordion" and click "Install". 

If you are unable to install using that method, you can also just install the old way 
by copying the files for this module into /site/modules/TextformatterPagination/ and 
clicking "check for new modules" from your Modules screen. 

## How to use

1. In the ProcessWire admin to Setup > Fields and edit the Textarea field that you want to
support accordions. On the "Details" tab, select "Accordion" as a Textformatter and save. 

2. Edit a page that uses the field you added the "Accordion" TextFormatter to in step one.
The textarea now supports content as usual, but can also have multiple collapsed (Accordion) areas.
See the examples below for how to desinate accordion items.

```
-----Accordion Item

The paragraphs beneath each accordion item are collapsed by default and open when you click on the title specified above. You can use multiple paragraphs, and any other content allowed in the textarea. For the sake of demonstration there are several placeholder items and paragraphs below.

Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede. Donec nec justo eget felis facilisis fermentum. Aliquam porttitor mauris sit amet orci. Aenean dignissim pellentesque felis.

-----Another Accordion Item

Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede. Donec nec justo eget felis facilisis fermentum. Aliquam porttitor mauris sit amet orci. Aenean dignissim pellentesque felis.

-----A Third Accordion Item

Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede. Donec nec justo eget felis facilisis fermentum. Aliquam porttitor mauris sit amet orci. Aenean dignissim pellentesque felis.

```