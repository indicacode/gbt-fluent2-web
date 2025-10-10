build:
	npm run build
test:
	npm run test
prepare:
	mkdir -p dist
	echo ${RELEASE_VERSION} > dist/version.txt
pack:
	mkdir -p dist
	cp -r .next/standalone/. dist
	mkdir -p dist/.next
	cp -r .next/static dist/.next
	cp -r public dist
	echo "#!/bin/bash" > dist/bootstrap
	echo "PORT=8080 exec node server.js" >> dist/bootstrap
	chmod +x dist/bootstrap
	git rev-parse HEAD > dist/revision.txt
	cd dist; zip -r pack.zip .
version:
	cat dist/version.txt
