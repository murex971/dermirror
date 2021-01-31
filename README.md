## Inspiration
Mirrors are considered as a household item which is just used to admire ourselves and to asses ourselves. We wanted to level up this by redefining the mirror by making a smart mirror which not only let's you see yourself, but also helps you in keeping the track of any skin problems and help you and your family fix any problems. This way, a mirror actually helps you to take care of your skin.

## What it does
Dermirror is a Raspberry Pi powered smart mirror which leverages the DermAI model to detect and classify and skin diseases or problems. It comes with a mobile app, with which you can pair your smart mirror and hence, preserve all the history of remarks and possible medication the smart mirror suggests. It remembers the faces of every member and gives personalized remarks for each of the family member.

## How we built it
We used ReactJS to build an interface for our smart mirror which runs on Raspberry Pi. As it is on react, we can run it on any other platform too. We used Raspberry Pi 3A+ with Waveshare 7 inch screen. We built the backend Chat Bot using Chatterbot in Python. We used Chrome's TTS to convert voice to text.

## Challenges we ran into
The classification model DermAI was very old and ran on Python 2. So we had to fix a lot of issues and port it to Python 3. Limited RAM of Raspberry Pi 3A+ was also a problem as builds took a lot of time. Chatterbot was also deprecated and had a lot of wrong responses.

## Accomplishments that we're proud of
We're really proud of the fact that we were able to integrate an actual chatbot powered by a working Face Recognition model along with a voice recognition module that's pretty accurate. And the fact that we did this in

## What we learned
This was our first hackathon and we still don't believe we made an application with a big tech stack. We coordinated well and made the application in time. Vaibhav learned how to deploy applications on Raspberry Pi and to debug python environment.

## What's next for Dermirror
From here, we'd like to actually improve our chatbot and make it better and also be able to use this application for general skin-care

## Installation
run `npm install` to install the dependencies and then run `npm run start` to start the application
