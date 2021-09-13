# Play

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 12.2.4.
* npm install
* ng serve --open to run the project

# Remarks
Live demo: www.blaatjes.nl

Really fun to play with the home made timelapse. I hope the dev has autoplay enabled in his/her browser.

I Would like to add, this is not something I usually (have to) do. Angular is type safe (or can be), for input validation we have formcontrol and for normal data retrieval we have regular error handling, models and interfaces. Type issues with variables give compile errors, so not an issue also. There is and issue in TS with interfaces not being available during runtime, so it is hard to build a dynamic validator. I really did not want to solve it like this, but after trying to reinvent the wheel and just not having enough time to work on this. This was the best I could come up with.

Maybe this was better done in plain JS or another non type safe framework ;)
## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

