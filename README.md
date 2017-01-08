![](./logo.png)

```javascript
import html, { body } from "whit-html";
import form, {textField, select, option, checkbox, clearValue} from "whit-form";

body.append(
  form("http://myserver.com/users", "post",
    textField("Name:", "user[name]", "Your name here.")
      .clearValueOnFocus,

    textField("Email:", "user[email]", "Your email here.")
      .clearValueOnFocus,

    select("Favorite Color:", "user[favorite_color]",
      option("Red").default,
      option("Orange"),
      option("Yellow"),
      option("Green"),
      option("Blue"),
      option("Violet")
    ),

    checkbox("Join our Mailing List?", "user[mailing_list]"),

    submit("Submit to Enter Contest")
  ).on("submit", (formView, event) => {
    event.preventDefault();
    view.
  })
);
```

## Features

* **Zero Dependencies**
* **No templates. Markup is generated automatically.**
* **100% `Vanilla-JS`**
* **6.1Kb Uncompressed**
* **100% Test Coverage**
* **High-Quality Source Code & Test Files that are simple to read, understand, and extend.**
    * Cyclomatic Complexity under 3
    * Halstead Time under 36 minutes
    * Maintainability Index over 100
    * 36 or less logical lines of code for all files

## Introduction

There are two primary ways to use Whit depending on the syntax you want to work with.

### Factory Syntax

* Create factory functions that instantiate views and return them for you.
* Lets you create a custom view DSL using `vanilla-js`.
* Simplifies creation and combination of views.

**./app.js** :

```javascript
import { orderedList, listItem, body } from "./views.js";

body.append(
    orderedList(
        listItem("One"),
        listItem("Two"),
        listItem("Three")
    )
);
```

**./views.js** :

```javascript
export function orderedList(...children) {
    return new class OrderedList extends View {
        initialize(options) {
            options.tag = "ol",
            options.children = children;
        }
    };
}

export function listItem(labelText) {
    return new class ListItem extends View {
        initialize(options) {
            options.tag = "li"
        }
    }
}

const body = new class Body extends View {
    initialize(options) {
        // Get an existing element instead of creating a new one.
        options.element = document.getElementByTagName("body")[0]
    }
};

export { body };
```

### Vanilla Syntax

* See exactly what's going with nothing masked.
* Less complex than creating a factory wrapper for each view.

**`./app.js`** :

```javascript
import { OrderedList, ListItem, Body } from "./views.js";

const body = new Body();
const orderedList = new OrderedList({
    children: [
        new ListItem({ contents: "One" }),
        new ListItem({ contents: "Two" })
        new ListItem({ contents: "Three" })
    ]
});

body.append(orderedList);
```

**`./views.js`** :

```javascript
import View from "whit";

export class OrderedList extends View {
    initialize(options) {
        options.tag = "ol"
    }
}

export class ListItem extends View {
    initialize(options) {
        options.tag = "li"
    }
}

export class Body extends View {
    initialize(options) {
        // Get an existing element instead of creating a new one.
        options.element = document.getElementByTagName("body")[0]
    }
}
```

## Getting Started

### Installation

```shell
npm install whit --save
```

### Creating & Displaying Views

1. Import the `View` class from `whit`.
2. Extend the `View` class for each of your application's views.
3. Use the `.initialize` method ( *not* `.constructor` ) to customize each view's options.
4. Instantiate & combine views as required.
5. Append the view to your document.

```javascript
import View from "whit";

class OrderedList extends View {
    initialize(options) {
        options.tag = "ol"
    }
}

class ListItem extends View {
    initialize(options) {
        options.tag = "li"
    }
}

class Body extends View {
    initialize(options) {
        // Get an existing element instead of creating a new one.
        options.element = document.getElementByTagName("body")[0]
    }
}

const orderedList = new OrderedList({
    children: [
        new ListItem({ contents: "One" }),
        new ListItem({ contents: "Two" })
        new ListItem({ contents: "Three" })
    ]
});

const body = new Body();

body.append(orderedList);
```

### Cleaner Syntax w/ Factories



### Add an ID

```javascript
import View from "whit";

const view = new View();

view.toString(); // <div></div>
```

### Render to String

```html
<html>
  <body>
    <form action="http://myserver.com/users" method="post">
      <ol>
        <li class="text">
          <label for="user_name">Name:</label>
          <input id="user_name" type="text" name="user[name]" value="Your name here." />
        </li>
        <li class="text">
          <label for="user_email">Email:</label>
          <input id="user_email" type="text" name="user[email]" value="Your email here." />
        </li>
        <li class="select">
          <label for="user_favorite_color">Favorite Color:</label>
          <select id="user_favorite_color" type="text" name="user[favorite_color]">
            <option value="Red">Red</option>
            <option value="Orange">Orange</option>
            <option value="Yellow">Yellow</option>
            <option value="Green">Green</option>
            <option value="Blue">Blue</option>
            <option value="Violet">Violet</option>
          </select>
        </li>
        <li class="checkbox">
          <label for="user_mailing_list">Join our Mailing List?</label>
          <input id="user_mailing_list" type="checkbox" name="user[mailing_list]" />
        </li>
        <li class="submit">
          <input type="submit" value="Submit to Enter Contest" />
        </li>
      </ol>
    </form>
  </body>
</html>
```
