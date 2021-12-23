publish:
	npm publish --dry-run

lint:
	npx eslint .

test:
	npx jest

install: 
	npm ci