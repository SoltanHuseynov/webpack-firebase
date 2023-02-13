const path=require("path")
const HtmlwebPlugin=require("html-webpack-plugin")
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const nodeExternals=require("webpack-node-externals")


module.exports={
    mode:"development",
    //step 1
    entry:"/src/index.js",
    //target:"node",
    //step 2
    output:{
        path: path.join(__dirname,"dist"),
        filename:"bundle.js",
    },
    //Turn on watch mode.
    watch:true,
    plugins:[
        
        new MiniCssExtractPlugin(),
        new HtmlwebPlugin({
            template:"index.html"
        })
    ],
    resolve: {
        extensions: [ '.ts', '.tsx', '.js','.json']
    },
   
    module:{
        rules:[
            {
                test:/\.css$/i,
                exclude:/node_module/,
                use:["style-loader","css-loader"]
            },
            {
                test:/\.(js|jsx)$/i,
                exclude:/node_module/,
                use:{
                    loader:`babel-loader`,
                }
            },
            {
                test:/\.ts$/i,
                use:`ts-loader`,
                exclude:/node_module/
            }
        ],
    },
}