## Modular programming

**In order to run this code in the browser and circumvent the CORS (cros origin reques server) issue I turned off cors in firefox about:config security.fileuri.strict_origin_policy set to false**

``store-getters`` 

It is the same app as in tut3 except the features a isolated in modules
For some reason I couldn't import vue and vues directly in the modules.
I had to add the scripts in the html

```index.html main.js App.js ```
It is an exmaple ifound at https://markus.oberlehner.net/blog/goodbye-webpack-building-vue-applications-without-webpack/

```demostrate-imports```
Just show how to genarally export / import