
module.exports = {
    /* ...otras configuraciones... */
    module: {
        rules: [
            /* ...otras reglas... */
            {
                test: /\.module\.css$/,
                use: [
                    'style-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            modules: true
                        }
                    }
                ]
            }
        ]
    }
};