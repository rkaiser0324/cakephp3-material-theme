# CoolOps Web Application Skeleton based on CakePHP 3 and [MaterializeCSS](http://materializecss.com)

A skeleton for creating coolops web applications with [CakePHP](http://cakephp.org) 3.x.

The framework source code can be found here: [cakephp/cakephp](https://github.com/cakephp/cakephp).

![CoolOps Material UI Admin Template](http://s18.postimg.org/57ofiw7ah/material_ui_admin_screenshot.jpg)

## Installation

1. Read and edit `config/app.php` and setup the 'Datasources' and any other
configuration relevant for your application.
1. Patch vendor/talesoft/tale-jade to fix warning.

```dos
H:\Programs\php-7.3.0-nts-Win32-VC15-x64\php composer.phar install
H:\Programs\php-7.3.0-nts-Win32-VC15-x64\php bin\cake.php plugin assets copy
```

```dos
mkdir webroot/js
mkdir webroot/css

H:\Programs\php-7.3.0-nts-Win32-VC15-x64\php bin\cake.php asset_compress build
npm install
grunt watch
```

Then set up the DB on vagrant:
```bash
/usr/local/php/7.3.10/bin/php ./bin/cake.php migrations seed
/usr/local/php/7.3.10/bin/php ./bin/cake.php migrations migrate
```

## Admin Theme

* Demo: http://coolops/assets/components_premium/con-material-adui/dist/dashboard.html
* Documentation: http://coolops/assets/components_premium/con-material-adui/documentation/index.html


## Bake Templates

This theme uses [tale-jade](https://github.com/Talesoft/tale-jade) which is a PHP port of the [Jade template engine](http://jade-lang.com/) - seems unnecessary so we can skip this.

The user-add and login pages look built manually - doesn't look like there were bake templates, so look into merging in this:
* https://github.com/jeffersonbehling/materialize-theme-cakephp - uses Twig, has controller, form element, and add/edit/index/login views. Not very active but recently updated.

Other links:
* https://github.com/nos86/cakephp3-material-design - only has a controller.  Last updated 2018.
* https://github.com/WrDX/cakephp-materialize - helpers for CakePHP 2.x
