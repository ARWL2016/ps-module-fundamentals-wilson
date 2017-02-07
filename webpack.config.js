module.exports = {
  entry: './es6/app.js', 
  output: {
    path: './build-webpack', 
    filename: 'bundle.js', 
  }, 
  module: {
    loaders: [{ //these preprocess the code before bundling
      test: /\.js$/,
      exclude: /node_modules/, 
      loader: 'babel-loader', 
      query: {
        presets: ['es2015']
      }
  }]
  }
}; 