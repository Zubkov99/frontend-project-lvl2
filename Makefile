publish:
	npm publish --dry-run

lint:
	npx eslint .

install: install-deps
	npx simple-git-hooks

install-deps:
	npm ci