install: # installing npm ci   
	npm ci
brain-games: # запуск программы
	node bin/brain-games.js
publish: #npm publish --dry-run
	npm publish --dry-run
