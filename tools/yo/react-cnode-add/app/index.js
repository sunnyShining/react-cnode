'use strict';
const Generator = require('yeoman-generator');
const chalk = require('chalk');
const yosay = require('yosay');
const _ = require('lodash');
const fs = require('fs');
const path = require('path');

const appDirectory = path.join(__dirname, '..', '..', '..', '..');
let routesLists = fs.readdirSync(path.join(appDirectory, 'src/routes')).filter((item) => {
    return fs.statSync(path.join(appDirectory, 'src/routes', item)).isDirectory();
});

module.exports = class extends Generator {
    prompting() {
        // Have Yeoman greet the user.
        this.log(
          'Welcome to the kickass ' + chalk.red('generator-react-cnode') + ' generator!'
        );

        const prompts = [
            {
                type: 'input',
                name: 'routesName',
                message: '请输入你要创建页面的名称！',
                default: 'Feed'
            }
        ];
        // 收集答案
        return this.prompt(prompts).then(props => {
            // To access props later use this.props.someAnswer;
            this.props = props;
        });
    }

    writing() {
        if (routesLists.indexOf(this.props.routesName) > -1) {
            this.log(
                '创建失败，因为 ' + chalk.red(this.props.routesName) + ' 页面已经存在!'
            );
        } else {
            function titleCase(str) {
                return str.toLowerCase().replace(/( |^)[a-z]/g, (L) => L.toUpperCase());
            }
            let titleName = titleCase(this.props.routesName);
            let reduxName = this.props.routesName.toLocaleLowerCase();
            let routesTmpl = _.template(this.fs.read(this.templatePath('./Feed/Feed.jsx')));
            this.fs.write(this.destinationPath(`src/routes/${titleName}/${titleName}.jsx`), routesTmpl({
                routes_name: titleName,
                redux_name: reduxName
            }));
            let actionTmpl = _.template(this.fs.read(this.templatePath('./Feed/action.js')));
            this.fs.write(this.destinationPath(`src/redux/actions/${reduxName}.js`), actionTmpl({
                redux_name: reduxName
            }));
            let reducerTmpl = _.template(this.fs.read(this.templatePath('./Feed/reducer.js')));
            this.fs.write(this.destinationPath(`src/redux/reducers/${reduxName}.js`), reducerTmpl({
                redux_name: reduxName
            }));
        }
    }

    install() {
        // this.installDependencies();
    }
};
