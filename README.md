A custom module for [nightcall.se](https://nightcall.se).

## How to install
```
composer require mage2pro/nightcall.se:*
bin/magento setup:upgrade
rm -rf pub/static/* && bin/magento setup:static-content:deploy -f en_US sv_SE
rm -rf var/di var/generation generated/code && bin/magento setup:di:compile
```
If you have problems with these commands, please check the [detailed instruction](https://mage2.pro/t/263).

## Screenshots

![](https://raw.githubusercontent.com/mage2pro/nightcall.se/1.0.3/etc/doc/1.png)

![](https://raw.githubusercontent.com/mage2pro/nightcall.se/1.0.3/etc/doc/2.png)
