## Voicemail Notes v2

### utilizing Javascript, AngularJS and NodeJS.

This small project was to test my ability at transitioning a current vanilla JS pet project into an AngularJS version. It has non-persistent rendering which someday if time allows would either be connected to Firebase for content management or implement a LocalStorage solution with persistence rules.

#### __Original iteration in plain ol' Javascript:__
As a salon professional/admin I sometimes have to build my own tools with whatever technologies I have, print and tech alike. This was no exception as I needed a quick solution to jot down voicemails which followed a predetermined format; date, time and message. Simple right? Except 'date' given by the voicemail prompt quickly turned into parsing "yesterday", "today" and other words rather than just the date as a number which I felt was a nice little challenge incorporating a specific method to do so. Having this project redone in Angular was a definite boost in implementation time.

#### __Result:__
All in all it was a pleasant side-project while also going through my Web Developer course through [Bloc.io](www.bloc.io). Y'know how it is when you learn something new, cool and applicable you just HAVE to geek out and have some creative time.

currently hosted on [Netflify](http://cmds-angular-messages-app.netlify.com/)

#### Someday when:
- Add persistence through Firebase or LocalStorage
- Clean up CSS to make it more visually palatable, for my sake at least.
- Give the user the drag-and-drop option to realign date, time and message elements to their own specific voicemail system.
- Include option to forward/export messages to appropriate e-mail recipients, individually or grouped.
