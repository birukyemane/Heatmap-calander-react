# Heatmap component

By [Biruk Yemane](https://github.com/birukyemane)

## Instructions

1. Navigate to [repo](https://github.com/birukyemane/Heatmap-calander-react)
2. Clone locally using
 `git clone https://github.com/birukyemane/Heatmap-calander-react.git`
3. Install dependencies using `yarn install`  - you can get `yarn` [from](https://yarnpkg.com/en/)
4. Go to the cloned project directory `cd Heatmap-calander-react`
4. Start your server using `yarn start` - if you get a prompt asking to start server on diffrent port press `Enter` key  
5. Navigate to app in [browser](http://localhost:3000)
6. Enjoy!

## Discussion

I used the following technologies: HTML, CSS, React, Font Awesome. And [react-cal-heatmap](https://www.npmjs.com/package/react-cal-heatmap ) and [react-tooltip components](https://www.npmjs.com/package/react-tooltip).  
I used [create-react-app](https://goo.gl/26jfy4) to generate the scaffolding for this app.

## Requirements

#### Build a heatmap calander grid

I developed a `Heatmap` component on top of `react-cal-heatmap` component. The component shows the amount of activity on a given calander day relative to other days in the year. The UI is separated from data so that the component can easily be used with any data. This is achieved by  reactive template bindings, i.e. when the model(state) changes the view is updated. The component is responsive and fills its container width. I created a palette (color-sclae) by defining a callback function to be passed to `react-cal-heatmap` and corresponding CSS classes for the palette. I created a usable palette, please see the demo app.  

#### I tested by building an app that allows users to see a heatmap of IBM's 5 year historical stock price data. 

 User can choose a year(2015-2019) and stock price data for the year is displyed as heatmap. I built a color palette that allows to easily see changes in the stock price. The app is usable and has a nice look and feel. The app is responsive and can be used on small, medium and large screens.   

## Bonuses!

#### Lables and legend 

I built `Legend` component and enabled `lables` on `react-cal-heatmap` component. The `Legend` component is built for the demo app. However, it can be extended to generate a ledgend for any data. This can be done in future versions.  

#### Documentation

The code is cleaned and clearly commeted. but if there is anything unclear please contact me for explanation.
