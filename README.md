# Maya Rose Nicholls
# Table of Contents
1. [Introduction](#Introduction)
2. [UX](#UX)
   * [Ideal User Demographic](#Ideal-User-Demographic)
   *  [User Stories](#User-Stories)
   *  [Development Planes](#Development-Planes)
   * [Design](#Design)
3. [Features](#Features)
   * [Design Features](#Design-Features)
   * [Existing Features](#Existing-Features)
   * [Features to Implement in the future](#Features-to-Implement-in-the-future)
4. [Issues and Bugs](#Issues-and-Bugs)
5. [Technologies Used](#Technologies-Used)
   * [Main Languages Used](Main-Languages-Used)
   * [Frameworks, Libraries & Programs Used](#Frameworks,-Libraries-&-Programs-Used)
6. [Testing](#Testing)
   * [Testing.md](TESTING.md)
7. [Deployment](#Deployment)
   * [Deploying on GitHub Pages](#Deploying-on-GitHub-Pages)
8. [Credits](#Credits)
   * [Content](#Content)
   * [Media](#Media)
   * [Code](#Code)

## Issues And Bugs
 The developer came across multiple bugs when implementing some features on the website, the ones that was more noticeable, along with the solutions are listed below:

 * Envelope Icon
 
 When trying to change the icons for Maya's social the enevlope icon would take its own properties and react differently to the other two icons. To get around this issue I had to create its own custom class that I would call from the css file in order to get all icons across the webpage to all act in unison.

 * Nav bar

 When trying to implement the navbar on the gallery page the images would overlap with each other to try and fix this issue I tried to apply the navbar with the 'sticky' attribute so that the navbar would stay at the top of the page so that no overlapping was occuring. This ended up making the navbar and navbar logo would become un-aligned. Also causing the navbar logo to stay in the top left corner of the screen.

 * Nav bar & links

 When trying to make all the navbars and the links inside the navbar align, I noticed that they wasn't all aligning as I had intended for them to do and some were slightly higher on the page than others. After using the Developer Tools in my web browser I could see that the nav links all had a padding of 8px whilst the 'nav-logo' didnt go by the same rules causing them to be un-aligned, I also used Diffchecker and found that the structure of my navbar was slighty off and had a div which was causing issues also. I also found that 'nav-padding' was also causing issues so decided to see if removing that class would help the alignment issue. 
 
 * About Me Page

 When styling the about me page when adjusting the viewpoints at a certain (991px) the page would not follow any of the breakpoints arguements so to fix this issue I had to fix the min and max width viewpoint to ensure that that if anyone viewed the website at that viewpoint that the webpage would stay inline with what was expected when at that point.


## Deployment

* Deploying on GitHub Pages

In order for this page to be deployed to GitHub Pages from its Github Repository, the following steps was taken:

1. Log into GitHub or create an acount.
2. Locate the GitHub Repository.
3. On the top menu of the repository select the settings tab.
4. Scroll down until you see the 'GitHub pages' section.
5. Under the 'Source' section of 'GitHub Pages' click the box labbeled 'None' and then select 'Master Branch'.
6. Upon clicking save the page will refresh meaning the website is now deployed.
7. Scroll back down to the 'GitHub Pages' section and you will now see the live link directing you to the website.

## Credits

### Content

### Media

### Code
The developer has used multiple sites that would better help them understand the code used and was modified to fit the websites theme and to keep the order consistent. The sites that was used are as following:
* [Stack Overflow](https://stackoverflow.com/ "Link to Stack Overflow Homepage")
* [Bootstrap](https://getbootstrap.com/docs/4.5/getting-started/introduction/ "Link to Bootstrap Homepage")
* [Google Fonts](https://fonts.google.com/ "Link to Google Fonts Homepage")
* [Font Awesome](https://fontawesome.com/ "Link to Font Awsome Homepage")
* [Free Frontend](https://freefrontend.com "Link to the Free Frontend Homepage")
* [Gallery Page](https://bootstrapious.com/snippets "Link to page referenced to with gallery")

## Technologies Used
### Main Languages Used
 * [HTML5](https://en.wikipedia.org/wiki/HTML5 "Link to HTML Wiki")
 * [CSS3](https://en.wikipedia.org/wiki/CSS#CSS_3 "Link to CSS Wiki")

### Libraries, Frameworks and Libraries Used
 * [Bootstrap 4](https://getbootstrap.com/docs/4.5/getting-started/introduction/ "Link to the Homepage of Bootstrap")
   * Bootstrap was used to allow the website to be responsive from mobile devices upwards.
 * [Google Fonts](https://fonts.google.com/ "Link to Google Fonts Homepage")
   * Google Fonts was used to import the fonts used throughout the website which are "Roboto" and "Lato" this was implemented in the style.css file.
* [Git](https://git-scm.com/ "Link to Git Homepage")
  * Git was used to utilise the GitPod terminal to allow the developer to commit and push to GitHub.
 *[GitHub](https://github.com/ "Link to GitHub Homepage")
  * GitHub was used to store the project after pushing.
 * [Balsamiq](https://balsamiq.com/ "Link to Balsamiq Homepage")
  * Balsamiq was used to create the wireframes during the designing stages of the project.
 * [Am I Responsive](http://ami.responsivedesign.is/# "Link to Am I Responsive")
  * Am I Responsive was used to see the responsive design throughout the process.
