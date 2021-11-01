install: # installing npm ci
	npm ci
brain-games: # запуск программы
	node bin/brain-games.js
brain-even: # запуск brain-even.js
	node bin/brain-even.js
publish: #npm publish --dry-run
	npm publish --dry-run
lint: #use linter
	npx eslint .
