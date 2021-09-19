# SpaceWar
Spacewar Clone

# SETUP 
install Typescript
### npm install -g typescript

install rollup
### npm install --global rollup

# COMPILE
Single compile
### tsc

Constant compilation
### tsc --watch

Combine into one file:
### rollup dist/engine.js --file dist/web/bundle.js --format iife