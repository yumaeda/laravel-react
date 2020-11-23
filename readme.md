## GitHub master -> main
GitHub has changed the name of the default branch from "master" to "main" as port of their effort to remove unnecessary references to slavery.
When you have time, please follow the below steps to change master branch to main branch.
 
https://stevenmortimer.com/5-steps-to-change-github-default-branch-from-master-to-main/

## Git Clone
```bash
git clone https://github.com/yumaeda/laravel-react.git laravel-react
```

## Launch Docker Containers
```bash
cd laravel-react
docker run --rm -v $(pwd):/app composer/composer install
docker-compose up -d --build
```

## Configuration
```bash
cp .env.example .env
docker-compose exec app php artisan key:generate
docker-compose exec app php artisan optimize
```

## Migrate Commands
```bash
docker-compose exec app php artisan migrate:reset
docker-compose exec app php artisan migrate:refresh
docker-compose exec app php artisan db:seed
```

## Clear Cache Commands
```bash
docker-compose exec app php artisan view:clear
docker-compose exec app php artisan cache:clear
```

## Reset DB
```bash
docker-compose down
docker volume rm laravel-react_dbdata
```

## Execute Phan
```bash
docker-compose exec app ./vendor/bin/phan
```

## Execute PHPMD
```bash
docker-compose exec app ./vendor/bin/phpmd ./app text ./phpmd.xml
```

## PHP-CS-Fixer
Dry-run and show the diff of what will be fixed
```bash
docker-compose exec app ./vendor/bin/php-cs-fixer fix --dry-run --diff --diff-format udiff ./app
```

Fix the code
```bash
docker-compose exec app ./vendor/bin/php-cs-fixer fix
```

Check how to fix the code based on the rule
```bash
docker-compose exec app ./vendor/bin/php-cs-fixer describe array_syntax
```

## Reference
https://medium.com/@shakyShane/laravel-docker-part-1-setup-for-development-e3daaefaf3c
