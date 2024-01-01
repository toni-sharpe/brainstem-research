## Testing
* SB
* Unit test modals
* Cypress for integration
* SB first
* Share test matrices
* Use `Stub` for objects and `Mock` for fns
* components use SB
* utils unit tested
* sections RTL and SB
* screens RTL


## Data FE
* For each object, build and maintain data structures that represent it


## Ordering
* Alphabetical should be used
* However, this should be the fall-back, there are often better ways, for example
** Clustering imports
** `start` and `end`
** A navigation link list has an order based on the information architecture of the site


## Class names
* `wrapper` for the outermost HTML element
* `interface` for bits that contain interactive bits
* `form` for fields
* `details` for any output of text etc.
* `item` for a thing
* `list` for the full set of things
* `set` for groups of things within in a list


## Acceptable abbreviations
* Generally abbreviations should be avoided, but these are acceptable they are so common
* `btn` for `button`
* `fn` for `function`


## Events
* Format event handlers as `on event target` (onClickAdd, for example)


## Booleans
* `is`, `has`, `enable`, `disable`, `show`, `hide`, `use`
* Can be thought of as simple functions (that return the value they hold)


## Naming elements (suffixes)
* `Input`
* `Form`


## Sizes
* [ 0] tiniest
* [ 1] very-tiny
* [ 2] tiny
* [ 3] small-tiny
* [ 4] small
* [ 5] medium-small
* [ 6] medium
* [ 7] medium-large
* [ 8] large
* [ 9] very-large
* [10] largest


## Spacing
*  [0] narrowest
*  [1] narrow
*  [2] medium
*  [3] wide
*  [4] widest


## Brightnesses
* [ 0] not-for-anish-kapoor
* [ 1] blackest
* [ 2] black
* [ 3] very-dark
* [ 4] dark
* [ 5] dull-dark
* [ 6] regular
* [ 7] dull-light
* [ 8] light
* [ 9] very-light
* [10] lightest
* [11] white


## Z-Index
* [ 0] step-right-back
* [ 1] step-back
* [ 2] set-to-zero
* [ 3] step-forward
* [ 4] step-right-forward
* [ 5] overlay-modal
* [ 6] guaranteed


## Modals
* Pages at URLs, modals for pop-ups within page


## Users/permissions
* Tabs open for different user permission levels
* Users set up with passwords saved in Chrome
* Keep all passwords the same across all envs


## Points
* Build points up as a count of 0.5s/1s, ie. five fields = 1, Redux = 1, an API verb = 1, an SQL function = 1


## Naming general
Don't conjugate related types into the names of things, ie. if person owns project, there should be entities `person` and `project`, not `person` and `person_project`

Use the same key for an area of the app, for example, and suffix the file name with the type of thing:

`ProjectScreen`     `project-screen.js`
`ProjectListScreen` `project-list-screen.js`
`ProjectActions`    `project-actions.js`
`ProjectReducer`    ...
`ProjectRoutes`
`ProjectHandler`
`ProjectModel`

Map models 1-2-1 with DB tables

Module names:

module-component
module-action-component

Group files in folders keyed by entity, not type of file

/project/
/project/project-constants.js <-- you'll need these FE and BE
/project/project-actions.js
/project/project-model.js

Use the singular for things

Avoid use of 's' for plurals. For a set of things use `List` as a suffix - this makes variable name conjugation eaiser and also avoids non-native English speakers having to handle 's' plurals. `List` is an easier suffix to see also. A search for `<entity_key>` will return everything. `List` will also _always_ be the suffix, consider the example `entityForDisplay` and `entitiesForDisplay`.

Also avoid possessive 's'.

Also avoid the object 's', ie. x 'chases' y

`procedures-delete` - does delete belong to the procedure or operate on many procedures?
`procedure-deletes` - does the procedure-delete own something, act on something or are there many deletes for a procedure?

