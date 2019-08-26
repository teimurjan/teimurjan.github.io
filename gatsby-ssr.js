/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/ssr-apis/
 */

// You can delete this file if you're not using it
import React from 'react'

const themeSnippet = `
(function(){
    window.__saveTheme = theme => localStorage.setItem('theme', theme)
        
    window.__applyTheme = theme => {
        document.documentElement.setAttribute('data-theme', theme)
    }

    window.__onThemeChange = () => {};
    window.__setTheme = (newTheme) => {
      window.__theme = newTheme;
      window.__saveTheme(newTheme);
      window.__applyTheme(newTheme);
      window.__onThemeChange(newTheme);
    }

    window.__theme = (() => {
        if (typeof localStorage === 'undefined') {
            return undefined
        }

        return localStorage.getItem('theme');
    })();
    window.__applyTheme(window.__theme);
})();
`

export const onPreRenderHTML = ({
  getPreBodyComponents,
  replacePreBodyComponents,
}) => {
  const preBodyComponents = getPreBodyComponents()
  preBodyComponents.push(
    <script key="theme" dangerouslySetInnerHTML={{ __html: themeSnippet }} />
  )
  replacePreBodyComponents(preBodyComponents)
}
