# Nisx Image Finder

[Live Demo](https://nixsimagefinder.netlify.com/)

Correct Search:
![Correct Search](./demo_images/normal_search_cake.jpg)

Image Modal:
![Image Modal](./demo_images/image_modal_beef.jpg)

Symbols and Numbers in Search
![Symbols and Numbers Search](./demo_images/spellcheck_nylon.png)

Words Swapped Search:
![Words Swapped Search](./demo_images/spellcheck_zebra.png)

Incorrect spelling Search:
![Incorrect Spelling Search](./demo_images/spellcheck_raccoon.jpg)

Best Match Search:
![Best Match Search](./demo_images/spellcheck_best_match.png)

Best Match Search with No Results:
![Best Match Search with No Results](./demo_images/spellcheck_best_match_empty_results.png)

---

## How to run locally

### Prerequisites:

-node.js
-unsplash api key and secret

### Instructions:

- [Clone repository](https://github.com/niszeto/appstem_web_prototype)

- Create a ".env.local" file in the root of the application
- Add below to your .env.local file
  > REACT_APP_UNSPLASH_CLIENT_ID="YOUR UNSPLASH CLIENT ID"
  > REACT_APP_UNSPLASH_CLIENT_SECRET="YOUR UNSPLASH CLIENT SECRET"
- Type npm install to install dependencies of project
- Type npm start and open [http://localhost:3000](http://localhost:3000) to view it in the browser.
