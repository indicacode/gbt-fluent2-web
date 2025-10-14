build:
	npm run build
	npm run export

test:
	npm run test

prepare:
	mkdir -p dist
	echo "$$RELEASE_VERSION" > dist/version.txt

pack:
	mkdir -p dist
	cp -r out/. dist/
	cp -r public dist/ || true
	echo "#!/bin/bash" > dist/bootstrap
	echo "PORT=8080 exec serve -s . -l 8080" >> dist/bootstrap
	chmod +x dist/bootstrap
	git rev-parse HEAD > dist/revision.txt
	cd dist && zip -qr pack.zip . -x '*.DS_Store'

version:
	cat dist/version.txt
