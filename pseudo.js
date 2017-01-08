import View from "whit";

export default function article(...children){ return new Article({ children }); }
class Article extends View {
  get tag() { return "article"; }
}

import { form, textField, button } from "views";

form(
  textField("What is your name?", "user[name]")
    .contents("Enter your name here.")
    .onFocus(view => {
      view.contents = "";
    }),

  button("Submit").onClick(view => {
    const formData = view.parent.serialize();
    // do something with formData
  })
);