Use a consistent set of CRUD related commands in handlers and models:

`create`      - always returns the created object
`update`      - always returns the updated object
`save`        - always returns the created/updated object
`delete`      - always returns the deleted object
`readDetails` - always returns a single object
`readList`    - always returns an array of objects

Use different words for other types of 'get':

* Use `query` for anything that does SQL
* Use `extract` for anything that extracts from a JS object
* Use `fetch` for anything that makes an API call
* Use `get` for anything that accesses a client side store
* Use `calc` when returning a number, array etc, if switching over a number and returning objects with numbers too, and *including* strings that generate keys, class names etc.
* Use `write` when returning a string which is output to the user
* Use `draw` when creating something which only has visual meaning and must be supported or ignored accessibility wise
* Use `has` when returning a Boolean
* Use `build` for anything made of HTML with meaning more than just visual
* Use `create`/`make` for anything else (but use the same across the project, the first used wins)
* `Elem` can be used for items with an array
* Prefer the truthy (`show` over `hide`, `enable` over `disable`)
* use `on` to prefix anything that happens on an event (close, open, etc)
** and `Handler` if the function returns the event handler
* use `set` for any `useState` functions
* suffix any Redux actions with `Action`
* `show`/`hide` for any function that completely removes a UI element from the UI
* `enable`/`disable` for any function that deactivates a UI element from the UI
* `set` for stores
* `Mapper` always suffixes a map fn
* `Grouper` for an fn that groups stuff like, but not limited to Ramda's `groupBy`

**Don't try to compose sentences out of test strings** use a hyphen at the end and describe blocks to break up logically.


## Verbs
* create
* read-list
* read-details
* update
* delete
* import
* export


## Notes
* Prettify is not run on any .model. allowing the char line length to be brought down
* REST and CRUD parlance describe the same thing but get mixed up, should we choose one or the other, or is a consistently applied break at the route/handler boundary sufficient?


## Folder structure

```
// lib/example/example.handler.js
create()
readDetails(id)
readList()
update(id)
delete(id)
import(dataList)
export()


// lib/example/example.itegration.test.js
describe(POST /api/example, { data })
describe(GET /api/example, { id }))
describe(GET /api/example)
describe(PATCH /api/example, { id })
describe(DELETE /api/example, { id })


// lib/example/example.import-export.itegration.test.js
describe(POST /api/example/import, { data })
describe(GET /api/example/export)


// lib/example/example.model.js
createSQL() // factor out create SQL
create({ newData = {} }) // wrapper that calls bulk function
bulkCreate({ newDataList = [] }) // inserts [].map


readDetailsSQL() // our current big SQL
readDetails({ id = '' }) // wrapper that calls bulk function
bulkReadDetails({ idList = [] }) // our current function for listing, we'll keep this


readListSQL() // new SQL that is optimised for listing
readList({ idList = [] }) // new function for getting the list


updateSQL() // factor out update SQL
update({ id, newData }) // wrapper that calls bulk function
bulkUpdate({ newDataList = [] }) // updates [].map


deleteSQL() // factor out delete SQL (sets active to false)
delete({ id }) // wrapper that calls bulk function
bulkUpdate({ idList = [] }) // updates [].map


// lib/example/example.import-export.model.js
importSQL() // factor out import SQL
import({ dataList = [] }) // wrapper that calls bulk function
exportSQL() // factor out export SQL
export()


// lib/example/example.excel.js
buildExcelFile()


// lib/example/example.routes.js
POST /api/example, { data } => handler.create
GET /api/example, { id }) => handler.readDetails
GET /api/example => handler.readList
PATCH /api/example, { id } => handler.update
DELETE /api/example, { id } => handler.delete
POST /api/example/import, { data } => handler.import
GET /api/example/export => handler.export


// lib/example/example.utils.js
checkPermissioons()
makeLog()
etc()


// One test per util function
lib/example/example.utils.test.js
```

