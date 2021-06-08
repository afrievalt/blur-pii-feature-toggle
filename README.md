# Blur PII with url feature toggle in 7 lines of code


![blur pii](/public/blur-pii.png)

```js
export const Home = () => {
  const search = window?.location.search
  const isBlurPii = !!~search.indexOf("blurPii")

  return (
      <main>
        <div>
          SS#: 
          <span data-blur-pii={isBlurPii} >221-22-1560</span>
        </div>
      </main>    
  );
};
```
```css
[data-blur-pii=true] {
  color: transparent !important;
  text-shadow: 0 0 5px rgba(0,0,0,0.5) !important;
}
/* https://css-tricks.com/fun-with-blurred-text/ */
```

### [View in Code Sandbox](https://codesandbox.io/s/blur-pii-with-feature-toggle-x64r7?file=/src/home.js)

This is a great solution for taking screen shots or recordings with live data.  The end user can easily view the PII by selecting the blured text so use other methods for hiding PII from end users. 

## Live Demo:
