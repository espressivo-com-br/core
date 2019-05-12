A custom module for [espressivo.com.br](https://espressivo.com.br).

## How to install
```
bin/magento maintenance:enable
composer clear-cache
composer require espressivo.com.br/core:*
chown -R -v www-data /var/www && chgrp -R -v www-data /var/www
bin/magento setup:upgrade
rm -rf var/di var/generation generated/code && bin/magento setup:di:compile
rm -rf pub/static/* && bin/magento setup:static-content:deploy -f en_US pt_BR --area adminhtml --theme Magento/backend && bin/magento setup:static-content:deploy -f en_US pt_BR --area frontend --theme Meigee/barbour
bin/magento maintenance:disable
bin/magento cache:enable
```

## How to upgrade
```
bin/magento maintenance:enable
rm -rf composer.lock
composer clear-cache
composer update espressivo.com.br/core
chown -R -v www-data /var/www && chgrp -R -v www-data /var/www
bin/magento setup:upgrade
rm -rf var/di var/generation generated/code && bin/magento setup:di:compile
rm -rf pub/static/* && bin/magento setup:static-content:deploy -f en_US pt_BR --area adminhtml --theme Magento/backend && bin/magento setup:static-content:deploy -f en_US pt_BR --area frontend --theme Meigee/barbour
bin/magento maintenance:disable
bin/magento cache:enable
```

If you have problems with these commands, please check the [detailed instruction](https://mage2.pro/t/263).

## Screenshots

![](https://raw.githubusercontent.com/espressivo-com-br/core/1.0.4/etc/doc/1.png)

![](https://raw.githubusercontent.com/espressivo-com-br/core/1.0.4/etc/doc/2.png)
