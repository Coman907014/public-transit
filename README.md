
# Starting the project
1. Copy .env.local into .env
2. npm i
3. npm run start

# Other useful scripts
npm run build
npm run cypress - Runs Cypress integration tests
[`Added CYPRESS_VERIFY_TIMEOUT=1000000 as, on low spec PCs, verification tends to timeout`]

# TODO 
Search for [@TODO] in project for improvements/todos
1. Google Maps responses should be mocked inside Cypress as they will generate lots of hits.


# Improvements
1. When the project gets more complex, Storybook[https://storybook.js.org/] should be added.
   We could develop the components in isolation, make use of its a11y plugin to check the accesibility of the components.
2. Translation service to be implemented
3. Cypress setup & test coverage
4. Layout Component should be created. Right now, each component sets its own width and left-right margin/padding.