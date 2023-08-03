const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require("path");
const { Template } = require('webpack');
const Dotenv = require( 'dotenv-webpack' );


module.exports = {
    entry : {
        index:'./src/js/index.js'
    },
    output:{
        path: path.resolve(__dirname,'dist'),
        filename:'bundle.js'
    },
    module:{rules:[
        {
            test: /\.css$/i,
            use: ['style-loader', 'css-loader']
        },
        {
           test : /\.(jpe?g|png|webp|gif)$/i,
           type: 'asset/resource'

        },
        {
            test: /\.js$/i,
            exclude: /node_modules/,
            use: {
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/preset-env']
                }
            }
        }
    ]},
    plugins:[
     new HtmlWebpackPlugin({ 
        title:'Apllicazione webpack',
        template:'./src/index.html'
    
      }),
      new Dotenv({
        systemvars: true,
        path: '.env.variables'
    }),
    ],
    devServer:{
        port:5000,
        open:true,
        static: path.resolve(__dirname,'dist')
    }
    
};

