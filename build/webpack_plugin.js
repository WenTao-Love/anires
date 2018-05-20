function MyWebPackPluginForOne() {
}

String.prototype.replaceAll  = function(s1,s2){
    return this.replace(new RegExp(s1,"gm"),s2);
}

MyWebPackPluginForOne.prototype.apply = function(compiler) {
    compiler.plugin('compilation', compilation => {
        compilation.plugin('html-webpack-plugin-before-html-processing', htmlPluginData => {
            console.log('---------------------------')
            console.log('replace all /static to ./static')
            // console.log(htmlPluginData.assets.css)
            // console.log(htmlPluginData.assets.js)
            fill(htmlPluginData.assets.css)
            fill(htmlPluginData.assets.js)
            htmlPluginData.html = htmlPluginData.html.replaceAll("/static", './static')
            console.log('---------------------------')

            // callback(null, htmlPluginData);
        });
    });
};

function fill(array) {
  for (let i = 0; i < array.length; i++) {
    array[i] = '.' + array[i]
  }
}

module.exports = MyWebPackPluginForOne
