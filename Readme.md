# Mental Health Assessment

![](https://cloud.githubusercontent.com/assets/796926/20357538/5f01c180-abf6-11e6-8b86-9cfda53520b1.gif)

# Start server

Assuming you have node >=v6.7.0 installed on your computer it should be
as easy as:

    npm install && npm start

You should then be able to navigate locally to `http://localhost:3030/`

If you want to watch the client files, I added an npm command:


    npm run watch-client


# Tech Debt

Or things that I would've liked to do.

- add server endpoints
- add client side error handling of the api

# Structure

### server/

Directory explanations for the server portion.

- `routes/`: Even though it's a small app I generally like to separate route handlers from the routes module to keep it clean.
- `constants/`: general application constants
- `resources/`: controller maps to endpoint resources
- `middleware/`: middleware `.before` and `.after` the routes

### client/

Directory explanations for the client portion. I followed the lead on
common conventions I've seen in the react/redux community. This is not
as important to me initially, but obviously can become important as your team scales.

- `actions/`: Async redux actions
- `constants/`: General client application constants
- `components/`: React components
- `containers/`: This is where I like to put the containers where you render your high level components and construct things like stores / routers / history etc..
- `general-libs/`: general purpose modules to be shared
- `less/ui-kit`: a small mini ui-kit to show how I structure some of those decisions
- `less/[pagename]`: page specific styles
- `reducers/`: Redux reducers, composed application state
- `stores/`: This is where I put my store factories (when using Redux)

### React/Redux

I've most recently been using Redux as the flux implementation for my React applications. It's currently the implementation I'm most familiar with. This app is pretty straightforward, so I'll let the code talk for itself :)

## Styling decisions

### UI Kit

You'll notice in `client/less/ui-kit` there's few modules that make
up the base of a would-be company ui-kit. I've implemented a
small one to ebable productivity and give an idea of how I feel these
should be architected. Always happy for feedback on improvements and
newer techniques.


### Global Transitions

I've been wanting to try this for a little while. Have a global
transition action that allows for easily baked CSS3 transitions to
happen simultaneously. Some people might think it's too brittle but it
seemed like a perfect application to try it on since the transitions are
tied to mulitple components. You can see the timeout with `START_TRANSITION` and `END_TRANSITION`. Maybe they could be better named.

### Naming conventions

For this I used a BEM-ish approach. One note is that I've experienced some annoyances with BEM + React. Happy to talk that through further :)

### Layout and Positioning

There are many strategies for layout and positioning of elements. Here I chose a simple `spacer` namespace for quickly adding application-consistent spaces.

### Color

I generally like to keyword a few widely used colors like `@primary` or `@accent`. Other than that, it becomes component specific color renaming and I am happy to provide a long list of hues to choose from because ui design often requires nuanced coloring.

## Lack of comments

Generally, I think readable code speaks for itself. Conceptually, I would argue that once you make a comment, that is another yet another thing that must be maintained.

Some exceptions are:

- multistep async patterns
- mission critical or complex logic checks

That said, if there are organizational conventions for commenting, I'm all for it.

## JS Style

In lieue of rigourous js coding style mandates, I have taken it the liberty to code how I like:

- make use of the `<module>/index.js` pattern
- arguably unnecessary variable declarations to aide code readbility
- node style callback parameters where possible `(error, <rest of arguments>)`
- ne'er the use of prototypes and constructors, I generally don't use them unless performance is a bottleneck. functions, revealing module pattern, and closures ftw

