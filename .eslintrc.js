module.exports = {
    "root": true,
    "parser": "babel-eslint",
    "extends": "airbnb",
    "globals": {
        "ENV": true,
        "document": true
    },
    "rules": {
        "arrow-body-style": [0],
        "consistent-return": [0],
        "generator-star-spacing": [0],
        "global-require": [1],
        "import/extensions": [0],
        "import/no-extraneous-dependencies": [0],
        "import/no-unresolved": [0],
        "import/prefer-default-export": [0],
        "jsx-a11y/no-static-element-interactions": [0],
        "jsx-a11y/anchor-has-content": [0],
        "no-bitwise": [0],
        "no-cond-assign": [0],
        "no-else-return": [0],
        "no-nested-ternary": [0],
        "no-restricted-syntax": [0],
        "no-use-before-define": [0],
        "react/forbid-prop-types": [0],
        "react/jsx-filename-extension": [1, { "extensions": [".js", "jsx"] }], // 允许文件为.js和.jsx的扩展名
        "react/jsx-no-bind": [0],
        "react/prefer-stateless-function": [0],
        "react/prop-types": [0],
        "react/no-render-return-value": "off",
        "require-yield": [1],
        "indent": "off",
        "react/jsx-indent": "off",
        "semi": [2, "always"],
        "no-tabs": 0,
        "no-new": 0,
        "no-param-reassign": "off",
        "func-names": "off",
        "no-mixed-spaces-and-tabs": 0,
        "react/jsx-first-prop-new-line": "off",
        "no-console": "off", // 关闭不允许console，提交时可以打开
        "prefer-template": "off", // es6方法拼接字符串
        "arrow-parens": "off", // 允许箭头函数不写括号
        "no-unused-vars": "off",
        "prefer-const": "off", // 关闭未改变的值用const
        "no-debugger": process.env.NODE_ENV === 'production' ? 2 : 0
    },
    "parserOptions": {
        "ecmaFeatures": {
            "experimentalObjectRestSpread": true
        }
    }
}