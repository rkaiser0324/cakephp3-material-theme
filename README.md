# CoolOps Web Application Skeleton based on CakePHP 3 and [MaterializeCSS](http://materializecss.com)

A skeleton for creating coolops web applications with [CakePHP](http://cakephp.org) 3.x.

The framework source code can be found here: [cakephp/cakephp](https://github.com/cakephp/cakephp).

![CoolOps Material UI Admin Template](http://s18.postimg.org/57ofiw7ah/material_ui_admin_screenshot.jpg)

## Installation

1. Download [Composer](http://getcomposer.org/doc/00-intro.md) or update `composer self-update`.
2. Run `php composer.phar create-project --prefer-dist coolops/web-app [app_name]`.

If Composer is installed globally, run
```bash
composer create-project --prefer-dist coolops/web-app [app_name]
```

You should now be able to visit the path to where you installed the app and see
the setup traffic lights.

## Configuration

Read and edit `config/app.php` and setup the 'Datasources' and any other
configuration relevant for your application.


```
H:\Programs\php-7.3.0-nts-Win32-VC15-x64\php composer.phar install
H:\Programs\php-7.3.0-nts-Win32-VC15-x64\php bin\cake.php plugin assets copy

# patch vendor/talesoft/tale-jade

mkdir webroot/js
mkdir webroot/css

H:\Programs\php-7.3.0-nts-Win32-VC15-x64\php bin\cake.php asset_compress build

cd .\webroot\assets\components_premium\con-material-adui\src
npm install

/usr/local/php/7.3.10/bin/php ./bin/cake.php migrations seed
/usr/local/php/7.3.10/bin/php ./bin/cake.php migrations migrate
```



