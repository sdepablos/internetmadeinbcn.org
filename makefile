DBT_VERSION = 0.17.0
DOCKER_NAME = builder

help:
	@cat makefile

### DOCKER CREATION ###
docker-build-image:
	docker build -t $(DOCKER_NAME) .

### DOCKER USE ###
docker-shell:
	docker run --rm -it -v $$PWD:/app -w /app $(DOCKER_NAME) sh 

docker-build:
	docker run --rm -it -v $$PWD:/app -w /app $(DOCKER_NAME) sh -c "bundle install; middleman build"

.PHONY: help docker-build-image docker-shell docker-build
