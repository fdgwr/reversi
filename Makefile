up:
	docker compose up -d
build:
	docker compose build
web:
	docker compose exec web bash
db:
	docker compose exec db bash
db create:
	docker compose exec web bin/rails db:create
db migrate:
	docker compose exec web bin/rails db:migrate
respec:
	docker compose exec web respec
vite:
	docker compose exec web bin/vite build
